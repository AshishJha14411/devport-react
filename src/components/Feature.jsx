import React from 'react'
import second from '../assests/2.jpg'
import thrid from '../assests/3.jpg'
import fourth from '../assests/4.jpg'
import fifth from '../assests/5.jpg'
function Feature() {
  return (
    <div className="feature">
        <div className="feature-head">
          <div className="textfea">
            <h3 className="project-head">FEATURED PROJECTS</h3>
            <p className="pro-para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              expedita!
            </p>
          </div>
          <button className="about-me">VIEW ALL</button>
        </div>
        <div className="projects">
          <div className="project-pair">
            <div className="project">
              <div className="project-img">
                <img src={second} draggable="false" alt="first" />
              </div>
              <h3 className="project-name">The Vintage</h3>
              <div className="link">
                <a href="#" className="know-more">KNOW MORE</a>
                <div className="arrow"></div>
              </div>
            </div>
            <div className="project">
              <div className="project-img">
                <img src={thrid} draggable="false" alt="first" />
              </div>
              <h3 className="project-name">Foodasa</h3>
              <div className="link">
                <a href="#" className="know-more">KNOW MORE</a>
                <div className="arrow"></div>
              </div>
            </div>
          </div>
          <div className="project-pair">
            <div className="project">
              <div className="project-img">
                <img src={fourth} draggable="false" alt="first" />
              </div>
              <h3 className="project-name">Marco Accent</h3>
              <div className="link">
                <a href="#" className="know-more">KNOW MORE</a>
                <div className="arrow"></div>
              </div>
            </div>
            <div className="project">
              <div className="project-img">
                <img src={fifth} draggable="false" alt="first" />
              </div>
              <h3 className="project-name">Mozaik</h3>
              <div className="link">
                <a href="#" className="know-more">KNOW MORE</a>
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Feature