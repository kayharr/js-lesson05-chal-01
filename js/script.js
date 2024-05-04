var button = document.querySelector(".show-cat");

var cat = document.querySelector(".cat");

console.log(cat);
console.log(button);

button.addEventListener("click", function () {
    if (cat.classList.contains("show"))
    {cat.classList.remove("show");
    button.innerText = "Wait, come back!!";
    button.classList.add("disappear");
} 
    else {cat.classList.add("show");
    button.classList.remove("disappear");
    button.innerText = "Shoo, cat!!"
    }
    // console.log("Yes.")
    // else console.log("No.")
}
);

