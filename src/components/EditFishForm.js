import React from "react";
import propTypes from "prop-types"
class EditFishForm extends React.Component {
    static propTypes = {
        fish: propTypes.shape({
            image: propTypes.string,
            name: propTypes.string,
            desc: propTypes.string,
            status: propTypes.string,
            price: propTypes.number,
        }),
        index: propTypes.string,
        updateFish: propTypes.func
    }

    handleChange = (e) => {
        console.log('e: ',e.currentTarget.value);
        // update fish
        const updatedFish = {
            ...this.props.fish,
            [e.currentTarget.name]: e.currentTarget.value
        }
        console.log(updatedFish);
        // copy current fish
        this.props.updateFish(this.props.index, updatedFish)
    }
    render() {
        return <div className="fish-edit">
           <input type="text" placeholder="name" name="name"  onChange={this.handleChange} value={this.props.fish.name}/>
            <input type="text" placeholder="price" name="price"  onChange={this.handleChange} value={this.props.fish.price}/>
            <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
            <textarea type="text" placeholder="desc" name="desc" onChange={this.handleChange}  value={this.props.fish.desc}/>
            <input type="text" placeholder="image" name="image"  onChange={this.handleChange} value={this.props.fish.image}/>
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
        </div>
    }
}

export default EditFishForm;