
import React from 'react'
import Layout from '../../Layout';

interface IProps {
    name: number;
}

interface IState {
    count: number;  
}

class Home extends React.Component<IProps, IState> {
    state = {
        count: 0
    };
    componentDidMount() {
     
    }
    render() {
        return (
            <div>
                <Layout/>
                {this.props.name}
            </div>
        );
    }
}

export default Home;
