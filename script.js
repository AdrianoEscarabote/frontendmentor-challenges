var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

arr.forEach((element) => {
    element.addEventListener("click", () => {
        element.style.opacity = "1";

        arr
            .filter(function (item) {
                return item != element;
            })
            .forEach((item) => {
                item.style.opacity = "0";
            });
    });
});

arr.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.dataset.theme === "theme-1") {
            document.body.classList.remove("theme-2")
            document.body.classList.remove("theme-3")
            document.body.classList.add("theme-1")
        } else if (element.dataset.theme === "theme-2") {
            document.body.classList.remove("theme-3")
            document.body.classList.remove("theme-1")
            document.body.classList.add("theme-2")
        } else {
            document.body.classList.remove("theme-1")
            document.body.classList.remove("theme-2")
            document.body.classList.add("theme-3")
        }
    })
})


