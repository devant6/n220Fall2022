//game logic class
class Game{
    //variables
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#99FF00";
    normalColor = "#7700AA";
    gameZone = document.getElementById("gameZone");
    foundBar = new foundBar();
    constructor(){
        //make the circles
        for(var i = 0; i < 25; i++){
            //create new circle
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            
            //style class
            newCirc.classList.add("gameCirc")
            newCirc.setAttribute("cx", Math.random() * 400)
            newCirc.setAttribute("cy", Math.random() * 400)
            
            //randomly choose color for reveal
            if(Math.random() < .3){
                //set it to be the looking for color
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalCircles++;
            }else{
                newCirc.dataset.hiddenColor = this.normalColor;
            }
            
            //mouse events
            newCirc.addEventListener("mouseover", (event) =>{
                //on mouseover show hidden color
                event.target.style.fill = event.target.dataset.hiddenColor;
            })

             newCirc.addEventListener("mouseout", (event) =>{
                //on mouseover show hidden color
                event.target.style.fill = "#000";
            })

            newCirc.addEventListener("click", (event)=>{
                //if user selects circle with searching for color
                if(event.target.dataset.hiddenColor == this.searchColor){
                    event.target.remove();

                    //store how many are clicked
                    this.foundCircles++;

                    //update the found UI
                    this.foundBar.setPercent(this.foundCircles / this.totalCircles);
                }
            })

            //add circle to the screen
            this.gameZone.appendChild(newCirc)
        }
    }
}

class foundBar{
    element = document.getElementById("foundBar");
    maxSize = 130;
    percent = 0;

    setPercent(percent){
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);
    }
}

let g = new Game();