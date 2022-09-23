import "./../styles.css";
import React from "react";

export default class RecipeSearch extends React.Component{
    state = {
        recipes: [
            "Apple Pie",
            "Cherry Pie",
            "Pizza Pie",
            "Hamburger",
            "Ham Steak", 
            "Banana",
            "Chocolate Mousse",
            "Chocolate Ice Cream"
        ],
        searchTerm: ""
    };

    render(){
        //matching recipes for search terms here
        let matchedRecipes = this.state.recipes.filter((recipe)=>{
            return recipe
                .toLocaleUpperCase()
                .includes(this.state.searchTerm.toLocaleUpperCase());
        });


        let recipesList = matchedRecipes.map((recipe) => {
            return <li>{recipe}</li>;
        });
        
        return(
            <div className = "recipes">
                <h2>Recipes</h2>
                <input
                    value={this.state.searchTerm}
                    onChange={(event) => {
                        this.updateSearch(event);
                    }}
                />
                <ul>{recipesList}</ul>
            </div>
        );
    }

    updateSearch(event){
        this.setState({ searchTerm: event.target.value});
    }
}




