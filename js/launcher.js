class launcher{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            lenght: 10
        }
        this.launcher = constraint.create(options);
        World.add(world,this.launcher   );
    }

    fly(){
        this.launcher.bodyA = null
    }

    attach(){
        this.launcher.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
            push();
            strokeWeight (5);
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            
            line(pointA.x - 20,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
            pop();
        }
    }
}