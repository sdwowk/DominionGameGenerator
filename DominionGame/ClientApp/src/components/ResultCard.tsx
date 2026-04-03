const ResultCard = (props: { name: string }) => {
  return (
    <li>
      <div key={props.name + "-2"} className="winner resultContainer">
        <h2 key={props.name + "-3"} className="resultText">
          {props.name}
        </h2>
      </div>
    </li>
  );
};

export default ResultCard;
