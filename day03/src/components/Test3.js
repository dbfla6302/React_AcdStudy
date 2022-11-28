const Test3 = () => {
    const done1 = true
    const done2 = false
    const done3 = undefined

    return (
      <div>
        {/* 삼항, &&, || */}
        <p>{done1 === true ? <button>확인</button> : <button>취소</button>}</p>
        <p>{done1 && <strong>참의 결과</strong>}</p>
        <p>{done2 || <strong>거짓의 결과</strong>}</p>
        <p>{done3 || <span>조회된 게시글이 없습니다</span>}</p>
      </div>
    );
};

export default Test3;