#함수 구현 기법

※매개변수 기본값 지정하기

(매개변수 : 타입 = 매개변수 기본값)

인수를 전달하지 않더라도 매개변수에 어떤값을 설정하고 싶다면 매개변수의 기본값을 지정할 수 있다.

type Person  = { name : string , age : number}

const makePerson = (name: string , age : number = 10): Person => {
    const person = {name : name , age : age}
    return person
}

console.log(makePerson('JACK'))

makePerson에 name의 값은 전달했고 age값을 전달하지 않아서 age는 기본값으로 설정한 10이 출력됩니다.

※객체 생성 시 값 부분을 생략할 수 있는 타입스크립트 구문

type Person  = { name : string , age : number}

const makePerson = (name: string , age : number = 10): Person => {
    const person = {name , age }
    return person
}

매개변수의 이름과 똑같은 이름의 속성을 가진 객체를 만들때 속성값 부분을 생략할 수 있다.

※객체를 반환하는 화살표 함수 만들기

const makePerson = (name: string , age : number = 10): Person => {(name,age)}

객체 반환할때 소괄호를 감싸 매개변수를 적어주면 호출할 수 있습니다.

※매개변수에 비구조화 할당문 사용하기

type Person  = { name : string , age : number}

const printPerson = ({name,age}) : void => {
    console.log(`name is ${name} , age is ${age}`)
}

printPerson({name : 'jack', age : 10})

※색인 키와 값으로 객체 만들기

const makeObject = (key, value) => ({[key] : value})

키와 값을 가지는 객체도 생성할 수 있습니다.

const makeObject = (key, value) => ({[key] : value})

console.log(makeObject('name' , 'jack'))
console.log(makeObject('fisrstname' , 'Jane'))

이런식으로 {'key이름' , 'value값'} 형식으로 키값과 벨류값을 생성할 수 있습니다.

※색인 기능 타입

type KetType = {
    [key : string] : string
}

함수 시그니처와 비슷하다.

#클래스 메서드

메서드란?
메서드는 function으로 만든 함수 표현식을 담고 있는 속성이다.

A.ts
class A {
    value : number = 1 
    method : () => void = function (): void {
        console.log(`${this.value}`)
    }
}

A.ts라는 파일을 만듭니다.
클래스 A에는 value와 method 두 가지의 속성을 가지고 있습니다.
value는 1이라는 숫자를 저장했고
method는 함수를 저장했습니다.

index.ts
import {A} from './A'

let a : A = new A 
a.method()
>>>
1
앞에 A파일에서 value를 1로 설정했기 때문에 1이 출력됩니다.

※클래스 메서드 구문

앞에 작성한 클래스A는 복잡합니다.
타입스크립트에서는 클래스 속성 중 함수 표현식을 담는 속성은 FUNCTION 키워드를 생략할 수 있다.

B.ts
export class B {
    constructor(public value : number ){}
    method() : void {
        console.log(`${this.value}`)
    }
}

index.ts
import {B} from './B'

let a : B = new B(1)
a.method()

let a1 : B = new B(2)
a1.method()

b생성자에 1과 2를 value값으로 설정시킬 수 있습니다.

※정적 메서드

class C {
    static whoareU(): string {
        return `i am class c`
    }
}

class D {
    static whoareU(): string {
        return `i am class d`
    }
}

console.log(C.whoareU())
console.log(D.whoareU())

클래스의 속성앞에 static을 앞에 붙여 정적으로 만들 수 있습니다.

※메서드 체인

calculator.ts
export class calculator {
    constructor(public value : number = 0) {}
    add(value : number) {
        this.value = value + this.value
        return this
    }
    multiple(value : number) {
        this.value = value * this.value
        return this
    }
}

index.ts
import {calculator} from './calculator'

let cal = new calculator

let result = cal.add(1).add(2).multiple(3).multiple(4)
console.log(result)

메서드 체인은 객체의 메서드를 이어서 계속 호출하는 방식의 코드이다.

