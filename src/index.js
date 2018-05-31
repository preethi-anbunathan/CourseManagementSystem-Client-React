import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './Style.css';
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {widgetReducer} from "./reducers/widgetReducer"

import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom'
import CourseEditor from "./containers/CourseEditor";
import ModuleEditor from "./containers/ModuleEditor";

// const Home = () => {
//     return(
//     <html>
//     <head>
//         <link rel="stylesheet" href="Style.css" rel="stylesheet"/>
//
//     </head>
//     <body>
//
//     <div class="header">
//         <h1><font color="white">Course Management System</font></h1>
//     </div>
//
//     <div class="topnav">
//         <p align="center"><Link to='/courses'>Course Editor</Link></p>
//     </div>
//
//     </body>
//     </html>
//     );
// };
//
//
// const App = () => {
//     return(
//         <Router>
//             <div>
//                 <Route exact path='/'
//                        component={Home}/>
//                 <Route exact path='/courses'
//                        component={CourseManager}/>
//                 <Route exact path='/CourseEditor/:courseId'
//                        component={CourseEditor}/>
//
//             </div>
//         </Router>);
// };
//
// ReactDOM.render(
//
//     <App/>,
//     document.getElementById('root')
// );

// let store = createStore(widgetReducer)

ReactDOM.render(
    <div>
        <CourseManager/>
    </div>,
    document.getElementById('root')
);