import { Row } from 'react-bootstrap';
import { data } from '../helper/data';
import { PlayerCard } from './PlayerCard';

const CardContainer = ({ search }) => {
  return (
    <div className="container rounded-4 my-4 p-3 bg-light card-container">
      <Row className="g-3 justify-content-center ">
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, index) => (
            <PlayerCard
              key={index}
              name={item.name}
              img={item.img}
              stat={item.statistics}
              //   {...item}
            />
          ))}
      </Row>
    </div>
  );
};

export default CardContainer;
