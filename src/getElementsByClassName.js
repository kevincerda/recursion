// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //defining document.body to make it iterable(sp?)
  var elements = document.body;

  //Empty array to hold matching nodes/values
  var container = [];

  //Renamed for sanity sake (repeated often)
  var targetValue = className;

  //helper function & defining base condition
  var existsWithin = function(targetValue, matchedValues) {
    let allClasses = matchedValues.classList;
    if (allClasses && allClasses.contains(targetValue)) { //checking for parentNodes(i.e. 'body') with targeted className
      container.push(matchedValues);
    } 
    let concurrentNodes = matchedValues.childNodes; //'list' childNodes (make them iterable) 
    concurrentNodes.forEach(function(elem) { //iterate through 'listed' childNodes 
      existsWithin(targetValue, elem); //apply the helper function to 
    });
  }; //^ the above could probably also be achieved with the combination of a for & for in loop ^

  //recursive function call
  existsWithin(targetValue, elements); //Will run until/unless 'existsWithin' is true for both parent and child nodes 
  return container; //* something?;
};



