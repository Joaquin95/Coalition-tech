const API_URL = 'http://localhost:8080/api/patients';

export const fetchPatientData = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data.find(patient => patient.name === "Jessica Taylor");
};