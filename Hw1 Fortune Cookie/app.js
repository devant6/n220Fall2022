class Fortune{
    constructor(prediction1, prediction2, prediction3, cookie){
        this.prediction1 = prediction1;
        this.prediction2 = prediction2;
        this.prediction3 = prediction3;
        this.cookie = cookie;
    }
    newFortune(){
        var counter = Math.floor(Math.random() * 3 + 1);
        console.log(counter);
        if (this.cookie == true){
            //console.log(this.prediction1);
            //console.log(document.getElementById("fortuneText").innerHTML);
           if(counter == 1){
                document.getElementById("fortuneText").innerHTML = this.prediction1;
                this.cookie = false;
                //counter++;
                
           }
           else if(counter == 2){
                document.getElementById("fortuneText").innerHTML = this.prediction2;
                this.cookie = false;
                //counter++;
            }
           else if(counter == 3){
                document.getElementById("fortuneText").innerHTML = this.prediction3;
                this.cookie = false;
                //counter++;
            }
           //else {
              //  if(counter==0){
                //    console.log("bad");
                //    document.getElementById("fortuneText").innerHTML = this.prediction1;
                 //   this.cookie = false;
                  //  counter++;
                //}
            //}
           
        }
        else{
            document.getElementById("fortuneText").innerHTML = "You need a cookie before you can get a new fortune"
        }
        
    }
    replace(){
        document.getElementById("fortuneText").innerHTML = "Please open your cookie"
        this.cookie = true;
    }
}
var cookie1 = new Fortune("You will have good luck", "You will have bad luck", "You will have a good day", true);