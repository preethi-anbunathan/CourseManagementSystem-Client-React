import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './Style.css';


ReactDOM.render(
    <div>
        <CourseManager/>
    </div>,
    document.getElementById('root')
);