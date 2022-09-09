let colors=["Red","Blue","Green","Yellow","Pink"];
console.log("colors : ", colors);
console.log("length of an array : ",colors.length);
console.log("method : array.splice()");
colors.splice(3,1,"Black");
console.log("change in array :", colors);
console.log("return : length of array after splice(); is "+colors.length);