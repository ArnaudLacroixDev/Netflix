import rightArrow from "../assets/img/right_arrow_icon.png";
import leftArrow from "../assets/img/left_arrow_icon.png";

const Carrousel = ({ images }) => {
  return (
    <div>
      <ul className="section">
        <img
          className="left-arrow-icon"
          src={leftArrow}
          alt="previous movies"
        />
        {images.map((url, index) => {
          return <img className="img-carousel" src={url} alt="Image" />;
        })}
        <img className="right-arrow-icon" src={rightArrow} alt="next movies" />
      </ul>
    </div>
  );
};

export default Carrousel;
