import React, { memo } from 'react';

const Test6Sub = memo( ({ text , count }) => {
    console.log(text , count)
    return (
        <h3 style={{color:'hotpink'}}>
            {text} / {count}
        </h3>
    );
});

export default Test6Sub;

/*const Test6Sub = ({ text , count }) => {
    console.log(text , count)
    return (
        <h3 style={{color:'hotpink'}}>
            {text} / {count}
        </h3>
    );
};

export default React.memo(Test6Sub);*/
// 처음부터 