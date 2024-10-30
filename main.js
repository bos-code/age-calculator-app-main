const input_mT = document.getElementById("month");
const input_dT = document.getElementById("day");
const input_yT = document.getElementById("year");
const submitForm = document.getElementById("submitBtn");

const outY = document.getElementById("years-number");
const outM = document.getElementById("months-number");
const outD = document.getElementById("days-number");

const errorDay = document.getElementById("erroDay");
const errorMon = document.getElementById("erroMonth");
const errorYear = document.getElementById("erroYear");

const validation = function () {
  const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  input_dT.addEventListener("input", () => {
    if (+input_dT?.value > 31 || isNaN(+input_dT.value) === true) {
      errorDay.textContent = "Invalid date";
      input_dT.classList.add("invalid");
      return;
    } else {
      input_dT.classList.remove("invalid");
      errorDay.textContent = "";
    }

    if (+input_dT.value == 0) {
      errorDay.textContent = "This field is required";
      return;
    } else {
      errorDay.textContent = "";
      input_dT.classList.remove("invalid");
    }
  });

  input_mT.addEventListener("input", () => {
    if (
      +input_mT.value < 1 ||
      +input_mT.value > 12 ||
      isNaN(+input_mT.value) === true
    ) {
      errorMon.textContent = "Invalid date";
      input_mT.classList.add("invalid");

      if (+input_dT.value === 0) {
        errorMon.textContent = "This field is required";
      }
      return;
    } else if (+input_dT.value > days[+input_mT.value - 1]) {
      errorMon.textContent = "Invalid date";
      input_mT.classList.add("invalid");

      if (+input_mT.value === 0) {
        errorMon.textContent = "This field is required";

        return;
      }
    } else {
      errorMon.textContent = "";
      input_mT.classList.remove("invalid");
    }
  });
  input_yT.addEventListener("input", () => {
    if (
      +input_yT.value < 1970 ||
      +input_yT.value > 2023 ||
      isNaN(+input_yT.value) === true
    ) {
      input_yT.classList.add("invalid");
      errorYear.textContent = "Invalid date";

      if (+input_yT.value == "") {
        errorMon.textContent = "This field is required";
      }
      return;
    } else {
      errorYear.textContent = "";
      input_yT.classList.remove("invalid");
    }
  });
};

validation();

const caclAge = function () {
  if (
    input_dT.classList.contains("invalid") ||
    input_mT.classList.contains("invalid") ||
    input_yT.classList.contains("invalid")
  ) {
    alert("error");
    window.location.reload();
  } else {
    let birthday = `${input_mT.value}/${input_dT.value}/${input_yT.value}`;
    console.log(birthday);

    let birthdayObj = new Date(birthday);
    console.log(birthdayObj);

    let currAgeMill = Date.now() - birthdayObj;

    console.log(currAgeMill);

    let currAge = new Date(currAgeMill);
    console.log(currAge);

    let day = `${currAge.getUTCDate() - 1}`.padStart(2, 0);
    let month = `${currAge.getUTCMonth()}`.padStart(2, 0);
    let year = currAge.getUTCFullYear() - 1970;
    outD.textContent = day;
    outM.textContent = month;
    outY.textContent = year;
  }
};

submitForm.addEventListener("click", caclAge);
