import { User } from "./User";

const e = document.getElementById("content");
if (e) {
  const u = new User("hi");
  e.innerText = u.name;
}
