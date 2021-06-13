export interface User {
	firstName: string,
	lastName: string,
	twitterHandle?: string,
	location: Location,
}

export interface Location {
	city: string,
	state: string
}
export class SuperUser {
	userStuff?: User | null;
	firstName?: String | null;
	lastName?: String | null;
	age?: Number | null;

	constructor(user?: User, firstName?: String, lastName?: String, age?: Number) {
		this.userStuff = user;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		
	}
}