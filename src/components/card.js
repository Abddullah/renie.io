import React, { useState, useEffect, useRef } from 'react';
import '../css/card.css';
import c1 from '../assets/app-banner-1.png';
import pin from '../assets/pin.png';

const Card = ({ products }) => {
    const [stickyOffsets, setStickyOffsets] = useState([]);
    const [scrollDirection, setScrollDirection] = useState('down');
    const [prevScrollY, setPrevScrollY] = useState(0);
    const cardRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
            setScrollDirection(currentScrollY > prevScrollY ? 'down' : 'up');
            setPrevScrollY(currentScrollY);
            const newStickyOffsets = products.map((_, index) => {
                const cardRect = cardRefs.current[index]?.getBoundingClientRect();
                return cardRect ? cardRect.top + currentScrollY : 0;
            });
            setStickyOffsets(newStickyOffsets);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [products, prevScrollY]);

    const isSticky = (index) => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const offset = stickyOffsets[index];
        if (scrollDirection === 'down') {
            return scrollY > offset;
        } else {
            return scrollY >= offset;
        }
    };

    return (
        <>
            <div className="cardsContainer">
                {products.map((product, index) => (
                    <div key={index} ref={(ref) => (cardRefs.current[index] = ref)}>
                        {index % 5 === 0 && (
                            <div className={`header ${isSticky(index) ? 'sticky' : ''}`} id={`myHeader${index}`}>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                    <div className="box">
                                        <div style={{ width: '100%' }}>
                                            <div className='letsStart text'>
                                                LET'S START! {' INDEX ' + index}
                                            </div>
                                            <div className='text'>
                                                REGISTER AND LOCATE<br /> YOUR NEAREST<br /> RENIE BIN!
                                            </div>
                                        </div>
                                        <img src={pin} alt="Placeholder Image" />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="card">
                                <div className="card-content">
                                    <h2>{product.title}</h2>
                                    <p>{product.desc}</p>
                                </div>
                                <img src={c1} alt="Placeholder Image" className='responsive-imgBanner' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Card;











