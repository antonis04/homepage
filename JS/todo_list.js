{
  const tasks = [
    {
      content: "nagrac lekcje",
      done: false,
    },
    {
      content: " zjeść pierogi",
      done: true,
    },
  ];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
            <li>
            ${task.content}
            </li>
            `;
    }

    document.querySelector(".js-list").innerHTML = htmlString;
  };

  const init = () => {
    render();
  };
  init();
}
