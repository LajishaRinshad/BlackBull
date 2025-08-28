import React from 'react';
import './PdtBanner.css';

const PdtBanner = () => {
    return (
        
        <div className="marquee-pdt" 
            style={{backgroundColor:'transparent', marginTop: '5rem'}}>
            <ul className="marquee-content">
                <li><img className='pdt-banner' src = {require('./img/tyres/t1.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t4.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/batteries/bat1.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t7.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/lubricants/lub1.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t5.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tubes/dongah.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t2.jpg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/batteries/bat4.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/lubricants/lub8.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t3.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t6.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/batteries/bat5.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t11.jpeg')}/></li>   
                <li><img className='pdt-banner' src = {require('./img/batteries/bat12.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/lubricants/lub2.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t6.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tubes/nexen.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t8.jpg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/batteries/bat8.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/lubricants/lub4.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t13.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t9.jpeg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/lubricants/vehicle-polish.jpg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t19.jpg')}/></li>
                <li><img className='pdt-banner' src = {require('./img/tyres/t15.jpg')}/></li>
                <li></li>
            </ul>
        </div>
        
    )
}

export default PdtBanner;