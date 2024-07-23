import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import avatarImage from '../img1/avatar1.jpg';
import social from '../img1/social_network.jpeg'

const movies = [
  {
    id: 1,
    title: 'Avatar (2009)',
    description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    image: avatarImage,
    link: '/movie/1',
  },
  {
    id: 2,
    title: 'The Social Network (2010)',
    description: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea and by the co-founder who was later squeezed out of the business.',
    image: social,
    link: '/movie/2',
  },
  // Add more movie objects here
];

const ReviewPage = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setMovieList(movies);
  }, []);

  return (
    <div id="site-content">
      <main className="main-content">
        <div className="container">
          <div className="page">
            <h1>Movie Reviews</h1> {/* Simple content to check rendering */}
            <div className="breadcrumbs">
              <Link to="/">Home</Link>
              <span>Movie Review</span>
            </div>
            <div className="filters">
              <select name="#" id="#" placeholder="Choose Category">
                <option value="#">Action</option>
                <option value="#">Drama</option>
                <option value="#">Fantasy</option>
                <option value="#">Horror</option>
                <option value="#">Adventure</option>
              </select>
            </div>
            <div className="movie-list">
              {movieList.map((movie) => (
                <div className="movie" key={movie.id}>
                  <figure className="movie-poster">
                    <img src={movie.image} alt={movie.title} />
                  </figure>
                  <div className="movie-title">
                    <Link to={movie.link}>{movie.title}</Link>
                  </div>
                  <p>{movie.description}</p>
                </div>
              ))}
            </div>
            <div className="pagination">
              <Link to="#" className="page-number prev">
                <i className="fa fa-angle-left"></i>
              </Link>
              <span className="page-number current">1</span>
              <Link to="/review2" className="page-number">
                2
              </Link>
              <Link to="#" className="page-number">
                3
              </Link>
              <Link to="#" className="page-number">
                4
              </Link>
              <Link to="#" className="page-number">
                5
              </Link>
              <Link to="#" className="page-number next">
                <i className="fa fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReviewPage;
