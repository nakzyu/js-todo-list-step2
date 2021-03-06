const baseUrl = "https://js-todo-list-9ca3a.df.r.appspot.com";

export const getUserList = async () => {
  try {
    const response = await fetch(baseUrl + "/api/users");
    const json = await response.json();

    return json;
  } catch (e) {
    console.warn(e);
  }
};
