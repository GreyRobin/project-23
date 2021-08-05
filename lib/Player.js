class Player{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        var ComputerBase = loadImage("assets/player.png")
    }
    display(){
       rect(100,-20,this.w,this.h)
    }
}