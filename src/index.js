var arr = [[1,2],[3,4,5],[6,7],[1,[2,3,[4,5]]]];


function product(arr) {
    var prod = 1;
    for(var i = 0;i<arr.length;i++){
        if(typeof arr[i] === "object"){
            prod *= product(arr[i])
        }else{
            prod *= arr[i]
        }
    }
    return prod;
}

console.log(product(arr))