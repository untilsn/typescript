import React, { Fragment } from "react";

const arrCard: {
  image: string;
  name: string;
  totalReview: string[];
  rating: number;
  location: string;
  price: number;
  date: string;
  wifi: boolean;
}[] = [
  {
    image: "https://cdn.tgdd.vn/2020/07/content/h2-800x450-9.png",
    name: "Cách đặt vé máy bay, phòng khách sạn giá rẻ trên Traveloka",
    totalReview: [""],
    rating: 3,
    location:
      "Nhìn rủ đồ cỡ này là biết chủ nhân nữ tính, điệu đà cỡ nào rồi đó 😌🥰 Tui mà khum phải đi làm hành chính, ngày nào cũng mặc áo 2s cho ",
    price: 200,
    date: "6 ngày ",
    wifi: true,
  },
];

const CardCourse = () => {
  return (
    <Fragment>
      {arrCard.map((item) => (
        <div>
          <div>
            <img src={item.image} alt="" />
          </div>
          <div>
            <h1></h1>
            <div>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default CardCourse;
