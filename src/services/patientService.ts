import { v1 as uuid } from 'uuid';
import patients from '../../data/patients';
import { Patient, NonSensPatient, NewPatient, EntryWithoutId, Entry } from '../types';

const getPatients = () : Patient[] => {
  return patients;
};

const getNonSensPatient = () : NonSensPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
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

const addEntry = (param: EntryWithoutId, id: string): Patient => {
  const newEntry: Entry = {
    id: uuid(),
    ...param
  };

  const updatedPatient = patients.find( p => p.id === id);

  if (!updatedPatient) throw new Error('Patient does not exist');

  updatedPatient.entries.push(newEntry);

  return updatedPatient;
};

export default {
  getPatients,
  getNonSensPatient,
  addPattient,
  getPatientById,
  addEntry
};