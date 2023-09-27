/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Cards = ({item}) => {

  const {cover, title, category, bg_color, text_color, category_color} = item || {}


  return (
    <div>
      <div className="relative mb-5 flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{backgroundColor:bg_color}}>
        <div className="relative h-full overflow-hidden bg-blue-gray-500 bg-clip-border text-white">
          <img src={cover} />
        </div>
        <div className="w-16 mx-3 mt-3 py-1 rounded text-xs font-medium text-center text-white" style={{backgroundColor:category_color, color: text_color}}>
            {category}
        </div>
        <div className="mx-3 mt-2 mb-4">
          <h5 className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased" style={{color: text_color}}>
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Cards;
