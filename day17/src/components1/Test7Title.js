import React from 'react';

const Test7Title = () => {
    console.log('Test7Title')

    return (
        <div>
            <h2> React.mome / useCallback</h2>
        </div>
    );
};

export default React.memo(Test7Title);