import patients from '../../data/patients';
import { Patient, NonSensPatient } from '../types';

const getPatients = () : Patient[] => {
  return patients;
};

const getNonSensPatient = () : NonSensPatient[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

export default {
  getPatients,
  getNonSensPatient
};