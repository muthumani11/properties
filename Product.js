import React,{ Component} from 'react';




class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products:props.Productvalue
  }
}

onClick(e){
this.props.onClick(e);

}




    render(){
const {Productvalue} = this.props;
        return (
          <form>
    <label>
      Product id:
      <input type="text" name="name" value={this.props.Productvalue.} onChange={this.onClick} />
    </label><br/>
    <label>
      Product Name:
      <input type="text" name="name" />
    </label><br/>
    <label>
      Product category:
      <input type="text" name="name" />
    </label><br/>
    <label>
      price :
      <input type="text" name="name" />
    </label><br/>
    <input type="submit" value="Submit" onClick={this.updateproductvalues()} />
  </form>
        );
    }
}


export default Product;
