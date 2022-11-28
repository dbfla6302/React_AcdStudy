import React from 'react';

const Test7Count = ({ count , text }) => {
    console.log(text,count)

    return (
        <h2>
            { text } / { count }
        </h2>
    );
};

export default React.memo(Test7Count);