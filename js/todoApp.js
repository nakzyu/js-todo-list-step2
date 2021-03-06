import { getUserList } from "../utils/httpRequests.js";
import TodoUserList from "./todoUserList.js";

export default class TodoApp {
  userList = [];
  components = [];

  constructor() {
    this.init();
  }

  async init() {
    this.components.push(new TodoUserList());
    this.userList = await getUserList();

    this.render();
  }

  setState(state) {
    this.userList = state;
    this.render();
  }

  render() {
    this.components.forEach((c) => c.render(this.userList));
  }
}
