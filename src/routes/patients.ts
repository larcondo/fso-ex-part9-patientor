import express from 'express';
import patientService from '../services/patientService';
const router = express.Router();
import toNewPatient from '../utils';

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensPatient());
});

router.get('/:id', (req, res) => {
  const id: string = req.params.id;

  try {
    const patient = patientService.getPatientById(id);

    if (!patient) return res.status(404).send({ error: 'Patient not found.'});

    return res.status(200).json(patient);
  } catch(error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    return res.status(400).send(errorMessage);
  }
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