import React, { useState } from "react";
import styled from "styled-components";
import { FONT_FAMILY } from "./constant";
import FontSelector from "./FontSelector";

const FontSwitcher = ({ children }) => {
  const [selectedFont, setSelectedFont] = useState("Inter");

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const TextWrapper = styled.div`
    font-family: ${({ selectedFont }) => FONT_FAMILY[selectedFont]}, sans-serif;
  `;

  return (
    <div>
       <FontSelector selectedFont={selectedFont} handleFontChange={handleFontChange} /> 
      <TextWrapper selectedFont={selectedFont}>{children}</TextWrapper>
    </div>
  );
};

export default FontSwitcher;
