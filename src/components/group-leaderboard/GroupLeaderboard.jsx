/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */

import React from 'react';

import Leaderboard from '../leaderboard/Leaderboard';

import './GroupLeaderboard.css';

const exampleData = [
  {
    fullName: 'Tobias Kärst',
    tasksDone: '20',
    points: '420',
  },
  {
    fullName: 'Paul Frank',
    tasksDone: '5',
    points: '30',
  },
];

const LeaderboardStyle = {
  margin: '50px auto',
  padding: '15px',
  border: '2px solid #292D33',
  borderRadius: '15px',
  maxWidth: '90%',
};

export default function GroupLeaderboard() {
  return (
    <div style={LeaderboardStyle}>
      <Leaderboard data={exampleData} />
    </div>
  );
}
