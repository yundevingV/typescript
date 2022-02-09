Module export import 

#모듈 (Module)
: 자주 사용되는 함수, 클래스 등을 미리 선언하고 > exoprt를 사용해서 끌어 쓴다.

#export 키워드

모듈을 끌어와서 쓸 수 있게 해준다.

예시1 )
export 개체

export interface IPerson {
    name : string
    age : number
}

예시2 )
export 함수명, 클래스명 등등

export Person

#import 키워드

어떤 파일이 export 키워드로 보낸 심벌을 받아서 사용하려면 import 키워드로 해당 심벌을 불러와야한다.

예시1 )

import { 심벌 목록 } from '파일의 상대경로'

import {IPerson, makePerson} from './person/Person'

///export default 키워드를 사용하면 {}을 생략한다...?? 이건 잘 모르겠다..
 
#import * as 구문

import 구문의 또 다른 형태이다.

예시1 )
import * as 심벌 from '파일의 상대경로'

import * as U from '../utils/makeRandomNumber'

#export default 키워드

자바스크립트와 호환하기 위해 export default 구문을 사용합니다.

예시 1)
export default interface IPerson {
    name : string
    age : number
}

