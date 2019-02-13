import React from 'react';
import { LabelWrapper, Input } from "./../Styles/styledComponents";

const OptionDisplay = props => {
  // beautify the display of the option
  const optionName = props.name
    .replace("barColor", "Bar Color")
    .replace("barMargin", "Bar Margin")
    .replace("chartHeight", "Chart Height")
    .replace("chartWidth", "Chart Width")
    .replace("chartBGColor", "Background")
    .replace("chartTitle", "Chart Title")
    .replace("xTitle", "x-Title")
    .replace("yTitle", "y-Title")
    .replace("innerRadius", "Inner Radius")
    .replace("outerRadius", "Outer Radius")

  return (
    <LabelWrapper>
      <label htmlFor={props.value}>{optionName}</label>
      <Input
        id={props.value}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
    </LabelWrapper>
  );
}

export default OptionDisplay;
