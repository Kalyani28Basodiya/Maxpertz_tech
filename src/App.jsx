import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StoryDetailPage from './pages/StoryDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/storydetailpage/:id" element={<StoryDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;

