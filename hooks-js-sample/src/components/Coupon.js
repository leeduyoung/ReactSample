import React from "react";

const Coupon = ({ couponData, createMode }) => {
  console.log("couponData: ", couponData);
  const [coupon, setCoupon] = React.useState(couponData);

  console.log("coupon: ", coupon);
  console.log("createMode: ", createMode);
  return <div>쿠폰</div>;
};

Coupon.defaultProps = {
  couponData: {
    title: "",
    subTitle: "",
    contents: []
  }
};

export default Coupon;
