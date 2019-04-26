import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5698.063793317239!2d26.098762824089803!3d44.4325079276279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff38a9d16887%3A0x467bd471b49c2cb9!2sBucharest+Municipality+Museum!5e0!3m2!1sen!2sro!4v1556130217133!5m2!1sen!2sro"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};
export default Location;
