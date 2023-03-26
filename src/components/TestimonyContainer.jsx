import Testimony from "./Testimony";
import "../styles/TestimonyContainer.css";

const TestimonyContainer = ({ testimonies }) => {
  if (testimonies === null) {
    return (
      <div className="Testimonies-container">
        {[0, 1, 2].map((number) => (
          <Testimony key={number}/>
        ))}
      </div>
    );
  }
  return (
    <div className="Testimonies-container">
      {testimonies.map((testimony, index) => {
        return (
          <Testimony
            key={index}
            title={testimony.title}
            info={testimony.info}
            description={testimony.description}
            imgUrl={testimony.imgUrl}
          />
        );
      })}
    </div>
  );
};

export default TestimonyContainer;
