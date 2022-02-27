#클래스

※클래스 키워드

class Button {
  constructor() {
  }
}

class키워드 에 이름 붙여주고 class를 생성한다.

※생성자

class Button {
    name : string;
    age : number;
    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
  }
통해 요소들을 생성자를 통해 초기화 및 기본값 설정을 합니다.

※상속

class Input {
    name : string;
    age : number;
    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
    inputName(){
    console.log(`my name is ${this.name}, age is ${this.age}`)
    }
}

class Button extends Input {
    constructor(name: string, age : number) {
        super(name, age)
    }
}

const button = new Button('kane',23)
button.inputName()

extends를 이용해서 Button을 Input에 상속 시킨다.
super을 통해 매개변수도 똑같이 전달해준다.

※오버라이드

상위 클래스에서 정의한 메서드를 자식클래스에서 재정의 하는 것이다.

class Input {
    name : string;
    age : number;
    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
    inputName(){
    console.log(`my name is ${this.name}, age is ${this.age}`)
    }
}

class Button extends Input {
    constructor(name: string, age : number) {
    super(name,age)
    }
    inputName(){
        console.log(`override my name is ${this.name}, age is ${this.age}`)
    }
}

const button = new Button('kane',23)
button.inputName()

Button이 Input을 상속받은 후 inputName을 다시 재정의를 했다.
출력 결과가 다른것을 확인 할 수 있다.

※접근제어자

● public : 디폴트값, 어디에서나 접근가능.
● protected : 상속받은 하위클래스만 접근가능.
● private : 선언한 클래스 내에서만 접근가능.

public

디폴트값이 public값이다. 

class Input {
    public name : string;
    public age : number;
    public constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
    public inputName(){
    console.log(`my name is ${this.name}, age is ${this.age}`)
    }
}

class Button extends Input {
    public constructor(name: string, age : number) {
    super(name,age)
    }
    public inputName(){
        console.log(`override my name is ${this.name}, age is ${this.age}`)
    }
}

const button = new Button('kane',23)
button.inputName()

이렇게 앞에 붙여 주면된다.

protected

class Input {
    protected name : string;
    protected age : number;
    protected constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
    protected inputName(){
    console.log(`my name is ${this.name}, age is ${this.age}`)
    }
}

class Button extends Input {
    public constructor(name: string, age : number) {
    super(name,age)
    }
    public inputName(){
        console.log(`override my name is ${this.name}, age is ${this.age}`)
    }
}

const button = new Button('kane',23)
button.inputName()

상속받는 하위클래스만 접근가능하니까 상위클래스 Input에 protected를 붙여준다.

private

나중에.. 추가예정

※readonly

class Person {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

읽기전용 프로퍼티로 만든다.

※static

바뀌지않고 공통적으로 사용될 값 혹은 메서드에 유용함.

interface Point {
    x: number;
    y: number;
}

class Grid {
    static origin: Point = {
        x: 0,
        y: 0,
    };
    scale: number;
    constructor(scale: number) {
        this.scale = scale;
    }
    calcDistanceFromOrigin(point: Point): number {
        let dx = point.x - Grid.origin.x;
        let dy = point.y - Grid.origin.y;
        return Math.sqrt((dx * dx) + (dy * dy) / this.scale);
    }
}
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0); 
const point: Point = {
    x: 10,
    y: 10,
};
console.log(grid1.calcDistanceFromOrigin(point)); 
console.log(grid2.calcDistanceFromOrigin(point)); 

 static origin: Point = {
        x: 0,
        y: 0,
    };
이값이 항상 고정으로 있어야하니까 static을 붙여준겁니다.

※추상 클래스

추상클래스는 다른 클래스에서 파생될수 있는 말 그대로 '추상적인' 클래스이다.

● 추상클래스는 abstract 키워드를 클래스 앞에 추가시켜주면 된다.
● 추상클래스 내의 매서드에 abstract 키워드를 붙이면 파생클래스에서 반드시 구현해야한다.
● 추상클래스는 new를 사용해 인스턴스화 할 수 없다.

abstract class job {
    nickname : string
    constructor(nickname : string) {
        this.nickname = nickname
    }
    greet() : void{
        console.log(`hi I'm ${this.nickname}`)
    }
    abstract attack () : void
}

class Warrior extends job {
    attack() {
        console.log(`검을 이용해 공격`)
    }
}

class Magician extends job {
    attack() {
        console.log(`마법을 이용해 공격`)
    }
}

const warrior : job = new Warrior('jane')
const magician : job = new Magician('kane')
warrior.greet()
warrior.attack()

magician.greet()
magician.attack()

추상클래스를 쓰는 이유는 attack()과 같이 직업별로 다른 결과를 내야할때 쓴다.
