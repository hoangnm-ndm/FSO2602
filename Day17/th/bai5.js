Array.prototype.map2 = function (callback){

    const array = new Array(this.length)
    const length = this.length

    for(let i = 0; i< length; i++){
        if (i in this){
            array[i] = callback(this[i], i, this)
        }
    }

    return array
}



const numbers = [1,2,3,4]

const a = numbers.map2(
    (item, index, array)=>{
    return item*2
}
)
// [2,4,6,8]