export type QuestSource = {
  id: string;
  gameId: string;
  title: string;
  subreddit: string;
  url: string;
  scope: string;
  note: { en: string; de: string };
};

// Original titles are kept for attribution; notes describe inspiration, not quotes.
export const QUEST_SOURCES: readonly QuestSource[] = [
  {
    id: "far-cry-player-rules", gameId: "far-cry", subreddit: "farcry",
    title: "Far Cry 4 no upgrades playthrough", scope: "Far Cry 4",
    url: "https://www.reddit.com/r/farcry/comments/1uctj1i/far_cry_4_no_upgrades_playthrough/",
    note: { en: "Players try bow-and-knife runs and weapons picked up from enemies. We turn those rules into single outpost runs.", de: "Spieler nutzen nur Bogen und Messer oder Waffen von Gegnern. Daraus machen wir einzelne Außenposten-Runs." },
  },
  {
    id: "gta-free-roam", gameId: "gta", subreddit: "GTAV",
    title: "What's your favorite things to do in GTA V?", scope: "Grand Theft Auto V",
    url: "https://www.reddit.com/r/GTAV/comments/n58wnn/",
    note: { en: "Players take dirt bikes into the countryside with the radar off and explore underwater. These ideas shape our trips around Los Santos.", de: "Spieler fahren ohne Radar mit dem Dirtbike aufs Land oder erkunden die Welt unter Wasser. Diese Ideen stecken hinter unseren Ausflügen rund um Los Santos." },
  },
  {
    id: "nms-player-rules", gameId: "no-mans-sky", subreddit: "NoMansSkyTheGame",
    title: "Self imposed limitations. Have you ever tried playing like this.", scope: "No Man’s Sky",
    url: "https://www.reddit.com/r/NoMansSkyTheGame/comments/v4m8k6/",
    note: { en: "Players live from ship salvage or gather what they could buy. We use those rules for one repair or supply trip.", de: "Spieler leben vom Ausschlachten von Schiffen oder sammeln selbst, was sie kaufen könnten. Wir nutzen diese Regeln für eine Reparatur oder einen Ausflug." },
  },
  {
    id: "minecraft-village-worker", gameId: "minecraft", subreddit: "Minecraft",
    title: "Challenge Idea: Lord of the Silk Road", scope: "Minecraft",
    url: "https://www.reddit.com/r/Minecraft/comments/1cciqaz/",
    note: { en: "A player proposes working for a village and linking villages through trade. Our quests focus on one farm, workplace, or route at a time.", de: "Ein Spieler schlägt vor, für ein Dorf zu arbeiten und Dörfer durch Handel zu verbinden. Unsere Quests nehmen sich jeweils einen Hof, Arbeitsplatz oder Weg vor." },
  },
  {
    id: "ac-stealth-rules", gameId: "assassins-creed", subreddit: "assassinscreed",
    title: "If you want to put your stealth skills to the test, try out these self-imposed challenges. I had so much fun in playing stealthily while doing these roleplaying challenges.", scope: "Assassin’s Creed",
    url: "https://www.reddit.com/r/assassinscreed/comments/rtg01b/",
    note: { en: "A player sets different stealth rules for each game, including smoke and Hidden Blade runs in Syndicate. We keep the game labels and shorten the runs.", de: "Ein Spieler legt für jeden Teil eigene Schleichregeln fest, etwa Rauch und versteckte Klinge in Syndicate. Wir behalten die Spielangaben bei und machen kürzere Runs daraus." },
  },
  {
    id: "cyberpunk-ghost", gameId: "cyberpunk-2077", subreddit: "cyberpunkgame",
    title: "What self-imposed challenges do you like to take?", scope: "Cyberpunk 2077",
    url: "https://www.reddit.com/r/cyberpunkgame/comments/194awni/",
    note: { en: "Players sneak through gigs without being seen or taking anyone down, and use security cameras from outside. That inspired Borrowed Eyes and our device-based quests.", de: "Spieler schleichen ungesehen durch Aufträge, ohne jemanden auszuschalten, und nutzen Kameras von draußen. Das hat Fremde Augen und unsere Quests mit Geräten inspiriert." },
  },
  {
    id: "crimson-player-sandbox", gameId: "crimson-desert", subreddit: "CrimsonDesert",
    title: "1,475.2 Hours, Still having Fun, Summary", scope: "Crimson Desert",
    url: "https://www.reddit.com/r/CrimsonDesert/comments/1v8yzri/14752_hours_still_having_fun_summary/",
    note: { en: "A player tries gear combinations, joins Greymane attacks, and decorates a house. We took the variety, keeping each quest to one outing or finished change.", de: "Ein Spieler probiert Ausrüstung aus, begleitet Graumähnen bei Angriffen und richtet ein Haus ein. Wir greifen diese Abwechslung auf, mit einem Ausflug oder einer fertigen Änderung pro Quest." },
  },
  {
    id: "battlefield-safe-revives", gameId: "battlefield", subreddit: "Battlefield",
    title: "20,000 Revives Later: What I Learned as a Top Medic", scope: "Battlefield 6",
    url: "https://www.reddit.com/r/Battlefield/comments/1v655at/20000_revives_later_what_i_learned_as_a_top_medic/",
    note: { en: "A medic explains how smoke and dragging teammates into cover make revives safer. Our rescue quests reward getting people out of danger.", de: "Ein Sanitäter erklärt, wie Rauch und das Ziehen in Deckung Wiederbelebungen sicherer machen. Unsere Rettungsquests setzen darauf, Leute aus der Schusslinie zu holen." },
  },
  {
    id: "rdr-hunting-life", gameId: "red-dead-redemption", subreddit: "reddeadredemption",
    title: "Love getting into the immersion aspect, like sometimes going to town for a drink or doing camp work, and even heading out to explore the region nearby for a few game days. What’s your favorite immersive activity?", scope: "Red Dead Redemption 2",
    url: "https://www.reddit.com/r/reddeadredemption/comments/10j2hyi/",
    note: { en: "Players track animals on foot without Dead Eye and pay for supplies with hunting money. We turn that into short trips with a clear return.", de: "Spieler verfolgen Tiere zu Fuß ohne Dead Eye und bezahlen Vorräte mit Jagdeinnahmen. Daraus machen wir kurze Ausflüge mit einer klaren Rückkehr." },
  },
  {
    id: "rdr-liars-dice", gameId: "red-dead-redemption", subreddit: "reddeadredemption",
    title: "Things you should be able to do in RDR2 but can’t.", scope: "Red Dead Redemption",
    url: "https://www.reddit.com/r/reddeadredemption/comments/1f2stib/",
    note: { en: "A comment recalls returning to the first Red Dead Redemption just for Liar’s Dice. The thread also has wish-list ideas; we do not treat those as game features.", de: "Ein Kommentar erzählt von der Rückkehr zum ersten Red Dead Redemption nur für Würfelpoker. Im Thread stehen auch Wünsche; die behandeln wir nicht als vorhandene Spielfunktionen." },
  },
  {
    id: "kcd-herbalist", gameId: "kingdom-come-deliverance", subreddit: "kingdomcome",
    title: "Rediscoverin the freedom in this game", scope: "Kingdom Come: Deliverance",
    url: "https://www.reddit.com/r/kingdomcome/comments/sc7pqw/",
    note: { en: "A player gathers herbs, brews potions, and sells them while traveling between towns. An Honest Night adds our own finish: paying for a room.", de: "Ein Spieler sammelt Kräuter, braut Tränke und verkauft sie auf Reisen zwischen Orten. Ehrlich verdient ergänzt unser eigenes Ziel: ein bezahltes Zimmer." },
  },
  {
    id: "kcd-tavern-life", gameId: "kingdom-come-deliverance", subreddit: "kingdomcome",
    title: "[KCD2] - What are some things you guys do to role-play even just a little?", scope: "Kingdom Come: Deliverance II",
    url: "https://www.reddit.com/r/kingdomcome/comments/1qxv0pa/kcd2_what_are_some_things_you_guys_do_to_roleplay/",
    note: { en: "Players pay for beer with dice winnings, travel slowly, and shelter at inns. That inspired our small tavern and travel sessions.", de: "Spieler bezahlen Bier mit Würfelgewinnen, reisen langsam und suchen Schutz im Gasthaus. Das hat unsere kleinen Gasthaus- und Reisequests inspiriert." },
  },
];
