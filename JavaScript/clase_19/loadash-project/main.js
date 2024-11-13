import _ from "lodash";

const array = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(_.chunk(array, 3));

const duplicar = (n) => {
  return n * 2;
};
const duplicados = _.map([1, 2, 3, 4, 5, 6], duplicar);
console.log(duplicados);

console.log(_.shuffle(array));

const primerPar = _.find([1, 3, 4, 5, 6], (n) => n % 2 === 0);
console.log(primerPar);

const aleatorio = _.sample([1, 2, 3, 4, 5, 6]);

console.log(`Numero aleatorio  ${aleatorio}`);
