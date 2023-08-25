
$(document).ready(function() {
    $("#show-info-btn").click(function() {
        var currentDate = new Date();
        var currentMonth = currentDate.getMonth() + 1;

        var seasonalInfo = "";

        if (currentMonth >= 3 && currentMonth <= 5) {
            seasonalInfo = "¡Es primavera! Disfruta de las flores y el clima agradable.";
        } else if (currentMonth >= 6 && currentMonth <= 8) {
            seasonalInfo = "¡Verano en su apogeo! Tiempo para relajarse y disfrutar del sol.";
        } else if (currentMonth >= 9 && currentMonth <= 11) {
            seasonalInfo = "Otoño: el tiempo se enfría y las hojas caen.";
        } else {
            seasonalInfo = "Invierno: abrígate, hace frío afuera.";
        }

        $("#seasonal-info").text(seasonalInfo);
    });
});
