import { useEffect, useState } from "react";
import { fetchPatientData } from "../api/patientService";

const PatientInfo = () => {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPatientData = async () => {
      if (data) {
        setPatient(data);
      } else {
        setError("No patient data found.");
      }
      setLoading(false);
    };
    getPatientData();
  }, []);

  if (loading) return <p>Loading patient data...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="patient-info">
      <h2>{patient.name}</h2>
      <p>
        <strong>Age:</strong> {patient.age}
      </p>
      <p>
        <strong>Gender:</strong> {patient.gender}
      </p>
      <p>
        <strong>Blood Type:</strong> {patient.bloodType}
      </p>
      <p>
        <strong>Conditions:</strong> {patient.conditions.join(", ")}
      </p>
    </div>
  );
};

export default PatientInfo;
