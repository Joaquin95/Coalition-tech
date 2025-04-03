import "./App.css";
import PatientInfo from "./components/PatientInfo.jsx";
import BloodPressureChart from "./components/BloodPressureChart.jsx";

const App = () => {
    return (
        <div className="dashboard">
            <h1>Patient Dashboard</h1>
            <PatientInfo />
            <div className="chart-container">
                <h2>Blood Pressure History</h2>
                <BloodPressureChart />
            </div>
        </div>
    );
};

export default App;
