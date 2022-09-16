var items = document.getElementsByClassName("item");


items.addEventListener("mouseover", (event)=>{
    
})

items.addEventListener("mouseout", (event)=>{

})

items.addEventListener("click", (event)=>{
    console.log("click")
    for(let i = 0; i < navItems.length; i++) {
        gsap.to(navItems[i], 
        { duration: .7, delay: i, alpha: 0, x: -1000 } 
        );
    }
})
