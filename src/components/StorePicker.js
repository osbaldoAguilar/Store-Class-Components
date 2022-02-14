import React from "react";
import propTypes from "prop-types";
import {getFunName} from "../helpers"

class StorePicker extends React.Component{
    myInput = React.createRef();

    static propTypes = {
        history: propTypes.object
    }

    // constructor() {
    //     super();
    //     this.go2Store = this.go2Store.bind(this)
    // }

    // property = go2Store set arrow function to avoid using bindings
    go2Store = (event) => {
        // stop form from submitting
        event.preventDefault();
        // get the text from that input
        const data = this.myInput.current.value;
        console.log(data);
        // change the page to /store/...
        this.props.history.push(`/store/${data}`)
    }
    render() {
        // This is the Store Selector
        return (
            <>
                <form onSubmit={this.go2Store} className="store-selector">
                    <h2>Please Enter Store Name</h2>
                    <input ref={this.myInput} type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
                    <button type="submit">Visit Store ➡️</button>
                </form>
            </>
        )
    }
}
export default StorePicker;