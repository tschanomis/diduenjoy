import { useEffect, useState } from "react";

import "./Form.css";

export default function Form({ kpis, selectedKpis, setKpi }) {
  const [formData, setFormData] = useState();

  useEffect(
    () => setFormData(kpis.filter((e) => e.id === selectedKpis)),
    [kpis, selectedKpis]
  );

  const handleCHange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setKpi(formData);
  };

  return (
    <div className="Form">
      <form>
        <div className="form-block">
          <label htmlFor="kpi_name">KPI name</label>
          <input
            type="text"
            name="kpi_name"
            id="kpi_name"
            placeholder="Element name"
            onChange={handleCHange}
            value={formData?.kpi_name}
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
            value={formData?.kpi_tooltip}
          />
        </div>

        <div className="form-block">
          <label htmlFor="kpi_icon">Icon</label>
          {/* <input type="textaera" name="kpi_icon" id="kpi_icon" /> */}
        </div>

        <div className="form-block">
          <label htmlFor="kpi_value">Value</label>
          <input
            type="text"
            name="kpi_value"
            id="kpi_value"
            placeholder="Element name"
            onChange={handleCHange}
            value={formData?.kpi_value}
          />
        </div>

        <div className="form-block">
          <label htmlFor="kpi_trend">Trend</label>
          <select
            name="kpi_trend"
            id="kpi_trend"
            onChange={handleCHange}
            defaultValue="select"
          >
            <option value="un">un</option>
          </select>
        </div>

        <div className="button-block">
          <button onClick={handleSubmit}>Update KPI</button>
        </div>
      </form>
    </div>
  );
}
