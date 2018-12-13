import React from 'react';
import Logo from '../assets/logo.png';

const HomeSection = () => {
    return (
        <div className='section burger-bg'>
            <section className='container'>
                <div class="navbar-menu">
                    <div class="navbar-start">
                        <a class='navbar-item' href='https://bulma.io'>                    
                            <img src={Logo} className='logo' alt='Burger Bros Logo' />
                        </a>  
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">              
                            <div className='hamburger'>
                                <span className='bar bar-margin-bottom'></span>
                                <span className='bar bar-margin-bottom'></span>
                                <span className='bar'></span>
                                <span className='hamburger-text has-text-white'>menu</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='columns'>
                    <div className='column is-three-quarters'>
                        <div className='titles'>
                            <h5 className='home-title-small has-text-white'>Are you hungry?</h5>
                            <h1 className='home-title'>DON’T WAIT!</h1>
                            <h5 className='home-title-small has-text-white'>order your food now</h5>
                        </div>
                        <a href='https://bulma.io' className='has-text-white order-now-button'>
                            ORDER NOW
                        </a>
                        <div className='icons'>
                            <div className='social-circle facebook'></div>
                            <div className='social-circle whatsapp'></div>
                            <div className='social-circle twitter'></div>
                            <div className='social-circle instagram'></div>
                            <p className='phone-number has-text-white'>P. 78 302  2134</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default HomeSection;
