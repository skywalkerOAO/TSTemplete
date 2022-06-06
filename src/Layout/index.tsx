
import React from 'react'
import style from './index.module.css'
interface IProps {
    
}

interface IState {
    height: number,
    width: number
}

class Layout extends React.Component<IProps, IState> {
    state = {
        height: 0,
        width: 0
    };
    handleResize = () => {
        this.setState({
          width: document.documentElement.clientWidth,
          height:document.documentElement.clientHeight
        })
        console.log(this.state)
      }
    componentDidMount() {
       this.handleResize()
       window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
        // 一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
        window.removeEventListener('resize', this.handleResize)
      }
    render() {
        return (
            <div style={{width:this.state.width,height:this.state.height}}/>
        );
    }
}

export default Layout;
