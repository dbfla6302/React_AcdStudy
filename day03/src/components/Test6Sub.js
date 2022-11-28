import PropTypes from 'prop-types';

const Test6Sub = ({name, age, addr, tel, color, bgcolor, done}) => {
    // const {name, age, addr, tel, color, bgcolor, done} = props
    return (
      <div style={{width: 300,padding: 15,margin: 15,border: `5px solid ${color}`,backgroundColor: bgcolor }}>
        <h2> {name} 프로필 </h2>
        <ul>
          <li>이름 : {name}</li>
          <li>나이 : {age}</li>
          <li>주소 : {addr}</li>
          <li>전화 : {tel}</li>
          <li>글자색 : {color}</li>
          <li>배경색 : {bgcolor}</li>
          <li>동의여부 : {done === true ? '동의' : '비동의'}</li>
        </ul>
      </div>
    );
};

// isRequired 필수사항
Test6Sub.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  addr: PropTypes.string,
  tel: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  done: PropTypes.bool
};

// props의 초깃값을 정의합니다.
Test6Sub.defaultProps = {
  name: 'Stranger',
  age: 10,
  addr: '서울',
  tel: '010-0000-0000',
  color: 'skyblue',
  bgcolor: 'mistyrose',
  done: true
};

export default Test6Sub;

/*
타입 검사를 위해 Flow 또는 TypeScript

PropTypes는 전달받은 데이터의 유효성을 검증하기 위해서 다양한 유효성 검사기(Validator)를 내보냅니다.
아래 예시에서는 PropTypes.string을 사용하게 될 것입니다. prop에 유효하지 않은 값이 전달 되었을 때, 경고문이 JavaScript 콘솔을 통해 보일 것입니다. 
propTypes는 성능상의 이유로 개발 모드(Development mode) 에서만 확인될 것입니다.

import PropTypes from 'prop-types';
해당컴포넌트.propTypes = {
  props명: PropTypes.타입
};

초기 Prop 값
defaultProps 프로퍼티를 할당함으로써 props의 초깃값을 정의할 수 있습니다.

props의 초깃값을 정의합니다.
해당컴포넌트.defaultProps = {
  props명: 초기값
};

*/