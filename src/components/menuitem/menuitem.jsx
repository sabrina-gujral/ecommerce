import React from "react";
// import { Link } from "react-router-dom";
import "./menuitem.scss";

export default function MenuItem({ title, img, url, size }) {
  return (
    <div className={`${size} menu-item`}>
    <div className='bg-img' style={{backgroundImage: `url(${img})`}}  />
      <div className="content">
        {/* <Link to={url}> */}
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        {/* </Link> */}
      </div>
    </div>
  );
}
