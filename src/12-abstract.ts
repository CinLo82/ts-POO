import { Animal,Dogs } from "./09-protected";

const animal = new Animal('elite'); //al colocar la palabra abstract en la class Animal, no me permite crear mas instamcias del objeto animal
animal.greeting();

const cheis = new Dogs('cheis', 'cinlo');
cheis.greeting();
cheis.woof(2);
