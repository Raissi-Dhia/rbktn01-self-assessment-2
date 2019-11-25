/**
  *
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};
// in order to add values to the tree  , we need to create a new tree first and then add to it's array of childrens the values 
Tree.prototype.addChild = function(value) {
var node = new Tree(value);

 this.children.push(node);
   return node;
}
// here using map we are going to itterate over the array of the childrens of the tree and we are going to assign or push them to the array of children's of the new tree and the map will gives us a new array of the same children's from the initial tree using a callback function and then return for us the new tree itself ..
// this is the logic that i thought about but sadly it didn't work and i ran out of time .. ill do a refactor later during self hacking time 
Tree.prototype.map = function(callBack) {
  var Tree1 = new Tree() ; 
  Tree1.value = callBack(this.value)

  this.children.forEachfor(element){
    Tree1.children.push(element.map(callBack))
  }
  return Tree1 ; 
};



