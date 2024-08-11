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
            background: "transparent",
          }}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Join;
