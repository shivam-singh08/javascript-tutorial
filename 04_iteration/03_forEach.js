/**
 * for each --> 
 * 
 */

const coding  = ['js', 'ruby', 'java', 'py', 'cpp'];

// coding.forEach(function (item){
//     console.log(item); 
// })

// coding.forEach((item)=>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item); 
// }

// coding.forEach(printMe) //pass a function as parameter pass as reference don't call function ().

//for each have the each value of array n its index also a complete array.

coding.forEach((item,index,arr)=>{
    //console.log(item, index, arr);
    /**
     *  js 0 [ 'js', 'ruby', 'java', 'py', 'cpp' ]
        ruby 1 [ 'js', 'ruby', 'java', 'py', 'cpp' ]
        java 2 [ 'js', 'ruby', 'java', 'py', 'cpp' ]
        py 3 [ 'js', 'ruby', 'java', 'py', 'cpp' ]
        cpp 4 [ 'js', 'ruby', 'java', 'py', 'cpp' ]
     */
    
})

const myCoding =[{
    langName: 'javascript',
    langFileName:'js'
},
{
    langName: 'Python',
    langFileName: 'py',
},{
    langName: 'java',
    langFileName: 'java'
}]

myCoding.forEach((item)=>{
    console.log(item.langName);
    
})

//for each does not return any value.

const value = coding.forEach(function (item){
    console.log(item); 
    return item;
})
console.log(value); //undefined.

