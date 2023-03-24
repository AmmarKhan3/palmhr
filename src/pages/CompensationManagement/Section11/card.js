import ReactDOM from 'react-dom'
import React from 'react'

import "./style.scss";

const OfferSectionList = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className="feature3-offerBoxDiv">
        <div className="feature3-offerMargin">
          <p className="feature3-card-heading">{items?.heading}</p>
          <p className='feature3-desc-p'>{items?.list2}</p>
        </div>
        <div className="feature3-offerimg">
          <img src={items?.Url} className="" />
        </div>
        <button className='feature3-card-btn'>
            <p className='feature3-btn-text'>See More</p>
        </button>
      </div>
    </>
  );
};

export default OfferSectionList;