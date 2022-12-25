import React from "react";


const Review = ({ review }) => {
  return (
    <div class="card  bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{review.review}</p>
        <div class="flex  itmes-center my-5">
          <div class="avatar">
            <div class="w-16 rounded-full ring  ring-offset-base-100 ring-offset-2">
              <img src={review.img } alt="" />
            </div>
          </div>
          <div className="ml-10">
            <h2 className="text-bold text-black text-xl">{review.name}</h2>
            <h4>{review.subtitle}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
