#함수 선언문

//function 키워드로 만드는 함수

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

//void 타입

function printMe(name : string , age : number) : void {
    console.log(`name : ${name}, age : ${age}`)
}

값을 반환하지 않는 함수는 반환 타입이 void 입니다. void 타입은 함수 반환 타입으로만 사용 할 수 있다.

//함수 시그니처

(매개변수1 타입, 매개변수2 타입 [, ...]) => 반환값 타입

printMe라는 함수의 시그니처를 이용한 예시이다.

let printMe: (string, number) => void 

// type 키워드

type 새로운 타입 = 기존 타입

type키워드는 기존에 존재하는 타입을 이름만 바꿔 사용할 수 있게 해준다.

01 : type stringNumberFunc = (srting, number) => void
02 : let f : stringNumberFunc = function(a : string , b : string) : void {}
03 : let g : stringNumberFunc = function(c : string , d : string) : void {}

01행에서 stringNumberFunc이라는 이름으로 타입별칭을 만든다.
그러면 02행과 03행에서 변수 f와g에 타입 주석을 더 수월하게 만들 수 있다.

//선택적 매개변수

function fn(arg1: string , arg ?: number) 
{
    console.log(`${arg1} i am ${arg} years old`)
}

fn('hello',2)
fn('hello')

이런식으로 매개변수 ?: 타입을 지정하면 선택적으로 변수를 넣을 수 있습니다.

type OptionalArgFnc = (string, number?) => void

함수의 시그니처에서는 타입 뒤에 물음표를 적습니다.

//일등함수

일등함수는 함수와 변수를 구분하지 않는다는 의미입니다.

let f = function(a,b) {return a+b}
f = function(a,b) {return a-b}

f는 변수입니다. 그래서 a+b식도 저장되고 a-b식으로 바꿔서 저장할 수도 있습니다.

//함수 호출 연산자

let fc = function (a,b) {return a+b}
let result = fc(1,2)

어떤 변수가 함수표현식을 담고 있으면 호출연산자()를 붙여 호출할 수 있다.
매개변수를 요구하면 매개변수를 ()안에 적어서 호출한다.

//익명 함수

let value = (function (a,b) {return a+b;})(1,2)

함수 표현식 개념이 없는 함수가 익명 함수이다.

익명함수의 작동원리는 연산자가 우선순위에 따라 계산해준다.
(function (a,b) {return a+b;})가 먼저 실행되고 (1,2)을 만나 vlaue라는 변수에 값을 대입합니다.

//const 키워드와 함수 표현식

let f = () => {} 
const f = () = > {}

let은 변수 값이 바뀔 수 있다. 즉 함수내용이 바뀔 수 있다.
반면, const는 변수의 값이 바뀌지않는다. 즉 함수의 내용도 바뀌지않는다.
그래서 함수 표현식을 담는 변수에는 const를 사용하는것이 바람직하다고 한다.
