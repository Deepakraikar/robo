import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/searchbox';
import Scroll from '../components/scroll';
//import ErrorBoundry from '../components/ErrorBoundry';
import './app.css';


class App extends  Component{
    constructor()     {
        super();
        this.state  = {
            robots : [], //robots
            searchfield : ''
        } 
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users =>  {this.setState({ robots:users })}); 
    }

onSerachChange = (event) => 
{
    //console.log(event.target.value);
    this.setState({searchfield: event.target.value})
     // console.log(filterdborots);
}

    render()    {
        const { robots, searchfield } = this.state;
        const filterdborots = robots.filter(robot =>
            {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            })

      return !robots.length ?
                 <h1>Loading ...</h1> :
                (
                    <div className='tc'>
                            <h1 className='f1'>Robo friends</h1>
                            <Searchbox searchChange={this.onSerachChange} />
                            <Scroll>
                                <Cardlist robots = {filterdborots} />
                               {/* <ErrorBoundry>
                                    <Cardlist robots = {filterdborots} />
                                </ErrorBoundry> */}
                            </Scroll>
                    </div>
                );
    }
}

export default App;


