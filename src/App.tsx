import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GovernmentsPage from './pages/GovernmentsPage';
import GovernmentDetailPage from './pages/GovernmentDetailPage';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0a0a18]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/governments" element={<GovernmentsPage />} />
            <Route path="/government/:id" element={<GovernmentDetailPage />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;