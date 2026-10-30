export default function InspectionCard({ inspection, onSelect }) {
  return (
    <button className="card" onClick={() => onSelect(inspection)}>
      <h3>{inspection.title}</h3>
      <span className="meta">{inspection.location}</span>
      <span className="meta">
        {inspection.inspectorName} · {inspection.date}
      </span>
      <div className="row">
        <span className={"badge " + inspection.status}>{inspection.status}</span>
        <span className="prio">{inspection.priority} priority</span>
      </div>
    </button>
  );
}