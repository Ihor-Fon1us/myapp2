const redirectToQuiz = () => {
    window.location.href="./quiz.html";
};

function redirectToEnd(form, event) {
  const formData = new FormData(form);
  // for (var pair of formData.entries()) {
  //   const data = (pair[0] + ': ' + pair[1]);
  // }
  event.preventDefault();
  const data = [...formData.values()]
  console.log(data[0].toString());
  window.electronAPI.data("Name: " + data[0] + "\nSurname: " + data[1] + "\nDate of birth: " + data[2] + "\nEmail: " + data[3]);
  window.location.href = "./end.html";
}

const turnExit = () => {
  window.electronAPI.exit();
};
