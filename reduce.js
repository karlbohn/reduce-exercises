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


function partition(arr, callback) {
    return arr.reduce(function(accum, next){
        if (callback(next)){
            accum[0].push(next);
        }
        else {
            accum[1].push(next);
        }
        return accum;
    }, [[],[]])
}