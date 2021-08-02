import "./css/theorycolor.css";

const TheoryColor = () => {
  return (
    <section className="theory-options">
      <button className="btn-theory">
        <div className="triada color-control"></div>
        TRIADA
      </button>
      <button className="btn-theory">
        <div className="tetrad color-control"></div>
        TETRA
      </button>
      <button className="btn-theory">
        <div className="monochromatic color-control"></div>
        MONOCHROMATIC
      </button>
      <button className="btn-theory">
        <div className="analogous color-control"></div>
        ANALOGOUS
      </button>
      <button className="btn-theory">
        <div className="splitcomplements color-control"></div>
        SPLIT COMPLEMENTS
      </button>
    </section>
  );
};

export default TheoryColor;
