import { useEffect, useState } from "react";
import { fetchPatientData } from "../api/patientService";

const PatientInfo = () => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetchPatientData().then((data) => setPatient(data));
  }, []);

  if (!patient) return <p>Loading...</p>;
};
