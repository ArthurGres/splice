let arr = [
  {name: 'Dima', age: 20},
  {name: 'Kolya', age: 10},
  {name: 'Ivan', age: 40},
  {name: 'Petya', age: 30},
];


//1. удаление елемента из массива объектов 
let deleteUser = arr.findIndex(item => item.name === 'Ivan');

arr.splice(deleteUser, 1);

console.log(arr);

//2. функцию 
//которая принимает массив объектов со свойством age 
//и возвращает средний возраст.


function averageScores({avg, n}, arr) {
  if (!arr.found) {

  return {
      avg: (arr.age + n * avg) / (n + 1),
      n:   n + 1,
  };
}
}

let initialVals = {avg: 0, n: 0};
let averageAge = arr.reduce(averageScores, initialVals).avg;
console.log("Итого:", averageAge);