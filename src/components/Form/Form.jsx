import { useEffect, useState } from "react";

import "./Form.css";

const icons = [1, 2, 3];

export default function Form({ kpis, selectedKpi, setKpi }) {
  const [formData, setFormData] = useState();

  useEffect(() => setFormData(selectedKpi), [selectedKpi]);

  const handleCHange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setKpi(formData);
  };

  return (
    <div className="Form">
      <form>
        <legend>Card settings</legend>
        <div className="form-block">
          <label htmlFor="kpi_name">KPI name</label>
          <input
            type="text"
            name="kpi_name"
            id="kpi_name"
            placeholder="Element name"
            onChange={handleCHange}
            value={formData?.kpi_name ?? ""}
          />
        </div>

        <div className="form-block">
          <label htmlFor="kpi_tooltip">Tooltip</label>
          <input
            type="text"
            name="kpi_tooltip"
            id="kpi_tooltip"
            placeholder="Element name"
            onChange={handleCHange}
            value={formData?.kpi_tooltip ?? ""}
          />
        </div>

        <div className="form-block">
          <label>Icon</label>
          {icons.map((icon) => (
            <button
              name="kpi_icon"
              id="kpi_icon"
              value={icon}
              onClick={handleCHange}
            >
              {icon}
            </button>
          ))}
        </div>

        <div className="form-block">
          <label htmlFor="kpi_value">Value</label>
          <input
            type="text"
            name="kpi_value"
            id="kpi_value"
            placeholder="Element name"
            onChange={handleCHange}
            value={formData?.kpi_value ?? ""}
          />
        </div>

        <div className="form-block">
          <label htmlFor="kpi_trend">Trend</label>
          <select
            name="kpi_trend"
            id="kpi_trend"
            onChange={handleCHange}
            value={formData?.kpi_trend ?? ""}
          >
            <option value="positive">positive</option>
            <option value="neutral">neutral</option>
            <option value="negative">negative</option>
          </select>
        </div>

        <div className="button-block">
          <button onClick={handleSubmit}>Update KPI</button>
        </div>
      </form>
    </div>
  );
}
