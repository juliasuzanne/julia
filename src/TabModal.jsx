import React from "react";
import { useState, useRef } from "react";
import "./CSS/tabcontainer.css";

export function TabModal(props) {
  {
    const [open, setOpen] = useState(false);
    const [expand, setExpand] = useState(false);

    const toggle = () => {
      setExpand(!expand);
      // setOpen(!open);
      if (open) {
        setOpen(!open);
      } else {
        const timeoutId = setTimeout(() => {
          setOpen(!open);
        }, 920);
        return () => clearTimeout(timeoutId);
      }
    };

    // if (contentRef.current) console.log(contentRef.current.scrollHeight);

    return (
      <div>
        <div className={expand ? "content-show" : "content-parent"}>
          {open && <div className="content">{props.children}</div>}
        </div>

        <button className="tabHover" onClick={toggle}>
          {props.label}
        </button>
      </div>
    );
  }
}
