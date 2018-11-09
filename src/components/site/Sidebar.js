import React from 'react'

import {
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import ClassComponentDemo  from '../concepts/ClassComponentDemo';
import PropsDemo from '../concepts/PropsDemo';
import Clock from '../walkthrough/Clock';
import NytApp from '../apps/nyt-app/NytApp';
import FriendListApp from '../apps/friend-list-app/FriendListApp';
import Video from '../apps/YouTubeApi/Video'

const Sidebar = () => (
    <div className="sidebar">
        <div className="side-list-styling">
         <ul className="sidebar-list list-unstyled">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rationale">Rationale</Link></li>
          <li><Link to='/functionalcomponent'>Functional Component</Link></li>
          <li><Link to='/JSXRules'>Rules</Link></li>
          <li><Link to='/ClassComponentDemo'>Class Component</Link></li>
          <li><Link to='/PropsDemo'>Props Demo</Link></li>
          <li><Link to='/Clock'>Clock</Link></li>
          <li><Link to='/NytApp'>New York Times</Link></li>
          <li><Link to='/FriendListApp'>Friend's List</Link></li>
          <li><Link to='/Video'>Youtube</Link></li>
            <li><Link to='/resorces'>Resources</Link></li>
         </ul>
        </div>
        <div className="sidebar-route">
        <Switch>
            <Route exact path="/home"><Home/></Route>
            <Route exact path="/resources"><Resources/></Route>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
            <Route exact path="/classcomponentdemo"><ClassComponentDemo /></Route>
            <Route exact path="/propsdemo">
                <div>
                    <PropsDemo title='Beast Creature' author='Adam Smith' codepenUrl='https://codepen.io/Adamws33/pen/KZQxwJ' date='01/1/2018'/>
                    <PropsDemo title='Another Beast' author='Allison Summer' codepenUrl='https://codepen.io/Adamws33/pen/KZQxwJ' date='01/01/2018'/>
                    <PropsDemo title='Beast Mode' author ='Andres Martin' codepenUrl='https://codepen.io/Adamws33/pen/KZQxwJ'date='01/1/2018'/>
                    <PropsDemo title='Beasty' author='Andrew Gunst' codepenUrl='https://codepen.io/Adamws33/pen/KZQxwJ' date='01/1/2018'/>
                </div>
            </Route>
            <Route exact path ="/Clock"><Clock /></Route>
            <Route exact path="/jsxrules"><JSXRules /></Route>
            <Route exact path ="/NytApp"><NytApp/></Route>
            <Route exact path ='/FriendListApp'><FriendListApp/></Route>
            <Route exact path ='/Video'><Video /></Route>
         </Switch>
        </div>
    </div>
)

export default Sidebar;