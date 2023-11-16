import "./Card.css";

export default function Card({ kpi, addKpi, selectedKpi, setSelectedKpi }) {
  const isSelected = kpi && kpi?.id === selectedKpi?.id;
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
