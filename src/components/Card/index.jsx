import "./card.css";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} className="imgclass" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
export default Card;
