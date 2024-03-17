let lookup = {
    "Option 1": ["Malppuram", "Kozhikkode", "Thrissur","kottayam"],
    "Option 2": ["Chennai", "Coimabatur", "Pollachi"],
    "Option 3": ["Bengalure", "Hydrabad", "Manali"]
};

document.getElementById("select-state").addEventListener("change", function() {
    let selectValue = this.value;
    let selectDistrict = document.getElementById("select-district");

    // Clear existing options
    selectDistrict.innerHTML = "";

    // Add new options
    for (let i = 0; i < lookup[selectValue].length; i++) {
        let option = document.createElement("option");
        option.value = lookup[selectValue][i];
        option.text = lookup[selectValue][i];
        selectDistrict.appendChild(option);
    }
});


let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});