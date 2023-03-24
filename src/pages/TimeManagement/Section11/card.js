import ReactDOM from 'react-dom'
import React from 'react'

import "./style.scss";

const OfferSectionList = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className="feature2-offerBoxDiv">
        <div className="feature2-offerMargin">
          <p className="feature2-card-heading">{items?.heading}</p>
          <p className='feature2-desc-p'>{items?.list2}</p>
        </div>
        <div className="feature2-offerimg">
          <img src={items?.Url} className="" />
        </div>
        <button className='feature2-card-btn'>
            <p className='feature2-btn-text'>See More</p>
        </button>
      </div>
    </>
  );
};

export default OfferSectionList;