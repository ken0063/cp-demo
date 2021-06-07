import React from 'react';
import { Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-full max-w-screen-3xl">
      <Navbar />
      <ToastContainer position="top-right" hideProgressBar />

      <Route path="/dash-board" component={Dashboard} exact />

      <Route path="/" component={LoginPage} exact />

      <Footer />
    </div>
  );
};

export default App;
