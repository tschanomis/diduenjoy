import { useState } from 'react';

import './App.css';

import { Header, List, Form } from './components';

function App() {
  const [kpis, setKpis] = useState([]);

  const [selectedKpi, setSelectedKpi] = useState();

  const addKpi = () => {
    setKpis(kpis => [...kpis, { id: kpis.length }]);
  }

  const setKpi = (formData) => {
    const replaceElement = kpis.map(kpi => kpi.id === selectedKpi.id ? { ...kpi, ...formData } : kpi);
    setKpis(replaceElement);
  }

  return (
    <div className="App">
      <Header />
      <List kpis={kpis} addKpi={addKpi} selectedKpi={selectedKpi} setSelectedKpi={setSelectedKpi} />
      {
        selectedKpi && <Form setKpi={setKpi} selectedKpi={selectedKpi} />
      }
    </div>
  );
}

export default App;
