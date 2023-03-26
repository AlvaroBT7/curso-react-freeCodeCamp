import "../styles/Testimony.css";

const Testimony = ({
  title = "title-placeholder",
  info = "info-placeholder",
  description = "description-placeholder",
  imgUrl = require(`../imgs/img${Math.round(Math.random() * 2 + 1)}.jpg`),
}) => {
  return (
    <div
      onLoad={({ target }) => {
        target = target.parentElement.parentElement;
        new IntersectionObserver(([stuff]) => {
          if (stuff.isIntersecting) return target.classList.remove("hide");
          target.classList.add("hide");
        }, {}).observe(target);
      }}
      className="Testimony-container"
    >
      <div className="img-container">
        <img src={imgUrl} alt={`${title}-img`} />
      </div>
      <div className="text-container">
        <h3 className="Testimony-title">{title}</h3>
        <h4 className="Testimony-info">{info}</h4>
        <p className="Testimony-description">{description}</p>
      </div>
    </div>
  );
};

export default Testimony;
