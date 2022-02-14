import React from "react";
import propTypes from 'prop-types'
import firebase from "firebase";
import base, {firebaseApp} from '../base'
import Login from "./login";

import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
    /* {this.props.fishes.map(fish => <EditFishForm/>)} */
    static propTypes = {
        fish: propTypes.object,
        updateFish: propTypes.func,
        deleteFish: propTypes.func,
        loadSample: propTypes.func,
    }
    
    state = {
        uid: null, 
        owner: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user=> {
            if(user) {
                this.authHandler({user})
            }
        })
    }

    authHandler = async (authData) => {
        console.log('authData',authData);
        const store = await base.fetch(this.props.storeId, {context: this});
        if(!store.owner){
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            })
        }

        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        })
    }

    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler)
    }

    logout = async () => {
        await firebase.auth().signOut().then(()=>console.log('Signed Out'),()=>console.error('Sign out Error'));
        this.setState({uid: null})
        console.log('loggin out');
    }

    render() {

        const logout = <button onClick={this.logout}>logout</button>

        if(!this.state.uid){
            return <Login authenticate={this.authenticate} />
        } else if(this.state.uid !== this.state.owner){
            return <div><p>Sorry you are not the owner</p>{logout}</div>
        } else {
            return (
                    <div className="inventory">
                            <h2>Inventory</h2>
                            {logout}
                            {Object.keys(this.props.fish).map(key => <EditFishForm 
                                key={key} 
                                index={key} 
                                deleteFish={this.props.deleteFish} 
                                fish={this.props.fish[key]} 
                                updateFish={this.props.updateFish} 
                                />)}
                            <AddFishForm addFish={this.props.addFish}/>
                            <button 
                                onClick={this.props.loadSample}>Load Sample Data</button>
                    </div>
            )

        }
    }
}

export default Inventory;