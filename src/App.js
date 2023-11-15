import { useState } from 'react';

import './App.css';

import { Header, List, Form } from './components';

function App() {
  const [kpis, setKpis] = useState([
    { id: 0 }
  ]);
  const [selectedKpi, setSelectedKpi] = useState();

  const addKpi = () => {
    setKpis(kpis => [...kpis, { id: kpis.length }]);
  }

  const setKpi = (formData) => {
    console.log(formData);
  }

  return (
    <div className="App">
      <Header />
      <List kpis={kpis} addKpi={addKpi} selectedKpi={selectedKpi} setSelectedKpi={setSelectedKpi} />
      <Form setKpi={setKpi} />
    </div>
  );
}

export default App;
