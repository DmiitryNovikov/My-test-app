import React from "react";

function MainMenu(props) {
  let {setShipNumber} = props

  return (
  <div className="main-menu">
    <input type="number" 
           placeholder="search" 
           onChange={(e) => setShipNumber(e.target.value)
           }/>
  </div>
  );
}

export default MainMenu;
