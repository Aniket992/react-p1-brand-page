import React from "react";

const Content = () => {
  return (
    <div className="main">
      <div className="textmaterial">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO
             HELP YOU WITH OUR SHOES.YOUR FEET DESERVE 
             THE BEST AND WE’RE HERE TO HELP YOU WITH OUR 
             SHOES.</p>
             <div className="buttons">
             <button>Shop Now</button>

             <button id="category">Category</button>
             </div>
             <p id="availability">Also available on</p>
             <div className="brandimages">
             <img src="/flipkart.png" alt="" />
             <img src="/amazon.png" alt="" />
            </div>
      </div>
      <div className="imagesection">
        <img src="/shoe_image.png" alt="" />
      </div>
    </div>
  );
};

export default Content;
