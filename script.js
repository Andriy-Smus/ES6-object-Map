// Завдання 1. forEach

let arr1 = [5, 6, 7, 8, 9];
let sum = 0;
arr1.forEach(element => sum += element);
console.log(sum);

// Завдання 2. Map

let arr2 = [5, 6, 7, 8, 9];
let arr2Squre = arr2.map(element => element*element);
console.log(arr2Squre);

// Завдання 3. Every

let arr3 = [
  {
    name: 'Ivan',
    country: 'Ukraine'
  },
  {
    name: 'Petro',
    country: 'Ukraine'
  },
  {
    name: 'Miguel',
    country: 'Cuba'
  }
]

const arr3Ver = arr3.every(element => element.country.toLocaleLowerCase() === 'ukraine');
console.log(arr3Ver);

// Завдання 4. Some

let arr4 = [
  {
    name: 'Ivan',
    country: 'Ukraine'
  },
  {
    name: 'Petro',
    country: 'Ukraine'
  },
  {
    name: 'Miguel',
    country: 'Cuba'
  }
]

const arr4Ver = arr4.some(element => element.country.toLocaleLowerCase() === 'cuba');
console.log(arr4Ver);

// Завдання 5. Filter

let arr5 = [1, 'string', [3, 4], 5, [6, 7]];

let arr5New = arr5.filter(element => Array.isArray(element));
console.log(arr5New);

// Завдання 6. Reduce

let arr6 = [1, 2, 5, 0, 4, 5, 6];

let a = 0;
let arr6Sum1 = arr6.reduce((sum, elem) => {
	if (elem == 0) {
		a = sum;
	} else {
		return sum + elem;
	}
});
console.log(a);  

let b = 0;
let x;

let arr6Sum2 = arr6.reduce((sum, elem) => {
  b++
  if (sum > 10) {
		x = b;
	} else {
		return sum + elem;
	}
})
console.log(x);  

// Завдання 7. Любим методом

let arr7 = [1, -2, 3, 0, 4, -5, 6, -11];

let arr7Plus = arr7.filter(elem => elem > 0);
let arr7Result = arr7Plus.reduce((sum, elem) => sum + elem);
console.log(Math.sqrt(arr7Result));





