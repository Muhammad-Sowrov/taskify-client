import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    axios.get("https://taskify-server-two.vercel.app/cards").then((res) => {
      setCardData(res.data);
      AOS.init();
    });
  }, []);
  // console.log(cardData);
  return (
    <div className="my-10 px-10">
      <h1 className="text-3xl font-bold text-center">Faces of Productivity</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cardData.map((card) => (
          <div
            key={card._id}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="rounded-e-lg bg-green-100 text-black mt-5 gap-2">
              <div className="card-body">
                <h2 className="card-title">{card.userType}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
