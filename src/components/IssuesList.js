import React from 'react';
import Issue from './Issue';

class IssuesList extends React.Component { 

    render() {
        return (
            <div className="issues-list">
                {this.props.data.map((issue, index) => {
                    return (
                        <Issue key={issue.id} issueId={issue.id} index={index} data={issue} updateIssue={this.props.updateIssue} />
                    );
                })}
            </div>
        );
    }
}

export default IssuesList;