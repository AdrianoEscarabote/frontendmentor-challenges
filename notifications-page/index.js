import showData from "./js/showData.js";
import handleClearNotification from "./js/handleClearNotification.js";

const clearBtn = document.getElementById("clear")

const main = () => {
  clearBtn.addEventListener("click", handleClearNotification)
  showData()
}

main()