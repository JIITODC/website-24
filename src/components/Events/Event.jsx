import React from "react";
import Header from "../Header/Header";
import "./Event.css";
import Footer from "../Footer/Footer";
import {CardCom} from '../uiComponents/CardCom'
import cardD from '../../data/events.json'

function Event() {
  return (
    <div>
      <Header className='header' />
     
      <h2 className="ongoing">Ongoing Events</h2>
      <div className='flex flex-row flex-wrap justify-evenly px-16'>
        {cardD.map((data,index) => (
        <CardCom key={data.id || index} title={data.title} description={data.description} link={data.link} image={data.image} live={data.live} code={data.code} />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default Event;
