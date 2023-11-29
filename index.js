let selectConutryBox = document.getElementById("countries");
let selectCityBox = document.getElementById("cities");

let dataObj = {
  Iran: ["tehran", "shiraz", "bandar-abbas"],
  USA: ["New York", "Chicago", "Boston"],
  Japan: ["Tokyo", "Kyoto", "Hiroshma"],
};
selectConutryBox.addEventListener("change", function () {
  if (selectCityBox.value === "Please Select") {
    selectCityBox.innerHTML = "";
    selectCityBox.innerHTML += "<option> Select City  </option>";
  } else {
    let mainCityValue = dataObj[selectConutryBox.value];
    selectCityBox.innerHTML = "";
    mainCityValue.forEach(function (city) {
      selectCityBox.innerHTML += "<option>" + city + "</option>";
    });
  }
});
