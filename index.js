var recipes = {
  eggs: "2",
  sugar: "100 grams"
  
};


function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  
  return Object:assign ({}, recipes, { [ingredient]: amount });
  
}