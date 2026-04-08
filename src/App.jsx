import React from 'react';
import { supabase } from './supabaseClient'; 

// Mock data for components
const mockData = {
  dashboard: {},
  members: [],
  lotteries: [],
  finances: [],
  bets: [],
  reports: [],
  settings: {}
};

const DashboardPage = () => <div className='dashboard'>Dashboard Content</div>;
const MembersPage = () => <div className='members'>Members Content</div>;
const LotteryPage = () => <div className='lottery'>Lottery Content</div>;
const FinancePage = () => <div className='finance'>Finance Content</div>;
const BettingPage = () => <div className='betting'>Betting Content</div>;
const ReportPage = () => <div className='report'>Report Content</div>;
const SettingsPage = () => <div className='settings'>Settings Content</div>;

// แก้ชื่อจาก LotterySystem เป็น App ให้ตรงกับ main.jsx และ export
const App = () => {
  return (
    <div className='lottery-system'>
      <h1>Supa Lotto System Online</h1>
      <DashboardPage />
      <MembersPage />
      <LotteryPage />
      <FinancePage />
      <BettingPage />
      <ReportPage />
      <SettingsPage />
    </div>
  );
};

export default App; // ตอนนี้จะใช้งานได้เพราะชื่อข้างบนเป็น App แล้ว
