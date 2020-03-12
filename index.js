import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  setData()
  {
    let obj={name:'manisha', age:25, email:"raosmanisha@gmail.com"}
    localStorage.setItem(name,JSON.stringify(obj));
  }
  getData(){
    let data=localStorage.getItem(name);
    console.log(JSON.parse(data));
    //data=JSON.parse(data)
    console.log(data[name]);
  }
  async postData(){
    try{
      let result= await fetch('https://webhook.site/159f3714-c29e-4087-a507-1fcbd8d41ccf',{method:'post',mode:'no-cors',headers:{'Accept':'application/json',
      'Content-type':'application/json'},
      body:JSON.stringify({name:'manisha'})
      });
      console.log(result);
    }
    catch(e)
    {
      console.log(e)
    }

  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <button className ="set" onClick={()=> this.setData()}>Set data</button>
        &nbsp; &nbsp;
        <button onClick={()=> this.getData()}>Get data</button>
        &nbsp; &nbsp; 
        <button onClick={() => this.postData()}>Press me to post data through api</button>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
