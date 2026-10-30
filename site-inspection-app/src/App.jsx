import { useState } from "react";
import initialInspections from "./data/initialInspections";
import Header from "./components/Header";
import InspectionList from "./components/InspectionList";
import InspectionForm from "./components/InspectionForm";
import InspectionDetailModal from "./components/InspectionDetailModal";
import Footer from "./components/Footer";

export default function App() {
  const [inspections, setInspections] = useState(initialInspections);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedInspection, setSelectedInspection] = useState(null);

  const addInspection = (newInspection) => {
    setInspections([...inspections, newInspection]);
    setIsFormOpen(false);
  };

  return (
    <>
      <Header onNew={() => setIsFormOpen(true)} />
      <main>
        <p className="count">{inspections.length} inspections</p>
        <InspectionList
          inspections={inspections}
          onSelect={setSelectedInspection}
        />
      </main>
      <Footer />

      {isFormOpen && (
        <InspectionForm
          onSubmit={addInspection}
          onClose={() => setIsFormOpen(false)}
        />
      )}
      {selectedInspection && (
        <InspectionDetailModal
          inspection={selectedInspection}
          onClose={() => setSelectedInspection(null)}
        />
      )}
    </>
  );
}