import React, { Component } from 'react';
import './App.css';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import Users from './components/users';

class App extends Component {
    constructor(props) {
        super(props);

        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app.database().ref('INDOOR_MAP');

        this.state = {
            users: [],
            frameCount: 0
        }
    }

    componentWillMount() {
        this.db.on('value', snapshot => {
            var users = [];
            snapshot.forEach((data) => {
                var user = data.val();
                users.push(user);
            })

            this.setState({
                users: users,
            });
        });
    }

    render() {
        return (
            <div>
                <Users 
                    users={this.state.users}/>
            </div>
        );
    }
}

export default App;
