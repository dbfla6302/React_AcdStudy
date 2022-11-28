const Sub = ({ name, age }) => {
  // props = { name:김태리, age:20}
  // 구조분해, 비구조할당
  // const { name, age } = props
  return (
    <div>
      <h3>자식컴포넌트</h3>
      <h4>이름 : {name} / {typeof name}</h4>
      <h4>나이 : {age}살 / {typeof age}</h4>
      <hr />
    </div>
  );
};

const Test5 = () => {
    const dog = { name: "강아지", age: 2 };
    const cat = { name: "고양이", age: 3 };
  return (
    <div>
      <Sub name="김태리" age="20" />
      <Sub name="유재석" age={30} />
      <Sub name={dog.name} age={dog.age} />
      <Sub name={cat.name} age={cat.age} />
      <Sub {...dog} />
      <Sub {...cat} />
    </div>
  );
};

export default Test5;

/*
부모 컴포넌트에서 자식컴포넌트에 값을 전달할때
자식 컴포넌트에서 부모의 값을 받아올때

props를 읽기만 가능하고, 쓸 수 없다
props는 객체형 - 속성을 키로 인식한다
props = { 키 : 값 }
구조분해
const { 키 } = props

<자식 컴포넌트 props명 = 전달값 />
전달값 : 숫자, 문자, 논리값
        { 숫자 }, { 논리값 }

        ** state, setState, 함수
        { state }. { setState }, { function명 }
props명은 일반적으로 변수처럼 생각하자
전달하는 값을 변수에 담아서 
props명 ( 한글, 영문자, 숫자혼용 )
*/