#배열의 map, reduce, filter 메서드

※filter메서드

filter(callback: (value : T , index ?: number): boolean): T[]

배열의 타입이 T[] 일 때 배열의 filter 메서드는 이렇게 구성되어있습니다.

const range = (from : number, to : number): number[] =>
    from < to ? [from, ...range(from +1,to)] : []

const array: number[] = range(1, 10+1)

let odds : number[] = array.filter((value) => value % 2 !=0)
let evens : number[] = array.filter((value) => value % 2 ==0)
   
이런식으로 적용하면 홀수, 짝수를 구할 수 있습니다.
      
index라는 매개변수를 한 번 사용해보겠습니다.
      
const range = (from : number, to : number): number[] =>
    from < to ? [from, ...range(from +1,to)] : []

const array: number[] = range(1, 10+1)

const half = array.length /2 

let belowhalf : number[] = array.filter((value,index) => index < half)
let overhalf : number[] = array.filter((value,index) => index >= half)

console.log(belowhalf,overhalf)
      
이렇게 사용할 수 있습니다.
      
※map메서드
      
map(callback : (value : T, iddex ?: number) :  Q) : Q[]
      
배열의 타입이 T[]일때 배열의 map메서드는 이렇게 구성되어있습니다.
      
const range = (from : number, to : number): number[] =>
    from < to ? [from, ...range(from +1,to)] : []

const array: number[] = range(1, 5+1)

let squres : number[] = array.map((value : number) => value *value)

이렇게 사용할 수 있습니다.
      
const range = (from : number, to : number): number[] =>
    from < to ? [from, ...range(from +1,to)] : []

const array: number[] = range(1, 5+1)

let squres : string[] = array.map((value : number, index : number) => `[${index}] : ${value}`)

console.log(squres)
      
number[]타입을 string[]타입으로 가공한 예시.
      
※reduce 메서드

reduce (callback : (result :T, value : T), intialValue : T) :T
      
이렇게 구성되어있습니다.
      
const range = (from : number, to : number): number[] =>
    from < to ? [from, ...range(from +1,to)] : []

const array: number[] = range(1, 100+1)

const reduceSum : number = array.reduce((result : number, value : number) => result + value, 0)

console.log(reduceSum)

이렇게하면 1부터 100까지의 합을 구할 수 있습니다.
      
const range = (from : number, to : number): number[] =>
    from < to ? [from, ...range(from +1,to)] : []

const array: number[] = range(1, 100+1)

const reduceSum : number = array.reduce((result : number, value : number) => result * value, 1)

console.log(reduceSum)
