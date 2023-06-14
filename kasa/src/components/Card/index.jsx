import './index.css';

function Card({ card }) {

  return (
    <div className='card'>
      <img src={card.cover} alt={card.title} />
      <h2>{card.title}</h2>
    </div>
  );
}

export default Card;