import { PackageType } from "./PackageType";

export class BookAllowanceSetter {
	
	constructor(student) {
		this.student = student;
		
		this.rules = new Map();
		this.rules.set(PackageTypeEnum.Premium, new PremiumAllowanceRule());
	    this.rules.set(PackageTypeEnum.Standard, new StandardAllowanceRule());
	}
	
	setAllowance(type) {
		const factor = this.rules.get(type).getFactor();
		this.student.setMonthlyEbookAllowance(factor * 10);
	}
	
}
