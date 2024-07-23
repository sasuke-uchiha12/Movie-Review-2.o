import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus, faPinterest } from '@fortawesome/free-brands-svg-icons';
import bg1 from '../img1/bg1.jpg'
import tv from '../img1/tv.jpeg'

function About() {
  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>About us</span>
          </div>
          <div className="row">
            <div className="col-md-4">
              <figure><img src={bg1} alt="figure image" /></figure>
            </div>
            <div className="col-md-8">
              {/* Placeholder for additional content */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-9" style={{ fontSize: '10px' }}>
              <h3 className="section-title"><strong>Vision &amp; Mission</strong></h3>
              <p className="leading">
                SEATTLE--(BUSINESS WIRE)--CINEphile (www.cinephile.com), the #1 movie website in
                the world, turns 25 on December 12, 2022. To celebrate this milestone event, today
                CINEphile announced the top 25 stars of all time as determined by actual page views
                of the more than 250 million monthly unique visitors to CINEphile. Additionally,
                CINEphile launched two highly anticipated TV charts, the CINEphile Top Rated TV
                Shows chart at <Link to="/">cinephile.com</Link> and the CINEphile Most Popular
                TV Shows chart <Link to="/review">Cinephile/review</Link>. Both of Cinephile's
                new TV charts are available on cinephile.com and cinephile’s mobile optimized
                website, and will be available soon on IMDb’s “Movies & TV” app for iOS and Android.
              </p>
            </div>
            <div className="col-md-3">
              <h2 className="section-title">Useful Links</h2>
              <ul className="arrow">
                <li><Link to="/avatar_rev">Avatar 1</Link></li>
                <li><Link to="#">Avenger</Link></li>
              </ul>
            </div>
          </div>
          <h2 className="section-title">Our Team</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="team">
                <figure className="team-image"><img src={tv} alt="Thulasi" /></figure>
                <h2 className="team-name">Thulasi Vasan S</h2>
                <small className="team-title">Full Stack developer</small>
                <div className="social-links">
                  <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#" className="twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" className="google-plus"><FontAwesomeIcon icon={faGooglePlus} /></a>
                  <a href="#" className="pinterest"><FontAwesomeIcon icon={faPinterest} /></a>
                </div>
              </div>
            </div>
            {/* <div className="col-md-3">
            <div className="team">
              <figure className="team-image"><img src={profileImg2} alt="Jathin" /></figure>
              <h2 className="team-name">Jathin</h2>
              <small className="team-title">#title2</small>
              <div className="social-links">
                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                <a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a>
              </div>
            </div>
          </div> */}
            {/* <div className="col-md-3">
            <div className="team">
              <figure className="team-image"><img src={profileImg3} alt="Praveen" /></figure>
              <h2 className="team-name">Praveen</h2>
              <small className="team-title">#title3</small>
              <div className="social-links">
                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                <a href="#" className="pinterest"><i className="fa fa-pinterest"></i></a>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
