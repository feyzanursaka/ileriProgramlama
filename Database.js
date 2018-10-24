class Course {
    constructor (name, time, date, rooms) {
        this.name = name;
        this.time = time;
        this.date = date;
        this.rooms = rooms;
    }
    toString () {
        return "Name = "+ this.name; 
    }
}
class Student {
    constructor (id, name, gpa, courses) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
        this.courses = courses;
    }
    toString () {
       return "Name = "+ this.name+ " ID = "+ this.id ; 
    }
}
class Point {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
    toString () {
        return " x = "+ this.x+ " y = "+this.y; 
    }
}
class Point3D extends Point {
    constructor (x, y, z) {
        super(x,y);
        this.z = z;
    }
    toString () {
       return " x = "+ this.x+ " y = "+this.y + " z = "+this.z;
    }
}
class Distance {
    constructor (km = 0) {
        this.km = Math.round(km);
    }
    get miles () {
        return Math.round(this.km /1000);
    }
    set miles (value = 0) {
      this.km =Math.round(value*1000);
    }
    toString () {
        return this.km + " km"; 
    }
    static fromMiles(value) {
        let t = new Distance();
        t.miles = value;
        return t;
    }
}
class CW4 extends Menu {
    constructor () {
        super()
        var ders = new Course("Ileri Programlama", "15:00", new Date("2018-10-24"), "D105");
        this.student = new Student(3456, "Ayse Sena Feyiz", 3.0, ders);
        this.course = ders;
        this.distance = new Distance(300);
        this.point = new Point(3,4);
        this.point3d = new Point3D(3,4,5);
    }
}
