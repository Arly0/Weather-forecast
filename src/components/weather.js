import React from 'react';

class Weather extends React.Component {
    render(){
        return(
            <div>
                {this.props.city &&
                <div>
                    <br />
                    <h2>
                        Город - {this.props.city}
                    </h2>
                    <br />
                    <h3>Температура: {this.props.temp}; Погодные условия: {this.props.weath}</h3>
                </div>
                }

            </div>
        );
    }
}

export default Weather;