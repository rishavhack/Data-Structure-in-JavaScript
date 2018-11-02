class Student {
	constructor(firstName,lastName,year){
		this.firstName = firstName;
		this.lastName = lastName;
		this.year = year;
		this.numb = 0;
		this.score = [];
	}
	getName(){
		return `The name is ${this.firstName} ${this.lastName}`;
	}
	getNumb(){
		this.numb += 1;
		if(this.numb >= 3){
			return "Bommmmm!!!"
		}
		return `The number is ${this.numb}`

	}
	getArray(x){
		this.score.push(x)
		return this.score
	}
	calculation(){
		let sum = this.score.reduce(function(a,b){return a+b;})
		return sum/this.score.length;
	}
}
let firstStudent = new Student('Rishav','Srivastava',2018)