import React, { useEffect, useState } from 'react';
import './backtoTop.css'
const BacktoTop = () => {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 900) {
            setVisibility(true)
        } else {
            setVisibility(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])
    return (

        <div className='scroll-to-top'>
            {visibility && (
                <div onClick={scrollToTop} className='back-top-container'>
                    Back To Top
                </div>
            )}

        </div>
    )
};

export default BacktoTop;
