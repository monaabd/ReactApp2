

class App extends React.Component {
  constructor(props){  // when we have state we must have constructor****
    super(props);
    this.state={
      name:'',
      age: '',
      oldList: [
           {
            name: "Mark",
            age: "30"
            },
            {
            name: "Nik",
            age: "20"
            },
            {
            name: "Tony",
            age: "40"
            }
      ]
    };
    this.setNameAndAge=this.setNameAndAge.bind(this);
    this.addNewObject=this.addNewObject.bind(this);
  }
  
  render(){
    return (<div>
      <AddForm nameAndAge={this.setNameAndAge} buttonClick={this.addNewObject}/> 
      <MyList theList={this.state.oldList}/>
    </div>);
  }//render
  
  setNameAndAge(event){
    var el = event.target; // input elementet
    if (el.placeholder == "name")
      this.setState({ name: el.value });
    else if (el.placeholder == "age")
      this.setState({ age: el.value });
  }
  
  addNewObject(event) {
     var newList = this.state.oldList;

      newList.push({
        name: this.state.name,
        age: this.state.age
      });

      this.setState ({
          oldList: newList
      }); //addnewobj
  }
}//Appcomp
   
   class MyList extends React.Component {
     constructor(props) {
       super(props);
     }
     
     render() {
      const items = this.props.theList.map( item => {
        return <li>{item.name}, {item.age}</li>;
      });
      return <ol>
          {items}
       </ol>;
       
       
      return <ol>
        {this.props.theList.map( item => 
          <li>{item.name}, {item.age}</li>) }
      </ol>;
      

     } //render
   }////MyListcomp 
   
   
     class AddForm extends React.Component {
        constructor(props) {
        super(props);
        
        }
       render(){
         
         return <div>
         <input type="text" placeholder="name" onChange={this.props.nameAndAge}/>
         <input type="text" placeholder="age" onChange={this.props.nameAndAge}/>
         <button onClick={this.props.buttonClick}>click Add</button></div>;
       }//render
        
           //anropa functionen här bara, 
          //when you want to get hold of input someth which is in event you use state ** u see in code up
       //click   
       
       }//inputcomp
       
  //function object () 
  
 ReactDOM.render(<App/>,
		document.getElementById('app'));
		
		