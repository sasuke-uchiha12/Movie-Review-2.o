import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ReviewForm.css'

const ReviewForm = ({ movieId, onReviewSubmit }) => {
  const [review, setReview] = useState('');

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/analyze', { review, movie_id: movieId });
      const sentiment = response.data.sentiment;
      onReviewSubmit({ review, sentiment });
      setReview('');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="review-form-container">
      <div className="pinfo">Write your own review.</div>
      <form onSubmit={handleReviewSubmit}>
        <div className="form-group">
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-pencil"></i></span>
              <textarea
                className="form-control"
                id="review"
                rows="3"
                placeholder="Enter your Review Here....."
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
