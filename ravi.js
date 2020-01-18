// var name = "sdsada"
// var a = "5"
// var b = "5"
// var c = 4
// let d = a-b
// console.log(a,typeof a)
// console.log(b,typeof b)
// console.log(c,typeof c)
// console.log(d,typeof d)
// console.log(a+b)
// console.log(5 == '5')
// console.log(5 === '5')
// let test = 5==6 ? "avinash" : "ravi teja"
// console.log(test)


let a = ['a','b','c','d']
// for(let i=0;i<a.length;i++)
// {
//     console.log(a[i])
// }

// a.map((a)=>{console.log(a)})

// a.forEach(element => {
//     console.log(element)
// });

// for (const b of a) {
//     console.log(b)
// }

let obj = {
    key1 : "avinash",
    key2 : "ravi",
    key3 : ["avinash","ravi"]
}

obj.key4 = "edhokati pettu"; 
delete obj["key2"];
// ----------------------------------------
// display data in object
// console.log(JSON.stringify(obj));
// console.log(Object.keys(obj));
//dot donation to print values of a key
console.log(obj.key1)
console.log(obj["key1"])
let t = Object.keys(obj)
for(let i=0; i < t.length ;i++){
    console.log(obj[t[i]]) 
    
}
