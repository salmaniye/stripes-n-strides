import React from "react";

import "./Map.css";

const MapHome = ({ reference }) => {
  return (
    <iframe
      title="homeMap"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d597.0857882065977!2d-0.5396216302960372!3d53.22962475106403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1711229366332!5m2!1sen!2suk"
      id="mapHome"
    ></iframe>
  );
};

export default MapHome;
