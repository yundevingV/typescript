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
