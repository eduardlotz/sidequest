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
    id: "minecraft-fishing-pier", gameId: "minecraft", subreddit: "Minecraft",
    title: "Expanding the town", scope: "Minecraft",
    url: "https://www.reddit.com/r/Minecraft/comments/1spe23z/expanding_the_town/",
    note: { en: "A player adds a fishing pier to a town's waterfront. Our adaptation makes a small working pier, with a catch stored in its barrel as the finish.", de: "Ein Spieler erweitert das Dorfufer um einen Angelsteg. Wir machen daraus einen kleinen nutzbaren Steg, dessen erster Fang im Fass die Quest abschließt." },
  },
  {
    id: "nms-photo-hobby", gameId: "no-mans-sky", subreddit: "NoMansSkyTheGame",
    title: "An idea for an alternative gameplay mechanic: photo vendor", scope: "No Man’s Sky",
    url: "https://www.reddit.com/r/NoMansSkyTheGame/comments/iganjj/",
    note: { en: "Players describe enjoying in-game photography. The proposed photo vendor is a wish, not a feature; our field card uses existing scanning, Photo Mode, and discovery uploads only.", de: "Spieler erzählen von ihrer Freude an Spielfotos. Der vorgeschlagene Fotohändler ist ein Wunsch, keine Funktion; unser Steckbrief nutzt nur Scans, Fotomodus und das Hochladen von Entdeckungen." },
  },
  {
    id: "ac-no-boarding", gameId: "assassins-creed", subreddit: "assassinscreed",
    title: "Beating AC4: Black Flag without ship upgrades: A (Video) Guide", scope: "Assassin’s Creed IV: Black Flag (original)",
    url: "https://www.reddit.com/r/assassinscreed/comments/mf0nzd/",
    note: { en: "A player avoids boarding to prevent mid-combat repairs. We keep that rule for two schooners, without requiring a fresh save or removing existing upgrades.", de: "Ein Spieler verzichtet aufs Entern, um Reparaturen im Kampf auszuschließen. Wir übernehmen die Regel für zwei Schoner, ohne neuen Spielstand oder entfernte Upgrades zu verlangen." },
  },
  {
    id: "cyberpunk-build-rules", gameId: "cyberpunk-2077", subreddit: "cyberpunkgame",
    title: "What are your Self-Imposed Quirks?", scope: "Cyberpunk 2077",
    url: "https://www.reddit.com/r/cyberpunkgame/comments/1arpff0/",
    note: { en: "A player describes a netrunner who uses no weapons unless forced. Our adaptation is one NCPD assault, with quickhack damage and collecting the evidence as the finish.", de: "Ein Spieler beschreibt einen Netrunner, der nur bei Zwang Waffen nutzt. Wir begrenzen das auf einen NCPD-Übergriff mit Quickhack-Schaden und eingesammelten Beweisen als Abschluss." },
  },
  {
    id: "cyberpunk-no-chrome", gameId: "cyberpunk-2077", subreddit: "cyberpunkgame",
    title: "How can I challenge myself?", scope: "Cyberpunk 2077",
    url: "https://www.reddit.com/r/cyberpunkgame/comments/1976ojf/how_can_i_challenge_myself/",
    note: { en: "Players propose no-cyberware runs. We adapt the idea to one gig without active cyberware powers, explicitly allowing passive implants to remain installed.", de: "Spieler schlagen Runs ohne Cyberware vor. Wir machen daraus einen Auftrag ohne aktive Cyberware-Fähigkeiten; passive Implantate dürfen ausdrücklich eingebaut bleiben." },
  },
  {
    id: "crimson-unarmed-play", gameId: "crimson-desert", subreddit: "CrimsonDesert",
    title: "the combat is so addicting.", scope: "Crimson Desert",
    url: "https://www.reddit.com/r/CrimsonDesert/comments/1s1x8fl/the_combat_is_so_addicting/",
    note: { en: "A player says kicks and punches against shield enemies made combat click. Our adaptation requires opening three guards with a kick, outside arenas with separate rules.", de: "Ein Spieler beschreibt, wie Tritte und Schläge gegen Schildgegner das Kampfsystem verständlich machten. Bei uns müssen drei Wachen durch Tritte geöffnet werden, außerhalb von Arenen mit eigenen Regeln." },
  },
  {
    id: "crimson-photo-walks", gameId: "crimson-desert", subreddit: "CrimsonDesert",
    title: "One of my favorite things to do in Crimson Desert", scope: "Crimson Desert",
    url: "https://www.reddit.com/r/CrimsonDesert/comments/1s4rf4f/one_of_my_favorite_things_to_do_in_crimson_desert/",
    note: { en: "A player searches for unusual places to photograph. We specify an accessible Abyss island, a three-part composition, and saving the shot.", de: "Ein Spieler sucht ungewöhnliche Orte für Fotos. Wir legen eine zugängliche Abyss-Insel, drei Bildelemente und die gespeicherte Aufnahme als Ziel fest." },
  },
  {
    id: "battlefield-engineer-advice", gameId: "battlefield", subreddit: "Battlefield",
    title: "Engineer Tips & Advice", scope: "Battlefield 6",
    url: "https://www.reddit.com/r/Battlefield/comments/1odnbfv/",
    note: { en: "Players advise staying with a friendly vehicle and repairing it after damage. Our adaptation connects the repair to the tank's next flag capture.", de: "Spieler raten, bei einem eigenen Fahrzeug zu bleiben und es nach Treffern zu reparieren. Wir verbinden das mit der nächsten Flaggen-Eroberung des Panzers." },
  },
  {
    id: "battlefield-mine-trap", gameId: "battlefield", subreddit: "battlefield_4",
    title: "Feels bad ngl", scope: "Battlefield 4",
    url: "https://www.reddit.com/r/battlefield_4/comments/1amrili/",
    note: { en: "Players discuss laying a mine trap for a tank. We move the idea to defending a contested flag's approach and require a hit rather than a particular kill count.", de: "Spieler besprechen eine Minenfalle für einen Panzer. Wir nutzen sie zur Verteidigung einer Flaggenzufahrt und verlangen einen Treffer statt einer bestimmten Abschusszahl." },
  },
  {
    id: "rdr-camping-coffee", gameId: "red-dead-redemption", subreddit: "reddeadredemption",
    title: "Hot Coffee Mechanics Not Designed Well", scope: "Red Dead Redemption 2 story mode",
    url: "https://www.reddit.com/r/reddeadredemption/comments/cvcotj/",
    note: { en: "The discussion includes enjoying camping, sleeping, and traveling without fast travel. Our morning coffee trip adds a nearby town and hitching the horse as a definite finish.", de: "Im Thread geht es auch um die Freude am Zelten, Schlafen und Reisen ohne Schnellreise. Unsere Kaffeefahrt endet ausdrücklich mit dem angebundenen Pferd im nächsten Ort." },
  },
  {
    id: "rdr-camp-routines", gameId: "red-dead-redemption", subreddit: "reddeadredemption",
    title: "What are some weird habits/things you do during story mode gameplay? For me, I would hang out in camp until Mr Pearson finishes cooking the stew and eat it before heading on missions.", scope: "Red Dead Redemption 2 story mode",
    url: "https://www.reddit.com/r/reddeadredemption/comments/1flrg7q/",
    note: { en: "Players describe cooking and camping as part of their trips. Our adaptation adds gathering three herbs and stowing three differently seasoned portions for the road.", de: "Spieler beschreiben Kochen und Lagerpausen als Teil ihrer Reisen. Wir ergänzen drei selbst gesammelte Kräuter und drei unterschiedlich gewürzte Portionen für unterwegs." },
  },
  {
    id: "kcd-roadside-prayer", gameId: "kingdom-come-deliverance", subreddit: "kingdomcome",
    title: "[KCD2] I really like that you can pray in this game", scope: "Kingdom Come: Deliverance II",
    url: "https://www.reddit.com/r/kingdomcome/comments/1prm9oa/kcd2_i_really_like_that_you_can_pray_in_this_game/",
    note: { en: "Players discuss prayer as roleplay and the perk it requires. We turn it into a short walk to a usable shrine and back, with the perk stated on the card.", de: "Spieler besprechen Beten als Rollenspiel und das nötige Talent. Wir machen daraus einen kurzen Hin- und Rückweg zu einem nutzbaren Schrein und nennen das Talent auf der Karte." },
  },
  {
    id: "kcd-fair-dice", gameId: "kingdom-come-deliverance", subreddit: "kingdomcome",
    title: "[KCD2] What is the most balanced dice usage?", scope: "Kingdom Come: Deliverance II",
    url: "https://www.reddit.com/r/kingdomcome/comments/1j1o2pm/",
    note: { en: "Players suggest retaining ordinary dice to keep games interesting. We use six ordinary dice, no badge, and a maximum of three games at the minimum stake.", de: "Spieler empfehlen gewöhnliche Würfel, damit Partien interessant bleiben. Wir nutzen sechs gewöhnliche Würfel, kein Abzeichen und höchstens drei Partien zum Mindesteinsatz." },
  },
  {
    id: "skyrim-road-travel", gameId: "skyrim", subreddit: "skyrim",
    title: "currently on a « no fast travel » run, so fun but so long sometimes omg", scope: "Skyrim",
    url: "https://www.reddit.com/r/skyrim/comments/1t6dsvq/currently_on_a_no_fast_travel_run_so_fun_but_so/",
    note: { en: "Players describe the encounters and scenery they find without fast travel. Our adaptation bounds the walk to Riverwood–Whiterun and adds gathering, a shrine, and a sale as the finish.", de: "Spieler erzählen von Begegnungen und Landschaften ohne Schnellreise. Wir begrenzen den Weg auf Flusswald–Weißlauf und ergänzen Sammeln, einen Schrein und einen Verkauf als Abschluss." },
  },
  {
    id: "arc-free-kit", gameId: "arc-raiders", subreddit: "ARC_Raiders",
    title: "I take a free loadout straight to extraction because I’m scared.", scope: "ARC Raiders",
    url: "https://www.reddit.com/r/ARC_Raiders/comments/1ozivms/i_take_a_free_loadout_straight_to_extraction/",
    note: { en: "Players discuss short free-kit extractions and cautious looting. We add a small loot target and a separate no-shots run; we do not rely on the thread's old trader exchange or map availability.", de: "Spieler besprechen kurze Extraktionen mit Gratis-Kits und vorsichtiges Plündern. Wir ergänzen ein kleines Beuteziel und einen Run ohne Schüsse; alte Händler-Tauschangebote oder Kartenfreigaben setzen wir nicht voraus." },
  },
  {
    id: "rocket-small-pads", gameId: "rocket-league", subreddit: "RocketLeague",
    title: "i can't stress enough how important boost pads are", scope: "Rocket League",
    url: "https://www.reddit.com/r/RocketLeague/comments/1ujrchs/i_cant_stress_enough_how_important_boost_pads_are/",
    note: { en: "Players recommend small pads to stay in position instead of leaving play for full boost. We add one bot match with a goal or save and a separate back-post return route.", de: "Spieler empfehlen kleine Pads, um in Position zu bleiben, statt für vollen Boost das Spiel zu verlassen. Wir ergänzen ein Bot-Match mit Tor oder Parade und eine eigene Rückroute zum hinteren Pfosten." },
  },
  {
    id: "skate-realistic-lines", gameId: "skate", subreddit: "skate3",
    title: "What skate style do you prefer? Realistic? Or tricklining/arcade?", scope: "Skate 3",
    url: "https://www.reddit.com/r/skate3/comments/196p6xs/",
    note: { en: "A player describes simple flip-to-slide-to-shove-it lines. We adapt that preference into a three-trick Hardcore line with a clear bail reset.", de: "Ein Spieler beschreibt einfache Lines aus Flip, Slide und Shove-it. Daraus machen wir eine Hardcore-Line mit drei Tricks und Neustart bei einem Sturz." },
  },
  {
    id: "skate-diy-spots", gameId: "skate", subreddit: "SkateEA",
    title: "Disappointed about the quick drop shop", scope: "skate. (2025)",
    url: "https://www.reddit.com/r/SkateEA/comments/1v39bpr/disappointed_about_the_quick_drop_shop/",
    note: { en: "A comment describes building realistic DIY spots. Our one-prop line uses an already unlocked object; it does not require a shop purchase or requested future features.", de: "Ein Kommentar beschreibt realistische selbst gebaute Spots. Unsere Line nutzt ein bereits freigeschaltetes Objekt; Käufe oder gewünschte künftige Funktionen sind nicht nötig." },
  },
  {
    id: "primal-beast-tools", gameId: "far-cry", subreddit: "farcry",
    title: "Primal", scope: "Far Cry Primal",
    url: "https://www.reddit.com/r/farcry/comments/1e6jm5z/",
    note: { en: "Players enjoy scouting and attacking with the owl, tamed beasts, and foraging. Our outpost opening and wolf hunt turn that toolset into short sessions with explicit unlocks.", de: "Spieler mögen die Eule, gezähmte Tiere und das Sammeln. Unser Außenposten-Auftakt und die Wolfsjagd machen daraus kurze Sessions mit ausdrücklich genannten Freischaltungen." },
  },
  {
    id: "gta-sa-road-trips", gameId: "gta", subreddit: "patientgamers",
    title: "I discovered taking road trips in GTA: San Andreas can be really fun", scope: "GTA: San Andreas",
    url: "https://www.reddit.com/r/patientgamers/comments/pkkt74/i_discovered_taking_road_trips_in_gta_san_andreas/",
    note: { en: "A player navigates by road signs instead of repeatedly opening the map. We add a fixed start and destination so the road trip has a visible finish.", de: "Ein Spieler orientiert sich an Straßenschildern statt ständig auf der Karte. Wir ergänzen einen festen Start und ein Ziel, damit die Fahrt einen sichtbaren Abschluss hat." },
  },
  {
    id: "gta-sa-side-jobs", gameId: "gta", subreddit: "sanandreas",
    title: "Wich are your favourite side missions?", scope: "GTA: San Andreas",
    url: "https://www.reddit.com/r/sanandreas/comments/1du947k/",
    note: { en: "Players name trucking and collecting export cars as favorite side jobs. Our adaptations add returning the truck and delivering a repaired export car without new damage.", de: "Spieler nennen Transporte und Exportautos als liebste Nebenjobs. Wir ergänzen die Rückfahrt mit dem Lkw und die Lieferung eines reparierten Exportautos ohne neuen Schaden." },
  },
  {
    id: "hitman-found-equipment", gameId: "hitman", subreddit: "HiTMAN",
    title: "Hitman 2 all challenges with no loadout (sa if possible)", scope: "HITMAN trilogy",
    url: "https://www.reddit.com/r/HiTMAN/comments/jagrtq/",
    note: { en: "Players suggest entering with no equipment or agency pickups and using what the level provides. We apply that rule to one completed campaign mission across the modern trilogy, with a no-bystander-kills restriction.", de: "Spieler schlagen einen Start ohne Ausrüstung oder Agenturdepots vor und nutzen Fundstücke. Wir übertragen die Regel auf eine abgeschlossene Kampagnenmission der modernen Trilogie und erlauben keine getöteten Unbeteiligten." },
  },
  {
    id: "hitman-player-rules", gameId: "hitman", subreddit: "HiTMAN",
    title: "Favorite self imposed challenges.", scope: "HITMAN trilogy",
    url: "https://www.reddit.com/r/HiTMAN/comments/1heaapp/",
    note: { en: "Players limit disguises to spare clothes and set up accidents without shooting props. We split these into separate missions, retaining their restrictions and adding explicit exits.", de: "Spieler nutzen nur herumliegende Kleidung und bereiten Unfälle ohne Schüsse auf Objekte vor. Wir machen daraus getrennte Missionen mit diesen Regeln und einem ausdrücklichen Ausgang." },
  },
  {
    id: "fortnite-player-rules", gameId: "fortnite", subreddit: "FortNiteBR",
    title: "Anyone have any fun self imposed challenges?", scope: "Fortnite Zero Build",
    url: "https://www.reddit.com/r/FortNiteBR/comments/1cey01o/",
    note: { en: "A player suggests using only the first weapon picked up. We specify Solo Zero Build, allowed supplies, and keeping that exact gun through the match result.", de: "Ein Spieler schlägt vor, nur die erste aufgesammelte Waffe zu nutzen. Wir legen Solo Null Bauen, erlaubte Vorräte und dieselbe Waffe bis zum Matchergebnis fest." },
  },
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
    note: { en: "A player proposes staying off planets after the opening and avoiding Anomaly facilities. We shorten the no-landing idea to one asteroid-mining trip with a sale and pulse-engine refill.", de: "Ein Spieler schlägt vor, nach dem Einstieg keine Planeten mehr zu betreten und Anomalie-Einrichtungen zu meiden. Wir begrenzen die Idee auf einen Asteroiden-Ausflug mit Verkauf und Nachfüllen des Impulsantriebs." },
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
