import React from 'react';
import { Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <div className="bg-gray-200">
      <ToastContainer position="top-right" hideProgressBar />
      <Route path="/" component={LoginPage} exact />
      <Route path="/dash-board" component={Dashboard} exact />
    </div>
  );
};

export default App;
