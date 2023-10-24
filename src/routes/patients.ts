import express from 'express';
import patientService from '../services/patientService';
const router = express.Router();
import toNewPatient from '../utils';

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensPatient());
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatient(req.body);

    const addedPatient = patientService.addPattient(newPatientEntry);
    res.json(addedPatient);
    
  } catch(error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;