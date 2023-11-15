import Card from "../Card/Card";

import "./List.css";

export default function List({ kpis, addKpi, selectedKpi, setSelectedKpi }) {
  return (
    <div className="List">
      {kpis.map((kpi, index) => (
        <Card
          kpi={kpi}
          selectedKpi={selectedKpi}
          setSelectedKpi={setSelectedKpi}
          key={`kpi_${index}`}
        />
      ))}
      <Card addKpi={addKpi} />
    </div>
  );
}
