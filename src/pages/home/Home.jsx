import { Link } from 'react-router-dom'


import myPic from '../../imgs/chadperkins.jpg'
import './Home.css'


function Home() {
    return (
    <>
        <section className='home-section'>
            <div className='name-and-pic'>
                <h1>&#60;CHAD PERKINS&#47;&#62;</h1>
                <img src={myPic} alt="Me" />
            </div>
            <div className="about-me">
                <p>
                    I am a self taught software developer who strives to create modern responsive websites. I am currently located in Ashland, VA.
                </p>
                <Link to='/contact'>
                    <button className='contact-link'>Get In Touch</button>
                </Link>
            </div>
        </section>
    </> 
  )
}
 
export default Home