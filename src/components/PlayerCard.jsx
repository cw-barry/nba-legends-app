import PropTypes from 'prop-types';
import { useState } from 'react';
import { Col, Card } from 'react-bootstrap';

export const PlayerCard = ({ name, img, stat }) => {
  const [isImage, setIsImage] = useState(true);
  return (
    <Col md={6} lg={4} xl={3} onClick={() => setIsImage(!isImage)}>
      <Card className="rounded-2 m-auto player-card">
        {isImage ? (
          <Card.Img className="player-logo" src={img} />
        ) : (
          <div className="d-flex align-items-center player-logo">
            <ul className="m-auto">
              {stat.map((item, index) => (
                <li key={index} className="h5 text-start list-unstyled ">
                  🏀 {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Card.Footer>
          <Card.Title>{name}</Card.Title>
        </Card.Footer>
      </Card>
    </Col>
  );
};

PlayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  stat: PropTypes.array.isRequired,
};
