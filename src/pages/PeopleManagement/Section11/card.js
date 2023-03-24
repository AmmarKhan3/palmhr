import React from 'react'

import "./style.scss";

const OfferSectionList = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className="feature1-offerBoxDiv">
        <div className="feature1-offerMargin">
          <p className="feature1-card-heading">{items?.heading}</p>
          <p className='feature1-desc-p'>{items?.list2}</p>
        </div>
        <div className="feature1-offerimg">
          <img src={items?.Url} className="" />
        </div>
        <button className='feature1-card-btn'>
            <p className='feature1-btn-text'>See More</p>
        </button>
      </div>
    </>
  );
};

export default OfferSectionList;