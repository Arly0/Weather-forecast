import React from 'react';

class Form extends React.Component{
    render() {
        return(
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" placeholder={'Enter town'} name={'town'} />
                <input type="submit" value={'Check'}/>
            </form>
        );
    }
}

export default Form;