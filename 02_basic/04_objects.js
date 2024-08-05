/**
 * singleton using contructor or Object.create()
 */

const ObjUser2 = new Object(
    {name: 'shivam',
    "full name":'shivam singh',
    age: 24,
    location: 'Delhi',
    email: 'shivam@yopmail.com',
    isLoggedIn: false,
    lastLoginDate:['monday','sunday']}
);

const ObjUser = {};

ObjUser.id ='123abcd';
ObjUser.name ='javascript';
ObjUser.isLoggedIn = false;

console.log(ObjUser);
console.log(ObjUser2);

const regularUser = {
    email:'firstEmail@gmail.com',
    fullname:{
        userFullname:{
            firstName:'shivam',
            lastName:'singh',
        }
    }
}

console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'a', 4:'b'}

//combining all object into single 

const obj3 = Object.assign(obj1,obj2);
console.log(obj3);
// other way is using ... spread opearator.

console.log(ObjUser);
console.log(Object.keys(ObjUser));
console.log(Object.values(ObjUser));
console.log(Object.entries(ObjUser));
/** entries return all key value as array
 * [
  [ 'id', '123abcd' ],
  [ 'name', 'javascript' ],
  [ 'isLoggedIn', false ]
]
 */

//object destructuring


const course ={
    courseName: 'javaScript',
    price:'999',
    courseInstructor: 'hello'
}
//course.courseInstructor instead of accessing the key this way we can use destructuring.
 
const {courseInstructor: instructor} = course; //we can rename it into something new if it is long after giving meaningful name after :
console.log(instructor);

