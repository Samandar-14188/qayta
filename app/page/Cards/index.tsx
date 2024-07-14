import Image from "next/image";
import Card1 from "../../../public/card1.png";
import Card2 from "../../../public/card2.png";
import Card3 from "../../../public/card3.png";

export default function Cards() {
  return (
    <div className="Cards-container">
      <div className="cards-info">
      <h1>Advanced Statistics</h1>
      <p>
        Track how your links are performing across the web with  our advanced
        statistics dashboard.
      </p>
      </div>
     
      <div className="card-container">
        <div className="card">
          <div>
            <Image src={Card1} alt="" />
          </div>
          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="card card2">
          <div>
            <Image src={Card2} alt="" />
          </div>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="card card3">
          <div>
            <Image src={Card3} alt="" />
          </div>
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
