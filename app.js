const $searchBox = $("#input");
const $gifs = $("#gifField");

function addGif(result) {
  let numResults = result.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: result.data[randomIdx].images.original.url,
      class: "w-100",
    });
    $newCol.append($newGif);
    $gifs.append($newCol);
  }
}

$("form").on("submit", async function (evt) {
  evt.preventDefault();

  let searchTerm = $searchBox.val();
  $searchBox.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  addGif(response.data);
});

$("#rmvBtn").on("click", function () {
  $gifs.empty();
});
