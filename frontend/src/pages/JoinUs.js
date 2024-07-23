import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'; // Adjust the path if necessary

const JoinUs = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>Join Us</span>
          </div>
          <div className="content">
            <h2 className="section-title"><strong>TOP CRITICS</strong></h2>
            <h2 className="section-title">WHO ARE TOP CRITICS?</h2>
            <p>Top Critic is a designation created to distinguish Tomatometer-approved critics who excel at their craft. Critics selected are well-established, influential, and prolific; they are, in a sense, the cream of the crop. Top Critic status is granted by a set of criteria and a selection panel and cannot be applied for.</p>
            <h2 className="section-title">REVIEWS PUBLISHED</h2>
            <p>Reviews published by Top Critics feature in-depth analysis, supported by a breakdown of formal and thematic elements. Top Critics exhibit a deep knowledge of film/TV history, and their reviews may also provide valuable cultural context. </p>
            <p>While their reviews incorporate the lens of their own experience, they also exhibit the ability to remove any biases that may prevent them from serving the audience at-large. Overall, reviews from Top Critics are compelling, provide a sense of the viewing experience, exhibit a recognizable voice, and may influence the larger cultural conversation around a film or TV series.</p>
            <div className="row">
              <div className="col-md-4">
                <div className="feature">
                  <h3 className="feature-title">ADVISORY COMMITTEE</h3>
                  <br />
                  <p><a href="#">Ranjan Kumar</a>, Arts & Culture Reporter, Colorado Public Radio</p>
                  <p><a href="#">Velarsu</a>, Senior Editor & Film/TV Critic, Rolling Stone</p>
                  <p><a href="#">Aparna</a>, Film Critic, Variety, The Playlist, Sight & Sound Magazine</p>
                  <p><a href="#">Raj Kavin</a>, Executive Editor & Chief Critic, IndieWire</p>
                  <p><a href="#">Hema Shruthi</a>, Host of the podcast “Unspooled” & critic for KPCC’s Film Week</p>
                  <p><a href="#">Kithika</a>, co-founder and President of AAFCA</p>
                </div>
              </div>
              <div className="feature">
                  <h3 className="feature-title">For Recent updates on movies as well as about cinephile</h3>
                  <br />

                  <a href="#" className="button">Join Newsletter</a>
                </div>
              {/* <div className="col-md-4">
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JoinUs;
