function toggleVideo() {
  const trailor = document.querySelector(".trailor");
  const video = document.querySelector("video");
  video.pause();
  trailor.classList.toggle("active");
}

function changeBg(bg, title) {
  const banner = document.querySelector(".bannar");
  const contents = document.querySelectorAll(".content");
  banner.style.background = `url("../images/movies/${bg}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}
