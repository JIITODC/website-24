import React from "react";
import Card from "react-bootstrap/Card";
import "./EventCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyCard(event) {
  return (
    <Card
      style={{ width: "22rem" }}
      text="light"
      bg="secondary"
      className="pad"
    >
      <Card.Img
        variant="top"
        src="https://picsum.photos/100/100"
        height={200}
      />
      <Card.Body className="body">
        <Card.Title className="back">{event.title}</Card.Title>
        <Card.Text className="back">{event.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
