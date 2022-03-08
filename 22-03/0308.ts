#배열

let 배열 이름 = new Array(배열길이)
이렇게 선언합니다.

let array = new Array
array.push(1)
array.push(2)
array.push(3)

push()메서드를 이용해 array배열안에 1,2,3 이라는 원소들을 저장했습니다.

※ [] 단축구문

let numbers = [1,2,3]
let strings = ['Hello' , 'World']

[] 단축 구문을 이용해 배열을 선언할 수도 있습니다.

※자바스크립트에서 배열은 객체다.

자바스크립트에서 배열은 다른 언어와 다르게 객체다.
배열은 Array의 인스턴스인데, 클래스의 인스턴스는 객체이기 때문이다.

let a = [1,2,3]
let o ={name : 'Jakc', age : 32}

console.log(Array.isArray(a), Array.isArray(o))

Array.isArray()메서드는 매개변수로 전달 받은 심벌이 배열인지 객체 인지 알려준다.

※배열의 타입

타입스크립트에서 배열의 타입은 '아이텝 타입[]' 입니다.

let numArray : number[] =[1, 2, 3]
//정수형 배열
let stringArray : string[] =['Hello' , 'World']
//문자열 배열
type IPerson = {name : string , age ?: number}
let personArray :IPerson[] = [{name : 'Jane'} , {name :'Kane',age:23}]
//인터페이스 정의후 배열생성

※문자열과 배열 간 변환

문자열을 배열로 전환할때 String 클래스의 split메서드를 이용한다.

split(구분자 : string) : string[]

다음의 split함수는 매개변수로 전달받은 문자열과 구분자를 이용해 String 클래스의 split 메서드를 호출해 string[]타입으로 만들어준다.

const split =(str : string, delim: string = '') : string[] => str.split(delim)

console.log(
    split('hello'),
    split('h_e_l_l_o','_')
)

string[]타입의 배열을 다시 string으로 바꾸고 싶으면 join메서드를 사용한다.

join(구분자 : string) : string

join함수는 매개변수로 전달 받은 string[]타입을 배열과 구분자를 이용해 새 문자열을 반환한다.

const join = (strArray : string[], delim : string=''): string =>strArray.join(delim)

console.log(
    join(['h','e','l','l','o']),
    join(['h','e','l','l','o'], '_')
)

#인덱스 연산자

배열이 담고 있는 아이템 중 특정 위치에 있는 아이템을 얻고자 할때 인덱스 연산자를 이용합니다.

const number : number[] = [1,2,3,4,5]

for(let i=0;i < number.length; i++){
    const item : number = number[i]
    console.log(item)
}

const str : string[] = ['h','e','l','l','o']

for(let i=0;i < str.length; i++){
    const item : string = str[i]
    console.log(item)
}

#배열의 비구조화 할당

배열에서도 비구조화 할당을 적용할 수 있다.

let array : number[] = [1,2,3,4,5]

let [first, second, third, ...rest] = array

console.log(first,second,third,rest)

#for ...in문

for(변수 in 객체){
    ...
}
    
let names :string[] = ['Jane', 'Kane', 'James']

for(let i in names){
    const name :string = names[i]
    console.log(`${i} : ${names[i]}`)
}

배열의 인덱스 값을 순회한다.

let jack = {name:'Jack',age:15}

for(let i in jack){
    console.log(`${i} : ${jack[i]}`)
}
    
jack이라는 객체를 순회합니다.

#for ...of 문

for(let 변수 of 객체) {
    ...
}
    
let age = [1,2,3,4]

for(let age of [1,2,3,4]){
    console.log(age)
}
    
아이템값만이 필요할때는 for of문이 더 좋을 수 도 있습니다.


※제네릭 방식 타입

Generic(제네릭)이란?
    
제네릭은 데이터의 타입을 일반화 한다는 뜻이다.
제네릭은 자료형을 정하지 않고 여러 타입을 사용할 수 있게 해준다.
선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입이 아닌 다양한 타입을 쓸 수 있게 해준다.

배열을 다룰때 number[]와 같이 고정된 함수를 만들기 보다는 T[]을 이용해 한꺼번에 표현하는것이 편하다.

const arrayLength = (array) => array.array.length
    
배열의 길이를 나타내는 함수를 선언한다.

const arrayLength = (array : T[]) : number => array.length
    
 배열의 타입 주석을 T[]로 표현한다.
 
const arrayLength = <T>(array : T[]) : number => array.length
const isEmpty = <T>(array : T[]) : boolean => arrayLength<T>(array) == 0

 여기서 <T>는 Type의 약자 이다.

const arrayLength = <T>(array : T[]) : number => array.length
const isEmpty = <T>(array : T[]) : boolean => arrayLength<T>(array) == 0

let numArray : number[]= [1,2,3,4]
let stringArray : string[] = ['Hello', 'World']
type IPerson = {name : string, age ?: number}
let personArray : IPerson[] = [{'name' : 'jack'}, {'name' : 'Kane' , 'age' : 23}]

console.log(
    arrayLength(numArray),
    arrayLength(stringArray),
    arrayLength(personArray),
    isEmpty([]),
    isEmpty([1,2,3,4]),
    isEmpty(numArray)
)

※제네릭 함수의 타입 추론

함수이름<타입 변수>(매개변수)

이렇게 명시해 줍니다.

const identity = <T>(n : T): T => n

console.log(
    identity<boolean>(true)
)
    
※전개 연산자

let array1 = [1,2]
let array2 = [3]

let mergedArray =[...array1, ...array2, 4]
console.log(mergedArray)
    
배열에서도 전개연산자를 이용해 배열끼리 합칠 수 있습니다.

※range 함수 구현

const range = (from : number, to : number): number[] =>
    from < to ? [from, ...range(from +1,to)] : []

console.log(range(1,100+1))
