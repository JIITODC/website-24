import React,{useState} from "react";
import './Join.css';
import Header from "../Header/Header";

function Join(){
    const [inputs, setInputs] = useState({
        name: "",
        enroll: "",
        mail: "",
        batch: ""
    });

    function handleChange (event){
      const name = event.target.name;
      const value = event.target.value;
      setInputs(prevValue => ({...prevValue, [name]: value}))
    }
  
    function handleSubmit(event){
      event.preventDefault();
    }
return(
    <div>
        <Header />
        <form onSubmit={handleSubmit} className="Layout">
            <h1 className="heading">Join us!</h1>
                <label className="form">Enter your name
                    <input 
                        className="input"
                        type="text" 
                        name="name" 
                        value={inputs.name} 
                        onChange={handleChange}
                    />
                </label>
                <label className="form">Enter your Enrollment
                    <input 
                        className="input"
                        type="number" 
                        name="enroll" 
                        value={inputs.enroll} 
                        onChange={handleChange}
                    />
                </label>
                <label className="form">Enter your Email
                    <input
                        className="input" 
                        type="text" 
                        name="mail" 
                        value={inputs.mail} 
                        onChange={handleChange}
                    />
                </label>
                <label className="form">Batch
                    <input
                        className="input" 
                        type="text" 
                        name="batch" 
                        value={inputs.batch} 
                        onChange={handleChange}
                    />
                </label>
            <input type="submit" className="submit"/>
        </form>
    </div>

);

}

export default Join;