import React from "react";
import Header from "../Header/Header";
import "./Event.css";
import Footer from "../Footer/Footer";
import MyCard from "./EventCard";
import eventData from "../../data/events.json";

function Event() {
  return (
    <div>
      <Header className='header' />
     
      <h2 className="ongoing">Ongoing Events</h2>
      <div className="event">
        {eventData &&
          eventData.map((event) => {
            return (
              <MyCard id={event.id} title={event.name} body={event.details} />
            );
          })}
      </div>
      <h2 className="ongoing">Upcoming Events</h2>
      <div className="event">
        {eventData &&
          eventData.map((event) => {
            return (
              <MyCard id={event.id} title={event.name} body={event.details} />
            );
          })}
      </div>

      <Footer />
    </div>
  );
}

export default Event;
