import React from 'react';
import TopicPill from './TopicTabs';
import TopicTabItem from '../components/TopicTabItem'
import WidgetListContainer from './widgetList'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {widgetReducer} from "../reducers/widgetReducer"

let store = createStore(widgetReducer);

export default class WidgetListEditor
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topicId: '',
            topic: {}
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.setTopicId = this.setTopicId.bind(this);
    }



    componentDidMount() {
        this.setModuleId(this.props.match.params.moduleId);
        this.setCourseId(this.props.match.params.courseId);
        this.setLessonId(this.props.match.params.lessonId);
        this.setTopicId(this.props.match.params.topicId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);
        this.setTopicId(newProps.match.params.topicId);
    }

    setTopicId(topicId) {
        this.setState({topicId: topicId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }



    render() {
        return(

            <Provider store={store}>
                <WidgetListContainer topicId={this.state.topicId}/>

            </Provider>

        );}}
