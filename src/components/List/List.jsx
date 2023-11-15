import Card from "../Card/Card";

import "./List.css";

export default function List({ kpis, addKpi }) {
  return (
    <div className="List">
      {kpis.map((kpi, index) => (
        <Card kpi={kpi} key={`kpi_${index}`} />
      ))}
      <Card addKpi={addKpi} />
    </div>
  );
}
