

const btn = document.getElementById("displayResume");
console.log(btn);
btn.addEventListener("click", function () {
  const resume = document.getElementById("resume");
  if (resume.style.display == "none") {
    resume.style.display = "inline";
  } else {
    resume.style.display = "none";
  }
});
