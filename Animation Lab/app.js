
class Test{
    constructor(){
        let items = document.getElementsByClassName("item");
        for(const item of items){
            item.addEventListener("mouseover", (event)=>{
                event.target.style.backgroundColor = "pink";
            })

            item.addEventListener("mouseout", (event)=>{
                event.target.style.backgroundColor = "rgb(174, 44, 176)";
            })
        
            item.addEventListener("click", (event)=>{
                    gsap.to(item, 
                    { duration: .7, alpha: 0, x: -1000 } 
                    );
                })
            
        }
    }
}
let t = new Test();