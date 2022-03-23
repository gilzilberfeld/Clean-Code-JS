import {PackageTypeEnum} from './PackageType.js';
import {Student} from './Student.js';
import {StudentRepository} from './StudentRepository.js';
import {University} from './University.js';
import {universityRepository} from './UniversityRepository.js';

class StudentService {

	addIfValid(emailAddress, universityId){
		//SRP
		console.log("Log: Start add student with email " + emailAddress);

		if (emailAddress === "") 	{
			return false;
		}

		var studentRepository = new StudentRepository();

		if (studentRepository.exists(emailAddress))	{
			return false;
		}

		var universityRepository = new UniversityRepository();

		var university = universityRepository.getByID(universityId);

		var student = new Student(emailAddress, universityId);

		//SRP, OCP
		type = university.getPackageType();
		if ( type === PackageTypeEnum.Standard) {
			student.setMonthlyEbookAllowance(10);
		}
		else if (type === PackageTypeEnum.Premium) {
			student.setMonthlyEbookAllowance (10 * 2);
		}

		studentRepository.add(student);

		//SRP
		console.log("Log: End add student with email " + emailAddress);

		return true;//CQS

	}
	
	getStudentsByUniversity() {
		throw 'Not Implemented';
	}
	
	getStudentsByCurrentlyBorrowedEbooks() {
		throw 'Not Implemented';
	}
}
