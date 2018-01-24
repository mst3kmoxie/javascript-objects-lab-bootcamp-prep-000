var recipes = {
  eggs: "2",
  sugar: "100 grams"
  
};


function updateObjectWithKeyAndValue(obj, key, value) {
  
  return Object.assign({}, obj, { [key]: value });

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object.key = value;
  return object;
  
}