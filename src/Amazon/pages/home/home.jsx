import React from 'react';
import './home.css'
import { products, headerItems } from '../../utils/ProductsData'
import Banner1 from '../../BannerImages/Banner1.jpg'
import Banner2 from '../../BannerImages/Banner2.jpg'
import Banner3 from '../../BannerImages/Banner3.jpg'
import Banner4 from '../../BannerImages/Banner4.jpg'
import Banner5 from '../../BannerImages/Banner5.jpg'
import Banner6 from '../../BannerImages/Banner6.jpg'
import Slider from '../../components/slider/slider';
import Product from '../../components/product/product'
import BacktoTop from '../../components/backtoTop/backtoTop';
const home = () => {
    const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6]
    return <div>
        <div className='item-container'>
            {headerItems && headerItems.map((item, key) => <p>{item}</p>)}
        </div>

        <div className="home">

            <div className='home-container'>
                <Slider images={bannerImages} />

                <div className='home-row'>
                    {products.slice(0, 2).map((item, index) =>
                        <Product
                            key={item.id}
                            price={item.price}
                            img={item.image}
                            title={item.title}
                            id={item.id}
                            rating={item.rating}
                            specefication={item.specefication}
                            detail={item.detail}

                        />
                    )}

                </div>
                <div className='home-row'>
                    {products.slice(2, 5).map((item, index) =>
                        <Product
                            key={item.id}
                            price={item.price}
                            img={item.image}
                            title={item.title}
                            id={item.id}
                            rating={item.rating}
                            specefication={item.specefication}
                            detail={item.detail}

                        />
                    )}

                </div>
                <div className='home-row'>
                    {products.slice(5, 6).map((item, index) =>
                        <Product
                            key={item.id}
                            price={item.price}
                            img={item.image}
                            title={item.title}
                            id={item.id}
                            rating={item.rating}
                            specefication={item.specefication}
                            detail={item.detail}

                        />
                    )}

                </div>
            </div>

        </div>
        <div style={{ marginTop: "120px" }} >
            <BacktoTop />
        </div>

    </div>

};

export default home;
