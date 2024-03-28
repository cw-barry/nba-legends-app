import { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import Search from './components/Search';
import { Container } from 'react-bootstrap';

function App() {
  const [search, setSearch] = useState('');
  return (
    <Container className="text-center mt-4">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <CardContainer search={search} />
    </Container>
  );
}

export default App;
