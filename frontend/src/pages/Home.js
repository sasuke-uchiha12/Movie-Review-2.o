import React, { useEffect } from 'react';
import slide1 from '../img1/your_name.png';
import slide2 from '../img1/inception.jpg';
import slide3 from '../img1/varisu.jpg'
import pusha from '../img1/thumb-1.jpg'
import master from '../img1/thumb-2.jpg'
import thumb3 from '../img1/thumb-3.jpg'
import thumb4 from '../img1/thumb-4.jpg'
import thumb5 from '../img1/thumb-5.jpg'
import thumb6 from '../img1/thumb-6.jpg'


function Home() {
  useEffect(() => {
    // Ensure the jQuery code runs after the component mounts
    window.$(document).ready(function () {
      window.$(".slider").flexslider({
        controlNav: false,
        prevText: '<i className="fa fa-chevron-left"></i>',
        nextText: '<i className="fa fa-chevron-right"></i>',
      });
    });
  }, []);

  return (
    <main className="main-content">
      <div className="container">
        <div className="page">
          <div className="row">
            <div className="col-md-9">
              <div className="slider">
                <ul className="slides">
                  <li><a href=""><img src={slide1} alt="Slide 1" /></a></li>
                  <li><a href=""><img src={slide2} alt="Slide 2" /></a></li>
                  <li><a href=""><img src={slide3} alt="Slide 3" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-sm-6 col-md-12">
                  <div className="latest-movie">
                    <a href=""><img src={pusha} alt="Movie 1" /></a>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12">
                  <div className="latest-movie">
                    <a href=""><img src={master} alt="Movie 2" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div class="row">
						<div class="col-sm-6 col-md-3">
							<div class="latest-movie">
								<a href="#"><img src={thumb3} alt="Movie 3"/></a>
							</div>
						</div>
						<div class="col-sm-6 col-md-3">
							<div class="latest-movie">
								<a href="#"><img src={thumb4}  alt="Movie 4"/></a>
							</div>
						</div>
						<div class="col-sm-6 col-md-3">
							<div class="latest-movie">
								<a href="#"><img src={thumb5}  alt="Movie 5"/></a>
							</div>
						</div>
						<div class="col-sm-6 col-md-3">
							<div class="latest-movie">
								<a href="#"><img src={thumb6}  alt="Movie 6"/></a>
							</div>
						</div>
					</div> 
          <div class="row">
						<div class="col-md-4">
							<h2 class="section-title">February premiere</h2>
							<p>Best Movies and Series Coming Out On February 2023...</p>
							<ul class="movie-schedule">
								<li>
									<div class="date">10/Friday</div>
									<h2 class="entry-title"><a href="#">Titanic - 25 Year Anniversary</a></h2>
								</li>
								<li>
									<div class="date">17/Friday</div>
									<h2 class="entry-title"><a href="#">Ant-Man and the Wasp: Quantumania</a></h2>
								</li>
								<li>
									<div class="date">24/Friday</div>
									<h2 class="entry-title"><a href="#">Jesus Revolution</a></h2>
								</li>
								<li>
									<div class="date">28/Tuesday</div>
									<h2 class="entry-title"><a href="#">The Man in the Basement</a></h2>
								</li>
							</ul> 
						</div>
						<div class="col-md-4">
							<h2 class="section-title">March premiere</h2>
							<p>Best Movies and Series Coming Out On March 2023...</p>
							<ul class="movie-schedule">
								<li>
									<div class="date">03/Friday</div>
									<h2 class="entry-title"><a href="#">Creed III</a></h2>
								</li>
								<li>
									<div class="date">17/Friday</div>
									<h2 class="entry-title"><a href="#">Inside</a></h2>
								</li>
								<li>
									<div class="date">17/Friday</div>
									<h2 class="entry-title"><a href="#">Shazam! Fury of the Gods</a></h2>
								</li>
								<li>
									<div class="date">24/Friday</div>
									<h2 class="entry-title"><a href="#">John Wick: Chapter 4</a></h2>
								</li>
							</ul> 
						</div>
						<div class="col-md-4">
							<h2 class="section-title">April premiere</h2>
							<p>Best Movies and Series Coming Out On April 2023...</p>
							<ul class="movie-schedule">
								<li>
									<div class="date">07/Friday</div>
									<h2 class="entry-title"><a href="#">The Super Mario Bros. Movie</a></h2>
								</li>
								<li>
									<div class="date">14/Friday</div>
									<h2 class="entry-title"><a href="#">Suzume</a></h2>
								</li>
								<li>
									<div class="date">28/Friday</div>
									<h2 class="entry-title"><a href="#">Big George Foreman</a></h2>
								</li>
								<li>
									<div class="date">30/Sunday</div>
									<h2 class="entry-title"><a href="#">The Ark and the Aardvark</a></h2>
								</li>
							</ul>
						</div>
					</div>
        </div>
      </div>
    </main>
  );
}

export default Home;
