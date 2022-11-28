import Test6Sub from "./Test6Sub";

const Test6 = () => {
    return (
      <div>
        <Test6Sub
          name="김태리"
          age={25}
          addr="서울"
          tel="010-1111-2222"
          bgcolor="yellow"
          done={true}
        />
        <hr />
        <Test6Sub 
            name="김다미" 
            addr="제주" 
            color="tomato"
         />
        <hr />
        <Test6Sub />
      </div>
    );
};

export default Test6;