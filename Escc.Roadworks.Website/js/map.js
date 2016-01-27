(function () {
    function getParameterByName(name) {
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if (results == null)
            return "";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var sw_easting, sw_northing, ne_easting, ne_northing, radius;
    var easting = getParameterByName("x");
    var northing = getParameterByName("y");
    if (easting && northing) {
        radius = 300;
        easting = parseInt(easting);
        northing = parseInt(northing);

        sw_easting = (easting - radius);
        ne_easting = (easting + radius);
        sw_northing = (northing - radius);
        ne_northing = (northing + radius);
    }
    else {
        sw_easting = 50.408728440887245;    //530649;
        ne_easting = -1.5401334796874835;   //601923;
        sw_northing = 51.36684292279411;    //94695;
        ne_northing = 0.6406526531250165;   //140831;
    }

    Elgin.loader.load({
        "googleAPIKey": esccConfig.GoogleMapsApiKey,
        "organisationID": 1041,
        "embedded": true,
        "data": {
            "layersActive": [
                "INCIDENTS_LIVE_ACCIDENT",
                "INCIDENTS_LIVE_INCIDENT",
                "INCIDENTS_LIVE_WEATHER",
                "INCIDENTS_LIVE_ROADCLOSURE",
                "INCIDENTS_LIVE_LANECLOSURE",
                "INCIDENTS_LIVE_HGVCLOSURE",
                "ROADWORKS_CURRENT"
            ]
        },
        "embedID": "LEYGEGUK9N",
        "system": {
            "delayedLoad": false
        },
        "map": {
            "swLat": sw_easting,
            "swLng": ne_easting,
            "neLat": sw_northing,
            "neLng": ne_northing
        },
    });
})();