import { Component } from "react";
import Estudiante from "../Estudiante/estudiante";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        
    }
  }

  render = () => {
    return (
      <>
        < Estudiante firstname= {"Maria"}
                    lastname= {"Smitih"} 
                    age= {62}
                    hairColor={"negro"}
        />
        < Estudiante firstname= {"jOHN"}
                    lastname= {"Smitih"} 
                    age= {62}
                    hairColor={"negro"}
          />
      </>
    );
  }
}

export default App;
