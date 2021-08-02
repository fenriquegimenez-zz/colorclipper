import "./css/theorycolor.css";

const TheoryColor = ({ handleTheoryOptions }) => {
  return (
    <section className="theory-options">
      <button
        className="btn-theory"
        onClick={() => {
          handleTheoryOptions("triad");
        }}
      >
        <div className="triada color-control"></div>
        TRIAD
      </button>
      <button
        className="btn-theory"
        onClick={() => {
          handleTheoryOptions("tetrad");
        }}
      >
        <div className="tetrad color-control"></div>
        TETRAD
      </button>
      <button
        className="btn-theory"
        onClick={() => {
          handleTheoryOptions("mono");
        }}
      >
        <div className="monochromatic color-control"></div>
        MONOCHROMATIC
      </button>
      <button
        className="btn-theory"
        onClick={() => {
          handleTheoryOptions("ana");
        }}
      >
        <div className="analogous color-control"></div>
        ANALOGOUS
      </button>
      <button
        className="btn-theory"
        onClick={() => {
          handleTheoryOptions("split");
        }}
      >
        <div className="splitcomplements color-control"></div>
        SPLIT COMPLEMENTS
      </button>
    </section>
  );
};

export default TheoryColor;
