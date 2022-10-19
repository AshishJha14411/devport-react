import React from 'react'
import theGuy from '../assests/1.png'
import Card from "./Card";
import uI from '../assests/notepad.svg'
import tab from '../assests/tablet.svg'
import ruler from '../assests/rule1.svg'
import NumbersSection from './NumbersSection';
import Feature from './Feature';
import MainEnding from './MainEnding';
function Main() {

  const cardDetails = [{
    head: 'UI Design',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, corporis?'
  },
  {
    head: 'Product Design',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laudantium.'
  },
  {
    head: 'Branding',
    desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, fuga?'
  }
]


  return (
    <div className="main">
      <div className="intro">
        <div className="intro-img">
          <img src={theGuy} draggable="false" alt="guy" />
        </div>
        <div className="intro-text">
          <h4 className="name-text">Hello I'm Arthur</h4>
          <h1 className="designation">Visual Designer</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam
            earum reprehenderit laboriosam tenetur officiis quis commodi
            laudantium, error quas fuga ex accusamus hic sunt consectetur. Ullam
            a veritatis eos.
          </p>
          <button className="about-me">ABOUT ME</button>
        </div>
      </div>
      <div className="backshadow"></div>
      <div className="cards">
        <Card image={tab} heading={cardDetails[0].head} desc={cardDetails[0].desc} isMid={false}/>
        <Card image={uI} heading={cardDetails[1].head} desc={cardDetails[1].desc} isMid={true}/>
        <Card image={ruler} heading={cardDetails[2].head} desc={cardDetails[2].desc} isMid={false}/>
      </div>
      <NumbersSection />
      <Feature />
      <MainEnding />
    </div>
  )
}

export default Main