#함수 선언문 #화살표 함수와 표현식 문(105)

◆function 키워드로 만드는 함수◆

function 함수이름(매개변수1 :타입1 , 매개변수2 : 타입2 [, ...]) : 반환값 타입{
    함수 내용
}

function add (a: number , b: number ) : number {
    return a+b
}

이런 형식을 사용합니다.

function add (a: number , b: number ) : number {
    return a+b
}

let result = add(1,2)

console.log(result)

여기서 a,b 는 parameter 매개변수라 부르고 add(1,2)에서 1과 2는 argument 인수라 부른다.

◆void 타입◆

function printMe(name : string , age : number) : void {
    console.log(`name : ${name}, age : ${age}`)
}

값을 반환하지 않는 함수는 반환 타입이 void 입니다. void 타입은 함수 반환 타입으로만 사용 할 수 있다.

◆함수 시그니처◆

(매개변수1 타입, 매개변수2 타입 [, ...]) => 반환값 타입

printMe라는 함수의 시그니처를 이용한 예시이다.

let printMe: (string, number) => void 

◆type 키워드◆

type 새로운 타입 = 기존 타입

type키워드는 기존에 존재하는 타입을 이름만 바꿔 사용할 수 있게 해준다.

01 : type stringNumberFunc = (srting, number) => void
02 : let f : stringNumberFunc = function(a : string , b : string) : void {}
03 : let g : stringNumberFunc = function(c : string , d : string) : void {}

01행에서 stringNumberFunc이라는 이름으로 타입별칭을 만든다.
그러면 02행과 03행에서 변수 f와g에 타입 주석을 더 수월하게 만들 수 있다.

◆선택적 매개변수◆

function fn(arg1: string , arg ?: number) 
{
    console.log(`${arg1} i am ${arg} years old`)
}

fn('hello',2)
fn('hello')

이런식으로 매개변수 ?: 타입을 지정하면 선택적으로 변수를 넣을 수 있습니다.

type OptionalArgFnc = (string, number?) => void

함수의 시그니처에서는 타입 뒤에 물음표를 적습니다.

◆일등함수◆

일등함수는 함수와 변수를 구분하지 않는다는 의미입니다.

let f = function(a,b) {return a+b}
f = function(a,b) {return a-b}

f는 변수입니다. 그래서 a+b식도 저장되고 a-b식으로 바꿔서 저장할 수도 있습니다.

◆함수 호출 연산자◆

let fc = function (a,b) {return a+b}
let result = fc(1,2)

어떤 변수가 함수표현식을 담고 있으면 호출연산자()를 붙여 호출할 수 있다.
매개변수를 요구하면 매개변수를 ()안에 적어서 호출한다.

◆익명 함수◆

let value = (function (a,b) {return a+b;})(1,2)

함수 표현식 개념이 없는 함수가 익명 함수이다.

익명함수의 작동원리는 연산자가 우선순위에 따라 계산해준다.
(function (a,b) {return a+b;})가 먼저 실행되고 (1,2)을 만나 vlaue라는 변수에 값을 대입합니다.

◆const 키워드와 함수 표현식◆

let f = () => {} 
const f = () = > {}

let은 변수 값이 바뀔 수 있다. 즉 함수내용이 바뀔 수 있다.
반면, const는 변수의 값이 바뀌지않는다. 즉 함수의 내용도 바뀌지않는다.
그래서 함수 표현식을 담는 변수에는 const를 사용하는것이 바람직하다고 한다.

#화살표 함수와 표현식 문

◆화살표 함수◆

const 함수이름 = (매개변수1 : 타입1 , 매개변수2 : 타입2 [, ...]) : 반환 타입 => 함수몸통

const plus = (a : number , b : number) : number => {return a+b} //실행문 방식 몸통
const plus = (a : number , b : number) : number => return a+b // 표현식문 방식 몸통

그런데 화살표 함수에서는 함수몸통에 {}을 생략할 수 도 있습니다.

◆실행문 방식과 표현식문 방식의 차이점◆

실행문 방식 : return 을 적용해야 결과를 알 수 있음 ex) C
표현식문 방식 : return 을 적용하지 않아도 결과를 알 수 있음 ex) JavaScript
실행문 방식과 표현식문 방식이 결합된 언어는 다중 패러다임 언어라고한다.
typescripte는 다중 패러다임 언어라고 한다.

◆복합 실행문◆

if(조건식)
    실행문
    
if와 같은 구문은 다음처럼 조건을 만족하면 단순히 한줄의 실행문만을 실행하는 형태로 설계된다.
이런 설계가 가능한 이유는 복학 실행문 이라는 또 다른 형태를 함께 제공하기 때문이다. {}을 이용한다.

if(조건식) {
    실행문
}

복합 실행문은 컴파일러가 여러 실행문을 한개로 인식한다. 

◆return 키워드◆

실행문 기반 언어에서는 결과를 알려주지 않아 return 키워드를 사용해 결과를 반환한다.

function isGreater (a : number , b : number) : boolean { 
    return a>b
}

#콜백함수

일등함수는 프로그래밍 언어가 제공하는 기능이다. 일등함수기능을 제공하는 언어에서는 함수는 '함수 표현식' 이라는 일종의 값이다.
따라서 변수에 담을 수 있다.
이 말은 함수 표현식을 매개변수로 받을 수 있다는 것을 의미한다.
매개변수 형태로 동작하는 함수를 콜백함수(callback function)이라고 한다.

const f = (callback : () => void) : void => callback()

함수 f 에서 callback 이라는 매개 변수가 있는데, 함수 몸통에서 함수로서 호출했다.

init.ts

export const init = (callback : () => void) : void => {
    console.log('default initialization finished.')
    callback()
    console.log('all initialization finished.')
}

index.ts

import {init} from './init'

init( () => console.log('custom initalization finished'))
>>>
default initialization finished.
custom initalization finished
all initialization finished.

실행 결과를 보면 init함수가 자신의 몸통 뿐만 아니라 외부의 함수도 출력 시켰다.

//중첩함수

함수형 언어에서 함수는 변수에 담긴 함수 표현식이므로 함수 안에 또 다른 함수를 중첩할 수 있습니다.

const calc = (value : number , cb: (number) => void) : void => {
    let add = (a :number , b : number) => a + b
    let multiple = (a : number, b : number) : number => a*b

    let result = multiple(add(1,2),value)

    cb(result)
}

calc(30,(result : number) => console.log(`result is ${result}`) )

calc함수 안에 add, multiple 함수 두개가 중첩되어있다.

