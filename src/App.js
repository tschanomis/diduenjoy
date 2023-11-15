import { useState } from 'react';

import './App.css';

import { Header, List, Form } from './components';

function App() {
  const [kpis, setKpis] = useState([]);

  const addKpi = () => {
    setKpis([...kpis, kpis.push({
      id: kpis.length
    })]);
  }

  return (
    <div className="App">
      <Header />
      <List kpis={kpis} addKpi={addKpi} />
      <Form />
    </div>
  );
}

export default App;
