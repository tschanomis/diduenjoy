import { useState } from "react";

import "./Form.css";

export default function Form({ setKpi }) {
  const [formData, setFormData] = useState();

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
          <label for="kpi_name">KPI name</label>
          <input
            type="text"
            name="kpi_name"
            id="kpi_name"
            placeholder="Element name"
            onChange={handleCHange}
          />
        </div>

        <div className="form-block">
          <label for="kpi_tooltip">Tooltip</label>
          <input
            type="text"
            name="kpi_tooltip"
            id="kpi_tooltip"
            placeholder="Element name"
            onChange={handleCHange}
          />
        </div>

        <div className="form-block">
          <label for="kpi_icon">Icon</label>
          {/* <input type="textaera" name="kpi_icon" id="kpi_icon" /> */}
        </div>

        <div className="form-block">
          <label for="kpi_value">Value</label>
          <input
            type="text"
            name="kpi_value"
            id="kpi_value"
            placeholder="Element name"
            onChange={handleCHange}
          />
        </div>

        <div className="form-block">
          <label for="kpi_trend">Trend</label>
          <select name="kpi_trend" id="kpi_trend" onChange={handleCHange}>
            <option value="" disabled selected>
              Select
            </option>
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
