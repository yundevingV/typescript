#배열

let 배열 이름 = new Array(배열길이)
이렇게 선언합니다.

let array = new Array
array.push(1)
array.push(2)
array.push(3)

push()메서드를 이용해 array배열안에 1,2,3 이라는 원소들을 저장했습니다.

※ [] 단축구문

let numbers = [1,2,3]
let strings = ['Hello' , 'World']

[] 단축 구문을 이용해 배열을 선언할 수도 있습니다.

※자바스크립트에서 배열은 객체다.

자바스크립트에서 배열은 다른 언어와 다르게 객체다.
배열은 Array의 인스턴스인데, 클래스의 인스턴스는 객체이기 때문이다.

let a = [1,2,3]
let o ={name : 'Jakc', age : 32}

console.log(Array.isArray(a), Array.isArray(o))

Array.isArray()메서드는 매개변수로 전달 받은 심벌이 배열인지 객체 인지 알려준다.

※배열의 타입

타입스크립트에서 배열의 타입은 '아이텝 타입[]' 입니다.

let numArray : number[] =[1, 2, 3]
//정수형 배열
let stringArray : string[] =['Hello' , 'World']
//문자열 배열
type IPerson = {name : string , age ?: number}
let personArray :IPerson[] = [{name : 'Jane'} , {name :'Kane',age:23}]
//인터페이스 정의후 배열생성

※문자열과 배열 간 변환

문자열을 배열로 전환할때 String 클래스의 split메서드를 이용한다.

split(구분자 : string) : string[]

다음의 split함수는 매개변수로 전달받은 문자열과 구분자를 이용해 String 클래스의 split 메서드를 호출해 string[]타입으로 만들어준다.

const split =(str : string, delim: string = '') : string[] => str.split(delim)

console.log(
    split('hello'),
    split('h_e_l_l_o','_')
)

string[]타입의 배열을 다시 string으로 바꾸고 싶으면 join메서드를 사용한다.

join(구분자 : string) : string

join함수는 매개변수로 전달 받은 string[]타입을 배열과 구분자를 이용해 새 문자열을 반환한다.

const join = (strArray : string[], delim : string=''): string =>strArray.join(delim)

console.log(
    join(['h','e','l','l','o']),
    join(['h','e','l','l','o'], '_')
)

#인덱스 연산자

배열이 담고 있는 아이템 중 특정 위치에 있는 아이템을 얻고자 할때 인덱스 연산자를 이용합니다.

const number : number[] = [1,2,3,4,5]

for(let i=0;i < number.length; i++){
    const item : number = number[i]
    console.log(item)
}

const str : string[] = ['h','e','l','l','o']

for(let i=0;i < str.length; i++){
    const item : string = str[i]
    console.log(item)
}

#배열의 비구조화 할당

배열에서도 비구조화 할당을 적용할 수 있다.

let array : number[] = [1,2,3,4,5]

let [first, second, third, ...rest] = array

console.log(first,second,third,rest)

#for ...in문

for(변수 in 객체){
    ...
}
    
let names :string[] = ['Jane', 'Kane', 'James']

for(let i in names){
    const name :string = names[i]
    console.log(`${i} : ${names[i]}`)
}

배열의 인덱스 값을 순회한다.

let jack = {name:'Jack',age:15}

for(let i in jack){
    console.log(`${i} : ${jack[i]}`)
}
    
jack이라는 객체를 순회합니다.

#for ...of 문

for(let 변수 of 객체) {
    ...
}
    
let age = [1,2,3,4]

for(let age of [1,2,3,4]){
    console.log(age)
}
    
아이템값만이 필요할때는 for of문이 더 좋을 수 도 있습니다.
