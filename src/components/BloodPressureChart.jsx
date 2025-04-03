import { useEffect, useState } from "react";
import { fetchPatientData } from "../api/patientService";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const BloodPressureChart = () => {
    const [chartData, setChartData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPatientData = async () => {
            const patient = await fetchPatientData();
            if (!patient) {
                setError("Failed to load blood pressure data.");
                setLoading(false);
                return;
            }

            if (patient.bloodPressureHistory) {
                setChartData({
                    labels: patient.bloodPressureHistory.map(bp => bp.year),
                    datasets: [
                        {
                            label: "Blood Pressure",
                            data: patient.bloodPressureHistory.map(bp => bp.value),
                            borderColor: "red",
                            backgroundColor: "rgba(255, 99, 132, 0.5)",
                            fill: true,
                            tension: 0.3,
                        }
                    ]
                });
            }

            setLoading(false);
        };

        getPatientData();
    }, []);

    if (loading) return <p>Loading blood pressure chart...</p>;
    if (error) return <p className="error">{error}</p>;

    return <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />;
};

export default BloodPressureChart;
