(function($) { "use strict";
    
    //set your google maps parameters

    $(document).ready(function(){
        $("#close-map").on("click",function(){
            $(".infobox-in-map").hide();
            return false;
        });
        var latitude = 40.706187,
            longitude = -74.008833,
            map_zoom = 10;

        var locations = [
            ['<div class="infobox"><span>WE ARE AMWAL<span></br><span>Email: contact@amwal.com</span></div>'

            , latitude, longitude, 2]
        ];
    
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: map_zoom,
            scrollwheel: false,
            navigationControl: true,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,
            styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#00abc9"
            },
            {
                "visibility": "on"
            }
        ]
    }
],
            center: new google.maps.LatLng(latitude, longitude),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    
        var infowindow = new google.maps.InfoWindow();
    
        var marker, i;
    
        for (i = 0; i < locations.length; i++) {  
      
            marker = new google.maps.Marker({ 
                position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
                map: map,
                icon: 'images/Contact/cd-icon-location.png'
            });
            
           



          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              // infowindow.setContent(locations[i][0]);
              // infowindow.open(map, marker);
              $(".infobox-in-map").show();
            }
          })(marker, i));
        }
        
    });

})(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





    