import React from 'react';
import IssuesList from './components/IssuesList';
import NewIssue from './components/NewIssue';
import { Container, Row, Col } from 'reactstrap';
import {v4 as uuid} from 'uuid'
let data = require('./data.json');

class App extends React.Component {

    state = {
        issues: data.projects
    }

    updateIssue(index, value) {
        this.setState({
            issues: this.state.issues.map(elem => (elem.id === index ? Object.assign({}, elem, {
                status: value
            }) : elem))
        })
    }

    createIssue(data) {
        this.setState(prevState => ({
            issues: [...prevState.issues, {id: uuid(), status: 0, name: data.name, "description": data.description}]
        }))
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12">
                        <h1>Issues list</h1>
                        <NewIssue clickEvent={this.createIssue.bind(this)} />
                    </Col>
                </Row>
                <IssuesList data={this.state.issues} updateIssue={this.updateIssue.bind(this)} />
            </Container>
        );
    }
}

export default App;