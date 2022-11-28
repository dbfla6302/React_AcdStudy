import React, { useState } from 'react';

const Test4 = () => {
    const [ isShow , setIsShow ] = useState(false) 

    const onShow = () => { setIsShow(false) }
    const onHide = () => { setIsShow(true) }
    const onToggle = () => { 
        // ! not - !true -false, !false - true
        setIsShow( !isShow ) 
    }

    return (
        <div>
            <p>
                <button onClick={onShow}>숨기기</button>
                <button onClick={onHide}>보이기</button>
                <button onClick={onToggle}>
                    {
                        isShow ? '숨기기':'보이기'
                    }
                </button>
            </p>
            {
                isShow === true ?
                <div style={{margin:15, width:100, height:100, backgroundColor:'hotpink'}}></div>
                :
                null
            }
            <hr/>
            {
                isShow && 
                <div style={{margin:15, width:100, height:100, backgroundColor:'hotpink'}}></div>
            }
        </div>
    );
};

export default Test4;