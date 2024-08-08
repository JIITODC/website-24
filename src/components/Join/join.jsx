import React from "react";
import "./Join.css";
import Header from "../Header/Header";

function Join() {
  return (
    <div className="head">
      <Header />
      <div className="form1">
        <iframe
          title="JODC Joining Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdxYlmnQvqrboJ990iv7q6opednVh3zU6RhQ91-rLvwqMT1FA/viewform?embedded=true"
          width="100%"
          height="630"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          style={{
            border: "2px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f0f0f0",
          }}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Join;
