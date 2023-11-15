import "./Card.css";

export default function Card({ kpi, addKpi, selectedKpi, setSelectedKpi }) {
  return (
    <div
      className="Card"
      onClick={() => (!kpi ? addKpi() : console.log(kpi.id))}
    >
      {kpi?.id ?? "+"}
    </div>
  );
}
