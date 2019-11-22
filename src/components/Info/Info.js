import React from 'react';

class Info extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHidden: false
        }
    }

    toggleIsHidden = () => {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    render() {
        let info = this.props.info;
        if(this.state.isHidden) {
            info = null;
        }

        return (
            <div>
                {info} <br/>
                <button onClick={this.toggleIsHidden}>Toggle</button>
            </div>
        );
    }
}

export default Info;