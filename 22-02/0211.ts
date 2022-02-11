#타입스크립트 변수 선언문

//변수 선언 방법

let 변수이름 = [초깃값]
const 변수이름 = 초깃값
const로 변수 설정 할때는 무조건 초깃값을 설정 해야함.

//타입 주석

타입 주석은 변수 선언문을 확장해 타입을 명시해주는 것을 의미한다.

let 변수이름: 타입 = [초깃값]
const 변수이름: 타입 = 초깃값

ex)
let a : number = 1 //숫자 타입
let b : boolean = true //불린 타입
let c : string = 'true' //문자열 타입
let d : object = {} //객체 타입

#let으로 선언한 변숫값은 타입형변환이 되지 않는다.

//any 타입

any타입은 타입과 무관하게 어떤 종류의 값을 저장할 수 있다.

let a : any =0
a = 'hello'
a= true

//undefined 타입

undefined는 타입이기도하고 값이기도 한다.
undefined는 최하위 타입이다.

let a :undefined =  undefined

//템플릿 문자열

변수에 담긴 값을 조합해 문자열을 만들게 해주는 템플릿 문자열.

`${변수이름}`

ex)
let count =10
let message ='Your count'

let result = `${message} is ${count}` 
console.log(result)
>>>
Your count is 10
