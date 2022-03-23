export class AllowanceRule{
    getFactor(){

    }
}
export class PremiumAllowanceRule extends AllowanceRule {
	getFactor() {
		return 2;
	}
}

export class StandardAllowanceRule extends AllowanceRule {
    getFactor() {
		return 1;
	}
}
