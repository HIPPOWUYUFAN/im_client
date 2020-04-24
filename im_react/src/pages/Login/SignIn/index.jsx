import React, { Component } from 'react';
import UserComponent from '@components/UserComponent'



// export default function SignIn(props) {
//     return (

//         <div >

//             <div onClick={() => { props.history.push('home') }}> 13231321</div>
//             <UserComponent {...props} type="SignIn" />
//         </div>
//     )
// }

export default class SignIn extends Component {

    render() {
        return (
            <div >

                <div onClick={() => { console.log(this.props.match),this.props.history.push('home') }}> 13231321</div>
                {/* <UserComponent {...this.props} type="SignIn" /> */}
            </div>
        )

    }
}