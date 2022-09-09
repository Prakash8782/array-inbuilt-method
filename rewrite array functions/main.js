let a=[1,2,3,4,5];

function mySlice(array,start,end){
    let newArr=[];
    let index=0;
    for (let i = start; i < end; i++) {
        newArr[index] = array[i];
        index++;
    }
    return newArr;
}
let x=mySlice(a,1,4);
console.log(x);