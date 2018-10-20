import React, { Component } from 'react';
import * as Action from './Action';
import { connect } from 'react-redux';

class App extends Component {

    render() {
        const { increment, decrement} = this.props;

        return(
            <div className = "container">
                <h1 className = "text-center mt-5">{this.props.text}{this.props.count}</h1>
                <p className = "text-center">
                  <button onClick={() => increment()} className="btn btn-primary mr-2">Increase</button>
                  <button onClick={() => decrement()} className="btn btn-danger my-2">Decrease</button>
                </p>
            </div>
        );
    }
}

//接收store里的state
//mapStateToProps订阅store状态的改变
//每次store的state发生变化时都会被调用
const mapStateToProps = state => ({
    text: state.behaviour,
    count: state.count
});

//用connect接收Provider提供的store
//并传入Action
export default connect(mapStateToProps, Action)(App);