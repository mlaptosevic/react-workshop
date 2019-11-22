import React from 'react';
import Info from '../Info/Info';
import PizzaPanel from '../PizzaPanel/PizzaPanel';
import CommentForm from '../CommentForm/CommentForm';
import CommentList from '../CommentList/CommentList';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: '',
            comments: []
        }
    }

    setInfo = (info) => {
        this.setState({info});
    }

    addComment = (comment) => {
        this.setState({
            comments: [...this.state.comments, comment]
        });
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <div style={{flex: 1, width: '30%'}}>
                    <Info info={this.state.info} />
                </div>
                <div style={{flex: 1, width: '30%'}}>
                    <PizzaPanel setInfo={this.setInfo} />
                </div>
                <div style={{flex: 1, width: '30%'}}>
                    <CommentForm addComment={this.addComment} />
                    <CommentList comments={this.state.comments} />
                </div>
            </div>
        );
    }
}

export default MainContainer;