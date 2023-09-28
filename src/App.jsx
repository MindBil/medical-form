import { useState } from "react";
import { Container, CssBaseline, Typography } from "@mui/material";
import PatientMedicalForm from "./components/PatientMedicalForm";

function App() {
  const [clientHistory, setClientHistory] = useState([]);

  const addClientHistory = (formData) => {
    setClientHistory([...clientHistory, formData]);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography variant="h4" component="h1" align="center">
          Patient Medical Records
        </Typography>
        <PatientMedicalForm addClientHistory={addClientHistory} />
        <div>
          <Typography variant="h5" component="h2" align="center">
            Client History
          </Typography>
          <ul>
            {clientHistory.map((data, index) => (
              <li key={index}>
                <strong>Name:</strong> {data.firstName} {data.lastName} <br />
                <strong>Date of Birth:</strong> {data.dob} <br />
                <strong>Diagnosis:</strong> {data.diagnosis} <br />
                <strong>Medications:</strong> {data.medications} <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default App;
