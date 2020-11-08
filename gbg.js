class Gbg {

    constructor(angle){

        var b = {
		
            isStatic:false,
            'friction':0.5,
            'density':1.2,
            'restitution':0.3
    
        }   

this.body = Bodies.circle(160,495,15,b)
World.add(world,this.body)


    }

display() {
    var angle = this.body.angle
    var dim = this.body.position
   

ellipseMode(RADIUS)
fill ("black")
ellipse(dim.x, dim.y, 15)



push ();
translate (this.body.position.x, this.body.position.y)
rotate(angle);
pop ();
   





}







}