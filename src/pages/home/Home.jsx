import { Link } from 'react-router-dom'


import myPic from '../../imgs/chadperkins.jpg'
import './Home.css'


function Home() {
    return (
    <>
        <main>
            <div className='name-and-pic'>
                <h1>&#60;Chad Perkins &#47;&#62;</h1>
                <img src={myPic} alt="Me" />
            </div>
            <div className="about-me">
                <p>
                    I am a self taught software developer who specializes in creating modern responsive websites. I am currently located in Ashland, VA.
                </p>
            <Link className='contact-link' to='/contact'>
                <button>Get In Touch</button>
            </Link>
            </div>
        </main>
    </> 
  )
}
 
export default Home