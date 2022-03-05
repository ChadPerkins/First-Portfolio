import { DiHtml5, DiCss3 } from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs} from "react-icons/io";
import { SiExpress, SiReact, SiMongodb } from "react-icons/si";

import Carousel from "../../components/carousel/Carousel"
import './Projects.css'

function Projects() {
  return (
    <>
        <main>
          <h1>&#60;Projects &#47;&#62;</h1>
          <Carousel/>
          <div className="skill-list">
            <h2>&#60;Skills &#47;&#62;</h2>
            <p>These are skills I have learned and used through different projects:</p>
            <div className="skill-icons">
              <DiHtml5/> <DiCss3/> <IoLogoJavascript/>
              <SiReact/> <IoLogoNodejs/> <SiExpress/> <SiMongodb/>
            </div>
          </div>
        </main>
    </>
  )
}

export default Projects