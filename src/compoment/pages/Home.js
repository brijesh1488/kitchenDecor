import React, { Fragment } from "react";
import Slider1 from "../../images/sider1.png"
import day45 from "../../images/45.svg"

import Modal from "./modal"


function Home() {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
   
    return (
      <Fragment>
      <section>

<div id="carouselExampleDark" class="carousel carousel-dark slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleDark" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleDark" data-slide-to="1"></li>
    <li data-target="#carouselExampleDark" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="10000">
      <img src={Slider1} class="d-block w-100" alt="..."/>
      <div className='row'>
      <div className="col-10 mx-auto home-banner-content">
              <div className="col-md-6 pt-5 pt-lg-0 carousel-caption2 d-none d-md-block order-2 order-lg-1">
     
        <h1 className="title-slider" >Make a Good Kitchen<br/> <strong> Part of the Family </strong></h1>
        <p>A professional team of Interior Designers with <br/>specialization in Kitchen Designing </p>
        <div class="clearfix"></div>
       <Modal />
      </div>
      
      </div>
      </div>
      
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src={Slider1} class="d-block w-100" alt="..."/>
      <div className='row'>
      <div className="col-10 mx-auto home-banner-content">
              <div className="col-md-6 pt-5 pt-lg-0 carousel-caption2 d-none d-md-block order-2 order-lg-1">
     
        <h1 className="title-slider" >Make a Good Kitchen<br/> <strong> Part of the Family </strong></h1>
        <p>A professional team of Interior Designers with <br/>specialization in Kitchen Designing </p>
        <div class="clearfix"></div>
        <div class="clearfix"></div>
        <Modal />
      </div>
      
      </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Slider1} class="d-block w-100" alt="..."/>
      <div className='row'>
      <div className="col-10 mx-auto home-banner-content">
              <div className="col-md-6 pt-5 pt-lg-0 carousel-caption2 d-none d-md-block order-2 order-lg-1">
     
        <h1 className="title-slider" >Make a Good Kitchen<br/> <strong> Part of the Family </strong></h1>
        <p>A professional team of Interior Designers with <br/>specialization in Kitchen Designing </p>
        
        <div class="clearfix"></div>
        <Modal />
        
      </div>
      
      </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleDark" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleDark" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
      
      </section>
      <section>
<div className="container-fluid nav_bg  ">
          <div className='row'>
          
              <div className="col-10 mx-auto IKD2">
              <h3 >Why Indirapuram <span className="kitchen">Kitchen Decor?</span></h3>
              <p className="">A professional team of Interior Designers with <br/>specialization in Kitchen Designing </p>
              <div className="iconDecor">
              <div className="col-md-3 pt-5 pt-lg-0 order-1 order-lg-1 ">
              <img src={day45} class="d-block w-100" alt="..."/>
              <h3 >45 days or we pay you rent</h3>
              
              </div>
              <div className="col-md-3 pt-5 pt-lg-0 order-2 order-lg-1">
              <img src={day45} class="d-block w-100" alt="..."/>
                <h1>
                  {/* Grow your business with <strong> Kitchen Decor</strong> */}
                </h1>
              
              </div>
              <div className="col-md-3 pt-5 pt-lg-0 order-2 order-lg-1">
              <img src={day45} class="d-block w-100" alt="..."/>
                <h1>
                  {/* Grow your business with <strong> Kitchen Decor</strong> */}
                </h1>
              
              </div>
              <div className="col-md-3 pt-5 pt-lg-0 order-2 order-lg-1">
              <img src={day45} class="d-block w-100" alt="..."/>
                <h1>
                  {/* Grow your business with <strong> Kitchen Decor</strong> */}
                </h1>
              
              </div>
              </div>
              </div>

          </div>

      </div>
      </section>
      </Fragment>
    );
  }

  export default Home;