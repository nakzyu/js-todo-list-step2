import { getUser, postUser } from "../utils/httpRequests.js";
import $ from "../utils/selector.js";

export default class TodoUserList {
  onUserSelected;

  getUserTemplate({ name, _id }, isAddButton) {
    const button = document.createElement("button");
    button.classList.add("ripple");
    if (isAddButton) button.classList.add("user-create-button");
    button.innerText = name;
    button.id = _id;
    return button;
  }

  constructor({ onUserSelected }) {
    this.$userList = $("#user-list");
    this.$userList.addEventListener("click", this.onClick.bind(this));
    this.onUserSelected = onUserSelected;
  }

  // const onUserCreateHandler = () => {
  //   const userName = prompt("추가하고 싶은 이름을 입력해주세요.");
  // };

  // const userCreateButton = document.querySelector(".user-create-button");
  // userCreateButton.addEventListener("click", onUserCreateHandler);

  async onClick(event) {
    if (!event.target.classList.contains("ripple")) return;

    if (!event.target.classList.contains("user-create-button")) {
      const res = await getUser(event.target.id);
      this.onUserSelected(res);
    } else {
      const userName = prompt("추가하고 싶은 이름을 입력해주세요.");
      if (userName.length <= 1) {
        alert("User의 이름은 최소 2글자 이상이어야 합니다.");
        return;
      }
      const res = await postUser(userName);
      this.onUserSelected(res);
    }
  }

  render({ userList }) {
    this.$userList.innerHTML = "";
    this.$userList.appendChild(
      this.getUserTemplate({ name: "+ 유저 생성" }, true)
    );

    userList.forEach(({ name, _id }) => {
      this.$userList.prepend(this.getUserTemplate({ name, _id }));
    });
  }
}
