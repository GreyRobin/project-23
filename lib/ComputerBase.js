class ComputerBase{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        var ComputerBase = loadImage("assets/base1.png")
    }
    display(){
       rect(-100,0,this.w,this.h)
    }
}