#함수 구현 기법

※매개변수 기본값 지정하기

(매개변수 : 타입 = 매개변수 기본값)

인수를 전달하지 않더라도 매개변수에 어떤값을 설정하고 싶다면 매개변수의 기본값을 지정할 수 있다.

type Person  = { name : string , age : number}

const makePerson = (name: string , age : number = 10): Person => {
    const person = {name : name , age : age}
    return person
}

console.log(makePerson('JACK'))

makePerson에 name의 값은 전달했고 age값을 전달하지 않아서 age는 기본값으로 설정한 10이 출력됩니다.

※객체 생성 시 값 부분을 생략할 수 있는 타입스크립트 구문

type Person  = { name : string , age : number}

const makePerson = (name: string , age : number = 10): Person => {
    const person = {name , age }
    return person
}

매개변수의 이름과 똑같은 이름의 속성을 가진 객체를 만들때 속성값 부분을 생략할 수 있다.

※객체를 반환하는 화살표 함수 만들기

const makePerson = (name: string , age : number = 10): Person => {(name,age)}

객체 반환할때 소괄호를 감싸 매개변수를 적어주면 호출할 수 있습니다.

※매개변수에 비구조화 할당문 사용하기

