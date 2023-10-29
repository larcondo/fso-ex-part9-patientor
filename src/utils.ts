import { NewPatient, Gender, Entry } from './types';

const toNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
    const newPatient: NewPatient = {
      name: parseName(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
      entries: [] as Entry[]
    };
    return newPatient;
  }
  
  throw new Error('Incorrect data: some fields are missing');
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(g => g.toString()).includes(param);
};

const isSsn = (param: string): boolean => {
  const ssnRegex = new RegExp(/\d{6}-\d{2,3}([A-Z]|[0-9])/, 'g');
  return ssnRegex.test(param);
};

const parseName = (name: unknown): string => {
  if (!isString(name)) {
    throw new Error('Incorrect or missing name');
  }
  return name;
};

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) throw new Error('Incorrect or missing occupation');
  return occupation;
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error ('Incorrect or missing date: ' + date);
  }

  return date;
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn) || !isSsn(ssn)) {
    throw new Error('Incorrect or missing ssn: ' + ssn);
  }
  return ssn;
};

export default toNewPatient;