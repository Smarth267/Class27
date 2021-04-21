class Chain{
constructor(bodyA,bodyB)
{
var option={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.05,
length:100
}
   this.chain=Constraint.create(option);
   World.add(world,this.chain);
}
display(){
    var pa=this.chain.bodyA.position
    var pb=this.chain.bodyB.position

  strokeWeight(4);
  stroke("red");
  line(pa.x,pa.y,pb.x,pb.y);
} 
}