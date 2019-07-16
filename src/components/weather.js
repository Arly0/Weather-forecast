import React from 'react';

const Weather = (props) =>{
    return(
        <div>
            {props.city &&
            <div>
                <br />
                <h2>
                    Город - {props.city}
                </h2>
                <br />
                <h3>Температура: {props.temp}; Погодные условия: {props.weath}</h3>
            </div>
            }
            <div>
                <h2>{props.error}</h2>
            </div>

        </div>
    );
}



export default Weather;