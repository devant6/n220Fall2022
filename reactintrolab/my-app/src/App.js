import "./styles.css";
import React from "react";
import RecipeSearch from "./components/RecipeSearch";

export default class App extends React.Component{
  state = {
    pages:[
      <RecipeSearch />
      
    ],
    curPage: 0
  };
  render(){
    return(
      <div className="App">
        <h1>Hello World</h1>
        <div>
          <button
            onClick={() => {
              this.swapProject(0);  //dont have clock project, since you didnt show how to make it in video, so it just redirects to this page instead. 
            }}                      //multiple projects should still work, if I had the code for them. Plus, the instructions say just to make the search part.
          >
            Clock
          </button>
          <button
            onClick={()=>{
              this.swapProject(0);
            }}
            >
              Recipe Search
            </button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    );
  }
  swapProject(projectIndex){
    this.setState({ curPage: projectIndex});
  }
}

