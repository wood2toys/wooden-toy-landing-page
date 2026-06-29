import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SimplePage from './components/SimplePage';
import ThankYou from './components/ThankYou';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<SimplePage />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Router>
    </div>
  );
}