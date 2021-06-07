class Drops{
    constructor(x, y, r){
        var options={
            friction = 0.1,
            isStatic: false
        }
    this.body = Bodies.circle(x, y, r, options)
    this.r = r
    World.add(world, this.body)
    
    }
    display(){
    push();
    translate(this.body.position.x, this.body.position.y)
    fill("cyan")
    ellipse(0, 0, 10, 10)
    pop();
    }
    update(){
        if(this.body.position.y >height){
            Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 1200)})

        }
    }
}
