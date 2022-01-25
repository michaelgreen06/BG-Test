/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */
 // I'm chaging stuffffffff!


// TIP -
// In an array,
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here

var facebookProfile = {
  name:"Michael",
  friends:1000000,
  messages:["facebook sucks","why do I use this shitty platform", "facebook only cares about profit"],
  postMessage: function addText(message){
    facebookProfile.messages.push(message);
  },
  deleteMessage: function remText(index){
    facebookProfile.messages.splice(index,1);
  },
  addFriend:function (){
    facebookProfile.friends = facebookProfile.friends +1;
  },
  removeFriend: function(){
    facebookProfile.friends = facebookProfile.friends -1;
  }


};

facebookProfile.postMessage("facecrooks is more like it");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages);
facebookProfile.addFriend;
console.log(facebookProfile.friends);
