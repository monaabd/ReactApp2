

var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
       age: ''
    }
    this.setNameAndAge=this.setNameAndAge.bind(this);
  }
  render(){
    return(
      <div>
      <MyInput nameAndAge={this.setNameAndAge}/> 
      /*nameAndAge is a props name which //we choosed ourself and to creat prop we just give our props a name and //put the function in it and in other component we can say with help of //'props' that we want to use this func
          */      
        <MyList nameAndAge={this.setNameAndAge}/> </div>
      
    )//return
  }//render
  setNameAndAge(nameA,ageA){
    this.setState({
      name: nameA,
      age: ageA
    });
  }
}//Appcomp
   
   class MyList extends React.Component {
    constructor(props) {
			super(props);
			this.state = {
			  myList : [
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
        ],
        newObject: {
        
         name: 'Mona',
         age: 20
        }
			};//this state
			 this.handleChange=this.handleChange.bind(this);
    }//const
    
    
     render(){
       
     return  <div><ol>
                <li>{this.state.myList[0].name + " "+this.state.myList[0].age  }</li>
                <li>{this.state.myList[1].name + " "+this.state.myList[1].age } </li>
                <li>{this.state.myList[2].name + " "+this.state.myList[2].age } </li>
                <li>{this.handleChange}</li> 
              </ol></div>;
     } //render
      
      handleChange(){
          this.props.nameAndAge(this.state.myList.name, this.state.myList.age);
      }
   }////MyListcomp 
   
   
     class MyInput extends React.Component {
        constructor(props) {
        super(props);
        this.handleChangeName=this.handleChangeName.bind(this);
        this.handleChangeAge= this.handleChangeAge.bind(this);
        this.handleClick=this.handleClick.bind(this);
        }
       render(){
         this.props.nameAndAge
         return <div>
         <input type="text" placeholder="name" onChange={this.handleChangeName}/>
         <input type="text" placeholder="age" onChange={this.handleChangeAge}/>
         <button onClick={this.handleClick}>click Add</button></div>;
       }//render
        
       handleClick(){
          this.props.nameAndAge(this.state.inputname, this.state.inputage);
           //anropa functionen här bara, 
          //when you want to get hold of input someth which is in event you use state ** u see in code up
       } //click   
          handleChangeName(event){
            this.setState({
               inputname: event.target.value
          })
          };//handleChangeName
          handleChangeAge(event){
            this.setState({
               inputage: event.target.value
          })
          };//handleChangeage
        
       /* function createNewObject(e){
        
         let newPerson {
             name: '',
             age:''
        }
        
        if(e.target.id=='name'){
          newPerson.name = e.target.value;
        };
        
        else if(e.target.id=='age'){
          
          newPerson.handleChangeName = e.target.value;
        };
        
        this.setState({newObject: newPerson})
        }
        };//newObject
        }  */
       
       }//inputcomp
       
  //function object () 
  
 ReactDOM.render(<App/>,
		document.getElementById('app'));
		
		