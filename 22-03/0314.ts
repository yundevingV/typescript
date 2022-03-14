#순수 함수와 배열

※순수함수란?

순수함수는 부수 효과가 없는 함수를 의미한다.
부수효과는 함수가 가진 고유한 목적 이외에 다른 효과가 나타는것을 의미하며 부작용이라고도 한다.

순수함수는 다음과 같은 조건을 만족한다.

● 함수 몸통에 입출력 관련 코드가 없다
● 함수 몸통에서 매개변수값을 변경하지 않는다. (ex: const 사용)
● 함수는 몸통에서 만들어진 결과를 즉시 반영한다.
● 함수 내부에 전역변수나 정적변수를 사용하지 않는다.
● 함수가 예외를 발생시키지 않는다.
● 함수가 콜백 함수로 구현되었거나 함수 몸통에 콜백 함수를 사용하는 코드가 없다.
● 함수 몸통에 Promise 와 같은 비동기 방식으로 동작하는 코드가 없다.

function pure(a: number, b: number) : number {return a+b}

pure라는 순수함수이다.

function impure(array :number[]) : void {
    array.push(1)
    array.slice(0,1)
}

impure는 매개변수를 수정했기 때문에 불순 함수이다.

let g = 10
function impure2(x : number) : number {return x + g}

다음은 전역변수를 사용해 불순 함수이다.

※타입 수정자 readonly

타입스크립트에서는 순수 함수 구현을 쉽게 도와주도록 readonly키워드를 제공합니다.
readonly 타입으로 선언된 매개변숫값을 변경하는 시도가 있으면 문제를 알려줘 불순 함수가 되지않게 해줍니다.

const가 있는데 readonly는 왜 쓸까 ?
=> 인터페이스, 클래스 등에서는 const키워드 없이 선언하기 때문에 readonly를 사용하는 경우가 생깁니다.

※깊은 복사와 얕은 복사

어떤 변숫값을 다른 변숫값으로 설정하는 것을 복사 라고 표현한다.
복사 중에서도 깊은 복사와 얕은 복사 두 종류로 나뉜다.
순수 함수를 구현할때는 매개변수값의 불변성을 유지하기 위해서 깊은 복사를 통해 변경이 되지 않도록 해야합니다.

let org = 1
let copied = org
copied += 2 
console.log(org,copied)

copied변수는 org변수를 복사 한 후 2를 더했다. 이때 org의 값은 변하지 않았다. 이것을 깊은 복사라고 한다.
TS에서는 number와 boolean타입은 깊은 복사형태로 동작한다.
그러나 객체와 배열에서는 얕은 복사 방식으로 동작한다.

const originalArray = [5,3,9,7]

const shallowCopiedArray = originalArray

shallowCopiedArray[0] = 0

console.log(originalArray,shallowCopiedArray)

배열은 얕은복사가 되었기때문에 서로 같은 값을 출력한다.

※전개연산자와 깊은 복사

const oArray = [1,2,3,4]

const deepCopiedArray = [...oArray]
deepCopiedArray[0] = 0

console.log(oArray,deepCopiedArray)

하지만 전개연산자를 이용하면 배열도 깊은 복사를 할 수 있다.

※배열의 sort 메서드를 순수 함수로 구현하기

const pureSort = <T>(array : readonly T[]) : T[] => {
    let deepCopied = [...array]
    return deepCopied.sort()
}

let beforeSort = [6, 2, 9, 0]
const afterSort = pureSort(beforeSort)

console.log(beforeSort,afterSort)
  
 sort메서드를 이용해도 깊은복사가 된다.
