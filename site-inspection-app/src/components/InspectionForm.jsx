import { useState } from "react";

const emptyForm = {
  title: "",
  location: "",
  inspectorName: "",
  date: "",
  status: "Pending",
  priority: "Medium",
  notes: "",
};

export default function InspectionForm({ onSubmit, onClose }) {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: Date.now(), ...form });
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>New Inspection</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input name="title" value={form.title} onChange={handleChange} required />
          </label>
          <label>
            Location
            <input name="location" value={form.location} onChange={handleChange} required />
          </label>
          <label>
            Inspector name
            <input name="inspectorName" value={form.inspectorName} onChange={handleChange} required />
          </label>
          <label>
            Date
            <input type="date" name="date" value={form.date} onChange={handleChange} required />
          </label>
          <label>
            Status
            <select name="status" value={form.status} onChange={handleChange}>
              <option>Passed</option>
              <option>Failed</option>
              <option>Pending</option>
            </select>
          </label>
          <label>
            Priority
            <select name="priority" value={form.priority} onChange={handleChange}>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Urgent</option>
            </select>
          </label>
          <label>
            Notes
            <textarea name="notes" rows="3" value={form.notes} onChange={handleChange} />
          </label>
          <div className="actions">
            <button type="button" className="btn ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}