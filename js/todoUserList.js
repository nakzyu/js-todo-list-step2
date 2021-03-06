import $ from "../utils/selector.js";

export default class TodoUserList {
  getUserTemplate({ name }, isAddButton) {
    const button = document.createElement("button");
    button.classList.add("ripple");
    isAddButton ?? button.classList.add("user-create-button");
    button.innerText = name;
    return button;
  }

  constructor() {
    this.$userList = $("#user-list");
  }

  // const onUserCreateHandler = () => {
  //   const userName = prompt("추가하고 싶은 이름을 입력해주세요.");
  // };

  // const userCreateButton = document.querySelector(".user-create-button");
  // userCreateButton.addEventListener("click", onUserCreateHandler);

  addEventListeners() {}

  render(userList) {
    this.$userList.innerHTML = "";
    this.$userList.appendChild(
      this.getUserTemplate({ name: "+ 유저 생성" }, true)
    );
    userList.forEach(({ name }) => {
      this.$userList.prepend(this.getUserTemplate({ name }));
    });
  }
}
