import React, { createContext, useState } from 'react';

// 관리자 만들기 - 내보내기
export const ColorContext = createContext()

const ColorProvider = ( props ) => {
    // 상태, 함수 모든내용 작성
    const [ color, setColor ] = useState('orange')
    const onTomato = () => { setColor('tomato') }
    const onHotpink = () => { setColor('hotpink') }
    const onSkyblue = () => { setColor('skyblue') }
    const onLime = () => { setColor('lime') }
    return (
        <ColorContext.Provider value={{color, onHotpink, onLime, onSkyblue, onTomato}}>
            {/* UI 디자인 - Color 디자인 */}
            { props.children }
        </ColorContext.Provider>
    );
};

export default ColorProvider;