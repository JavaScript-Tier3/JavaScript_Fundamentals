var lightState = "ysygsd";
//test what value the light state is 
if (lightState == "green") {
    //if this return false it will move to the next if/else if
    console.log("Go!");
} else if (lightState == "red") {
    console.log("Stop!");
} else {
    // if all the test failed run this code
    console.log("Slow down!");
}