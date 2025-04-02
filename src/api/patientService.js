const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

export const fetchPatientData = async () => {
  const credentials = btoa("coalition:skills-test");

  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("HTTP error! Status: ${response,status}");
    }

    const data = await response.json();

    return data.find((patient) => patient.name === "Jessica Taylor");
  } catch (error) {
    console.error("Error fetching patient data:", error);
    return null;
  }
};
