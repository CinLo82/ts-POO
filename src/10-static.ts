console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1,3,4,4,7,8,5,3));

class MyMath {
  static readonly PI = 3.14; // readonly hace que no se pueda sobreescribir su valor

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max: item);
  }
}

// const math = new MyMath();
// math.PI;

console.log('MyMath', MyMath.PI);
console.log('MyMath.max', MyMath.max(1,2,3,4,7,4));

const numbers = [1,2,3,4,7,4];
console.log('MyMath.max', MyMath.max(...numbers));

console.log('MyMath.max', MyMath.max(-1, -7, -9));
