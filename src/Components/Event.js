import React from "react";

const Event = ({ title, isVirtual, address }) => (
  <div>
    <h6> {title} </h6>
    <h6> {isVirtual ? "Vitual Event" : "Physical Event"} </h6>
    <h6> {address} </h6>
  </div>
);
