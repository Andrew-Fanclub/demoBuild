import React from 'react';
import Carousel from 't-a-e-3d-carousel-reactjs';
import './public/main.css';
import Navigation from './components/navbar';
import Footer from './components/footer';

//take images from cloudinary
const slides = [
    {
        url: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645410280/AFC/Octopus_ymdhjt.png'
    },
    {
        url: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645410685/AFC/Bread_uoen7x.png'
    },
    {
        url: 'https://res.cloudinary.com/dzkzpomzf/image/upload/v1645410684/AFC/Squid_ixn7ez.png'
    }
];

function Main() {
    return (
        <div className='bg'>
            <nav>
                <Navigation />
            </nav>
            <div className="headerContent mb-5">
                <h1 className='title'>Find the <span className="midWord">perfect</span> plushie</h1>
                <h1 className='titleBottomText'>for you and others!</h1>
                <Carousel imageList={slides} autoplay={true} interval={5000} showArrows={false} className='center' />
            </div>
            <div className='searchContent'>
                <form>
                    <input type="text" placeholder='Panda Plushie' />
                    <button className="searchBarBtn"></button>
                </form>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Main;