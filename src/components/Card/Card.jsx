import "./Card.css";

export default function Card({ kpi, addKpi, selectedKpi, setSelectedKpi }) {
  const isSelected = kpi && kpi.id === selectedKpi?.id;
  return (
    <div
      className={`Card ${kpi ? "content" : "empty"} ${
        isSelected ? "select" : ""
      }`}
      onClick={() => (!kpi ? addKpi() : setSelectedKpi(kpi))}
    >
      {!kpi ? (
        "+"
      ) : (
        <div className="Card_details">
          <div className="Card_details_block">
            {kpi?.kpi_name && (
              <div className="Card_details_name">
                {kpi.kpi_name}
                <i>X</i>
              </div>
            )}
            <div className="Card_details_icon">{kpi.kpi_icon}</div>
          </div>
          <div className="Card_details_block">
            <div className="Card_details_value">{kpi.kpi_value}</div>
            <div className="Card_details_trend">{kpi.kpi_trend}</div>
          </div>
        </div>
      )}
    </div>
  );
}
