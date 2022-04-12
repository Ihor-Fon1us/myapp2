const redirectToQuiz = () => {
    window.location.href="./quiz.html";
};

function redirectToEnd(form, event) {
  const formData = new FormData(form);
  
  event.preventDefault();
  const data = [...formData.values()]
  console.log(data[0].toString());
  if (validateString(data[0].toString()) && validateString(data[1].toString()) && validateEmail(data[3].toString())) {
    window.electronAPI.data("Name: " + data[0] + "\nSurname: " + data[1] + "\nDate of birth: " + data[2] + "\nEmail: " + data[3]);
    window.location.href = "./end.html";
  }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function validateString(name) {
  var re = /^[a-zA-Z]+$/;
  return re.test(name);
}

const turnExit = () => {
  window.electronAPI.exit();
};
