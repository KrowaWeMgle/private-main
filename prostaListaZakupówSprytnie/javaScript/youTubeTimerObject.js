const objExa = {
    time: 0,
    isStarted: false,
    start(){
        if(!this.isStarted)
        {this.time = 0;
         this.setter = setInterval(this.tic,100);
         this.isStarted = true;}
    },
    tic() {
        objExa.time+= 0.1;
    },
    stop(){
        if(this.isStarted){
          clearInterval(this.setter);
          this.isStarted = false;
         }
    },
    duration(){
        return Math.round(objExa.time * 100)/100;
    }
}
let sw2 = objExa;


 /* stop() duration() start()
 cannot be colled twice return time duration
 */

