import type { MoodId, MoodQuestDefinition } from "./questTypes";

export type {
  CompatibilityTag,
  MoodId,
  MoodQuestDefinition as QuestDefinition,
} from "./questTypes";

export const QUESTS = [
  {
    id: "relax-soft-landing",
    moodId: "relax",
    title: "Back to Childhood",
    objective: "Return to a game from your early years",
    completion:
      "Choose the game you connect most strongly with childhood or your teenage years and launch it before browsing anything else. Complete one level, match, mission, or 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 200,
    motivation:
      "A specific memory chooses the game before the size of the library can get involved.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "mode:competitive",
      "play:nostalgia",
      "allow:fixed-kit",
      "allow:clean-exit",
    ],
  },
  {
    id: "relax-scenic-route",
    moodId: "relax",
    title: "Old Reliable",
    objective: "Play the game your hands still remember",
    completion:
      "Choose a game whose controls or core loop you could explain from memory and launch it within 60 seconds. Complete one familiar activity without changing games.",
    durationMinutes: 25,
    rewardPoints: 180,
    motivation:
      "Muscle memory removes the friction of tutorials, settings, and relearning.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "mode:competitive",
      "play:repeatable",
      "system:result",
      "allow:fixed-kit",
      "allow:clean-exit",
    ],
  },
  {
    id: "relax-care-shift",
    moodId: "relax",
    title: "Soundtrack Doorway",
    objective: "Return to the game you can already hear",
    completion:
      "Think of a game soundtrack, menu sound, voice line, or ambient sound you remember clearly and launch that game. Stay for one complete musical or atmospheric section.",
    durationMinutes: 20,
    rewardPoints: 150,
    motivation:
      "A remembered sound can surface a wanted game faster than scanning cover art.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:atmosphere",
      "play:exploration",
      "allow:minimal-hud",
      "allow:no-sprint",
      "allow:clean-exit",
    ],
  },
  {
    id: "relax-one-good-loop",
    moodId: "relax",
    title: "Familiar Place",
    objective: "Visit a game world that feels like home",
    completion:
      "Choose the game containing the place, hub, town, track, or map you would most happily revisit tonight. Reach it and complete one activity there.",
    durationMinutes: 30,
    rewardPoints: 200,
    motivation:
      "Choosing a remembered place is easier than comparing entire games.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:exploration",
      "play:travel",
      "system:map",
      "system:hud",
      "allow:no-fast-travel",
      "allow:minimal-hud",
      "allow:no-map",
      "allow:no-sprint",
      "allow:clean-exit",
    ],
  },
  {
    id: "relax-small-wonder",
    moodId: "relax",
    title: "Lost Favorite",
    objective: "Reopen a game you once loved",
    completion:
      "Choose a former favorite you have not opened in a long time, even if you no longer remember the controls. Play for 30 minutes or until one full mission, round, or level ends.",
    durationMinutes: 30,
    rewardPoints: 200,
    motivation:
      "A known emotional connection makes rediscovery feel safe instead of random.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "mode:competitive",
      "play:rediscovery",
      "allow:fixed-kit",
      "allow:clean-exit",
    ],
  },
  {
    id: "relax-three-loose-ends",
    moodId: "relax",
    title: "Series Homecoming",
    objective: "Return to a series that already matters to you",
    completion:
      "Choose a franchise you care about, then launch the entry you have revisited least. Reach its first clear checkpoint or complete one round.",
    durationMinutes: 25,
    rewardPoints: 180,
    motivation:
      "The series supplies familiarity while the less-played entry adds freshness.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "mode:competitive",
      "play:rediscovery",
      "system:safe-point",
      "allow:fixed-kit",
      "allow:clean-exit",
    ],
  },
  {
    id: "explore-wrong-turn",
    moodId: "explore",
    title: "Blind Scroll",
    objective: "Let chance choose one installed game",
    completion:
      "Open your installed library, scroll continuously for three seconds without reading, stop, and launch the first playable title centered on screen. Play one complete activity or 25 active minutes.",
    durationMinutes: 25,
    rewardPoints: 180,
    motivation:
      "A blind stop creates the unprompted suggestion that a crowded library cannot.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "mode:competitive",
      "play:rediscovery",
      "allow:fixed-kit",
      "allow:clean-exit",
    ],
  },
  {
    id: "explore-follow-the-signal",
    moodId: "explore",
    title: "Stars Above",
    objective: "Play a game set beyond Earth",
    completion:
      "Choose an owned game set in space, on another planet, or aboard a spacecraft and launch the first strong match that comes to mind. Reach one location, encounter, or discovery.",
    durationMinutes: 35,
    rewardPoints: 220,
    motivation:
      "A specific setting answers what to play without requiring a genre decision.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:exploration",
      "play:travel",
      "system:world-cues",
      "allow:no-fast-travel",
      "allow:minimal-hud",
      "allow:no-map",
      "allow:no-sprint",
    ],
  },
  {
    id: "explore-edge-of-known",
    moodId: "explore",
    title: "Old Kingdom",
    objective: "Enter a mythic or fantasy world",
    completion:
      "Choose a game with castles, magic, monsters, legends, or ancient ruins and launch it. Complete one quest, expedition, chapter, or dungeon section.",
    durationMinutes: 40,
    rewardPoints: 250,
    motivation:
      "The promise of a particular kind of world narrows the library immediately.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:exploration",
      "play:narrative",
      "system:safe-point",
      "allow:no-fast-travel",
      "allow:minimal-hud",
      "allow:no-map",
      "allow:side-path",
    ],
  },
  {
    id: "explore-mechanic-safari",
    moodId: "explore",
    title: "Neon After Dark",
    objective: "Play a game set in a city with a pulse",
    completion:
      "Choose a game set in a modern, futuristic, cyberpunk, or noir city and launch the one whose streets you most want to see. Complete one activity in a single district.",
    durationMinutes: 35,
    rewardPoints: 220,
    motivation:
      "Atmosphere becomes the selection rule instead of another row of features.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:exploration",
      "play:travel",
      "system:map",
      "system:hud",
      "allow:no-fast-travel",
      "allow:minimal-hud",
      "allow:no-map",
      "allow:no-sprint",
    ],
  },
  {
    id: "explore-landmark-navigation",
    moodId: "explore",
    title: "Into the Wild",
    objective: "Disappear into an untamed game world",
    completion:
      "Choose a game dominated by wilderness, ocean, desert, jungle, mountains, or prehistoric nature. Reach one landmark or survive one complete expedition.",
    durationMinutes: 40,
    rewardPoints: 250,
    motivation:
      "A wanted landscape can be a stronger reason to launch than a task list.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:exploration",
      "play:travel",
      "system:map",
      "system:hud",
      "allow:no-fast-travel",
      "allow:minimal-hud",
      "allow:no-map",
      "allow:no-sprint",
      "allow:save-resource",
    ],
  },
  {
    id: "explore-behind-the-obvious",
    moodId: "explore",
    title: "Another Time",
    objective: "Play a game set in history—or rewrite it",
    completion:
      "Choose a game set in a historical era or an alternate version of history that interests you tonight. Complete one event, battle, journey, or chapter there.",
    durationMinutes: 40,
    rewardPoints: 250,
    motivation:
      "A time period gives the session a concrete destination before launch.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:narrative",
      "play:exploration",
      "allow:fixed-kit",
      "allow:minimal-hud",
      "allow:clean-exit",
    ],
  },
  {
    id: "progress-break-the-blocker",
    moodId: "progress",
    title: "Still Unopened",
    objective: "Play a game you bought but never started",
    completion:
      "Find a purchased game with no meaningful playtime and launch the first one that still creates curiosity. Reach its first real playable objective after setup and tutorials.",
    durationMinutes: 45,
    rewardPoints: 250,
    motivation:
      "The purchase itself becomes a reason to finally choose one untouched game.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "mode:competitive",
      "play:experimentation",
      "system:safe-point",
      "allow:basic-tools",
      "allow:fixed-kit",
      "allow:clean-exit",
    ],
  },
  {
    id: "progress-clean-finish",
    moodId: "progress",
    title: "The Honest Hour",
    objective: "Give a dismissed game one real hour",
    completion:
      "Choose a game you quit after roughly ten minutes or never judged fairly. Give it 60 active minutes, including one reasonable controls or accessibility adjustment. Stop early only for technical failure or genuine discomfort.",
    durationMinutes: 60,
    rewardPoints: 250,
    motivation:
      "A fixed hour protects a slow opening from another instant dismissal.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "mode:competitive",
      "play:experimentation",
      "allow:fixed-kit",
      "allow:clean-exit",
    ],
  },
  {
    id: "progress-one-tier-better",
    moodId: "progress",
    title: "Return to Save",
    objective: "Continue a game you left after a few sessions",
    completion:
      "Choose a game you stopped after only one to three sessions and resume its existing save instead of restarting. Reach the next checkpoint, chapter, unlock, or 45 active minutes.",
    durationMinutes: 45,
    rewardPoints: 250,
    motivation:
      "Resuming a shallow save turns vague backlog guilt into one clear choice.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:progression",
      "system:safe-point",
      "system:tracked-progress",
      "allow:fixed-kit",
      "allow:clean-exit",
      "allow:save-resource",
    ],
  },
  {
    id: "progress-three-step-plan",
    moodId: "progress",
    title: "Armory Run",
    objective: "Play a solo shooter for unlocks, not story",
    completion:
      "Choose a single-player shooter with weapons, upgrades, challenges, or collectibles still available. Unlock one item, finish one weapon challenge, or collect three useful things without making story progress the goal.",
    durationMinutes: 45,
    rewardPoints: 250,
    motivation:
      "The desired progression loop chooses the shooter without demanding a campaign commitment.",
    compatibilityTags: [
      "mode:solo",
      "play:combat",
      "play:collection",
      "play:progression",
      "system:inventory",
      "system:upgrades",
      "allow:basic-tools",
      "allow:fixed-kit",
      "allow:found-tool",
      "allow:no-healing",
      "allow:save-resource",
    ],
  },
  {
    id: "progress-recovery-run",
    moodId: "progress",
    title: "Finish Line in Sight",
    objective: "Play the unfinished game closest to closure",
    completion:
      "Choose the game nearest to a campaign ending, chapter ending, major unlock, or other meaningful milestone. Reach it or give the attempt one focused hour.",
    durationMinutes: 60,
    rewardPoints: 250,
    motivation:
      "Visible closure makes one unfinished game stand out from the rest.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:objective",
      "system:tracked-progress",
      "system:safe-point",
      "allow:fixed-kit",
      "allow:clean-exit",
      "allow:save-resource",
    ],
  },
  {
    id: "progress-two-birds",
    moodId: "progress",
    title: "Justify the Install",
    objective: "Test the game you keep installed but keep skipping",
    completion:
      "Choose a large or long-installed game you repeatedly pass over. Play one complete activity or 45 active minutes before deciding whether it deserves to stay installed.",
    durationMinutes: 45,
    rewardPoints: 250,
    motivation:
      "A keep-or-remove decision turns a passive install into a useful test.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "mode:competitive",
      "play:experimentation",
      "system:result",
      "allow:fixed-kit",
      "allow:clean-exit",
    ],
  },
  {
    id: "create-new-build-old-parts",
    moodId: "create",
    title: "Blank Ground",
    objective: "Play a sandbox where you can build from nothing",
    completion:
      "Choose a building, survival, simulation, or sandbox game and start with an empty patch of ground. Finish one small structure or self-contained space.",
    durationMinutes: 35,
    rewardPoints: 220,
    motivation:
      "The desire to make a place identifies the right kind of game immediately.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:build",
      "system:inventory",
      "allow:basic-tools",
      "allow:found-tool",
      "allow:save-resource",
    ],
  },
  {
    id: "create-function-first",
    moodId: "create",
    title: "Make It Yours",
    objective: "Play a game with something worth customizing",
    completion:
      "Choose a game where you can design a character, vehicle, home, room, outfit, or loadout. Complete one coherent look and use it once.",
    durationMinutes: 30,
    rewardPoints: 200,
    motivation:
      "A specific urge to customize turns a broad creative mood into a launch choice.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "mode:competitive",
      "play:customization",
      "system:inventory",
      "allow:fixed-kit",
      "allow:save-resource",
    ],
  },
  {
    id: "create-rule-of-three",
    moodId: "create",
    title: "Machine Mind",
    objective: "Play a game about automation or production",
    completion:
      "Choose a factory, logistics, management, or automation game. Build one complete chain that turns an input into a useful output.",
    durationMinutes: 40,
    rewardPoints: 250,
    motivation:
      "Wanting to solve a system points directly to a distinct family of games.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:build",
      "play:progression",
      "system:interactions",
      "system:upgrades",
      "allow:basic-tools",
      "allow:found-tool",
    ],
  },
  {
    id: "create-strategy-remix",
    moodId: "create",
    title: "New Build",
    objective: "Play a game where you can invent a fresh build",
    completion:
      "Choose a game with decks, skills, equipment, classes, or vehicle tuning. Create one combination you have not used before and test it through one complete result.",
    durationMinutes: 35,
    rewardPoints: 220,
    motivation:
      "Build-crafting supplies both a game category and a bounded experiment.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "mode:competitive",
      "play:experimentation",
      "system:abilities",
      "system:upgrades",
      "allow:basic-tools",
      "allow:fixed-kit",
      "allow:save-resource",
    ],
  },
  {
    id: "create-make-a-landmark",
    moodId: "create",
    title: "Level Maker",
    objective: "Play a game that lets you design the challenge",
    completion:
      "Choose a game with a level, track, park, scenario, or map editor. Make one short playable creation and complete a test run.",
    durationMinutes: 40,
    rewardPoints: 250,
    motivation:
      "A creator tool answers what to open before asking what to make.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:build",
      "play:experimentation",
      "system:interactions",
      "allow:basic-tools",
      "allow:fixed-kit",
    ],
  },
  {
    id: "create-before-and-after",
    moodId: "create",
    title: "Photo Walk",
    objective: "Play the game with the world you most want to frame",
    completion:
      "Choose a game with photo mode, a free camera, or a clean screenshot option. Capture three clearly different images in one location or short route.",
    durationMinutes: 25,
    rewardPoints: 180,
    motivation:
      "A visual intention can choose a game without relying on progress or competition.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "play:exploration",
      "play:experimentation",
      "system:hud",
      "allow:no-fast-travel",
      "allow:minimal-hud",
      "allow:no-map",
      "allow:no-sprint",
    ],
  },
  {
    id: "challenge-first-try-counts",
    moodId: "challenge",
    title: "Pick a Fight",
    objective: "Play a fighting game",
    completion:
      "Choose the fighting game and character that most tempt you tonight. Complete a best-of-five set against another player or one full arcade run.",
    durationMinutes: 30,
    rewardPoints: 200,
    motivation:
      "Naming the competitive format prevents every multiplayer game from competing at once.",
    compatibilityTags: [
      "mode:competitive",
      "mode:solo",
      "play:combat",
      "system:result",
      "allow:fixed-kit",
      "allow:basic-tools",
    ],
  },
  {
    id: "challenge-one-step-harder",
    moodId: "challenge",
    title: "Lock and Load",
    objective: "Play a competitive shooter",
    completion:
      "Choose the PvP shooter whose movement, weapons, or match rhythm sounds best right now. Complete three full matches without switching games.",
    durationMinutes: 35,
    rewardPoints: 220,
    motivation:
      "A shooter-specific card turns competition into a concrete launch decision.",
    compatibilityTags: [
      "mode:competitive",
      "play:combat",
      "system:result",
      "system:roles",
      "allow:fixed-kit",
      "allow:basic-tools",
      "allow:role-lock",
      "allow:help-first",
    ],
  },
  {
    id: "challenge-beat-your-ghost",
    moodId: "challenge",
    title: "Green Light",
    objective: "Play a racing game",
    completion:
      "Choose a racing game based on the car, track, or driving style you want tonight. Complete three races or record one valid time-trial result.",
    durationMinutes: 25,
    rewardPoints: 180,
    motivation:
      "Speed becomes the answer before series, platform, and progression can distract.",
    compatibilityTags: [
      "mode:competitive",
      "mode:solo",
      "play:repeatable",
      "system:result",
      "allow:fixed-kit",
      "allow:minimal-hud",
    ],
  },
  {
    id: "challenge-pressure-proof",
    moodId: "challenge",
    title: "Call the Play",
    objective: "Play a strategy, tactics, or card game",
    completion:
      "Choose a competitive game where reading an opponent matters more than reflexes. Complete one full match or scenario.",
    durationMinutes: 30,
    rewardPoints: 200,
    motivation:
      "The desired kind of pressure identifies the game instead of only raising difficulty.",
    compatibilityTags: [
      "mode:competitive",
      "mode:solo",
      "play:strategy",
      "system:result",
      "allow:fixed-kit",
      "allow:basic-tools",
      "allow:save-resource",
    ],
  },
  {
    id: "challenge-thin-margin",
    moodId: "challenge",
    title: "Match Day",
    objective: "Play a sports game",
    completion:
      "Choose the sport, team, or athlete you most want to control tonight. Complete one full match, event, or tournament round.",
    durationMinutes: 30,
    rewardPoints: 200,
    motivation:
      "The sport supplies a direct answer without requiring a larger gaming plan.",
    compatibilityTags: [
      "mode:competitive",
      "mode:solo",
      "play:sports",
      "system:result",
      "allow:fixed-kit",
      "allow:minimal-hud",
    ],
  },
  {
    id: "challenge-adapt-on-contact",
    moodId: "challenge",
    title: "Beat Your Ghost",
    objective: "Play the game with your clearest personal best",
    completion:
      "Choose a game that records times, scores, ranks, streaks, or challenge results. Beat one target or complete three honest attempts.",
    durationMinutes: 25,
    rewardPoints: 180,
    motivation:
      "A personal record provides competition without requiring a live opponent.",
    compatibilityTags: [
      "mode:solo",
      "mode:competitive",
      "play:repeatable",
      "system:result",
      "allow:fixed-kit",
      "allow:basic-tools",
    ],
  },
  {
    id: "connect-lift-the-lowest",
    moodId: "connect",
    title: "Old Squad, Solo",
    objective: "Play a former friends-only game by yourself",
    completion:
      "Choose a game you mainly associate with old friends and launch its solo mode while that group is unavailable. Complete one full activity on your own.",
    durationMinutes: 35,
    rewardPoints: 220,
    motivation:
      "The game is separated from the old group so it can become playable again.",
    compatibilityTags: [
      "mode:solo",
      "play:social-memory",
      "system:result",
      "allow:fixed-kit",
      "allow:clean-exit",
    ],
  },
  {
    id: "connect-follow-their-lead",
    moodId: "connect",
    title: "Old Squad, New Lobby",
    objective: "Play an old group game with random players",
    completion:
      "Choose a game you used to play with friends, enter its public matchmaking, and stay with the random team through one complete result screen.",
    durationMinutes: 35,
    rewardPoints: 220,
    motivation:
      "Public matchmaking makes a socially loaded favorite available tonight.",
    compatibilityTags: [
      "mode:co-op",
      "mode:competitive",
      "play:teamplay",
      "system:roles",
      "system:shared-result",
      "allow:help-first",
      "allow:role-lock",
      "allow:fixed-kit",
    ],
  },
  {
    id: "connect-share-the-upgrade",
    moodId: "connect",
    title: "Their Recommendation",
    objective: "Play the game a friend wanted you to try",
    completion:
      "Choose one game a friend recommended, gifted, or repeatedly mentioned and launch it without checking reviews first. Reach its first meaningful result or play 30 active minutes.",
    durationMinutes: 30,
    rewardPoints: 200,
    motivation:
      "A remembered recommendation provides an external answer without another ranking list.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "mode:competitive",
      "play:experimentation",
      "allow:fixed-kit",
      "allow:clean-exit",
    ],
  },
  {
    id: "connect-rescue-route",
    moodId: "connect",
    title: "Open Matchmaking",
    objective: "Play a co-op game with strangers",
    completion:
      "Choose a co-op or team game with public matchmaking and queue for its shortest complete activity. Stay through the shared result.",
    durationMinutes: 35,
    rewardPoints: 220,
    motivation:
      "The queue supplies company without waiting for a coordinated group.",
    compatibilityTags: [
      "mode:co-op",
      "play:teamplay",
      "system:roles",
      "system:shared-result",
      "allow:help-first",
      "allow:role-lock",
      "allow:fixed-kit",
    ],
  },
  {
    id: "connect-set-up-the-finish",
    moodId: "connect",
    title: "Shared World",
    objective: "Play a game where other people are already present",
    completion:
      "Choose an MMO, shared-world game, public sandbox, or populated server. Join one public event, group objective, or communal space.",
    durationMinutes: 40,
    rewardPoints: 250,
    motivation:
      "Ambient company can satisfy connection without a scheduled session.",
    compatibilityTags: [
      "mode:co-op",
      "mode:competitive",
      "play:teamplay",
      "play:exploration",
      "system:shared-result",
      "allow:help-first",
      "allow:role-lock",
      "allow:no-fast-travel",
    ],
  },
  {
    id: "connect-trade-roles",
    moodId: "connect",
    title: "One Name, One Game",
    objective: "Let one person choose the game in your memory",
    completion:
      "Think of one person you miss playing with, then launch the game most strongly associated with them. Invite them if available; otherwise complete one activity solo or with randoms.",
    durationMinutes: 35,
    rewardPoints: 220,
    motivation:
      "A person can select the game even when they cannot join the session.",
    compatibilityTags: [
      "mode:solo",
      "mode:co-op",
      "mode:competitive",
      "play:social-memory",
      "system:result",
      "allow:fixed-kit",
      "allow:clean-exit",
    ],
  },
] as const satisfies readonly MoodQuestDefinition[];

export const QUESTS_BY_ID = Object.fromEntries(
  QUESTS.map((quest) => [quest.id, quest]),
) as Record<string, MoodQuestDefinition>;

export const QUESTS_BY_MOOD = {
  relax: QUESTS.filter((quest) => quest.moodId === "relax"),
  explore: QUESTS.filter((quest) => quest.moodId === "explore"),
  progress: QUESTS.filter((quest) => quest.moodId === "progress"),
  create: QUESTS.filter((quest) => quest.moodId === "create"),
  challenge: QUESTS.filter((quest) => quest.moodId === "challenge"),
  connect: QUESTS.filter((quest) => quest.moodId === "connect"),
} satisfies Record<MoodId, readonly MoodQuestDefinition[]>;

export function questsForMood(
  moodId: MoodId,
): readonly MoodQuestDefinition[] {
  return QUESTS_BY_MOOD[moodId];
}
