class Sand {
    constructor (x,y) {
        var options ={
            restitution :0.4,
            friction:0.8,
            density: 1.0
        }
                                                                             

        this.body = Bodies.circle(25,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position 
        push ();
        translate(pos.x,pos.y )
        rotate(angle);   
        fill ("yellow")
        pop ();
    }


}