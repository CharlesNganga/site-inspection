import InspectionCard from "./InspectionCard";

export default function InspectionList({ inspections, onSelect }) {
  if (inspections.length === 0) {
    return <p className="count">No inspections yet.</p>;
  }

  return (
    <div className="list">
      {inspections.map((item) => (
        <InspectionCard key={item.id} inspection={item} onSelect={onSelect} />
      ))}
    </div>
  );
}