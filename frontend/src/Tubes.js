import React from 'react';
import Navbar from './Navbar';
import WhatsApp from './WhatsApp';
import PdtBanner from './PdtBanner';
import Contact from './Contact';
import Footer from './Footer';
import './Navbar.css';
import './ProductsPage.css';


function Tubes() {
  return (
    <div>
      
        <Navbar/>
        <WhatsApp/>
      
        <div className="jumbotron jumbotron-fluid header" style={{height:'37vh'}}>

            <div class="menu-wrap">
                <input type="checkbox" class="toggler"/>
                <div class="hamburger"><div></div></div>
                <div class="menu">
                <div>
                    <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/brands">Brands</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            
            <h1>OUR PRODUCTS</h1>

        </div>

        <PdtBanner/>

        <div class="container py-5">

            <ul class="nav nav-pills nav-fill mb-4" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-tyres-tab" data-toggle="pill" href="#pills-tyres" role="tab" aria-controls="pills-tyres" aria-selected="true">Tyres</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-batteries-tab" data-toggle="pill" href="#pills-batteries" role="tab" aria-controls="pills-batteries" aria-selected="false">Batteries</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="pills-lubricants-tab" data-toggle="pill" href="#pills-lubricants" role="tab" aria-controls="pills-lubricants" aria-selected="false">Lubricants</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="pills-tubes-tab" data-toggle="pill" href="#pills-tubes" role="tab" aria-controls="pills-tubes" aria-selected="false">Tubes</a>
                </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
                
                <div class="tab-pane fade" id="pills-tyres" role="tabpanel" aria-labelledby="pills-tyres-tab">
                    <div className="row text-center text-lg-left"> 
                    <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t1.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t2.jpg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t3.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t4.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t5.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t6.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t7.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t8.jpg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t9.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t10.jpg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t11.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t12.jpg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t13.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t14.jpg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t15.jpg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t16.jpg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t17.jpg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t18.jpg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t19.jpg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t20.jpg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-tyre" src = {require('./img/tyres/t21.jpg')}/>        
                        </div>
                    </div> 
                </div>

                <div class="tab-pane fade" id="pills-batteries" role="tabpanel" aria-labelledby="pills-batteries-tab">
                    <div className="row text-center text-lg-left">
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat1.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat2.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat3.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat4.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat5.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat6.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat7.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat8.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat9.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat10.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat11.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat12.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat13.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat14.jpeg')}/>        
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <img className="img-fluid" src = {require('./img/batteries/bat15.jpeg')}/>        
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade" id="pills-lubricants" role="tabpanel" aria-labelledby="pills-lubricants-tab">
                    <div className="row text-center text-lg-left">
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-fluid" src = {require('./img/lubricants/lub1.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-fluid" src = {require('./img/lubricants/lub2.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-fluid" src = {require('./img/lubricants/lub3.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-fluid" src = {require('./img/lubricants/lub4.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-fluid" src = {require('./img/lubricants/lub5.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-fluid" src = {require('./img/lubricants/lub6.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-fluid" src = {require('./img/lubricants/lub7.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-fluid" src = {require('./img/lubricants/lub8.jpeg')}/>        
                        </div><div className="col-lg-2 col-md-3 col-4">
                            <img className="img-fluid" src = {require('./img/lubricants/lub9.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-fluid" src = {require('./img/lubricants/lub10.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-fluid" src = {require('./img/lubricants/lub11.jpeg')}/>        
                        </div>
                        <div className="col-lg-2 col-md-3 col-4">
                            <img className="img-fluid" src = {require('./img/lubricants/vehicle-polish.jpg')}/>        
                        </div>
                    </div>
                </div>

                <div class="tab-pane fade show active" id="pills-tubes" role="tabpanel" aria-labelledby="pills-tubes-tab">
                    <div className="row text-center text-lg-left">
                        <div className="col-lg-4 col-md-6 col-12">
                            <img className="img-fluid" src = {require('./img/tubes/dongah.jpeg')}/>        
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <img className="img-fluid" src = {require('./img/tubes/nexen.jpeg')}/>        
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <img className="img-fluid" src = {require('./img/tubes/arl.jpeg')}/>        
                        </div>
                    </div>
                </div>

            </div>

        </div>
        
        <Contact/>
        <Footer/>

    </div>
  );
}

export default Tubes;
