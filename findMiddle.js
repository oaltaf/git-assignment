let findArray = [2, 3, 4, 5 ,5]
let findArray1 = []
let findArray2 = [1]
let findArray3 = 0;

function findMiddle(arr){

    if(arr.length===0 || arr.length === 1 || arr.length == null || arr.length== undefined){
        console.log("invalid array")
        return
    }
    else
    {
        if(arr.length % 2 === 0){
            return arr.length
        }
        else{
            let num = Math.ceil(arr.length/2);
            // console.log(Math.ceil(num))
            console.log(arr[num-1])
        }

    }
}

findMiddle(findArray)
findMiddle(findArray1)
findMiddle(findArray2)
findMiddle(findArray3)