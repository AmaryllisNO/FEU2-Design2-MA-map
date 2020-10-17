document.querySelectorAll(`[id^="terminal_"]`).forEach(function (terminalElem) {
    // console.log(terminalElem.id, terminalElem);

    terminalElem.id.split("_");

    //  console.log(terminalElem.id.split("_"));

    const popupId = "popup_" + terminalElem.id.split("_")[1];

    // console.log(popupId);

    // console.log(document.querySelector(popupId));

    const popupElem = document.getElementById(popupId)

    // console.log(popupElem);

    terminalElem.addEventListener("click", function (event) {
        //  console.log("hovered");
        popupElem.classList.toggle("popup-open");
    });

    /*     terminalElem.addEventListener("mouseover", function (event) {
            console.log("hovered");
            popupElem.classList.add("popup-open");
            popupElem.classList.remove("popup-closed");
        })
    
        terminalElem.addEventListener("mouseout", function (event) {
            console.log("unhovered");
            popupElem.classList.add("popup-closed");
            popupElem.classList.remove("popup-open");
        }) */
});

document.querySelectorAll(`[id^="stop_"]`).forEach(function (stopElem) {
    // console.log(stopElem.id, stopElem);

    // console.log(stopElem.id.split("_"));

    stopElem.parentElement.appendChild(stopElem);

    const routeId = "route_" + stopElem.id.split("_")[1];

    // console.log(routeId);

    // console.log(document.getElementById(routeId));

    const routeElem = document.getElementById(routeId);

    console.log(routeElem);

    stopElem.addEventListener("mouseover", function (event) {
        console.log("hovered");
        routeElem.parentElement.appendChild(routeElem);
        stopElem.classList.toggle("stop-hovered");
        routeElem.classList.add("route-hovered");
    });

    stopElem.addEventListener("mouseout", function (event) {
        // console.log("hovered");
        routeElem.classList.remove("route-hovered");
    });

})

document.querySelectorAll(`[id^="route_"]`).forEach(function (routeElem) {
    // console.log(routeElem.id, routeElem);

    routeElem.addEventListener("mouseover", function (event) {
        console.log("hovered");
        routeElem.parentElement.appendChild(routeElem);
        routeElem.classList.add("route-hovered");
    });

    routeElem.addEventListener("mouseout", function (event) {
        console.log("hovered");
        routeElem.parentElement.appendChild(routeElem);
        routeElem.classList.remove("route-hovered");
    });
})
