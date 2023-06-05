var topic = ["HTML", "CSS", "Git","JavaScript"];    //Creates array with 4 items
var randomTopic = topic[Math.floor(Math.random() * topic.length)];  // Picks random number from the length of topic

function listTopics() {         //Function lists all array options in the console
    for(var x=0; x<topic.length; x++) {
        console.log(topic[x]);
    }
}

function selectTopic() {        //Prints selected topic to console from the Math function
    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}
/*
var shapes = ["triangle","square","pentagon","circle"];

for(var x=0; x<shapes.length; x++) {
    console.log(shapes[x]); 
}
*/

console.log("Here are the topics we have learned through the Pre-work lessons:")
listTopics()
console.log("Which topic should be studied first oh holy d4.")
selectTopic()