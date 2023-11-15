import "./Card.css";

export default function Card({ kpi, addKpi }) {
  return (
    <div className="Card" onClick={() => !kpi && addKpi()}>
      {kpi ?? "+"}
    </div>
  );
}
