const joke = document.getElementById("joke");
const button = document.getElementById("btn");

const apiKey = "3aAgfLdUtjamf40VY6Rv0Q==L3E7tFBMmsDeQ53c";
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: { "X-Api-Key": apiKey },
};

const getJoke = async () => {
  try {
    joke.innerText = "Updating..";
    button.innerText = "Loading..";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    joke.innerText = data[0].joke;

    button.innerText = "Tell Me a joke";
  } catch (error) {
    console.log(" Error Happened");
  }
};
