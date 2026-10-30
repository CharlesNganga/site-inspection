export default function Header({ onNew }) {
  return (
    <header>
      <div>
        <h1>Site Inspection Dashboard</h1>
        <p>Track safety and maintenance checks</p>
      </div>
      <button className="btn" onClick={onNew}>
        + New Inspection
      </button>
    </header>
  );
}