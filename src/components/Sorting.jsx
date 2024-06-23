import PropTypes from 'prop-types';
import { useState } from 'react';

const Sorting = ({ data, setData }) => {
  const [sortKey, setSortKey] = useState('points');

  const sortData = (data, key) => {
    const keyIndexMap = {
      points: 0,
      rebaunds: 1,
      assist: 2,
      allStar: 3,
    };

    return data.sort((a, b) => {
      const aValue = parseInt(
        a.statistics[keyIndexMap[key]].split(' ')[0].replace(/,/g, '')
      );
      const bValue = parseInt(
        b.statistics[keyIndexMap[key]].split(' ')[0].replace(/,/g, '')
      );
      return bValue - aValue;
    });
  };

  const handleSort = (e) => {
    setSortKey(e.target.value);
    setData(sortData([...data], e.target.value));
  };

  return (
    <div className="sort-options">
      <label className="me-2">Sort by: </label>
      <select className="rounded-2" value={sortKey} onChange={handleSort}>
        <option value="points">Points</option>
        <option value="rebaunds">Rebaunds</option>
        <option value="assist">Assist</option>
        <option value="allStar">All Star</option>
      </select>
    </div>
  );
};

Sorting.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Sorting;
