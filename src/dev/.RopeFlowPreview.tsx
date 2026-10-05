import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { useStore } from 'zustand';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { englishUi, germanUi } from '../localization/resources';
import { hydrateQuest } from '../localization/catalog';
import { QUEST_CORES_BY_ID } from '../data/quests';
import { snapshotQuest } from '../domain/quest/snapshot';
import { createQuestStore } from '../stores/useQuestStore';
import { createQuestOffer, generateQuestOffers } from '../domain/quest/rules';
import { ActiveQuestCard } from '../features/active-quest/components/ActiveQuestCard/ActiveQuestCard';
import { PlayLayout } from '../features/quest-flow/PlayLayout';
import flowStyles from '../features/quest-flow/QuestFlowLayout.module.css';
import '../styles/global.css';

// Temporary manual preview. This store never persists or changes player data.
const store = createQuestStore(undefined, { getLibraryGames: () => [], getLibraryRevision: () => 0, getCuratedGamePreferences: () => ({}) });
const previewI18n = i18next.createInstance();
void previewI18n.init({ lng: 'en', fallbackLng: 'en', initAsync: false, resources: { en: { translation: { ui: englishUi } }, de: { translation: { ui: germanUi } } }, interpolation: { escapeValue: false } });
const ordinary = Object.values(QUEST_CORES_BY_ID).find(q => !q.curated && q.type === 'objective' && q.rarity === 'standard')!;
let sequence = 0;
function load(kind: string, elapsed = 0) {
  const quest = kind === 'countdown' || kind === 'speedrun' ? Object.values(QUEST_CORES_BY_ID).find(q => q.type === kind)! : ordinary;
  const moodId = quest.moodIds[0];
  const offer = createQuestOffer(moodId, quest.id, null);
  const others = generateQuestOffers(moodId, [], Math.random, new Set([offer.id])).filter(q => q.questId !== quest.id).slice(0, 2);
  const offers = [offer, ...others];
  const now = Date.now();
  const duration = kind === 'countdown' || kind === 'speedrun' ? (quest.maximumDurationMinutes ?? quest.suggestedDurationMinutes) * 60000 : elapsed;
  const ready = kind === 'ready';
  store.setState({ currentSession: { sessionId: `preview-${++sequence}`, moodId, questId: quest.id, game: null, snapshot: snapshotQuest(quest.id), revealedAt: now - 10000, startedAt: ready ? null : now - duration, pausedAt: ready || kind === 'running' ? null : now, pausedTotalMs: 0 }, selectedMoodId: moodId, moodSelectedAt: now, offeredQuests: offers, offerSetsByMoodId: { [moodId]: offers }, freeShufflesRemaining: 0, profile: { ...store.getState().profile, points: 0 }, completedSessions: [], questProgressById: {}, stats: { ...store.getState().stats, cancelledQuestCount: 0 } });
}
load('ready');
function Preview() {
  const state = useStore(store);
  const [language, setLanguage] = useState<'en' | 'de'>('en');
  const session = state.currentSession;
  const quest = session && hydrateQuest(session.questId, session.moodId, session.game, language, session.snapshot);
  return <I18nextProvider i18n={previewI18n}>
    <nav style={{position:'fixed', top:0, left:0, zIndex:100, background:'white', color:'black', padding:8, fontSize:12}}>
      <button onClick={() => load('ready')}>Ready</button> <button onClick={() => load('running')}>Running</button> <button onClick={() => load('paused')}>Paused 0s</button> <button onClick={() => load('paused', 30000)}>Paused 30s</button> <button onClick={() => load('paused', 300000)}>Paused 5min</button> <button onClick={() => load('countdown')}>Countdown expired</button> <button onClick={() => load('speedrun')}>Speedrun late</button> <button onClick={() => { const next = language === 'en' ? 'de' : 'en'; void previewI18n.changeLanguage(next); setLanguage(next); }}>EN/DE</button>
      <pre style={{margin:0}}>{JSON.stringify({coins:state.profile.points, freeShuffles:state.freeShufflesRemaining, cancelled:state.stats.cancelledQuestCount, completions:state.completedSessions.map(c => ({durationMs:c.durationMs, points:c.pointsAwarded})), offers:state.offeredQuests.map(o => o.questId)})}</pre>
    </nav>
    <PlayLayout className={flowStyles.screen}>
      {session && quest ? <ActiveQuestCard key={session.sessionId} quest={quest} session={session} layoutSessionId={session.sessionId} entryRotation={0} returnLabel="Back" reduceMotion={false} onDiscard={() => store.getState().discardCurrentSession()} onRequestBan={() => {}} onReturnToSelection={() => store.getState().returnCurrentSessionToSelection()} onStart={time => store.getState().startQuest(time)} onPause={time => store.getState().pauseQuest(time)} onResume={time => store.getState().resumeQuest(time)} onComplete={() => store.getState().completeQuest()} onCoinFlightStart={() => {}} onCoinHit={() => {}} onLayoutHandoffStart={() => {}} /> : <p style={{paddingTop:100}}>Session ended</p>}
    </PlayLayout>
  </I18nextProvider>;
}
createRoot(document.getElementById('root')!).render(<Preview />);
