let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
let newList=theBools.map(function(val) {
    if (val===0)
    return "woko"
    else
    return "wiki"


});
console.log(newList);