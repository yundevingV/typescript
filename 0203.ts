typescript시작하기

#typescript의 주요문법.

1.비구조화 할당

let person = {name : "Jane", age = "23"}
let {name, age} = person

person 객체의 name과 age속성을 비구조화 할당을 통해 쉽게 각 멤버를 얻을 수 있다고 한다.
솔직히 아직은 잘 배우기전이라 이해가 잘 되지 않지만 눈에 익히기위해 타이핑이라도 칠 예정이다.

2.화살표함수

function add(a, b) {return a + b}
const add2 = (a,b) => a + b

화살표 함수는 함수를 선언할 때 코드를 간결하게 해주는 역할인 것 같다.

3.클래스

abstract class Animal {
    contructor(public name?: string, public age?: number) {}
    abstract say(): string
}
class Cat extends Animal {
    say() {return '야옹'}
}
class Dog extends Animal {
    say() {return '멍멍'}
}

let animals: Animal[] = [new Cat('야옹이','2'), new Dog('멍멍이',3)]
let sounds = animals.map(a => a.say()) //["야옹", "멍멍"]

클래스라는 기능을 통해 객체지향적 프로그래밍을 할 수 있는것 같다.

4. 모듈

import * as fs from 'fs'
export function writeFile(filepath: string, content: any) {
    fs.writeFile(filepath, content, (err) => {
        err && console.log('error', err)
    }
}

머듈을 사용하면 코드를 여러 개 파일로 분할할 수 있다.

5.생성기

function* gen() {
    yield* [1,2]
}
for(let value of gen()) { console.log(value) } // 1, 2

yield로 생성기를 만들 수 있다. 
function*과 yeild 키워드를 이용해 만든다.

6.promise와 async/await 구문

async function get() {
    let values =[]
    values.push(await Promise.resolve(1))
    values.push(await Promise.resolve(2))
    values.push(await Promise.resolve(3))
    return values
}
het().then(values => console.log(values)) // [1, 2, 3]

Promise는 async/await 구문을 빌려 비동기 콜백함수의 일명 콜백 지옥을 쉽게 구현하기위해 만들어 졌다고 합니다.

#typescript의 고유 문법

1.타입 주석과 타입 추론

let n: number = 1
let m = 2 

변수 n 뒤에 콜론이랑 타입이름이 있다. 이것을 '타입주석'이라고 한다.

2.인터페이스

interface Person {
    name : string  
    age?: number
}

let person: Person = {name: "Jane"}

interface 객체 타입을 정의할 수 있게 해준다고 한다.

3. 튜플

let tuple: [boolean, number, string] = [true,1,'ok']

배열에 저장되는 아이템의 데이터 타입이 다르면 튜플이다.

4. 제네릭 타입

class Container<T> {
        constructor(public value : T {}
    }
let numberContainger : Container<number> = new Container<number>(1)
let stringContainger : Container<string> = new Container<string>('hello world')
    
제네릭타입은 다양한 타입을 한꺼번에 취급할 수 있게 해준다.
    
5. 대수 타입(algebraic data)
    
type NumberOrString = number | string //합집합 타입
type AnimalAndPerson = Animal & Person //교집합 타입    
    
대수 타입은 다른 자료형의 값을 가지는 자료형을 의마한다.
    
