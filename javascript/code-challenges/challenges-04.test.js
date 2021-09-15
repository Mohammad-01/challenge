'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function named addAnimal that takes in array of animals (strings) and some callback function.

This function should first create a new array. Then iterate over the input array and modify each value based on the callback function provided.

Push each updated animal string into the new array. Return the new array.

HINT: Look at the tests to see how the callback functions are used.

------------------------------------------------------------------------------------------------ */

function upper(str) {
  return str.toUpperCase();
}

function lower(str) {
  return str.toLowerCase();
}

const updateAnimal = (array, callback) => {
  // Solution code here...
  let edit = [];
  array.map( value => 
    { edit.push(callback(value)); }
    );
  return edit;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function called sortNames that takes an array of names and sorts them alphabetically. Capital letters should come before lowercase letters.

For example: 'Cat' would come before 'apple'
------------------------------------------------------------------------------------------------ */

const sortNames = (array) => {
  // Solution code here...
  array.sort();
  return array;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function called sortNumbers that takes an array of numbers and sorts them from smallest to largest.

HINT: Beware... JS default is "Lexical" ordering.
------------------------------------------------------------------------------------------------ */

const sortNumbers = (array) => {
  // Solution code here...
  array.sort((first, second) => {
  if ( first < second ){
    return -1;
  }
  if ( first > second ) {
    return 1;
  }
  return 0;
  });
  return array;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named sortBackwards that takes in an array of numbers and returns the same array, with the numbers sorted, largest to smallest.

HINT: Do it with a custom sort callback, not with using `.reverse()`. ;)
------------------------------------------------------------------------------------------------ */

const sortBackwards = (array) => {
  // Solution code here...
  array.sort(( first, second ) => {
    if ( first > second ) {
      return -1;
    }
    if ( first < second) {
      return 1;
    }
    return 0;
  });
  return array;

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named alphabetize that takes in an array of strings and returns the same array with the strings sorted alphabetically.

In this alphabetization, capital letters come before lower case letters.

For example, ['Alphabet', 'Zebra', 'alphabet', 'carrot'] is correctly sorted.
------------------------------------------------------------------------------------------------ */

const alphabetize = (array) => {
  // Solution code here...
  array.sort(( first, second ) => {
    if ( first < second ) { 
      return -1;
    }
    if ( first > second ) {
      return 1;
    }
    return 0;
  });
  return array;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
*****
Write a function named sortByPrice that takes in an array of objects, each of which has a 'price' property, and sorts those objects by price, lowest to highest, returning the same array.

Here is an example of the input:
[
  {name: 'Sweatshirt', price: 45},
  {name: 'Bookmark', price: 2.50},
  {name: 'Tote bag', price: 15}
];
------------------------------------------------------------------------------------------------ */

const sortByPrice = (array) => {
  // Solution code here...
  array.sort(( first, second ) => {
    if ( first.price < second.price ) {
      return -1;
    }
    if ( first.price > second.price ) {
      return 1;
    }
    return 0;
  });
  return array;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-03.test.js
------------------------------------------------------------------------------------------------ */

// challenge 1
describe('Testing challenge 1', () => {
  test('It should return an array of uppercase animal names', () => {
    const arr = ['BeAr', 'lIon'];
    expect(updateAnimal(arr, upper)[0]).toStrictEqual('BEAR');
    expect(updateAnimal(arr, upper)[1]).toStrictEqual('LION');
  });
  test('It should return an array of lowercase animal names', () => {
    const arr = ['BeAr', 'lIon'];
    expect(updateAnimal(arr, lower)[0]).toStrictEqual('bear');
    expect(updateAnimal(arr, lower)[1]).toStrictEqual('lion');
  });
});

// challenge 2
describe('Testing challenge 2', () => {
  test('It should return an array of names sorted alphabetically', () => {
    expect(sortNames(['able', 'Bob'])[0]).toStrictEqual('Bob');
  });
});

// challenge 3
describe('Testing challenge 3', () => {
  test('It should sort low-to-high the numbers in an array', () => {
    expect(sortNumbers([8, 3, 2, 9, 12, 1, 115])).toStrictEqual([1, 2, 3, 8, 9, 12, 115]);
  });
});

// challenge 4
describe('Testing challenge 4', () => {
  test('It should sort high-to-low the numbers in an array', () => {
    const nums = [3,4,5,6,7];
    expect(sortBackwards(nums)).toStrictEqual([7,6,5,4,3]);
    expect(sortBackwards([3,2,1])).toStrictEqual([3,2,1]);
    expect(sortBackwards([12,20,3])).toStrictEqual([20, 12, 3]);
    expect(sortBackwards([])).toStrictEqual([]);
    expect(sortBackwards([1])).toStrictEqual([1]);
  });
});

// challenge 5
describe('Testing challenge 5', () => {
  test('It should sort strings alphabetically', () => {
    expect(alphabetize(['alphabet', 'Zebra', 'Alphabet', 'carrot'])).toStrictEqual([ 'Alphabet', 'Zebra', 'alphabet', 'carrot']);
    expect(alphabetize(['alphabet','Alphabet', 'carrot'])).toStrictEqual([ 'Alphabet', 'alphabet', 'carrot']);
    expect(alphabetize([])).toStrictEqual([]);
  });
});

// challenge 6
describe('Testing challenge 6', () => {
  test('It should sort items by their price', () => {
    expect(sortByPrice([
      {name: 'Sweatshirt', price: 45},
      {name: 'Bookmark', price: 2.50},
      {name: 'Tote bag', price: 15}
    ])).toStrictEqual([
      {name: 'Bookmark', price: 2.50},
      {name: 'Tote bag', price: 15},
      {name: 'Sweatshirt', price: 45},
    ]);
    expect(sortByPrice([{price: 12}, {price: 10}])).toStrictEqual([{price: 10}, {price: 12}]);
    expect(sortByPrice([])).toStrictEqual([]);
  });
});
