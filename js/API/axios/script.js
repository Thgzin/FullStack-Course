const getFact = async () => {
  try {
    const res = await axios.get("https://catfact.ninja/fact");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
getFact();
