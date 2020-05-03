import React, { Component } from 'react';
import {getProfile} from './UserFunctions';

//styls
import ProfileCss from './styles/ProfileCss';


class Profile extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        getProfile().then(resp => {
            this.setState({
                name: resp.user.name,
                email: resp.user.email
            })
        })
    }

    render() {
        return(
            <ProfileCss>    
                <div className="content">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card-profile">
                                <div class="chip">
                                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person"/>
                                    <p>Nombre : </p> {this.state.name}
                                    <p>Email : </p> {this.state.email}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <p>Lorem aexis javoer can cauich ntentado ser un programador jajaja Lorem aexis javoer can cauich ntentado ser un programador jajaja Lorem aexis javoer can cauich ntentado ser un programador jajaja</p>
                        </div>
                    </div>
                </div>
            </ProfileCss>
            
        )
    }
}

export default Profile;