const footer = document.querySelector("footer");

const footerMessage = document.createElement("p");
footerMessage.innerHTML = `Copyright &copy; ${new Date().getFullYear()} <a href="https://github.com/xStanTheCoder" target="_blank">StanTheCoder</a>`;
footer.appendChild(footerMessage);
