// import '../CssFiles/ResortSection.css'
// import '../CssFiles/Hero.css';
// import heroimg from '../Resourcs/Hero.jpg'; 

// const ResortSection = () => {

//     return(
//         <div className='Resort-Container'>

//             <div className='Heading-placer'>
//             <p className='Heading'>Our Resorts</p>
//             </div>

//             <div className='card-container'>
//                 <div className='ResortCard'>
//                     <div className="Card-img">
//                         <img src={heroimg} alt="Logo" style={{ width: '100%', height: '300px',borderRadius:'50px'}} /> {/* Ensure the logo is displayed */}
//                     </div>

//                     <div className="Card-content">
//                         <p className="Card-title">Shilhaandara</p>
//                         <p className="Card-location">📍 Ramanagara, Bangalore</p>
//                     </div>
//                 </div>
                
//                 <div className='ResortCard'>
//                     <div className="Card-img">
//                         <img src={heroimg} alt="Logo" style={{ width: '100%', height: '300px',borderRadius:'50px'}} /> {/* Ensure the logo is displayed */}
//                     </div>

//                     <div className="Card-content">
//                         <p className="Card-title">Shilhaandara</p>
//                         <p className="Card-location">📍 Ramanagara, Bangalore</p>
//                     </div>
//                 </div>
                
//                 <div className='ResortCard'>
//                     <div className="Card-img">
//                         <img src={heroimg} alt="Logo" style={{ width: '100%', height: '300px',borderRadius:'50px'}} /> {/* Ensure the logo is displayed */}
//                     </div>

//                     <div className="Card-content">
//                         <p className="Card-title">Shilhaandara</p>
//                         <p className="Card-location">📍 Ramanagara, Bangalore</p>
//                     </div>
//                 </div>
                
//                 <div className='ResortCard'>
//                     <div className="Card-img">
//                         <img src={heroimg} alt="Logo" style={{ width: '100%', height: '300px',borderRadius:'50px'}} /> {/* Ensure the logo is displayed */}
//                     </div>

//                     <div className="Card-content">
//                         <p className="Card-title">Shilhaandara</p>
//                         <p className="Card-location">📍 Ramanagara, Bangalore</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default ResortSection;
import React, { useEffect, useRef } from 'react';
import '../CssFiles/ResortSection.css';
import '../CssFiles/Hero.css';
import heroimg from '../Resourcs/Hero.jpg';

const ResortSection = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                if (scrollLeft + clientWidth >= scrollWidth) {
                    // Reset to the beginning if we've scrolled to the end
                    scrollRef.current.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    // Scroll by a certain amount
                    scrollRef.current.scrollBy({
                        left: 300, // Scroll by 300px (or whatever size fits your card)
                        behavior: 'smooth'
                    });
                }
            }
        }, 2000); // Every 2 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className='Resort-Container'>
            <div className='Heading-placer'>
                <p className='Heading'>Our Resorts</p>
            </div>

            <div className='card-container' ref={scrollRef}>
                <div className='ResortCard'>
                    <div className="Card-img">
                        <img src={heroimg} alt="Logo" style={{ width: '100%', height: '300px', borderRadius: '50px' }} />
                    </div>
                    <div className="Card-content">
                        <p className="Card-title">Shilhaandara</p>
                        <p className="Card-location">📍 Ramanagara, Bangalore</p>
                    </div>
                </div>

                <div className='ResortCard2'>
                    <div className="Card-img">
                        <img src={heroimg} alt="Logo" style={{ width: '100%', height: '300px', borderRadius: '50px' }} />
                    </div>
                    <div className="Card-content">
                        <p className="Card-title">Guhantara</p>
                        <p className="Card-location">📍 Kankpura, Bangalore</p>
                    </div>
                </div>

                <div className='ResortCard3'>
                    <div className="Card-img">
                        <img src={heroimg} alt="Logo" style={{ width: '100%', height: '300px', borderRadius: '50px' }} />
                    </div>
                    <div className="Card-content">
                        <p className="Card-title">Siri Nature Roost</p>
                        <p className="Card-location">📍 Chikmagaluru, Bangalore</p>
                    </div>
                </div>

                <div className='ResortCard4'>
                    <div className="Card-img">
                        <img src={heroimg} alt="Logo" style={{ width: '100%', height: '300px', borderRadius: '50px' }} />
                    </div>
                    <div className="Card-content">
                        <p className="Card-title">Shilhaandara</p>
                        <p className="Card-location">📍 Ramanagara, Bangalore</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResortSection;
