"use strict";
console.group('1. Sukurkite klasę tėvinę Person vaikinėms klasėms ir išsaugokite joje bendrą funkcionalumą.');
{
    class Person {
        static count = 0;
        name;
        surname;
        id;
        constructor(name, surname) {
            Person.count += 1;
            this.id = `Person_${Person.count}`;
            this.setName(name);
            this.setSurname(surname);
        }
        setName(value) {
            this.name = value;
        }
        setSurname(value) {
            this.surname = value;
        }
        get FullName() {
            return `${this.name} ${this.surname}`;
        }
    }
    class Student extends Person {
        marks;
        constructor(name, surname) {
            super(name, surname);
            this.marks = [];
        }
        addMark(mark) {
            this.marks.push(mark);
        }
        getAvg() {
            return this.marks.reduce((currentValue, previousValue) => (currentValue + previousValue)) / this.marks.length;
        }
    }
    class Lecturer extends Person {
        static MIN_SALARY = 1800;
        static MAX_SALARY = 4400;
        static GPM_PERC = 0.20;
        static PSD_PERC = 0.0698;
        static VSD_PERC = 0.1252;
        PrivateSalary;
        constructor(salary, name, surname) {
            super(name, surname);
            this.PrivateSalary = salary;
        }
        set salary(value) {
            if (value < Lecturer.MIN_SALARY)
                throw new Error('Atlyginimas per žemeas');
            if (value > Lecturer.MAX_SALARY)
                throw new Error('Atlyginimas per didelis');
            this.PrivateSalary = value;
        }
    }
    const people = [
        new Person('Alius', 'Grigaliūnas'),
        new Person('Antanas', 'Grigaliūnas'),
        new Person('Juozas', 'Grigaliūnas'),
    ];
    console.group('1.1. Sukurkite klasę Person, kurios objektams būtų galima priskirti vardą ir pavardę. Šios klasės objektams turi susigeneruoti id - unikalus raktas. Taip pat sukurkite get"erį fullname, kuris grąžina vardą ir pavardę atskirtus tarpu. Atspausdinkite kelis šios klasės objektus, ir pademonstruokite get"erio veikimą.');
    {
        const peopleFullname = people.map((p) => p.FullName);
        console.log(peopleFullname);
    }
    console.groupEnd();
    console.group('1.2. Sukurkite klasę Student, kuri paveldėtų klasę Person. Be Person klasės paveldimų savybių, klasę Student turi turėti savybę "marks", kurioje bus saugomi studento pažymiai. Konstruktoriaus vykdymo metu, "marks" reikšmei turi būti sukuriamas tuščias masyvas. Student klasėje sukurkite metodą "addMark" kuris leistų įdėti naują pažymį - sveiką skaičių nuo 1 iki 10. Taip pat sukurkite get"erį "avg", kuris skaičiuotų studento vidurkį pagal esamus pažymius. Sukurkite bent 2 Student klasės objektus ir atspausdinkite visus get"erius ir pavaizduokite metodų funkcionalumą konsolėje.');
    {
        const Student1 = new Student('Alius', 'Grigaliūnas');
        Student1.addMark(6);
        Student1.addMark(7);
        Student1.addMark(10);
        Student1.getAvg();
        console.log(Student1);
        console.log(Student1.getAvg());
        const Student2 = new Student('Juozas', 'Petraitis');
        Student2.addMark(8);
        Student2.addMark(6);
        Student2.addMark(4);
        console.log(Student2);
        console.log(Student2.getAvg());
    }
    console.groupEnd();
    console.group('1.3. Sukurkite klasę Lecturer, kuri paveldėtų klasę Person. Papildomai klasei Lecturer sukurkite savybę "salary", kuri privalo būti priskirta objekto sukūrimo metu. Inkapsuliuokite savybę "salary" taip, kad ji galėtų būti skaičius nuo 1800 iki 4400 su ne daugiau nei 2 skaičiais po kablelio. Taip pat sukurkite get"erį "salaryNeto", kuris atspausdintų suapvalintą atlyginimą iki sveikų skaičių atskaičiavus mokesčius: GPM 20%, PSD 6.98%, VSD 12.52%. Sukurkite bent 2 Lecturer klasės objektus ir atspausdinkite visus get"erius konsolėje.');
    {
        const lectur1 = new Lecturer('Juozas', 'Petraitis');
        const lectur2 = new Lecturer('Povilas', 'Smetona');
        const lecturers = [lectur1, lectur2];
        const pay = 1900;
        const pay2 = 2600;
        console.log(lectur1);
        lecturers.forEach(({ FullName }) => console.log(FullName));
    }
    console.groupEnd();
    console.group('1.4. Sukurkite viešai [1.] užduočiai pasiekiamą masyvą "allPeople". [1.1], [1.2] ir [1.3] užduotyse sukurtus objektus įdėkite į šį masyvą. Atspausdinkite visų žmonių elementų "fullname"');
    {
    }
}
console.groupEnd();
//# sourceMappingURL=main.js.map