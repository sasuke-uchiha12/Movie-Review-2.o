import React from 'react';

function About() {
  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span>About us</span>
          </div>
          <div className="row">
            <div className="col-md-4">
              <figure><img src="image/bg1.jpg" alt="figure image" /></figure>
            </div>
            <div className="col-md-8">
              <p className="leading">SEATTLE--(BUSINESS WIRE)--CINEphile (www.cinephile.com), the #1 movie
                website in the world, turns 25 on December 12, 2022. To celebrate this milestone event, today
                CINEphile announced the top 25 stars of all time as determined by actual page views of the more
                than 250 million monthly unique visitors to CINEphile. Additionally, CINEphile launched
                two highly anticipated TV charts, the CINEphile Top Rated TV Shows chart at <a
                  href="index.html">cinephile.com</a>
                and the CINEphile Most Popular TV Shows chart <a
                  href="review.html">Cinephile/review</a>. Both of Cinephile's
                new TV charts are available on cinephile.com and cinephile’s mobile optimized website, and will be
                available soon on IMDb’s “Movies & TV” app for iOS and Android</p>
            </div>
          </div>
          {/* Continue with the rest of your content */}
        </div>
      </div>
    </main>
  );
}

export default About;
