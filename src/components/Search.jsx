import { Form } from 'react-bootstrap';
const Search = ({ search, setSearch }) => {
  return (
    <div>
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

export default Search;
