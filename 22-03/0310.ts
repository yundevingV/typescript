#선언형 프로그램이과 배열

※선언형 프로그래밍이란?

선언형 프로그래밍은 명령형 방식 위에서 동작하는 인간에게 좀 더 친화적인 고수준 구현 방식이다.
선언형 프로그래밍은 배열과 뗄레야 뗄 수 없는 관계

※명령형 프로그래밍

명령형 프로그래밍에서는 여러 개의 데이터를 대상으로 할 때 for문을 사용해 구현한다.
반면 선언형 프로그래밍은 시스템 자원의 효율적인 운용보다는 일괄된 문제 해결 구조에 더 집중한다.
선언형 프로그래밍은 명령형 프로그래밍 처럼 for 문을 사용하지않고 모든 데이터를 배열에 담는다.

※1 부터 100 까지 더하기 문제 풀이

//명령형 프로그래밍 방식

let sum = 0
for (let i = 0 ; i<= 100 ; i++){
  sum = sum + i
  console.log(sum)
}

for문을 이용해 간단하게 만들 수 있다.
                       
//선언형 프로그래밍 방식
                       
const range = (from : number, to : number): number[] =>
    from < to ? [from, ...range(from +1,to)] : []

let numbers : number[] = range(1, 100+1)
             
선언형으로 구현해봤다. 앞에서 명령형 코든느 데이터와 가공이 for문 안에서 이루어 졌지만,
선언형은 데이터 생성과 가공 과정을 분리한다.
이 과정은 1부터 100까지 데이터를 배열로 생성한 것이다. 
             
※fold : 배열 데이터 접기
             
함수형 프로그래밍에서 폴드는 특별한 의미가 있는 용어이다. 폴드는 배열데이터를 가공해 하나의 값을 생성하려고 할때 사용한다.
배열의 아이템 타입이 T라고 할 때 배열은 T[]로 표현할 수 있는데, 폴드 함수는 T[] 타입 배열을 가공해 T 타입 결과를 만들어 준다.
폴드 함수는 부채처럼 배열을 펼쳐놓고 부채를 접어 결과를 만들어 내는 것으로 생각할 수 있다.
             
fold.ts
             
export const fold = <T>(array : T[], callback : (result : T , val : T) => T, initValue : T) =>
{
    let result : T = initValue
    for (let i = 0 ; i < array.length ; ++i){
        const value = array[i]
        result = callback(result,value)
    }
    return result
}
        
index.ts
                                     
import {range} from './range'
import {fold} from './fold'

let numbers : number[] = range(1, 100+1)

let result = fold(numbers,(result,value) => result + value, 0)

함수를 재사용한다.
  
※1에서 100까지 홀수의 합 구하기
  
//명령형 프로그래밍 방식

let sum = 0
for (let i = 0 ; i<= 100 ; i = i +2){
  sum = sum + i
  console.log(sum)
}
                       
//선언형 프로그램이 방식
                       
fold함수에는 홀수만 추려내는 기능이 없다.
그래서 특정한 조건을 추려내는 filter라는 함수를 먼저 만들어야한다.
         
filter.ts
                       
export const filter = <T>(array : T[], callback : (value: T , index ?: number)
 => boolean) : T[] => {
    let result : T[] = []
    for (let index : number =0; index < array.length; ++index){
        const value = array[index]
        if(callback(value,index)){
            result = [...result, value]
            //전개 연산자 원래 있던 배열 result에 value를 계속 추가
        }
    }
    return result
 }
                                                     
index.ts
                                                     
import {range} from './range'
import {fold} from './fold'
import {filter} from './filter'

let numbers : number[] = range(1, 100+1)
//입력 데이터 생성

const isOdd = (n : number): boolean => n % 2 != 0 

let result = fold(filter(numbers,isOdd),(result,value) => result + value, 0)
//입력 데이터 가공

console.log(result)
  
※1에서 100까지 짝수의 합 구하기
  
import {range} from './range'
import {fold} from './fold'
import {filter} from './filter'

let numbers : number[] = range(1, 100+1)
//입력 데이터 생성

const isEven = (n : number): boolean => n % 2 == 0 

let result = fold(filter(numbers,isEven),(result,value) => result + value, 0)
//입력 데이터 가공

console.log(result)

※1에서 100 제곱의합 구하기
  
//명령형 프로그래밍 방식
  
let squareSum =0
for(let i =0; i < 100 ; ++1){
    squareSum = squareSum + (i*i)
}
                     
//선언형 프로그래밍 방식
                     
이를 구현하려면 map이라는 이름의 함수가 필요하다.

1.map 배열 데이터 가공하기.
                     
수학에서 map은 'x~>y' 형태로 어떤 값을 또 다른 값으로 만들어 주는 연산이다.
그런데 x와 y타입 까지 생각하면 map 은 'x : T ~> y : Q'처럼 입력과 출력 변수의 타입이 서로 다를 수 있음을 고려행한다.

import {range} from './range'
import {fold} from './fold'
import {map} from './map'

let numbers : number[] = range(1, 100+1)

let result = fold(
    map(numbers,value => value * value),
    (result,value) => result + value,0)

console.log(result)
  

                     

                       
                       
                       
                       
                       
