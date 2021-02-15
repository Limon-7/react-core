export const fetchUser = (url) => {
  return fetch(url);
  //  .then((resp) => {
  //     // let data = resp.json();
  //     // console.log("from service>>", resp.json());
  //     // resp.json();
  //     // console.log("show", resp.json());
  //   });
  //   return data;
};
export const fetchUser2 = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return data;
};
