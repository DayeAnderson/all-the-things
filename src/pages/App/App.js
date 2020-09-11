import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import TylersThings from '../TylersThings/TylersThings'
import DavidsThings from '../DavidsThings/DavidsThings'

class App extends Component {
  state = { 
    tylersThings: [
      { 
        name: 'Guitar',
        image: 'https://i.imgur.com/0GxwOYq.png',
        attributes: ['6-strings', 'Made of Wood', 'Sounds real good', 'plunk, plunk plunk']
      },
      {
        name: 'Piano',
        image: 'https://i.imgur.com/yzsBgJs.jpg',
        attributes: ['Keys', 'Ebony and Ivory', 'not a taco', 'why gravy exists']
      },
      {
        name: 'Leg Roller',
        image: 'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        attributes: ['yummy in my tummy', 'salsas may vary', 'definitely a taco', 'very edible']
      },
      {
        name: 'The Brothers Kramazov',
        image: 'https://i.imgur.com/3BmfSOA.png',
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"] 
      },

    ],
    davidsThings: [
      {
        name: "Xbox",
        image: "https://i.imgur.com/IsqjVmub.jpg",  
        attributes: ["time consuming", "enjoyable", "intensive", "black"],
      },
      {
        name: "Rathalos",
        image: "https://i.imgur.com/s4Xo65Ab.png",  
        attributes: ["breathes fire", "poison tip tail", "flies", "optimal transport", "(David doesn't acually own a Rathalos)"], 
      },
      {
        name: "Alfredo Pasta",
        image: "https://i.imgur.com/MpCOIuyb.jpg",  
        attributes: ["Pasta", "delicious", "vegan", "creamy"], 
      },
      {
        name: "Bike",
        image: "https://i.imgur.com/5x6uMRib.jpg",  
        attributes: ["two wheels", "", "edible?", "Horrible when toasted!"], 
      },
    ],
    shahzadsThings: [
      {
        name: "functional programming",
        image: "https://imgs.xkcd.com/comics/functional.png",  
        attributes: ["efficient", "reusability", "not a taco", "beautiful"],
      },
      {
        name: "React hooks",
        image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
      },
      {
        name: "BluBlockers",
        image: "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
        attributes: ["very attractive", "useful probably!", "good for viewing tacos", "such hip", "worn by all the cool kids"],
      },
      { 
        name: "Healthy food", 
        image: "https://i.imgur.com/gRxOxsA.jpg", 
        attributes: ["makes you live a long time", "consistent poops", "probably tacos sometimes!", "farm to market"], 
      },
    ] 
  } 
  render() {
    return (
      <>
        <Route 
          exact path='/'
          render={() => 
            <>
              {/* All the <a> tags should live here */}
              <h2>All-The-Things</h2>
              <a href="/tylersstuff">Tyler's Things</a><br></br>
              <a href="/davidsThingys">Daye's Things</a> 
            </>
          }
        />
        {/* All the <Route> components should live here */}
        <Route 
          exact path='/tylersstuff'
          render={() => 
            <TylersThings 
          tylersThings={this.state.tylersThings}
            />
        }/>
        <Route
          exact path='/davidsThingys'
          render={() => 
          <DavidsThings
          davidsThings={this.state.davidsThings}
          />
          }/>
      </>
      
    );
  }
}
 
export default App;

