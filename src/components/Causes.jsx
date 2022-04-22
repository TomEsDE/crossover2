import React from "react";
import "./style/causes.scss";

export default function Causes() {
  return (
    <>
    <section id = "causes" className="causes-section">
    <div className="heading">
      <h1>What causes Air Pollution?</h1>
    </div>
    <div className="container">
    <div className="cards">
      <div className="card-item">
        <div className="card-image">
           <img
                src="https://images.livemint.com/img/2021/09/09/689x388/iStock-518628602_1631198203402_1631198235698.jpg"
                alt="fossil fuels"
              />
        </div>
        <div className="card-info">
          <h2 className="card-title">Fossil Fuels</h2>
              <p className="card-intro">
                The biggest contributors of air pollution are from industry
                sources and power plants to generate power, as well as fossil fuel
                motor vehicles.
              </p>
        </div>
      </div>
    </div>
    <div className="cards">
      <div className="card-item">
        <div className="card-image">
          <img
                src="https://www.thoughtco.com/thmb/dTXDjXH1pgn4UaV8Xo9lJcLFf4g=/1271x1271/smart/filters:no_upscale()/GettyImages-608873707-f359835d93ea4f0b95a50cbeeb839c05.jpg"
                alt="volcano"
              />
        </div>
        <div className="card-info">
          <h2 className="card-title">Volcanos</h2>
              <p className="card-intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet laoreet ex vel auctor. Nunc at malesuada quam. 
              </p>
        </div>
      </div>
    </div>
    <div className="cards">
      <div className="card-item">
        <div className="card-image">
          <img
                src="https://i.guim.co.uk/img/media/dc41bd464f73f4087f072113cd7674644fa9633c/0_234_3500_2100/master/3500.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=050471b5fec5df058111cafc28646019"
                alt="wildfires"
              />
        </div>
        <div className="card-info">
          <h2 className="card-title">Wildfires</h2>
              <p className="card-intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet laoreet ex vel auctor. Nunc at malesuada quam. 
              </p>
        </div>
      </div>
    </div>
    <div className="cards">
      <div className="card-item">
        <div className="card-image">
          <img
                src="https://www2.iqair.com/sites/default/files/blog/2018-12/180515_mold_danger_m_re.jpg"
                alt="mold"
              />
        </div>
        <div className="card-info">
          <h2 className="card-title">Mold</h2>
              <p className="card-intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet laoreet ex vel auctor. Nunc at malesuada quam. 
              </p>
        </div>
      </div>
    </div>
    <div className="cards">
      <div className="card-item">
         <div className="card-image">
          <img
                src="http://inapcache.boston.com/universal/site_graphics/blogs/bigpicture/ausdust_09_23/d15_20460059.jpg"
                alt="dust storms"
              />
        </div>
        <div className="card-info">
          <h2 className="card-title">Dust storms</h2>
              <p className="card-intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet laoreet ex vel auctor. Nunc at malesuada quam. 
              </p>
        </div>
      </div>
    </div>
    <div className="cards">
      <div className="card-item">
         <div className="card-image">
          <img
                src="https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2021/10/rsz_china-gc61740173_1280.jpg"
                alt="smog"
              />
        </div>
        <div className="card-info">
          <h2 className="card-title">Smoke and fog</h2>
              <p className="card-intro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet laoreet ex vel auctor. Nunc at malesuada quam. 
              </p>
        </div>
      </div>
    </div>
  </div>
  </section>
  </>
  );
}
