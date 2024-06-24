import React from "react";
import "./GalleryImages.css";
export const GalleryImages = () => {
  return (
    <div className="gallery_background_container">
      <div className="Gallery_main_container">
        <div className="gallery_firstimg_block">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://themewagon.github.io/gymlife/img/gallery/gallery-1.jpg"
            alt=""
          />
        </div>
        <div className="gallery_secondimg_block">
          <div className="gallery_secondimg_block1">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://themewagon.github.io/gymlife/img/gallery/gallery-2.jpg"
              alt=""
            />
          </div>
          <div className="gallery_secondimg_block1">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://themewagon.github.io/gymlife/img/gallery/gallery-3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="Gallery_main_container1">
        <div className="gallery_firstimg_block">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://themewagon.github.io/gymlife/img/gallery/gallery-6.jpg"
            alt=""
          />
        </div>
        <div className="gallery_secondimg_block">
          <div className="gallery_secondimg_block1">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://themewagon.github.io/gymlife/img/gallery/gallery-4.jpg"
              alt=""
            />
          </div>
          <div className="gallery_secondimg_block1">
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://themewagon.github.io/gymlife/img/gallery/gallery-5.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
