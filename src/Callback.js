import React from "react";
import { useState } from "react";

const Callback = ({ getcolor }) => {
  const [activecolor, setactivecolor] = useState(null);
  const handlecolor = (e) => {
    const { value } = e.target;
    setactivecolor(value);
    getcolor(value);
  };
  return (
    <div>
      <input
        type="text"
        id="input"
        aria-label="input"
        onChange={handlecolor}
        value={activecolor}
      />
    </div>
  );
};

export default Callback;
