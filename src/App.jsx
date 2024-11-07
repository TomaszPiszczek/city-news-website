import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import NewsPage from './pages/NewsPage';
import NewsDetail from './components/NewsDetail';
import Footer from './components/footer/footer';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/state/:stateName" element={<NewsPage />} />
            <Route path="/city/:cityName" element={<NewsPage />} />
            <Route path="/news/global" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
