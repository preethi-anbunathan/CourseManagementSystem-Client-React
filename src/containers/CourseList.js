import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService';
let self;

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
        self = this;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }
    titleChanged(event) {
        this.setState({
            course: {title: event.target.value}
        });
    }
    createCourse() {
        let newCourse;
        if (this.state.course === undefined || this.state.course.title === '') {
            newCourse = {title: 'New Course'};
        } else {
            newCourse = this.state.course;
        }
        newCourse.modified = new Date();
        newCourse.created = new Date();
        this.courseService
            .createCourse(newCourse)
            .then(() => {this.findAllCourses();});
        document.getElementById('titleFld').value = '';
    }
    deleteCourse(event) {
        if(window.confirm('Are you sure you want to delete?')) {
            let id = event.target.closest('tr').getElementsByTagName('td')[0].getElementsByTagName('a')[0].id;
            this.courseService
                .deleteCourse(id)
                .then(() => {this.findAllCourses();});
        }
    }
    componentDidMount() {
        this.findAllCourses();
    }
    renderCourseRows() {
        let courses = null;
        if(this.state) {
            courses = this.state.courses.map(function(course) {
                return <CourseRow key={course.id}
                                  course={course}
                                  deleteCourseHandler={self.deleteCourse}/>
            });
        }
        return (
            courses
        )
    }
    findAllCourses() {
        this.courseService
            .findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h2><font color="white">Course List</font></h2>
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th><center><font color="white">Title</font></center></th>
                        <th><center><font color="white">Owner</font></center></th>
                        <th><center><font color="white">Last modified</font></center></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>
                            <input onChange={this.titleChanged}
                                   id="titleFld"
                                   className="form-control"
                                   placeholder="Course Name"/>
                        </td>
                        <td>Me</td>
                        <td>Today</td>
                        <td>
                            <button onClick={this.createCourse}
                                    className="btn btn-primary">Add</button>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CourseList;