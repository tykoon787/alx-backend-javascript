export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name === "string") {
            this._name = name;
        } else {
            throw new Error("Invalid Type. Expected String")
        }

        if (typeof length === "number") {
            this._length = length;
        } else {
            throw new Error("Invalid Type. Expected Number")
        }


        if (Array.isArray(students)) {
            this._students = students
        } else {
            throw new Error("Invalid Type. Expected Students")
        }
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName === "string") {
            this._name = newName;
        } else {
            throw new Error("Invalid Type. Expected String")
        }
    }

    get length() {
        return this._length;
    }

    set length(newLength) {
        if (typeof newLength === "number") {
            this._length = length;
        } else {
            throw new Error("Invalid Type. Expected Number")
        }
    }

    get students() {
        return this._students
    }

    set students(newStudents) {
        if (Array.isArray(newStudents)) {
            this._students = newStudents
        } else {
            throw new Error("Invalid Type. Expected Array")
        }
    }
}
