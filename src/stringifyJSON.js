// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// {a: 1, b: 2} return "{a: 1, b: 2}"

var stringifyJSON = function(obj) {
  console.log(obj);
 var allKeys = Object.keys(obj).length;
  var tooString = function(val) {
    let babyString = "'" + val + "'";
    let parentString = babyString.replace(/\//g, '');
    return parentString;
  };

  if (obj === null) {
    return 'null';
  } 

  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } 

  if (typeof obj === 'string') {
    return '"' + obj.toString() + '"';
  } 

  if ((typeof obj === 'object') && (!Array.isArray(obj)) && (allKeys > 0)) { //In this case it is seeing 'obj' as null, so the length can't be calculated. 
    let string = [];
    _.each(obj, function(val, key) {
      if (typeof val !== 'boolean' && val !== null) {
        return string.push('"' + key + '"' + ':' + '"' + val + '"');
      } else if (Array.isArray(val)) {
        return stringifyJSON(val);
      } else if ((typeof(val) === 'object') && (!Array.isArray(val)) && (val !== null)) {
        return stringifyJSON(key);
      } else 
    return '{' + string.join(',') + '}';
    });
  } 

  if (Array.isArray(obj)) {
    var stringMap = _.map(obj, function(i) {
      if (typeof i === 'number') {
        return i.toString();
      } else if (Array.isArray(i)) {
        return stringifyJSON(i);
      } else return '"' + i.toString() + '"';
    });
    return '[' + stringMap + ']';
  }
};


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