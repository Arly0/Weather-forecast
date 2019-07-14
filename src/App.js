import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const APIkey = 'e25f4115a6cede845d4d542b244d95d5';
class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        weath: undefined,
        error: undefined,
    }

    checkweather = async (e) => {
        let town = e.target.elements.town.value;
        e.preventDefault();
        let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${APIkey}`);
        let data = await url.json();

        if(town){
            if(data.name){
                this.setState({
                    temp: (Math.round(data.main.temp - 273.15)),
                    city: data.name,
                    weath: data.weather[0].description,
                    error: '',
                });
            } else{
                this.setState({
                    temp: undefined,
                    city: undefined,
                    weath: undefined,
                    error: data.message,
                });
            }
        } else{
            this.setState({
                temp: undefined,
                city: undefined,
                weath: undefined,
                error: 'Вы не ввели город',
            });
        }

    }

    render() {
        return(
            <div>
                <Info  />
                <Form weatherMethod = {this.checkweather} />
                <Weather
                    temp  = {this.state.temp}
                    city  = {this.state.city}
                    weath = {this.state.weath}
                    error = {this.state.error}
                />
            </div>
        );
    }
}

export default App;