#객체의 타입 변환

타입 변환은 타입이 있는 언어들이 다른 타입의 값으로 변환하는 것을 의미한다. 

ex)
let person : object = {name : "jack" , age : 23};
person.name <--오류

person의 변수 타입은 object이다. 그런데 object타입은 name 속성을 가지지 않으므로 오류가 발생한다.

let person : object = {name : 'jack' , age : 23};
console.log((<{name : string}> person).name)

이렇게 타입 변환을 하게되면 오류가 나지 않게 된다.

#타입 단언

(<타입>객체)
(객체 as 타입)

타입 단언 형식에는 두 가지 형식이 있습니다.

//INamealbe.ts
export default interface INameable {
    name : string
    age : number
}
import INameable from './INameable'
//
먼저 INameable.ts 라는 파일을 만들어 INameable 이라는 타입을 만들어 줍니다.

let obj : object = {name : 'jack' , age : 23}

let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name

let age1 = (<INameable>obj).age
let age2 = (obj as INameable).age

console.log(name1)
console.log(name2)
console.log(age1)
console.log(age2)

타입 단언문으로 출력합니다.
