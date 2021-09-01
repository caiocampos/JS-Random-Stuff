export class GradeSchool {
  constructor() {
    this.grades = [];
  }

  roster() {
    const grades = {};
    for (const n of this.grades.keys()) {
      if (this.grades[n]) {
        grades[n] = this.grade(n);
      }
    }
    return grades;
  }

  add(name, grade) {
    this.grades[grade] = this.grades[grade] || [];
    this.grades[grade].push(name);
  }

  grade(n) {
    const grade = this.grades[n] || [];
    return grade.slice(0).sort();
  }
}
