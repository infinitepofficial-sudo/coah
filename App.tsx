import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Onboarding from './pages/Onboarding';
import Auth from './pages/Auth';
import GoalSetup from './pages/GoalSetup';
import Dashboard from './pages/Dashboard';
import ActiveCall from './pages/ActiveCall';
import { UserProvider } from './context/UserContext';

const App: React.FC = () => {
  return (
    <UserProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/goal-setup" element={<GoalSetup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/call" element={<ActiveCall />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
    </UserProvider>
  );
};

export default App;