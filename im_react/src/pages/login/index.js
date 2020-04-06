import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import action from '../../store/actions/userAction'
import Button from '@material-ui/core/Button';
// import { useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
const styles = {
    root: {
      backgroundColor: 'red',
    },
  };
  
  @withStyles(styles)
// const use = useTheme()
class Login extends React.Component {
    constructor(props){
        super(props)
        this.btn = this.btn.bind(this)
        console.log('constr')
        console.log(this.props)
        // console.log(use)
    }
    getDiv() {
        console.log('getdiv')
        console.log(this.props)
        return this.props.state.reducer.title.map((p, i) => {
            return (
                // <div>{this.props.reducer.title}</div>
                <div key={i}>{p}</div>
            )
        })
    }
    btn(e){
        console.log(e)
        this.props.add(e)
        this.render()
    }
    render() {
        return (
            <div>
                {this.getDiv()}
                <Button variant="contained" color="primary" onClick={()=>this.btn('313213')}>++++++</Button>
            </div>

        )

    }
}


function select(state) {
    return {state:state}
}

export default connect(select,action)(Login)