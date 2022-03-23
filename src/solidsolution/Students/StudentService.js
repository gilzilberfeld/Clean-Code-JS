import { BookAllowanceSetter } from './BookAllowanceSetter.js';
import {Logger} from './Logger.js';
import {PackageTypeEnum} from './PackageType.js';
import {Student} from './Student.js';
import {StudentRepository} from './StudentRepository.js';
import {University} from './University.js';
import {UniversityRepository} from './UniversityRepository.js';

class StudentService {

    addIfValid(emailAddress, 
            universityId, 
            studentRepository,
            universityRepository) {

        Logger.log("Start add student with email", emailAddress);

        validateEmail(emailAddress);

        if (studentRepository.exists(emailAddress)) {
            return;
        }

        var university = universityRepository.getByID(universityId);
        var student = studentRepository.createStudent(emailAddress, universityId);

        type = university.getPackageType();

        var allowanceSetter = new BookAllowanceSetter(student);
        allowanceSetter.setAllowance(type);

        studentRepository.add(student);

        Logger.log("End add student with email", emailAddress);

    }

    validateEmail(emailAddress) {
        if (emailAddress === "")
            throw new InvalidEmail("Empty");
    }

    getStudentsByUniversity() {
        throw 'Not Implemented';
    }

    getStudentsByCurrentlyBorrowedEbooks() {
        throw 'Not Implemented';
    }

}
