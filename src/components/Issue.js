import React from 'react';
import { Input } from 'reactstrap';

const issueTypes = {
    0: 'open',
    1: 'pending',
    2: 'close'
};

class Issue extends React.Component {

    handleChange = (event) => {
        const val = event.target.value;
        this.props.updateIssue(this.props.issueId, +val)
    }

    render() {
        const { name, description, status} = this.props.data;
        return (
            <div className="issue-wrapper">
                <div className="inner">
                    <div className={`bar task-${issueTypes[status]}`}>
                        <span className="counter">{ this.props.index + 1 }</span>
                    </div>
                    <div className="issue-header">
                        <h2>{name}</h2>
                    </div>
                    <div className="issue-content">
                        <p>{description}</p>
                        <Input type="select" value={status} onChange={this.handleChange}>
                            <option value="0" disabled={ status == 1 || status == 2 }>Open</option>
                            <option value="1" disabled={ status == 2 }>Pending</option>
                            <option value="2">Close</option>
                        </Input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Issue;