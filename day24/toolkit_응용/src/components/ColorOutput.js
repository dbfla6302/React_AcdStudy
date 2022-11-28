import ColorList from './ColorList';
import './ColorList.css';
import ColorListInput from './ColorListInput';
 

const ColorOutput = () => { 
    return (
        <div>            
            <ColorListInput /> 
            <ColorList />                      
        </div>
    );
};

export default ColorOutput;