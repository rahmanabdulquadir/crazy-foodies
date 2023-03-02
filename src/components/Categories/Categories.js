import React from 'react';

const Categories = ({category}) => {
  const {strCategory, strCategoryThumb, strCategoryDescription  } = category
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-10">
  <figure className="px-10 pt-10">
    <img src={strCategoryThumb} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{strCategory}</h2>
    <p>{strCategoryDescription.slice(0,200)}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default Categories;