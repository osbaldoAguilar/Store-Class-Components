import React from "react"; 
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base'
class App extends React.Component {
    state = {
        fishes: {},
        order: {},
    }
    

    componentDidMount() {
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        console.log(localStorageRef);
        if(localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef)
            })
        }
        this.ref = base.syncState(`${params.storeId}/fishes`,{
            context: this,
            state: 'fishes'
        })
        // const { params } = this.props.match;
        // this.ref = base.syncState(`${params.storeId}/fishes`, {
        //   context: this,
        //   state: "fishes"
        // });
    }

    componentDidUpdate() {
        console.log('Updated');
        console.log(this.state.order);
        // const { params } = this.props.match;
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
    }

    componentWillUnmount() {
        console.log('unmounting');
        base.removeBinding(this.ref)
    }
    addFish = fish => {
        // take copy of exsiting state
        const fishes = {...this.state.fishes}
        // add our data to new 
        fishes[`fish${Date.now()}`] = fish
        // set new object to state
        this.setState({
            fishes: fishes
        })
    }

    updateFish = (key, updatedFish) => {
        // take copy of current state
        const fishes = {...this.state.fishes};
        // update that state
        fishes[key] = updatedFish;
        // set that to state
        this.setState({ fishes : fishes}) 
    }

    deleteFish = (key) => {
        // copy state
        const fishes = {...this.state.fishes};
        // update state
        fishes[key] = null;
        // set state
        this.setState({ fishes : fishes})
    }

    removeOrder = (key) => {
        const order = { ...this.state.order };
        delete order[key];
        this.setState({ order })
    }

    loadSample = () => {
        this.setState({ fishes : sampleFishes})
    }

    addToOrder = (key) => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
    }

    render() {
        return (
            <>
                <React.StrictMode>
                    <div className="catch-of-the-day">
                        <div className="menu">
                            <Header
                                firstPart="Fish"
                                lastPart="Store"
                                tagline="Freash Seafood Market"
                                storeId={this.props.match.params.storeId}
                            />
                            <ul className="fishes">
                                {Object.keys(this.state.fishes).map(key=> 
                                <Fish 
                                    key={key} 
                                    indexOf={key}
                                    details={this.state.fishes[key]} 
                                    addToOrder={this.addToOrder}
                                    />)}
                                {/* this loops over each fish based on key*/}
                            </ul>
                        </div>
                        <Order removeOrder={this.removeOrder} fishes={this.state.fishes} order={this.state.order}/>
                        <Inventory addFish={this.addFish} updateFish={this.updateFish} deleteFish={this.deleteFish} loadSample={this.loadSample} fish={this.state.fishes} storeId={this.props.match.params.storeId}/>
                    </div>
                </React.StrictMode>
            </>
        )
    }
}

export default App