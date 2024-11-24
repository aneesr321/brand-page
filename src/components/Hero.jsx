const HeroSection = () => {
    return (
        <main className="header container">
            <div className="header-content">
               <h1>YOUR FEET DERSERVE THE BEST</h1>
               <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
               </p>
             <div className="btn">
                <button>Shop Now</button>
                <button className="second-btn">Category </button>
             </div>
               <div className="shop">
                 <p>Also Available on</p>
                   <div className="brand-icon">
                     <img src="./images/flipkart.png" alt="flipkart-logo" />
                     <img src="./images/amazon.png" alt="amazon-logo" />
                   </div>
              
               </div>

            </div>
          <div className="header-img">
            <img src="./images/shoe.png" alt="header-logo" />
          </div>
        </main>

    );
};
export default HeroSection