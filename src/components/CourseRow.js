import React from 'react';
import {Link} from 'react-router-dom';
import CourseService from "../services/CourseService";

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
    }
    render() {
        return (
            <tr>
                <td>
                    <Link to={`/course/${this.props.course.id}`} id={this.props.course.id}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td align="center"><b>
                    {'Me'}
                </b>
                </td>
                <td align="center"> <b>
                    {this.props.course.modified.toString().replace("T"," ").split('.000+0000')}
                </b>
                </td>
                <td>
                    <button className="btn btn-danger"
                            onClick={this.props.deleteCourseHandler}>Delete</button>
                </td>
            </tr>
        )
    }
}
export default CourseRow;