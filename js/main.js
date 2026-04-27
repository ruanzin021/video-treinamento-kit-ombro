document.addEventListener("DOMContentLoaded", () => {
  const poster = document.getElementById("videoPoster");
  const wrapper = document.getElementById("videoWrapper");
  const playBtn = document.getElementById("posterPlayBtn");
  const iframe = document.getElementById("cloudinaryPlayer");

  if (playBtn && poster && wrapper && iframe) {
    playBtn.addEventListener("click", () => {
      poster.hidden = true;
      wrapper.hidden = false;

      const currentSrc = iframe.getAttribute("src");
      if (currentSrc && !currentSrc.includes("autoplay=true")) {
        const separator = currentSrc.includes("?") ? "&" : "?";
        iframe.setAttribute("src", `${currentSrc}${separator}autoplay=true`);
      } else {
        iframe.setAttribute("src", currentSrc);
      }

      if ("vibrate" in navigator) {
        navigator.vibrate(30);
      }
    });
  }

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isAndroid = /Android/.test(navigator.userAgent);

  if (isIOS) {
    document.body.classList.add("ios-device");
  }

  if (isAndroid) {
    document.body.classList.add("android-device");
  }
});