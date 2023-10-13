import "../scss/Prova.scss";
import img1 from "../assets/1.png";
import background from "../assets/back.jpg";
const Prova = () => {
  return (
    <>
      <div className=" slide-container d-flex align-items-center ">
        <span className="slider-span" id="slider-span1">
          {" "}
        </span>
        <span className="slider-span" id="slider-span2">
          {" "}
        </span>
        <span className="slider-span" id="slider-span3">
          {" "}
        </span>
        <span className="slider-span" id="slider-span4">
          {" "}
        </span>
        <span className="slider-span" id="slider-span5">
          {" "}
        </span>

        <div
          style={{ backgroundImage: `url(${background})` }}
          className="image-slider w-100 d-flex "
        >
          <div className="slides-div " id="slide-1">
            <img src={img1} alt="" className="img" />{" "}
            <a href="#slider-span1" className="mybutton" id="button-1"></a>{" "}
          </div>{" "}
          <div className="slides-div " id="slide-2">
            <img src={img1} alt="" className="img" />{" "}
            <a href="#slider-span2" className="mybutton" id="button-2"></a>{" "}
          </div>{" "}
          <div className="slides-div " id="slide-3">
            <img src={img1} alt="" className="img" />{" "}
            <a href="#slider-span3" className="mybutton" id="button-3"></a>{" "}
          </div>{" "}
          <div className="slides-div " id="slide-4">
            <img src={img1} alt="" className="img" />{" "}
            <a href="#slider-span4" className="mybutton" id="button-4"></a>{" "}
          </div>{" "}
          <div className="slides-div " id="slide-5">
            <img src={img1} alt="" className="img" />{" "}
            <a href="#slider-span5" className="mybutton" id="button-5"></a>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Prova;
