const Education = Object.freeze({
  UNFINISHED_HIGHSCHOOL: 'Secundario incompleto',
  FINISHED_HIGHSCHOOL: 'Secundario completo',
  UNFINISHED_COLLEGE: 'Universitario incompleto',
  FINISHED_COLLEGE: 'Universitario completo',
});

const person0 = {
  name: 'Braian Quispe',
  age: 23,
  education: Education.UNFINISHED_COLLEGE,
  profession: 'software developer',
};
const person1 = {
  name: 'Rodrigo',
  age: 24,
  education: Education.UNFINISHED_COLLEGE,
  profession: 'software developer',
};
const person2 = {
  name: 'Santiago',
  age: 22,
  education: Education.UNFINISHED_COLLEGE,
  profession: 'food delivery',
};
const person3 = {
  name: 'Nicolás',
  age: 22,
  education: Education.UNFINISHED_COLLEGE,
  profession: 'steel company operator',
};
const person4 = {
  name: 'Juan Pérez',
  age: 25,
  education: Education.FINISHED_COLLEGE,
  profession: 'food delivery',
};
const person5 = {
  name: 'Walter',
  age: 24,
  education: Education.FINISHED_HIGHSCHOOL,
  profession: 'chemistrist',
};
const person6 = {
  name: 'Enzo',
  age: 23,
  education: Education.UNFINISHED_COLLEGE,
  profession: 'software developer',
};
const person7 = {
  name: 'Lucas',
  age: 23,
  education: Education.UNFINISHED_HIGHSCHOOL,
  profession: 'cashier',
};
const person8 = {
  name: 'Marcos',
  age: 27,
  education: Education.FINISHED_COLLEGE,
  profession: 'software engineer',
};
const person9 = {
  name: 'Martín',
  age: 27,
  education: Education.UNFINISHED_COLLEGE,
  profession: 'operator',
};

const company0 = {
  name: 'Fake Company',
  employeesQuantity: 50,
  area: 'IT',
  employees: [person0, person1, person6, person8],
};
const company1 = {
  name: 'Los pollos hermanos',
  employeesQuantity: 0,
  area: 'Fast food',
  employees: [person2, person4],
};
const company2 = {
  name: 'Carrefour',
  employeesQuantity: 4,
  area: 'Supermarket',
  employees: [person7],
};
const company3 = {
  name: 'Psy Congroo labs',
  employeesQuantity: '',
  area: 'Lab',
  employees: [person5],
};
const company4 = {
  name: 'Ternium Siderar',
  employeesQuantity: 200,
  area: 'Steel Industry',
  employees: [person3, person9],
};

const people = [];

const groupPeople = () => {
  people.push(person0);
  people.push(person1);
  people.push(person2);
  people.push(person3);
  people.push(person4);
  people.push(person5);
  people.push(person6);
  people.push(person7);
  people.push(person8);
  people.push(person9);

  console.log(people);
};

const companies = [company0, company1, company2, company3, company4];

const filterByArea = (area) => {
  const filteredEmployeesByArea = companies
    .filter((c) => c.area === area)
    .flatMap((c) => c.employees);
  console.log(filteredEmployeesByArea);
};

const getFinishedHSEmployeesByCompany = () => {
  return companies.map((c) => ({
    name: c.name,
    finishedHSEmployees: c.employees.filter(e => e.education !== Education.UNFINISHED_HIGHSCHOOL).length
  }));
};

console.log(getFinishedHSEmployeesByCompany());

const btn = document.getElementById('btnAddPeople');

btn?.addEventListener('click', groupPeople);
filterByArea('IT');
