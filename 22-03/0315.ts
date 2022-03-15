#반복기와 생성기

※반복기와 반복기 제공자

반복기의 특징

1. next라는 이름의 메서드를 제공한다.
2. next 메서드는 value와 done이라는 두 개의 속성을 가진 객체를 반환한다.

const createRangeIterable = (from : number , to : number) => {
    let currentValue = from
        return {
            next() {
                const value = currentValue < to ? currentValue++ : undefined
                const done = value == undefined
                return {value , done}
            }
        }
}

이 함수는 next메서드가 있는 객체를 반환해 반복기를 제공하는 역할을 합니다.
이런 함수를 '반복기 제공자'라고 합니다.

const iterator = createRangeIterable(1, 3+1)
//함소를 호출해 반복기를 얻고 변수에 저장.
//호출해야만 사용가능.
                                               
while(true) {
    const {value, done} = iterator.next()
    if(done) {break}
    console.log(value)
}
//done이 true일때까지 value값을 얻는다.
                                              

※반복기는 왜 필요한가?

앞에 이용하였던 iterator.next 메서드가 반복 호출될때마다 각기 다른값이 출력된다.
반복기 제공자가 생성한 값 1, 2, 3을 배열에 담아 출력하지 않고 for문을 돌려 콘솔 출력한것 처럼 보인다.
반복기 제공자는 이처럼 어떤 범위의 값을 한꺼번에 생성해 배열에 담지않고 필요할 때만 생성한다.
그래서 메모리의 효율성이 증가한다.
