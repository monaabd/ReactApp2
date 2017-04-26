

 
class App extends React.Component {
  constructor(props){  // when we have state we must have constructor****
    super(props);
    this.state={
      name:'',
      age: '',
      uniqueId: 6,
      oldList: [
           {
            name: "Mark",
            age: "30",
            id:0
            },
            {
            name: "Nik",
            age: "20",
            id:1
            },
            {
            name: "Tony",
            age: "40",
            id:2
            },
            {
            name: "tina",
            age: "10",
            id:3
            },
          {
            name: "katy",
            age: "80",
            id:4
            },
          {
            name: "bita",
            age: "33",
            id:5
            }
      ]
    };
    this.setNameAndAge=this.setNameAndAge.bind(this);
    this.addNewObject=this.addNewObject.bind(this);
    this.clickOnMyList=this.clickOnMyList.bind(this);
    this.deleteB=this.deleteB.bind(this);
  }
  
  render(){
    return (<div>
      <AddForm nameAndAge={this.setNameAndAge} buttonClick={this.addNewObject} 
      updateState={this.state}/> 
      <MyList theList={this.state.oldList} onClickAp={this.clickOnMyList} deleteB={this.deleteB}/>
      
    </div>);
  }//render
  
  setNameAndAge(event){
       
    var el = event.target; // input elementet
    if (el.placeholder == "Name")
      this.setState({ name: el.value });
    else if (el.placeholder == "Age")
      this.setState({ age: el.value });
        
  } 
      
  
  addNewObject(event) {
     var newList = this.state.oldList;

      newList.push({
        name: this.state.name,
        age: this.state.age,
        id: this.state.uniqueId
      });
 
      this.setState ({
          oldList: newList,
          uniqueId: this.state.uniqueId+1
      }); 
     // console.log(this.state.oldList);
  }//addnewobj
  clickOnMyList(event) {
    let ev= event.target.parentNode;
    //target=span, parentNode=li
   //console.log(ev);
     this.setState ({
       name: ev.childNodes[0].innerText, 
       //childNodes=li's barn som är arrey med 2span
        age: ev.childNodes[1].innerText
     });
     //console.log(this.state);
  }//clickOnMyList
   
   deleteB(event){
     //console.log(event.target.parentNode.id);
      let updateList= this.state.oldList.filter(function(element){
        return event.target.parentNode.id != element.id
      }); 
      this.setState({
        oldList: updateList
      });
   } //deletb
  
}//Appcomp
   
   class MyList extends React.Component {
     constructor(props) {
       super(props);
     }
     
     render() { 
      
       
      const items = this.props.theList.map( item => {
        return <li className="liClass"  key={item.id} id={item.id} onClick={this.props.onClickAp} >
                       
                 <span>{item.name +"  "}</span> 
                 <span>{item.age}</span>
                 <br/>
                 <DeleteButton  deleteB={this.props.deleteB} />
               </li>
                    
        //onClick={this.props.theList} data-id={"1"}
      });
      return <ol>
          {items}
       </ol>;
       
    /* return <ol>
        {this.props.theList.map( item => 
          <li>{item.name}, {item.age}</li>) }
      </ol>;*/
      

     } //render
   }////MyListcomp 
   
   
     class AddForm extends React.Component {
        constructor(props) {
        super(props);
        
        }
       render(){
         
         return <div>
         <input
         type="text" 
         placeholder="Name" 
         onChange={this.props.nameAndAge} 
         value={this.props.updateState.name} />
         <input 
         type="text" 
         placeholder="Age" 
         onChange={this.props.nameAndAge} 
         value={this.props.updateState.age}/>
         
         <button type="button" className="btn btn-success"
         onClick={this.props.buttonClick}>Click Add</button>
               </div>;
        
       }//render
        
       }//inputcomp
  class DeleteButton extends React.Component {
    
    render(){
    return <button type="button" 
          className="btn btn-warning" 
          onClick={this.props.deleteB}> Delete </button>
          
    } 
  }//buttoncomp
  
 ReactDOM.render(<App/>,
		document.getElementById('app'));
		
		