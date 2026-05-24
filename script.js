fetch("https://icanhazdadjoke.com/slack")
  .then((response) => response.json())
  .then((data) => {
    const joke = data.attachments[0].text;
    const jokeElement = document.getElementById("jokePara");
    return (jokeElement.innerHTML = joke);
  });
