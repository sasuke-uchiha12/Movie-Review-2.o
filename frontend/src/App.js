import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/styles.css'; // Import your main SCSS file
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ReviewPage from './pages/Review';
import MovieDetail from './pages/MovieDetail';
import JoinUs from './pages/JoinUs';

// import Review from './pages/Review';
// import Single from './pages/Single';
// import JoinUs from './pages/JoinUs';

function App() {
  return (
    <Router>
      <div id="site-content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<ReviewPage/>} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/joinus" element={<JoinUs />} />
          {/* <Route path="/review" element={<Review />} />
          <Route path="/single" element={<Single />} />
          <Route path="/joinus" element={<JoinUs />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
