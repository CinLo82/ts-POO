export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSometring() {
    console.log('dooo');
  }
}

export class Dogs extends Animal {

  constructor(
    name: string,
    public owner: string
    ) {
      super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
       console.log(`Woof! ${this.name}`);
    }
   this.doSometring();
  }

  move() {
    console.log('movieng as a dog');
    super.move();
  }
}

const cheis = new Dogs('cheis', 'cinlo');
//cheis.name = 'caty';
cheis.woof(1);
cheis.move();
