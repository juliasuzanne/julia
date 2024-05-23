import React from "react";
import { useState, useRef } from "react";
import "./CSS/tabcontainer.css";

export function TabContent(props) {
  const contentRef = useRef();

  return (
    <div>
      <div
        // className="content-parent"
        ref={contentRef}
        style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}
      ></div>
      {props.open && <div className="content">{props.children}</div>}
    </div>
  );
}
