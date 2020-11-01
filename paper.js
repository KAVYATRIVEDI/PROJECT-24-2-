class Paper{
    constructor(x,y,width,height){

        var options={

            isStatic :false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(70, 350, 20, 20);
       // this.width=20;
        //this.height=20;

    
        World.add(world, this.body);
        }
         display(){
         push();
         rectMode(CENTER);
      
         pop();
         }
    }
    
    
