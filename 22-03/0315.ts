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
                                              
