import React from 'react';
import LobbyTemplate from '../../templates/LobbyTemplate';

import casinoImage from '../../../assets/casino.png';
import astroImage from '../../../assets/astro.png';
import storePromoImage from '../../../assets/frame-427320985.png';
import howToPlayImage from '../../../assets/frame-1.png';
import dailyBonusImage from '../../../assets/group-282.png';
import supportImage from '../../../assets/trust.png';
import leaderboardIcon from '../../../assets/icon.png';
import leaderboardGraphic from '../../../assets/image-35.png';
import dailyMissionGraphic from '../../../assets/image-34.png';
import currentStreakGraphic from '../../../assets/image-33.png';
import leaderboardAvatar from '../../../assets/lb.png';
import pointsRummyImage from '../../../assets/PR.png';
import pool101Image from '../../../assets/101.png';
import bestOfTwoImage from '../../../assets/bo2.png';
import tournamentImage from '../../../assets/tourney.png';

const LobbyPage = () => {
  const playerAvatarUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBrhkhrbEDs8C5OU1PPVwG-zijW-j1amYi-u0cM4PB7sBUqkWo4QLdqaBeH3Q4I12GYq7PNMxNBheXkMpmAFkJCa1rTgLc2bj5k9ukZcvY4rMC1Arr2MCwA93hbFScs3cG9DJJW-0bf_kyT0l7OHSxWRViKz8yXQtqGkfYOJrUzjgegm91u_sgSvpUyCoeXjKCTetuFzI0Zu_a55X8xOLZpsFWJSv5R50aUMJDByK750ghVV9NssSE5MBAztoCWO9j6_q2mHueTlruW';

  return (
    <LobbyTemplate
      player={{
        name: 'Phani2205',
        tier: 'Platinum+',
        level: 18,
        avatar: playerAvatarUrl,
        borderColor: '#f59e0b',
        balance: '10,00,000',
      }}
      featureCards={[
        {
          image: casinoImage,
          alt: 'Experience Casino',
        },
        {
          image: astroImage,
          alt: 'Discover Astrology',
        },
      ]}
      gameModes={[
        { label: 'Points Rummy', image: pointsRummyImage },
        { label: '101 Pool', image: pool101Image },
        { label: 'Best of 2 Rummy', image: bestOfTwoImage },
        { label: 'Tournament Rummy', image: tournamentImage },
      ]}
      quickStats={[
        { title: 'Current Streak', subtitle: 'Level 42', image: currentStreakGraphic, alt: 'Current streak badge', accent: 'rgba(249, 115, 22, 0.25)' },
        { title: 'Daily Missions', subtitle: 'Play 3 Hands', image: dailyMissionGraphic, alt: 'Daily missions target', accent: 'rgba(239, 68, 68, 0.25)' },
        { title: 'Leaderboard', subtitle: 'Rank 12', image: leaderboardGraphic, alt: 'Leaderboard trophies', accent: 'rgba(250, 204, 21, 0.25)' },
      ]}
      storeSpotlight={{ image: storePromoImage, alt: 'Poker Store' }}
      dailyBonus={{ image: dailyBonusImage, alt: 'Daily bonus offer' }}
      leaderboard={{
        title: 'Top Players',
        ctaLabel: 'View Full Leaderboard',
        iconSrc: leaderboardIcon,
        entries: [
          { name: 'PokerKing_77', winRate: '89%', chips: '2.5M', avatar: leaderboardAvatar, badgeColor: '#fbbf24' },
          { name: 'AceQueen_99', winRate: '82%', chips: '1.8M', avatar: leaderboardAvatar, badgeColor: '#94a3b8' },
          { name: 'BluffMaster', winRate: '78%', chips: '1.2M', avatar: leaderboardAvatar, badgeColor: '#f97316' },
        ],
      }}
      howToPlay={{ image: howToPlayImage, alt: 'How to Play' }}
      supportMetrics={{ image: supportImage, alt: 'Trusted platform highlights' }}
      responsibleMessage="This game may be habit-forming or financially risky. Play responsibly. By registering, you accept you are 18+ and agree to our T&C and privacy policy."
      navigation={[
        { icon: 'home', label: 'Home', active: true },
        { icon: 'card_giftcard', label: 'Free Chips', active: false },
        { icon: 'health_and_safety', label: 'Insurance', active: false },
        { icon: 'analytics', label: 'Finance', active: false },
      ]}
    />
  );
};

export default LobbyPage;
