// import React from 'react';
// import slide1 from '../img1/your_name.png'
// import slide2 from '../img1/inception.jpg'

// function Home() {
//   return (
//     <main className="main-content">
//       <div className="container">
//         <div className="page">
//           <div className="row">
//             <div className="col-md-9">
//               <div className="slider">
//                 <ul className="slides">
//                   <li><a href="#"><img src={slide1} alt="Slide 1" /></a></li>
//                   <li><a href="#"><img src={slide2} alt="Slide 2" /></a></li>
//                   <li><a href="#"><img src="image/varisu.jpg" alt="Slide 3" /></a></li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="row">
//                 <div className="col-sm-6 col-md-12">
//                   <div className="latest-movie">
//                     <a href="#"><img src="image/thumb-1.jpg" alt="Movie 1" /></a>
//                   </div>
//                 </div>
//                 <div className="col-sm-6 col-md-12">
//                   <div className="latest-movie">
//                     <a href="#"><img src="image/thumb-2.jpg" alt="Movie 2" /></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> {/* .row */}
//           {/* Continue with the rest of your content */}
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Home;

import React, { useEffect } from 'react';
import slide1 from '../img1/your_name.png';
import slide2 from '../img1/inception.jpg';
import slide3 from '../img1/varisu.jpg'
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
                  <li><a href="#"><img src={slide1} alt="Slide 1" /></a></li>
                  <li><a href="#"><img src={slide2} alt="Slide 2" /></a></li>
                  <li><a href="#"><img src={slide3} alt="Slide 3" /></a></li>
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
