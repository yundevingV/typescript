//고차 함수 

고차 함수는 또 다른 함수를 반환하는 함수이다.

고차함수예시) 

const add = (a :number) : (number) => number => (b : number) : number => a+b
const result = add(1)(2)
console.log(result) // 3

고차함수를 쉬운형태로 한번 더 구현해보겠습니다.

add.ts라는 파일을 생성후

export type NumberToNumberFunc = (number) => number 
우선 NumberToNumberFunc라는 함수 시그니처를 정의한다.

export type NumberToNumberFunc = (number) => number 

export const add = (a : number) : NumberToNumberFunc => {
    
}

add라는 함수를 NumberToNumberFunc타입으로 정의한다.

export type NumberToNumberFunc = (number) => number 

export const add = (a : number) : NumberToNumberFunc => {
    const _add : NumberToNumberFunc = (b : number) : number => {
    
    }
    return _add
}

add의 반환값을 중첩 함수로 구현한다.
add함수가 반환하는 _add는 NumberToNumberFunc타입이다.

export type NumberToNumberFunc = (number) => number 

export const add = (a : number) : NumberToNumberFunc => {
    const _add : NumberToNumberFunc = (b : number) : number => {
        return a+b //클로저
    }
    return _add
}

_add 함수의 몸통을 구현해서 add라는 이름의 고차 함수가 완성된다.
그런데 a라는 매개변수는 add에 매개변수이고 b는 _add의 매개변수이다.
_add의 관점에서는 a라는 변수는 외부에서 선언된 변수이다.
이런 형태를 클로저라고 한다.

index.ts
import {NumberToNumberFunc, add} from './add'

let fn : NumberToNumberFunc = add(1)

고차함수 add를 사용하는 코드를 살펴보겠습니다.

import {NumberToNumberFunc, add} from './add'

let fn : NumberToNumberFunc = add(1)
let result = fn(2)
console.log(result)

console.log(add(1)(2))

fn은 add(1)을 임시적으로 저장하고 함수 호출연산자를 이용해 fn(2)를 불러내 add(1)(2)와 같은 결과를 얻어냅니다.
