import "./Card.css";

export default function Card({ kpi, addKpi, selectedKpi, setSelectedKpi }) {
  const isSelected = kpi?.id === selectedKpi;
  return (
    <div
      className={`Card ${kpi ? "content" : "empty"} ${
        isSelected ? "select" : ""
      }`}
      onClick={() => (!kpi ? addKpi() : setSelectedKpi(kpi))}
    >
      {!kpi ? "+" : <>{kpi.id}</>}
    </div>
  );
}
