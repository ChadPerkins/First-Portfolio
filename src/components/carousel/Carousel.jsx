import { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import { MdPageview } from "react-icons/md";

import { projects } from './CarouselData'
import './Carousel.css';

function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0);
    
    return (
        <>
        <div className="carousel-container">
            <div className="carousel-slide">
                <div className="nav-link">
                            <BsFillArrowLeftCircleFill
                                className='project-svg'
                                onClick={() => {
                                    if(activeSlide > 0) {
                                        setActiveSlide(activeSlide - 1)
                                    } else {
                                        setActiveSlide(projects.length - 1)
                                    }
                                }}
                            />
                </div>
                <div className="carousel-card">
                    <h1>{projects[activeSlide].title}</h1>
                    <img src={projects[activeSlide].img} alt="project" />
                    <p>{projects[activeSlide].description}</p>
                    <div className='project-links'>
                        <a className='nav-link' href={projects[activeSlide].github}>
                            <AiFillCode className='project-svg'/>
                        </a>
                        <a className='nav-link' href={projects[activeSlide].url}>
                            <MdPageview className='project-svg'/>
                        </a>
                    </div>
                </div>
                <div className="nav-link">
                    <BsFillArrowRightCircleFill
                        className='project-svg'
                        onClick={() => {
                            if(activeSlide > 0) {
                                setActiveSlide(activeSlide - 1)
                            } else {
                                setActiveSlide(projects.length - 1)
                            }
                        }}
                    />
                </div>
            </div>
        </div>
      </>
  )
}

export default Carousel