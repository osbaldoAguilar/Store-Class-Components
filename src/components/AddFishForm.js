import React from "react";
import propTypes from 'prop-types'

class AddFishForm extends React.Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        match: propTypes.object,
    }

    createFish = (event) => {
        event.preventDefault();
        let fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addFish(fish);
        event.currentTarget.reset();
    }
    render() {
        return (
                <form className="fish-edit" onSubmit={this.createFish}>
                    <input type="text" placeholder="Name" name="name" ref={this.nameRef} />
                    <input type="text" placeholder="Price" name="price" ref={this.priceRef}/>
                    <select name="status" ref={this.statusRef}>
                        <option value='true'>Fresh</option>
                        <option value='false'>Sold Out</option>
                    </select>
                    <textarea placeholder="Desc" name="desc" ref={this.descRef}/>
                    <input type="text" placeholder="Image" name="image" ref={this.imageRef}/>
                    <button type='submit'>+ Add Fish</button>
                </form>
        )
    }
}

export default AddFishForm;