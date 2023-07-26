class Player{
    constructor(name, birthDay, noOfMonths, monthlySalary) {
        this.name = name;
        this.birthDay = birthDay;
        this.noOfMonths = noOfMonths;
        this.monthlySalary = monthlySalary
    }
    calculate_age() {
        const diff_ms = Date.now() - new Date(this.birthDay).getTime();
        const age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear()-1970);
    }

    getSalary(){
        return (this.monthlySalary * this.noOfMonths).toLocaleString();
    }
}

const sakib = new Player ("Sakib", "1987-03-24", 200000, 12);
console.log(sakib.calculate_age ());
console.log(sakib.getSalary ()) ;