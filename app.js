console.log("Hello World!");

// async function getMyStuffFromOverThere() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // console.log("HTTP Response:", response);
  // const json = await response.json();
  // console.log("JSON Data:", json);
// } 

// getMyStuffFromOverThere();

async function gitHubRepository() {
  const response = await fetch("https://api.github.com/repos/zdunas82/fetch-api");
console.log("Github response:", response);

const data = await response.json();

const stars = data.stargazers_count;

}


gitHubRepository();
