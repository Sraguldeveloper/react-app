import './App.css';

function App(props) {
  const initialTools=[
    {
      id:1,
      title:"Todo1",
      complete:false
    },
    {
      id:2,
      title:"Todo2",
      complete:false
    }
  ]
  const reducer=(state,action)=>{
    switch(action.type){
      case "COMPLETE":
        return state.map((todo)=>{
          if(todo.id===action.id){
            return{...todo,complete:!todo}
          }
        })
    }
  }
  return (
    <>
      
    </>
  );
}

export default App;
