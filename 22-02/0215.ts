#객체의 비구조화 할당문

#구조화

구조화가 필요한 코드 예)

let personName = 'Jack'
let personAge = 23 

let companyName = 'apple'
let companyAge = 43

이 코드는 name과 age가 각기 다른 의미로 사용되고 있습니다.
그래서 personName이랑 companyName과 같이 이 둘을 구분하고 있습니다.
이렇게 코드가 짜여지면 작성하기도 번거롭고 기능 확장하기도 어렵다.

그래서 인터페이스나 클래스를 사용해 관련된 정보를 묶어 새로운 타입으로 구현한다.

이러한 작업을 '구조화(structuring)'이라고 한다.

export interface IPerson {
    name : string
    age : number 
}

export interface ICompany {
    name : string
    age : number 
}

코드를 이처럼 구조화하게되면 비슷한 유형의 변수를 쉽게 만들 수 있다.
이 파일을 IPerson_ICompany.ts로 저장하고 index.ts로 불러왔다.

import {IPerson, ICompany} from './IPerson_ICompany'

let jack : IPerson = {name : 'jack' , age :32}
let apple : ICompany = {name :'apple' , age : 42}

let kane : IPerson = {name : 'kane' , age : 35}
let ms : ICompany = {name : 'microsoft' , age : 100}

이렇게 하면 다른 변수를 쉽게 설정 할 수 있어 코드확장성을 늘릴 수 있다.

#비구조화

구조화된 데이터에서 데이터의 일부만 사용해야 할 때도 존재한다.

import {IPerson, ICompany} from './IPerson_ICompany'

let jack : IPerson = {name : 'jack' , age :32}
let apple : ICompany = {name :'apple' , age : 42}

let kane : IPerson = {name : 'kane' , age : 35}
let ms : ICompany = {name : 'microsoft' , age : 100}

let jackname = jack.name 
let msage = ms.age

console.log(jackname)
console.log(msage)

이 코드에서 jackname이랑 msage같이 name과 age변수를 각각 새로운 변수에 저장해 사용하게 한다.
이 작업을 비구조화(destructuring)이라고 한다.

import {IPerson, ICompany} from './IPerson_ICompany'

let jack : IPerson = {name : 'jack' , age :32 , country : 'usa'}
let kane : IPerson = {name : 'kane' , age :31 , country : 'germany'}

let {name } = jack
let {age } = kane

console.log(name)
console.log(age)

비구조화 작업을 통해 name은 jack의 정보를 age는 kane의 정보를 얻어왔다.

#잔여 연산자

점을 세개 이어 사용하는 ...연산자를 사용할 수 있다.

let address : any = {
    country : 'korea',
    city : 'seoul',
    address1 : 'Gangnam-gu',
    address2 : 'Sinsa-dong 123-456',
    address3 : '789 street, 2 Floor ABC building'
}

const {country, city, ...detail} = address

console.log(detail)

country와 city를 제외한 나머지 속성의 변수를 저장할 수 있다.

#전개 연산자

전개 연산자는 의미 그대로 객체의 속성을 모두 전개해 새로운 객체로 만들어 줍니다.

interface part {
    name ?:string
    age ?: number
    city ?: string
}

let part1 : part ={ name : 'jane'}
let part2 : part ={ age : 23}
let part3 : part ={ city : 'seoul'}

let merged = {...part1,...part2,...part3}

console.log(merged)

merged로 part1,part2,part3이 합쳐졌다.
