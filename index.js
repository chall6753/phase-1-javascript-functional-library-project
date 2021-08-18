function myEach(collection, callBack){
    console.log(collection.isArray)
    let array 
    if (collection.isArray === 'true'){
        array = collection
    }else{
        array = Object.values(collection) //the test goes for object.value
    }
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        callBack(ele)
    }
return collection 
};
   
function myMap(collection, callBack){
    let array 
    let newCollection = []
    if (collection.isArray === 'true'){
        array = collection
    }else{
        array = Object.values(collection)
    }
    for (let i = 0; i < array.length; i++) {
        let ele = callBack(array[i]);
        newCollection.push(ele)
    }
   return newCollection 
}

function myReduce(collection, callBack, acc){
    let i
    if (Array.isArray(collection) === true){
        // console.log('is array')
    }else{
        collection = Object.values(collection)
        // console.log('yeet')
    }
    if (acc === undefined){
        acc = collection[0]
        i = 1
    } else {
        i = 0
    }
    for (i = i; i < collection.length; i++) {
        // console.log(collection[i])
        console.log(`begining ${acc}`)
        let val = parseFloat(collection[i])
        acc = callBack(acc,val)
        console.log(`end ${acc}`)
    }
    console.log(acc)
   return acc
}


const testArr = [1, 2, 3, 4]
const callback = (acc, val, collection) => (acc + (val * 3))
myReduce(testArr, callback)


