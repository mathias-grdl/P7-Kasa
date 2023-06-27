import "./index.css";

function slider({ pictures }) {
  return (
    <div className="Slider">
      <div className="SliderPictures">
        <img
          src={pictures}
          alt=""
        />
      </div>
    </div>
  );
}

export default slider;
