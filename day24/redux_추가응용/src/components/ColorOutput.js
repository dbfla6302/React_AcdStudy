import ColorList from './ColorList';
import './ColorList.css';
import ColorListInput from './ColorListInput';
 

const ColorOutput = () => {
 
    return (
        <div>
            
            <ColorListInput /> 
            <ColorList />      
            <em>1. 컬러를 입력</em> <br/>      
            <em>2. 컬러박스 생성 </em>  <br/>
            <em>3. 왼쪽누르면 opacity 0.1씩감소 , 오른쪽 누르면 삭제</em>       
        </div>
    );
};

export default ColorOutput;