
// export const TopNavBar = () => {
//     return (
//         <div className="top_nav">

//         </div>
//     )
// }


import React, { useEffect, useState } from 'react';

export const TopNavBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const shouldHide = currentScrollPos > 0; // Ocultar el div cuando se haya desplazado

        setIsVisible(!shouldHide);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`top_nav ${isVisible ? '' : 'hidden'}`}>
            <div className='top_nav_left'>
                Bienvenido a la Inauguracion de la tienda Virtual
            </div>
        </div>
    );
};