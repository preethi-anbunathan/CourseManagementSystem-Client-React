import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './containers/CourseManager';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <div className="container-fluid">
        <CourseManager/>
    </div>,
    document.getElementById('root')
);