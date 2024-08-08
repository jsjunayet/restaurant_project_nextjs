'use client'

import { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    function smoothScroll() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            console.log("scrollTop",scrollTop)
            const windowHeight = window.innerHeight;
            console.log("windowHeight",windowHeight)
            setIsVisible(scrollTop > windowHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <p  onClick={smoothScroll}
                className="rounded-full bg-red-900 fixed right-5 md:right-28 bottom-20 md:bottom-6 z-20 text-primary cursor-pointer">^</p>
            )}
        </>
    );
};

export default ScrollToTop;