import React from 'react';
import HeaderBar from '../../organisms/HeaderBar';
import FeatureGrid from '../../organisms/FeatureGrid';
import GameModesSection from '../../organisms/GameModesSection';
import QuickStatsRow from '../../organisms/QuickStatsRow';
import StoreSpotlight from '../../organisms/StoreSpotlight';
import DailyBonusBanner from '../../organisms/DailyBonusBanner';
import LeaderboardSection from '../../organisms/LeaderboardSection';
import HowToPlayCard from '../../organisms/HowToPlayCard';
import SupportStrip from '../../organisms/SupportStrip';
import ResponsibleNotice from '../../organisms/ResponsibleNotice';
import FloatingPromo from '../../organisms/FloatingPromo';
import BottomNav from '../../organisms/BottomNav';

const LobbyTemplate = ({
  player,
  featureCards,
  gameModes,
  quickStats,
  storeSpotlight,
  dailyBonus,
  leaderboard,
  howToPlay,
  supportMetrics,
  responsibleMessage,
  floatingPromo,
  navigation,
}) => (
  <div
    style={{
      width: '100%',
      maxWidth: '420px',
      height: '100vh',
      maxHeight: '100vh',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(2, 6, 23, 0.95))',
      borderRadius: '32px',
      overflow: 'hidden',
      border: '1px solid rgba(148, 163, 184, 0.1)',
      boxShadow: '0 28px 80px rgba(8, 47, 73, 0.55)',
      margin: '24px 16px',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'hidden',
    }}
  >
    <HeaderBar player={player} />
    <main
      style={{
        flex: 1,
        overflowY: 'auto',
        padding: '24px',
        paddingBottom: '140px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'relative',
        background: '#00151c',
      }}
    >
      <div
        style={{
          margin: '-24px -24px 0',
          padding: '24px 24px 18px',
          background: '#042a33',
          borderBottomLeftRadius: '24px',
          borderBottomRightRadius: '24px',
          boxShadow: '0 18px 32px rgba(8, 47, 73, 0.35)',
        }}
      >
        <FeatureGrid cards={featureCards} />
      </div>
      <GameModesSection modes={gameModes} />
      <QuickStatsRow stats={quickStats} />
      <StoreSpotlight {...storeSpotlight} />
      <DailyBonusBanner {...dailyBonus} />
      <LeaderboardSection {...leaderboard} />
      <HowToPlayCard {...howToPlay} />
      <SupportStrip
        image={supportMetrics?.image || supportMetrics}
        alt={supportMetrics?.alt}
      />
      <ResponsibleNotice message={responsibleMessage} />
    </main>
    <BottomNav items={navigation} />
    {floatingPromo?.image ? <FloatingPromo {...floatingPromo} /> : null}
  </div>
);

export default LobbyTemplate;
