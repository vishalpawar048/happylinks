async function Share() {
  await navigator.share({ title: "Example Page", url: "" });
  console.log("Data was shared successfully");
}

const sharebutton = document.getElementById("shareButton");
sharebutton.addEventListener("click", function () {
  Share();
});
