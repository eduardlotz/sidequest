import { GAME_CAPABILITY_IDS } from "../gameTypes";
import { GAME_GENRE_IDS } from "../gameGenres";
import { GAME_PLATFORMS } from "../gamePlatforms";
import { QUEST_TYPES, QUEST_TAGS, isQuestTypeAllowed } from "../questTraits";
import { QUEST_PEOPLE, QUEST_PARTICIPATION, QUEST_FORMATIONS, type QuestPlayContext } from "../questContexts";
import { MOOD_IDS, type AuthoredQuestDefinition } from "../questTypes";
import type { CapabilityRequirement } from "../gameCompatibility";

export function validateContext(context: QuestPlayContext, identity: string) {
  if (!["online", "offline"].includes(context.connection)
    || !Object.hasOwn(QUEST_PEOPLE, context.people)
    || !Object.hasOwn(QUEST_PARTICIPATION, context.participation)
    || !Object.hasOwn(QUEST_FORMATIONS, context.formation)
    || (context.mode !== undefined && !context.mode.trim())) {
    throw new Error(`Quest ${identity} has an invalid complete play context`);
  }
}
function validateRequirement(requirement: CapabilityRequirement, identity: string): void {
  if (typeof requirement === "string") {
    if (!GAME_CAPABILITY_IDS.includes(requirement)) throw new Error(`Quest ${identity} has an unknown capability`);
    return;
  }
  if (Object.hasOwn(requirement, "all") === Object.hasOwn(requirement, "any")) {
    throw new Error(`Quest ${identity} must use exactly one of all/any`);
  }
  const children = "all" in requirement ? requirement.all : requirement.any;
  if (!children?.length) throw new Error(`Quest ${identity} has an empty capability expression`);
  children.forEach(child => validateRequirement(child, identity));
}
export function validateQuest(quest: AuthoredQuestDefinition) {
  const fail = (message: string): never => { throw new Error(`Quest ${quest.id}: ${message}`); };
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(quest.id) || !Object.hasOwn(QUEST_TYPES, quest.type)) fail("invalid identity/type");
  if (!quest.moodIds.length || new Set(quest.moodIds).size !== quest.moodIds.length
    || quest.moodIds.some(id => !MOOD_IDS.includes(id) || !isQuestTypeAllowed(quest.type, id))) fail("invalid mood pairing");
  const experience = quest.experience;
  if (!experience) throw new Error(`Quest ${quest.id}: missing authored experience/context`);
  if (!experience.cardMetadata) fail("missing card scan metadata");
  if (experience.cardMetadata) {
    const { genreIds, playStyleIds, platformIds = [] } = experience.cardMetadata;
    if (genreIds.length > 2 || genreIds.some(id => !GAME_GENRE_IDS.includes(id) || !quest.gameGenreIds?.includes(id))
      || new Set(genreIds).size !== genreIds.length
      || playStyleIds.some(id => !["co-op", "local-play"].includes(id))
      || new Set(playStyleIds).size !== playStyleIds.length) fail("invalid card scan metadata");
    if (platformIds.length > 2 || platformIds.some(id => !Object.hasOwn(GAME_PLATFORMS, id))
      || new Set(platformIds).size !== platformIds.length) fail("invalid platform scan metadata");
    if (playStyleIds.includes("co-op") && !experience.contexts.some(context => context.participation === "co-op" && context.people === "others")) fail("co-op chip needs a human co-op context");
    if (playStyleIds.includes("local-play") && !experience.contexts.some(context => context.connection === "offline" && context.people === "others")) fail("local-play chip needs a local human context");
  }
  if (!experience.family.trim() || !experience.contexts.length) fail("missing authored experience/context");
  if (!["open", "outcome", "attempt"].includes(experience.finish)
    || (quest.type === "inspiration") !== (experience.finish === "open")) fail("finish kind contradicts the type");
  for (const labels of [quest.tags, experience.activities, experience.rules]) {
    if (new Set(labels).size !== labels.length || labels.some(id => !Object.hasOwn(QUEST_TAGS, id))) fail("unknown or duplicate scan label");
  }
  experience.contexts.forEach(context => validateContext(context, quest.id));
  if (new Set(experience.contexts.map(context => JSON.stringify(context))).size !== experience.contexts.length) fail("duplicate context");
  if (quest.moodIds.includes("connect") && !experience.contexts.every(context => context.people === "others")) fail("Connect requires real human interaction");
  if (experience.prerequisites.some(condition => !condition.en.trim() || !condition.de.trim() || typeof condition.critical !== "boolean")) fail("incomplete prerequisite translation");
  if (experience.prerequisites.some(condition => !condition.chips
    || ["en", "de"].some(language => {
      const labels = condition.chips![language as "en" | "de"];
      return !Array.isArray(labels) || labels.length > 2
        || new Set(labels).size !== labels.length
        || labels.some(label => !label.trim() || label.length > 24 || label.includes("\n"));
    }))) fail("prerequisite scan tags need at most two short labels per language");
  for (const language of ["en", "de"] as const) {
    const copy = quest.translations[language];
    if (!copy?.name.trim() || !copy.objective.trim()) fail(`missing ${language} copy`);
    if (Boolean(copy.gameObjective) !== Boolean(quest.translations[language === "en" ? "de" : "en"].gameObjective)) fail("bound wording missing in one language");
    if (copy.gameObjective && !quest.curated && !copy.gameObjective.includes("{{game}}")) fail("flexible bound wording needs the game placeholder");
  }
  if (!Number.isFinite(quest.minimumDurationMinutes) || quest.minimumDurationMinutes < 0
    || !Number.isFinite(quest.suggestedDurationMinutes) || quest.suggestedDurationMinutes <= 0
    || quest.minimumDurationMinutes > quest.suggestedDurationMinutes) fail("invalid authored timing");
  if (quest.maximumDurationMinutes !== undefined && (!Number.isFinite(quest.maximumDurationMinutes) || quest.maximumDurationMinutes <= 0)) fail("invalid deadline");
  if (quest.type === "countdown" && !quest.maximumDurationMinutes) fail("Countdown requires a deadline");
  if (quest.type === "countdown" && quest.minimumDurationMinutes > quest.maximumDurationMinutes!) fail("minimum exceeds Countdown deadline");
  if (quest.type === "speedrun" && quest.maximumDurationMinutes !== undefined) fail("Speedrun has an estimate, not a deadline");
  if (quest.gameGenreIds?.some(id => !GAME_GENRE_IDS.includes(id))) fail("unknown genre");
  const compatibility = quest.customGameCompatibility;
  if (quest.curated && (compatibility || quest.customGameOverrideOnly)) fail("dedicated quests cannot match unrelated custom games");
  if (compatibility && quest.customGameOverrideOnly) fail("automatic and explicit-only eligibility are mutually exclusive");
  if (!quest.curated && !compatibility && !quest.customGameOverrideOnly) fail("flexible bound quest needs automatic or explicit-only eligibility");
  if (compatibility) {
    if (compatibility.match !== undefined && !["all", "any"].includes(compatibility.match)) fail("invalid capability match operator");
    if (compatibility.capabilityIds.some(id => !GAME_CAPABILITY_IDS.includes(id))) fail("unknown capability");
    if (compatibility.genreIds?.some(id => !GAME_GENRE_IDS.includes(id))) fail("unknown required genre");
    if (compatibility.requirement) validateRequirement(compatibility.requirement, quest.id);
    else if (!compatibility.capabilityIds.length) fail("empty eligibility requirement");
  }
}
