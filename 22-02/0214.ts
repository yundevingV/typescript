#객체와 클래스

//생성자

 타입스크립트 클래스는 constructor라는 이름의 특별한 메서드를 포함하는데, 이를 생성자라고한다.
 타입스크립트 클래스는 속성을 선언할 수 있다.
 
 class Person {
     constructor (public name : string, public age? : number) {}
 }

 let jack : Person = new Person('jack',32)
 console.log(jack)

//인터페이스 구현

interface IPerson {
    name :string
    age?: number
}

class Person implements IPerson {
    name : string
    age : number
}

클래스가 인터페이스를 구현할때는 implements 키워드를 사용한다.

interface IPerson {
    name :string
    age?: number
}

class Person implements IPerson {
    constructor(public name : string , public age ?: number ) {}
}

let jack: IPerson = new Person('jack',23)
console.log(jack)

//추상클래스

추상클래스는 abstract키워드를 class 키워드 앞에 붙여서 만든다.

abstract class 클래스이름 {
  abstract 속성이름 : 속성타입
  abstract 메서드 이름() {}
}

추상클래스는 자신의 속성이나 메서드 앞에 abstract를 붙여 나를 상속하는 다른 클래스에서 이 속성이나 메서드를 구현하게 한다.

//클래스의 상속

부모클래스를 상속받는 상속 클래스를 만들 수 있다.

class 상속클래스 extends 부모클래스 { ... }

ex)
abstract class AbstractPerson {
    abstract name : string
    constructor(public age ?: number) {}
}

class person extends AbstractPerson {
    constructor (public name : string , age ?: number) {
        super(age)
    }
}

let jack : person = new person('jack',23)

console.log(jack)

person 클래스는 AbstractPerson 추상 클래스를 상속해 AbstractPerson가 구현한 age를 얻고 
AbstractPerson를 상속받는 클래스가 구현해야할 name 속성을 구현한다.
super 라는 키워드로 부모 클래스의 생성자를 호출할 수 있다.

//static속성

정적인 속성을 가질 수 있다.

class 클래스이름 {
  static 정적속성이름 : 속성 타입
 }
 
 ex)
class A {
    static initValue = 1
    static B = 100
}

let initVal = A.initValue
let b =A.B
console.log(initVal)
console.log(b)

  
