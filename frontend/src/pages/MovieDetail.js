import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.css'; // Adjust the path if necessary
import ReviewForm from '../components/ReviewForm';
import avatar from '../img1/avatar_bg1.jpg'
 // Import ReviewForm component

const movies = [
  {
    id: 1,
    title: 'Avatar (2009)',
    description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    image: avatar,
    details: {
      summary: 'On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved...',
      rating: 4.0,
      length: '2 hours 42 minutes',
      premiere: 'December 18, 2009 (United States)',
      category: 'Science fiction film/Action film',
      directors: 'James Cameron',
      writers: 'James Cameron',
      stars: 'Sam Worthington (Jack Sully), Zoe Saldana (Neytiri)'
    }
  },
  {
    id: 2,
    title: 'The Social Network (2010)',
    description: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea and by the co-founder who was later squeezed out of the business.',
    image: '/images/social_network.jpeg',
    details: {
      summary: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook...',
      rating: 4.5,
      length: '2 hours',
      premiere: 'October 1, 2010 (United States)',
      category: 'Drama/Biography',
      directors: 'David Fincher',
      writers: 'Aaron Sorkin (screenplay), Ben Mezrich (book)',
      stars: 'Jesse Eisenberg (Mark Zuckerberg), Andrew Garfield (Eduardo Saverin)'
    }
  }
  // Add more movie objects here
];

const sortReviews = (reviews) => {
  return reviews.sort((a, b) => {
    if (a.sentiment === 'positive' && b.sentiment !== 'positive') {
      return -1;
    }
    if (a.sentiment !== 'positive' && b.sentiment === 'positive') {
      return 1;
    }
    return 0;
  });
};

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/reviews/${id}`);
        setReviews(sortReviews(response.data));
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [id]);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleReviewSubmit = (newReview) => {
    const updatedReviews = [newReview, ...reviews];
    setReviews(sortReviews(updatedReviews));
  };

  return (
    <div id="site-content">
      <main className="main-content">
        <div className="container">
          <div className="page">
            <div className="breadcrumbs">
              <a href="/">Home</a>
              <a href="/review">Movie Review</a>
              <span>{movie.title}</span>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-6">
                  <figure className="movie-poster">
                    <img src={movie.image} alt={movie.title} />
                  </figure>
                </div>
                <div className="col-md-6">
                  <h2 className="movie-title">{movie.title}</h2>
                  <div className="movie-summary">
                    <p>{movie.details.summary}</p>
                  </div>
                  <ul className="movie-meta">
                    <li><strong>Rating:</strong>
                      <div className="star-rating" title={`Rated ${movie.details.rating} out of 5`}>
                        <span style={{ width: `${movie.details.rating * 20}%` }}>
                          <strong className="rating">{movie.details.rating}</strong> out of 5
                        </span>
                      </div>
                    </li>
                    <li><strong>Length:</strong> {movie.details.length}</li>
                    <li><strong>Premiere:</strong> {movie.details.premiere}</li>
                    <li><strong>Category:</strong> {movie.details.category}</li>
                  </ul>
                  <ul className="starring">
                    <li><strong>Directors:</strong> {movie.details.directors}</li>
                    <li><strong>Writers:</strong> {movie.details.writers}</li>
                    <li><strong>Stars:</strong> {movie.details.stars}</li>
                  </ul>
                </div>
              </div>
              <hr />
              <h1 style={{ color: 'black' }}>Summaries</h1>
              <div className="entry-content">
                <p>{movie.details.summary}</p>
                <ReviewForm movieId={movie.id} onReviewSubmit={handleReviewSubmit} />
                <div className="reviews">
                  <h3>Reviews</h3>
                  {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                      <div key={index} className={`review ${review.sentiment}`}>
                        <p>{review.review}</p>
                      </div>
                    ))
                  ) : (
                    <p>No reviews yet. Be the first to write one!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetail;
