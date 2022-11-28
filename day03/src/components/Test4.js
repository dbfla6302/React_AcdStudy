const Cat = ( props ) => {
    // props = { name : 고양이 }
    // 구조분해 , 비구조할당
    const {name} = props
  return (
    <>
      <h2> { name } </h2>
    </>
  );
};

const Dog = ( props ) => {
  //props 객체 - name 키
  //props = { name : 강아지 } => props.name
  return (
    <>
        <h2> { props.name } </h2>
    </>
  );
};

const Bird = ({ name }) => {
    // props = { name : 시조새 }
    // const { name } = props;
  return (
    <div>
      <h2>새 : { name }</h2>
    </div>
  );
};

const Test4 = () => {
  return (
    <>
      {/* name props 생성 강아지 값을 담아서 Dog 컴포넌트에 전달 */}
      <Dog name="강아지" />
      <hr />
      <Cat name="고양이" />
      <hr />
      <Bird name="시조새" />

      {/* 
        <자식 컴포넌트 props명 = 전달값 />
        <자식 컴포넌트 변수처럼 = 값 />
        <자식 컴포넌트 속성 = 값 />
      */}
    </>
  );
};

export default Test4;
