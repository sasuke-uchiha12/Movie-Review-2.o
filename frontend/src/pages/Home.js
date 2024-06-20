import React from 'react';

function Home() {
  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div className="row">
            <div className="col-md-9">
              <div className="slider">
                <ul className="slides">
                  <li><a href="#"><img src="image/your_name.png" alt="Slide 1" /></a></li>
                  <li><a href="#"><img src="image/inception.jpg" alt="Slide 2" /></a></li>
                  <li><a href="#"><img src="image/varisu.jpg" alt="Slide 3" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-sm-6 col-md-12">
                  <div className="latest-movie">
                    <a href="#"><img src="image/thumb-1.jpg" alt="Movie 1" /></a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12">
                  <div className="latest-movie">
                    <a href="#"><img src="image/thumb-2.jpg" alt="Movie 2" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* .row */}
          {/* Continue with the rest of your content */}
        </div>
      </div>
    </main>
  );
}

export default Home;
