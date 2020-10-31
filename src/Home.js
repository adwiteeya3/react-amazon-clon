import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />
            
                <div className='home__row'>
                    <Product 
                        id="456780"
                        title="Lord of the Rings" 
                        price={200} 
                        image="https://kbimages1-a.akamaihd.net/1a3242ad-3242-42e2-b5eb-41021cf47c58/1200/1200/False/the-fellowship-of-the-ring-the-lord-of-the-rings-book-1-1.jpg" 
                        rating={3}
                    />
                        
                    <Product 
                        id="456781"
                        title="Amazon Echo Dot 3rd Gen Smart Speaker | Black" 
                        price={3000} 
                        image="https://i.gadgets360cdn.com/products/smart-home/large/1551964773_832_amazon_echo-dot-3rd-gen-smart-speaker.jpg" 
                        rating={4}
                    />

                </div>

                <div className='home__row'>
                    <Product 
                        id="456782"
                        title="Echo (2nd Generation) International Version – Charcoal Fabric" 
                        price={7000} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51TFnR7AtGL._AC_SY400_.jpg" 
                        rating={5}
                    />
                     <Product 
                        id="456783"
                        title="Mi Smart Band 5-1.1” AMOLED Color Display, 2 Weeks Battery Life, 5ATM Water Resistant" 
                        price={2,498.00} 
                        image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg" 
                        rating={3}
                    />
                    <Product 
                        id="456784"
                        title="Dell Vostro 3401 14inch FHD AG Display Laptop (10th gen i3-1005G1 / 4GB / 1TB / Integrated Graphics / 1 yr NBD Warranty/ Win 10 + MS Office H&S 2019 / Black) D552124WIN9BE" 
                        price={35,390.00} 
                        image="https://images-na.ssl-images-amazon.com/images/I/8147cwFm2PL._SL1500_.jpg" 
                        rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product 
                        id="456785"
                        title="OnePlus 7T Glacier Blue (8GB RAM+256GB Storage)" 
                        price={37,999.00} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71jLdBBQRNL._SL1500_.jpg" 
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home
