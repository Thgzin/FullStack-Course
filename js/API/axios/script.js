/*const getFact = async () => {
  try {
    const res = await axios.get("https://catfact.ninja/fact");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
getFact();
*/

const btnJoke = document.querySelector(".btnJoke");
const joke = document.querySelector(".jokeSection");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  joke.append(newLI);
};

const getDadJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "No jokes available. Try again later.";
  }
};
getDadJoke();

btnJoke.addEventListener("click", addNewJoke);
