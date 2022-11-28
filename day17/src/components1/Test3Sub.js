import React, { useMemo } from 'react';

const getColor = ( color ) => {
    console.log('getColor')
    switch (color) {
        case 'pink': return 'pink에 대한 설명입니다.'
        case 'hotpink': return 'hotpink에 대한 설명입니다.'
        case 'tomato': return 'tomato에 대한 설명입니다.'
        case 'lime': return 'lime에 대한 설명입니다.'
        case 'skyblue': return 'skyblue에 대한 설명입니다.'
        case '': return '색상을 입력해 주세요.'
        default : return '해당 색은 존재하지 않습니다.'
    }
}

const getFood = ( food ) => {
    console.log('getFood')
    switch ( food ) {
        case '갈비': return '갈비에 대한 설명입니다.'
        case '라면': return '라면에 대한 설명입니다.'
        case '우동': return '우동에 대한 설명입니다.'
        case '만두': return '만두에 대한 설명입니다.'
    }
}

const Test3Sub = ({ color , food }) => {
    const colorInfo = useMemo( () => getColor( color ) , [ color ] )
    const foodInfo = useMemo( () => getFood( food ) , [ food ] )

    return (
        <div>
            <hr />
            <h3>선택한 색 : { color }</h3>
            <h3>색 정보 : { colorInfo }</h3>
            <hr />
            <h3>선택한 음식 : {food}</h3>
            <h3>음식 정보 : { foodInfo }</h3>
        </div>
    );
};

export default Test3Sub;