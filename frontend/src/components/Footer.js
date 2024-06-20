import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="widget">
              <h3 className="widget-title">About Us</h3>
              <p>As the leading online aggregator of movie and TV show reviews from critics, we provide
                fans with a comprehensive guide to what’s Fresh – and what’s Rotten – in theaters and at
                home. And the Tomatometer is just the beginning. We also serve movie and TV fans with
                original editorial content on our site and through social channels, produce fun and
                informative video series, and hold live events for fans across the country, with our
                ‘Your Opinion Sucks’ live shows.</p>
              <p>If you’re an entertainment fan looking for a
                recommendation, or to share an opinion, you’ve come to the right place.</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="widget">
              <h3 className="widget-title">Help Center</h3>
              <ul className="no-bullet">
                <li>Our support community is always around to help</li>
                <li style={{ fontSize: 'large' }}>Need more help? Visit the <a href="">official CINEPHILE
                  support community</a> powered by Team7</li>
                <li>Issues logging into CINEPHILE? <a href="">Get login help.</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="widget">
              <h3 className="widget-title">Social Media</h3>
              <ul className="no-bullet">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Google+</a></li>
                <li><a href="#">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="widget">
              <h3 className="widget-title">Newsletter</h3>
              <form action="#" className="subscribe-form">
                <input type="text" placeholder="Email Address" />
              </form>
            </div>
          </div>
        </div>
        <div className="colophon">Copyright 2021 Cinephile Club, Designed by Team7. All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
