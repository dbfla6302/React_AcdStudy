const Test1 = () => {
    // 함수영역 - 모든 제어문 객체..
    const title = '신상명세서'
    const name = '홍길동'
    const age = 12
    const css1 = {
        backgroundColor: 'hotpink',
        fontSize: 25,
        color: 'white',
        padding: 20
    }

    return (
      <section>
        {/* jsx 영역 삼항, &&, map.. */}
        <h2 style={css1}> {title} </h2>
        <ul
            //한줄 설명
            /*
                여러줄 주석
            */
        >
          <li style={{
            backgroundColor:'pink',
            width:200,
            lineHeight:'40px',
            textIndent:20,
            listStyle:'none'
          }}>이름 : {name}</li>
          <li>나이 : {age}</li>
        </ul>
      </section>
    );
};

export default Test1;