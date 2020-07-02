import React, { useState } from "react";
import "../style/styleAbout.css";

const About = (props) => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [subject, setSubject] = useState("");
  //   const [message, setMessage] = useState("");
  return (
    <div className="about-container">
      <div className="text-container">
        <p className="about-blurb">
          To support new and experienced plant lovers alike, Plantsiful is a
          plant care management app designed with plant-parent convenience in
          mind. Now tracking plant biometrics is as enjoyable as the care
          itself, letting anyone be a triumphant plant owner.
        </p>
        <p className="about-blurb">
          More people are discovering the joys of owning plants due to social
          media. According to the National Gardening Association,
          houseplant sales in the U.S. have increase 50% to $1.7 billion in the
          last three years. This increase in plant ownership has also lead to an
          increase in preventable plant deaths. While it may sometimes seem that
          houseplants just love to die, the good news is that plants don't
          really die without a reason. In truth, houseplants are fairly
          predictable, depending on the species, and just a handful of reasons
          are responsible for the principle part of houseplant attrition. The
          top factors for houseplant casualties are too much water, poor
          drainage, not repotting, using old potting soil, not enough water,
          and/or fertilizer issues.
        </p>
      </div>
    </div>
  );
};

export default About;
