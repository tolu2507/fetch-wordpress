const button = document.getElementById("button");
const Div = document.getElementById('div');

button.addEventListener("click", Fetch);

const request = new Request(
  "https://tolulopebamisile.000webhostapp.com/wp-json/wp/v2/posts"
);

function Fetch() {
  try {
    console.log("fetch started");
    fetch(request)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log("fetch finished");
          return res.json();
        } else {
          throw new Error("something went wrong");
        }
      })
      .then((res) => {
        console.log("gotten:  ", res);
        res.map(({ id, title, status, content, author }) => {
          let list = `<div key=${id} class="content-list">
            <div>
            <h1>${title.rendered}</h1>
            <h4>${author}</h4>
            <h4>${status}</h4>
            </div>
            <div>${content.rendered}</div>
          </div>
          `
          return (
            Div.innerHTML += list
          )
        })
      });
  } catch (error) {
    throw new Error(error);
  }
}
