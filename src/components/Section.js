import CategoryName from "./CategoryName";
import Carousel from "./Carousel";

const Section = ({ category, images }) => {
  return (
    <div>
      <CategoryName category={category} />
      <Carousel images={images} />
    </div>
  );
};

export default Section;
