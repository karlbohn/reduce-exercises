function extractValue(arr, key) {
    return arr.reduce(function(accum, nextObj){
        accum.push(nextObj[key]);
        return accum;
    },[])
}


function vowelCount(str) {
    let arr = Array.from(str);
    let vowels = 'aeiouAEIOU';
    return arr.reduce(function(accum, next){
        let lowercase = next.toLowerCase()
        if (vowels.indexOf(lowercase) !== -1){
            if (accum[lowercase]) {accum[lowercase]++;
            }
            else accum[lowercase] = 1;
        }
        return accum;
    },{}) 
}


function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accum, next, idx){
        accum[idx][key] = value;
        return accum;
    },arr)
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {}
