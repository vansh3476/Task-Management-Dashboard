import React from "react";
import Isvg from "react-inlinesvg";

export const Icon = ({ name }) => {
  return <Isvg src={import(`./images/${name}.svg`)}></Isvg>;
};
