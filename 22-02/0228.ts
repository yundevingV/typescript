#배열

배열을 선언하는 방식은 두가지가 있다.

1.
let list : number[] = [1,2,3,4]
타입형 뒤에 []를 붙여서 선언하는 방식이다.

2.
let list1 : Array<number> = [1,2,3,4]
Array<타입>을 사용해 선언하는 방식이다.
  
#튜플
  
튜플은 요소의 수와 요소의 타입이 정확히 지정된 배열의 타입이다.
  
let tuple : [string, number] = ['Lee',22]
이렇게 선언할 수 있다.
  
튜플은 배열 순서를 정확하게 알아 데이터를 정렬할때 유용하다.
  
let student : [number, string] =[1,'amy']
let student1 : [number, string] =[2,'bill']
let student2 : [number, string] =[3,'john']

push메서드를 통해서 튜플 뒤에 데이터를 추가 할 수도 있습니다.
  
let student : [number, string] =[1,'amy']
let student1 : [number, string] =[2,'bill']
let student2 : [number, string] =[3,'john']

student.push("" + 24)

console.log(student)

이런식으로 튜플에 추가할 수 있습니다 그런데 string형식으로만 추가할 수 있습니다. 
