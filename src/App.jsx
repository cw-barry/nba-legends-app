import { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import Search from './components/Search';
import { Container } from 'react-bootstrap';
import { data as initialData } from './helper/data';
import Sorting from './components/Sorting';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(initialData);
  return (
    <Container className="text-center mt-4">
      <Header />
      <div className="d-flex justify-content-between align-items-center">
        <Search search={search} setSearch={setSearch} />
        <Sorting data={data} setData={setData} />
      </div>
      <CardContainer search={search} data={data} />
    </Container>
  );
}

export default App;
