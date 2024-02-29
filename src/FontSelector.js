import React from "react";

import { FONT_FAMILY } from "./constant";

const FontSelector = ({ selectedFont, handleFontChange }) => {
  return (
    <select onChange={handleFontChange} value={selectedFont}>
      {Object.keys(FONT_FAMILY).map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
};

export default FontSelector;
