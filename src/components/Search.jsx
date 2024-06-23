import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const Search = ({ search, setSearch }) => {
  return (
    <div className="flex-grow-1">
      <Form.Control
        placeholder="Search Player ..."
        aria-label="Search"
        type="search"
        className="w-50 m-auto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></Form.Control>
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Search;
