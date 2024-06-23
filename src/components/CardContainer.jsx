import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import { PlayerCard } from './PlayerCard';

const CardContainer = ({ search, data }) => {
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

CardContainer.propTypes = {
  search: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default CardContainer;
