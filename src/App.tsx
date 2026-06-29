import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ThankYou from './components/ThankYou';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#F5F0E8] font-sans text-[#2C1810]">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Router>
    </div>
  );
}