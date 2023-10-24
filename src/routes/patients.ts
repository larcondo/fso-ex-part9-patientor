import express from 'express';
import patientService from '../services/patientService';
const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensPatient());
});

router.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, occupation, gender } = req.body;

  const addedPatient = patientService.addPattient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation
  });

  res.json(addedPatient);
});

export default router;