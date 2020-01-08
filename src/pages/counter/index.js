import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from 'actions/counter';

class Counter extends PureComponent {
    render() {
        return (
            <div>
                <div>当前计数为{this.props.count}</div>
                <button onClick={() => this.props.increment()}>自增
                </button>
                <button onClick={() => this.props.decrement()}>自减
                </button>
                <button onClick={() => this.props.reset()}>重置
                </button>
                <button onClick={() => this.props.func(this.props.count)}>{this.props.func(this.props.count)}
                </button>
            </div>
        )
    }

}
// export default connect((state) => state, dispatch => ({
//     increment: () => {
//         dispatch(increment())
//     },
//     decrement: () => {
//         dispatch(decrement())
//     },
//     reset: () => {
//         dispatch(reset())
//     }
// }))(Counter);
export default connect(({ counter }) => counter, dispatch => ({
    increment: () => {
        dispatch(increment())
    },
    decrement: () => {
        dispatch(decrement())
    },
    reset: () => {
        dispatch(reset())
    },
    func:(e)=>{
        return e
    }
}))(Counter);
