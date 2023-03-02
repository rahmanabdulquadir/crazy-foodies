import React from "react";
import img1 from '../../images/dolores-preciado-Vu_fjfasu-4-unsplash.jpg'
import img2 from '../../images/farhad-ibrahimzade-KpOl9jV2aJM-unsplash.jpg'
import img3 from '../../images/louis-hansel-mVZ_gjm_TOk-unsplash.jpg'
import img4 from '../../images/louis-hansel-VhqBh21uz0k-unsplash.jpg'
import img5 from '../../images/may-lawrence-IBQturWlSgU-unsplash.jpg'
import img6 from '../../images/ty-finck-U_2AlnfIGIU-unsplash.jpg'
import img7 from '../../images/farhad-ibrahimzade-KpOl9jV2aJM-unsplash.jpg'

const Header = () => {
  return (
    <div className="carousel carousel-center rounded-box mt-6">
      <div className="carousel-item">
        <img
          className="w-fit h-screen"
          src={img1}
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          className="w-fit h-screen"
          src={img2}
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          className="w-fit h-screen"
          src={img3}
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          className="w-fit h-screen"
          src={img4}
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          className="w-fit h-screen"
          src={img5}
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
          className="w-fit h-screen"
          src={img6}
          alt="Pizza"
        />
      </div>
      <div className="carousel-item">
        <img
         className="w-fit h-screen"
         src={img7}
         alt="Pizza"
        />
      </div>
    </div>
  );
};

export default Header;
