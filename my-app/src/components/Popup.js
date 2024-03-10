import React from "react";
export const Popup = ({ text, closePopup, action }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
      <h1>{text}</h1>
      <input type='text'></input>
      <button type='submit' onclick={action}>Submit</button>
      <button onClick={closePopup}>Close X</button>
     </div>
    </div>
  );
};
export default Popup;