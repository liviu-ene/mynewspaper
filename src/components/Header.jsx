import React from "react";

const Header = () => {
  return (
    <>
      <button onClick={() => console.log("NYT")}>NYT</button>
      <button onClick={() => console.log("WAPO")}>WAPO</button>
    </>
  );
};

export default Header;
