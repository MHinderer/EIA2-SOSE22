interface Student {
  name: string;
  matrikel: number;
  grades: [module: string]: number;
}
let students: Student[] = [];

students.push({ name: "Big Brain", matrikel: 123456, grades: { EIA1: 2.5 } });
