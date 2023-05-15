import { Dogs } from "./08-inheritance";

// function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: number) | string {
//   return value;
// }


function getValue<T>(value: T) { //*Usar T es una convención para tus propios tipados
return value;
}

getValue<number>(12).toFixed()
getValue<string>('12').length
getValue<boolean>(true).toString()

const doggy =new Dogs('doggy', 'Snoop dog')
getValue<Dogs>(doggy)
