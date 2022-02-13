객체와 인터페이스

//object 타입

let o : object = {name: 'jack', age:'23'}
속성 이름이 다른 객체를 자유롭게 담을 수 있다.

//interface 선언문

interface 인터페이스 이름 {
  속성이름[?] : 속성타입[...]
}

인터페이스는 객체의 타입을 정의하는 것이 목적이다.

ex)
interface IPerson {
    name : string
    age : number
}

인터페이스는 정의한 모든 속성이 있어야 작동 된다. 또 정의한 속성말고 다른 속성이 들어오거나 적으면 오류가 발생한다.

//선택 속성 구문

어떤 속성은 있어도 되고 없어도 되는 형태로 만들고 싶을 땐 선택속성구문을 사용한다.

interface IPerson {
    name : string
    age : number
    etc? : boolean
}

?기호를 붙여서 만든다.

//익명 인터페이스

let ai: {
    name : string
    age : number
    etc? : boolean
} = {name :'jack' , age : 23}

interface 키워드를 사용하지 않고 인터페이스를 만들 수 있다.

let ai: {
    name : string
    age : number
    etc? : boolean
} = {name :'jack' , age : 23}

익명 인터페이스는 함수를 구현할때 사용한다. 

let ai: {
    name : string
    age : number
    etc? : boolean
} = {name :'jack' , age : 23}

function printMe(me : {name : string, age : number, etc?: boolean})
{
    console.log(
        me.etc?
        `${me.name} ${me.age} ${me.etc}` :
        `${me.name} ${me.age}`
    )
}

#객체와 클래스

//클래스 선언문

class 클래스이름 {
  속성이름[?] : 속성타입[...]
}

ex)
class Person {
    name : string
    age? : number
}
name과 age 속성을 가진 클래스를 선언.

class Person {
    name : string
    age? : number
}

let jack1 : Person = new Person()
jack1.name = 'Jack'
jack1.age = 23

console.log(jack1)

클래스를 선안하고 new연산자를 적용해 jack1이라는 이름의 타입변수를 만든다.
printMe(ai)
