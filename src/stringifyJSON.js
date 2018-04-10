
var stringifyJSON = function(obj) {
  console.log(obj);

  if (obj === null) {
    return 'null';
  }
  if (obj === undefined) {
    return null;
  }
  if (!Array.isArray(obj) && typeof obj === 'object' && _.isEmpty(obj)) {
    return '{}';
  }

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"' + obj.toString() + '"';
  }

  //for Arrays
  if (Array.isArray(obj)) {
    var stringMap = _.map(obj, function(i) {
      return stringifyJSON(i);
    });
    return '[' + stringMap + ']';
  }
  //for Objects
  if (_.isObject(obj)) {
    //In this case it is seeing 'obj' as null, so the length can't be calculated.
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        return '{}';
      }
    }

    var objString = _.map(obj, function(val, key) {
      if (typeof val !== 'function' || typeof val !== 'undefined') {
        return stringifyJSON(key) + ':' + stringifyJSON(val);
      } else return stringifyJSON(key) + ':' + val;
    });
    return '{' + objString.join(',') + '}';
  }
};
 

 // this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// {a: 1, b: 2} return "{a: 1, b: 2}"

 // var allKeys = Object.keys(obj).length; - used to test for empty obj
/* PLAN B
var stringifyJSON = function(obj) {
  //console.log(obj);

//base case: 
if (_.each(obj, function(i){ typeof i === 'string'; })) {
  return obj;
};

//recursive function:
var tooString = function(val) { 
      let child = "'" + val + "'";
      let parent = child.replace(/\//g, '');
    return parent
 }

//recursive function call:
var strungOut =  _.map(obj, function(values) {
  tooString(values);
 });
return strungOut
}
PLAN B */ 

//Base case: Everything has been stringified (i.e. tooString has been run as deeply as possible.);
  //Base condition: _.each(i) // _.every(); console.log(typeof[i]) would return 'string'
     //Base code: if (_.every(obj, function(i){ typeof i === 'string' }))

//Recursive case: an otherwise infinite function loop, that is stopped once the Base Case Condition === true.
 //Recursive Function Call: 'tooString' Unless all itmes === 'string'

 // VERSION 1 OBJECT TEST:
    // let string = [];
    // _.each(obj, function(val, key, obj) {
    //   if ((typeof val !== 'function' ) && (typeof val !== 'undefined')) {
    //     return string.push('"' + stringifyJSON(key) + '"' + ':' + '"' + stringifyJSON(val) + '"');
    //    } 
    //   return '{' + string.join(',') + '}';
    // });


  // console.log(obj);
  // if (obj === null) {
  //   return 'null'
  // } else if
  // (typeof(obj) === 'string'){
  //  return '"' + obj.toString() + '"';
  // } else if (typeof(obj) === 'number') {
  //  return obj.toString();
  // } else if (Array.isArray(obj)) {
  //   return "'" + obj + "'"
  // } else if (typeof(obj) === 'boolean'){
  //   return "'" + obj + "'"
  // } else 
  //  return 

  //   if (!Array.isArray){
//     _.mapObject(obj, function(i){ return i[j].toString(); })  
//   } else 
// _.map(obj, function(i){ returin i.toStrinogbj