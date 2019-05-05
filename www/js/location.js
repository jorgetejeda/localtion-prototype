document
    .getElementById("location")
    .addEventListener("click", getLocation);
function getLocation() {
    console.log("calling location");
    var options = {
        maximumAge: 3000,
        timeout: 5000,
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
}

function onSuccess(position) {
    alert(
        "Latitude: " +
        position.coords.latitude +
        "\n" +
        "Longitude: " +
        position.coords.longitude +
        "\n" +
        "Accuracy: " +
        position.coords.accuracy
    );
}

function onError(error) {
    alert(
        "code: " + error.code + "\n" + "message: " + error.message + "\n"
    );
}