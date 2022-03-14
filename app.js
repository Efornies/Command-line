let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (i in pronoun) {
  for (a in adj) {
    for (b in noun) {
        console.log(pronoun[i] + adj[a] + noun[b] + ".com");
  }
}
}