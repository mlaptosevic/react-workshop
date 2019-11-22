import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            comment: ''
        }
    }

    onChange = (field, e) => {
        const value = e.target.value;

        this.setState({
            [field]: value
        });
    }

    onSendComment = () => {
        this.props.addComment({
            name: this.state.name,
            comment: this.state.comment
        })
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.onChange('name', e)} type="text" placeholder="Name" /> <br/>
                <textarea onChange={(e) => this.onChange('comment', e)} /> <br/>
                <button onClick={this.onSendComment}>Send comment</button>
            </div>
        );
    }
};

export default CommentForm;