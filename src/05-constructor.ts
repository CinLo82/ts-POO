export class MyDate {

  constructor (
    public year: number = 1998,
    public month: number = 8,
    private day: number = 10
  ){}

  private addPadding(value: number){
    if (value < 10 ) {
      return `0${value}`;
    }
    return `${value}`;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);

    return `${day}/${month}/${this.year}`;
  }


  add(amount: number, type: 'days' | 'months' | 'years') {
    if(type === 'days') {
      this.day += amount;
    }
    if(type === 'months') {
      this.month += amount;
    }
    if(type === 'years') {
      this.year += amount;
    }
  }
  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1993,7,12);
console.log(myDate.printFormat());
console.log(myDate.getDay());

const myDate2 = new MyDate();
console.log('() => ', myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log('(2022) => ', myDate3.printFormat());

const myDate4 = new MyDate(2022, 3);
console.log('(2022, 3) => ', myDate4.printFormat());
