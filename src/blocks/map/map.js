/**
 * @file Implementation of the map block
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// TODO: add code here

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

// TODO: add code here

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

// TODO: add code here

// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------

// TODO: add code here

// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the map block.
 * @return true if the block is present on the page, false otherwise
 */
export function initBlock() {
    // TODO: add code here
    var GM = {
        init: function () {
            this.initCache();
            this.initMap();

        },

        initCache: function () {
            this.$body = $('body');
            this.$popupContent = $('.js-marker-content');

        },

        initMap: function () {
            var coordinates = {
                    lat: 40.663323,
                    lng: -73.876256
                },
                coordinatesMarker = {
                    lat: 40.680993,
                    lng: -73.909858
                }
            popupContent = this.$popupContent.html(),
                markerImage = './img/marker.png',
                zoom = 13.5;


            map = new google.maps.Map(document.getElementById('map'), {
                    center: coordinates,
                    zoom: zoom,
                    disableDefaultUI: true,
                    scrollwheel: false
                }),
                marker = new google.maps.Marker({
                    position: coordinatesMarker,
                    map: map,
                    icon: markerImage
                });

            var styles = [{
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#bdbdbd"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#757575"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dadada"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#616161"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e5e5e5"
                    }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#c9c9c9"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#9e9e9e"
                    }]
                }
            ]



            map.setOptions({
                styles: styles
            });

        }

    };

    $(document).ready(function () {
        GM.init();
    });
    return true;
}

export default initBlock();

// ---------------------------- END PUBLIC METHODS ----------------------------