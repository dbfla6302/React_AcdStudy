import React, { useState } from 'react';

const dataList = [
    {id:1, name:'chk1', text:'(필수)개인정보 처리방침동의', isChk:false},
    {id:2, name:'chk2', text:'(필수)서비스 이용약관 동의', isChk:false},
    {id:3, name:'chk3', text:'(선택)마케팅 수신 동의', isChk:false},
]

const Test2 = () => {
    const [ data, setData ] = useState( dataList )

    const changeInput = (e) => {
        const { name, checked } = e.target
        if( name === "all"){
            setData( data.map ( item => {
                return{
                    ...item,
                    isChk : checked
                }
            }))
        }else{
            setData( data.map ( item => item.name === name ? {...item, isChk: checked} : item ) )
        }
    }

    return (
        <div>
            <p>
                {/* <input type="checkbox" name="all" onChange={changeInput} checked={ data.filter( item => item.isChk !== true ).length < 1 } /> */}
                <input type="checkbox" name="all" onChange={changeInput} checked={ data.filter( item => item.isChk === false ).length < 1 } />
                <label>전체동의</label>
            </p>
            <hr />
            {
                data.map( 
                    item => <p key={item.id}><input type="checkbox" name={item.name} id={item.name} checked={item.isChk} onChange={changeInput} />
                    <label htmlFor={item.name}> {item.text} </label></p> 
                )
            }
        </div>
    );
};

export default Test2;