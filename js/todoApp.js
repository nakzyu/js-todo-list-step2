import { getUserList } from "../utils/httpRequests.js";
import TodoUserList from "./todoUserList.js";

export default class TodoApp {
  state = {
    userList: [],
    selectedUser: {},
  };

  components = [];

  constructor() {
    this.init();
  }

  async init() {
    this.components.push(
      new TodoUserList({ onUserSelected: this.onUserSelected.bind(this) })
    );
    this.state.userList = await getUserList();
    this.render();
  }

  setState(state) {
    this.state = state;
    this.render();
  }

  render() {
    this.components.forEach((c) => c.render(this.state));
  }

  onUserSelected(user) {
    const newState = {
      ...this.state,
      selectedUser: user,
    };
    this.setState(newState);
  }
}
