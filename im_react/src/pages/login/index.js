import React, { PureComponent, Component } from 'react';
import { connect } from 'react-redux'
import action from '@store/actions/userAction'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

class Login extends Component {
    constructor(props) {
        super(props)
        this.btn = this.btn.bind(this)
    }
    getDiv() {
        return this.props.state.reducer.title.map((p, i) => {
            return (
                // <div>{this.props.reducer.title}</div>
                <div key={i}>{p}</div>
            )
        })
    }
    btn(e) {
        console.log(e)
        this.props.add(e)
        this.render()
    }
    render() {
        return (
            <Container >
                 <Box width="100%" height="calc(100vh)" bgcolor="common.black">
                @material-ui/system
            </Box>
            </Container>
           
            
        )

    }
}


function select(state) {
    return { state: state }
}

export default connect(select, action)(Login)