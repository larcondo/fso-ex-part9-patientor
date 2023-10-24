import express from 'express';
import diagnosisRouter from '../src/routes/diagnosis';
import patientsRouter from '../src/routes/patients';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.use('/api/diagnoses', diagnosisRouter);
app.use('/api/patients', patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});