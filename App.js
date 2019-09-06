import React from 'react';
import './App.css';

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {ProductId: 'io'};

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(i) {
   this.setState({ProductId: i.target.value});
 }

 handleSubmit(i) {
   alert('A name was submitted: ' + this.state.ProductId);
 }

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <label>
         Name:
         <input type="text" value={this.state.ProductId} onChange={this.handleChange} />
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

       <input type="submit" value="Submit" />
     </form>
   );
 }
}

export default App;
