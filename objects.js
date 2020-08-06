// Now let’s put together everything we have learned in this final big topic. Objects are code entities with state and behavior. The state is represented by variables that make up various properties or attributes. The behavior is managed by functions that the object can run; typically, these functions modify the state in some way. JavaScript is not a true object-oriented language so these objects act more like key-value structures such as maps or dictionaries in other languages than like true objects. When we use JavaScript objects, we create the blueprint and fill in the values at the same time. Each value needs a key which acts similar to a variable name. Even functions are mapped onto keys.

var gameCharacter = {
    name: "Ana",
    pos: 2,
    health: 100,
    move: function(byAmount) {
        this.pos += byAmount;
    }
};

var name = gameCharacter.name;
var pos = gameCharacter.pos;
var healthy = gameCharacter.health;

gameCharacter.move(10);
console.log
