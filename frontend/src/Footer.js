import React from 'react';

const Footer = () => {
    
    return (
        
        <footer style={{
            backgroundColor:'#232323',
            height:'15vh', 
        }}>

            <center>
                <a href='#'>
                    <i class="fas fa-angle-double-up fa-2x up"></i>
                </a>
            </center>

            <p style={{
                color:'#777',
                textAlign:'center',
                padding:'1vh'
            }}>

            Copyright &copy; 2020. All Rights reserved by Black Bull Tyres & Rims Trading.<br/> Developed by AlgoG

            </p>

        </footer>
        
    )
}

export default Footer;