document.querySelectorAll(`[id^="terminal_"]`).forEach(function (terminalElem) {
    console.log(terminalElem.id, terminalElem)

    terminalElem.id.split("_");

    console.log(terminalElem.id.split("_"));

    // console.log("popup_" + terminalElem.id.split("_")[1]);

    const popupId = "popup_" + terminalElem.id.split("_")[0];

    console.log(popupId);

    console.log(document.querySelector(popupId));

    const popupElem = document.getElementById(popupId)

    console.log(popupElem);

    terminalElem.addEventListener("mouseover", function (event) {
        console.log("hovered");
        popupElem.classList.add("popup-open");
        popupElem.classList.remove("popup-closed");
    })

    terminalElem.addEventListener("mouseout", function (event) {
        console.log("unhovered");
        popupElem.classList.add("popup-closed");
        popupElem.classList.remove("popup-open");
    })
});

