function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks !== undefined){
        this.marks.push(...marks)
    } 
    return;
}

Student.prototype.getAverage = function () {
    if (this.marks !== undefined && this.marks !== 0){
        let average = this.marks.reduce((prev, mark) => prev + mark, 0) / this.marks.length;
        if (isNaN(average)){
        return 0;
        }
        return average; 
    }
    return 0;
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete Student.prototype.subject;
    this.excluded = reason;  
}
