class ground {
constructor(x,y,width,height){
this.x=x
this.y=y
this.width=width
this.height=height
this.groundbody=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
World.add(world,this.groundbody)
}
display(){
var posground=this.groundbody.position

push()
translate(posground.x,posground.y,posground.width,posground.height)
rectMode(CENTER)
stroke(255)
fill(255)
rect(posground.x,posground.y,posground.width,posground.height)
pop()



}






}