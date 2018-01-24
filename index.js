var recipes = {
  eggs: "2",
  sugar: "100 grams"
  
};


function updateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign ({}, object, key, value);
}