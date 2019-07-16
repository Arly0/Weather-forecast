import React from 'react';

const Form = (props) =>{
    return(
        <form onSubmit={props.weatherMethod}>
            <input type="text" placeholder={'Enter town'} name={'town'} />
            <input type="submit" value={'Check'}/>
        </form>
    );
}

export default Form;