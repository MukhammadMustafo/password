import './App.css';

function App() {
  const pass = (e)=>{
    e.preventDefault()

  }
  const long = (e)=>{
    e.preventDefault()
    console.log(e.target.value);
    if(e.target.value.length >= 8 && e.target.value.length <=12){
      e.target.style.border = '3px solid green'
    } else{
      e.target.style.border = '3px solid red'
    }
  }
  return (
    <div className="App">
      <h1>WELCOME</h1>
      <form action="#" onSubmit={pass}>
        <input type="text" name='pass1' onChange={long}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
