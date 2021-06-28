import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./menuitem.scss";

function MenuItem({ title, img, url, size, history, match }) {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}/${url}`)}>
    <div className='bg-img' style={{backgroundImage: `url(${img})`}}  />
      <div className="content">
        <Link to={url}>
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(MenuItem)
