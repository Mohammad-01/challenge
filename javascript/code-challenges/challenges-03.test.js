    'use strict';

    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 1 - Review

    Write a function called addTwo that takes in an array and adds two to every value using a for loop. Place the new value in a new array. Return the new array.
    ------------------------------------------------------------------------------------------------ */

    const addTwo = (array) => {
      const edit = [];
      for(let count = 0; count<array.length; count++){
        edit.push(array[count] + 2);
      }
      return edit;
    };

    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 2

    Write a function named typeNum that, given an array as input, uses filter to return an array containing only the numbers.

    For example, typeNum([1, 'bob' ,3]) returns [1,3].
    ------------------------------------------------------------------------------------------------ */

    const typeNum = (array) => {
      const edit = array.filter( number => !isNaN( number ));
      return edit;
    };

    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 3

    Write a function named containsAnd that, given an array of strings as input, uses filter to return an array containing only strings that contain 'and' within the string.

    For example, containsAnd(['panda', 'ran', 'and']) returns ['panda', 'and'].
    ------------------------------------------------------------------------------------------------ */

    const containsAnd = (array) => {
      const edit = array.filter(name => name.includes('and'));
      return edit;
    };

    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 4

    Write a function named oddValues that, given an array of integers as input, uses filter to return an array containing only the odd integers.

    For example, oddValues([1,2,3]) returns [1,3].
    ------------------------------------------------------------------------------------------------ */

    const oddValues = (array) => {
    return array.filter( numbers => ( numbers % 2 )); 
    };

    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 5

    Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.

    For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].
    ------------------------------------------------------------------------------------------------ */

    const notInFirstArray = (value, array) => {
      const edit = array.filter( number => !(value.includes( number )));
      return edit;
    };

    // Test 

    // Challenge 1
    describe('Testing challenge 1', () => {
      test('It should add two to every value', () => {
        expect(addTwo([1, 2, 4])).toStrictEqual([3, 4, 6]);
      });
    });

    // Challenge 2
    describe('Testing challenge 2', () => {
      test('It should return an array containing only numbers', () => {
        expect(typeNum([1, 'bob', 3])).toStrictEqual([1, 3]);
        expect(typeNum([1, 'bob', 3]).length).toStrictEqual(2);
        expect(typeNum(['banana', 'apples', 'cherry'])).toStrictEqual([]);
        expect(typeNum([2, 3, 5])).toStrictEqual([2, 3, 5]);
      });
    });

    // Challenge 3
    describe('Testing challenge 3', () => {
      test('It should return an array of strings containing the word and', () => {
        expect(containsAnd(['panda', 'ran', 'and'])).toStrictEqual(['panda', 'and']);
        expect(containsAnd(['banana','bob','xyz'])).toStrictEqual([]);
        expect(containsAnd([])).toStrictEqual([]);
        expect(containsAnd(['and', 'sand'])).toStrictEqual(['and', 'sand']);
      });
    });

    // Challenge 4
    describe('Testing challenge 4', () => {
      test('It should return an array containing only odd integers', () => {
        expect(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([1, 3, 5, 7, 9]);
        expect(oddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toStrictEqual(5);
        expect(oddValues([2,3,4,179])).toStrictEqual([3,179]);
        expect(oddValues([2,4,6,8])).toStrictEqual([]);
      });
    });

    // Challenge 5
      describe('Testing challenge 5', () => {
        const firstNums = [1, 2, 3];
        const secondNums = [1, 2, 3, 4];

        const firstStrings = ['Demi', 'Gregor', 'Hound'];
        const secondStrings = ['Gary', 'Charlotte', 'Demi', 'Gregor', 'Hound'];

      test('It should return an array that includes any elements not in the first array', () => {
        expect(notInFirstArray(firstNums, secondNums)).toStrictEqual([4]);
        expect(notInFirstArray(firstNums, secondNums).length).toStrictEqual(1);
      });

      test('It should also work with an array of strings', () => {
        expect(notInFirstArray(firstStrings, secondStrings)).toStrictEqual(['Gary', 'Charlotte']);
        expect(notInFirstArray(firstStrings, secondStrings).length).toStrictEqual(2);
      });

      test('It should work with empty arrays', () => {
        expect(notInFirstArray([], [])).toStrictEqual([]);
        expect(notInFirstArray([], [1,2,3,4,5])).toStrictEqual([1,2,3,4,5]);
        expect(notInFirstArray([1,2,3,4,5], [])).toStrictEqual([]);
      });
    });
