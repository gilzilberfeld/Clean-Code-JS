import {Student} from './Student.js';

class StudentRepository {
	add(student) {
		throw "Not Implemented";
	}
	
	exists(emailAddress) {
		throw "Not Implemented";
    }

    createStudent(emailAddress, universityID) {
        return new Student(emailAddress, universityID);
    }

}
