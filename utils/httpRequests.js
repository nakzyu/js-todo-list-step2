const baseUrl = "https://js-todo-list-9ca3a.df.r.appspot.com";

export const getUserList = async () => {
  try {
    const response = await fetch(baseUrl + "/api/users");
    const json = await response.json();
    return json;
  } catch (error) {
    console.warn(error);
  }
};

export const getUser = async (userId) => {
  try {
    const response = await fetch(baseUrl + `/api/users/${userId}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.warn(error);
  }
};

export const postUser = async (userName) => {
  console.log(userName);
  try {
    const response = await fetch(baseUrl + `/api/users`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userName }),
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.warn(error);
  }
};
