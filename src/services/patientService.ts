import { v1 as uuid } from 'uuid';
import patients from '../../data/patients';
import { Patient, NonSensPatient, NewPatient } from '../types';

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

const getPatientById = (id: string): Patient | undefined => {
  return patients.find( p => p.id === id);
};

const addPattient = (param: NewPatient): Patient => {
  const newPatient = {
    id: uuid(),
    ...param
  };
  
  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getNonSensPatient,
  addPattient,
  getPatientById
};