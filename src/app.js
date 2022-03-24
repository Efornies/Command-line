/* eslint-disable */

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i in pronoun) {
    for (let a in adj) {
      for (let b in noun) {
        console.log(pronoun[i] + adj[a] + noun[b] + ".com");
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
