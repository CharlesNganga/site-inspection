export default function InspectionDetailModal({ inspection, onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{inspection.title}</h2>
        <div className="row">
          <span className={"badge " + inspection.status}>{inspection.status}</span>
          <span className="prio">{inspection.priority} priority</span>
        </div>
        <dl className="detail">
          <dt>Location</dt>
          <dd>{inspection.location}</dd>
          <dt>Inspector</dt>
          <dd>{inspection.inspectorName}</dd>
          <dt>Date</dt>
          <dd>{inspection.date}</dd>
          <dt>Notes</dt>
          <dd>{inspection.notes || "No notes provided."}</dd>
        </dl>
        <div className="actions">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}