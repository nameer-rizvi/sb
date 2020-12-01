const id = "react-application";

const html = document.getElementsByTagName("html")[0];
html.setAttribute("lang", "en");
html.setAttribute("dir", "ltr");

function create() {
  const element = document.createElement("div");
  element.id = id;
  document.body.appendChild(element);
}

const get = () => document.getElementById(id);

export { create, get };
