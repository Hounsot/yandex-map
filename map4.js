document.addEventListener('DOMContentLoaded', () => {
        console.log('test')
let map = null;
        main();
        
        async function main() {
            await ymaps3.ready;
            
            // Import required modules
            const {
                YMap,
                YMapDefaultSchemeLayer,
                YMapControls,
                YMapDefaultFeaturesLayer,
                YMapMarker
            } = ymaps3;

            const {
                YMapZoomControl,
                YMapGeolocationControl
            } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

            // Define coordinates 55.800717, 38.044708
            const CENTER_COORDINATES = [37.912301, 55.626487];
            const MARKER_COORDINATES = [37.912301, 55.626487];
            const LOCATION = {
                center: CENTER_COORDINATES,
                zoom: 10
            };

            // Initialize map
            map = new YMap(
                document.getElementById('map'),
                {
                    location: LOCATION
                }
            );
            
            // Add map layers
            map.addChild(new YMapDefaultSchemeLayer({
             customization: [
    {
        "tags": "country",
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#8c8c8c"
            },
            {
                "zoom": 0,
                "opacity": 0.8
            },
            {
                "zoom": 1,
                "opacity": 0.8
            },
            {
                "zoom": 2,
                "opacity": 0.8
            },
            {
                "zoom": 3,
                "opacity": 0.8
            },
            {
                "zoom": 4,
                "opacity": 0.8
            },
            {
                "zoom": 5,
                "opacity": 1
            },
            {
                "zoom": 6,
                "opacity": 1
            },
            {
                "zoom": 7,
                "opacity": 1
            },
            {
                "zoom": 8,
                "opacity": 1
            },
            {
                "zoom": 9,
                "opacity": 1
            },
            {
                "zoom": 10,
                "opacity": 1
            },
            {
                "zoom": 11,
                "opacity": 1
            },
            {
                "zoom": 12,
                "opacity": 1
            },
            {
                "zoom": 13,
                "opacity": 1
            },
            {
                "zoom": 14,
                "opacity": 1
            },
            {
                "zoom": 15,
                "opacity": 1
            },
            {
                "zoom": 16,
                "opacity": 1
            },
            {
                "zoom": 17,
                "opacity": 1
            },
            {
                "zoom": 18,
                "opacity": 1
            },
            {
                "zoom": 19,
                "opacity": 1
            },
            {
                "zoom": 20,
                "opacity": 1
            },
            {
                "zoom": 21,
                "opacity": 1
            }
        ]
    },
    {
        "tags": "country",
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "zoom": 0,
                "opacity": 0.15
            },
            {
                "zoom": 1,
                "opacity": 0.15
            },
            {
                "zoom": 2,
                "opacity": 0.15
            },
            {
                "zoom": 3,
                "opacity": 0.15
            },
            {
                "zoom": 4,
                "opacity": 0.15
            },
            {
                "zoom": 5,
                "opacity": 0.15
            },
            {
                "zoom": 6,
                "opacity": 0.25
            },
            {
                "zoom": 7,
                "opacity": 0.5
            },
            {
                "zoom": 8,
                "opacity": 0.47
            },
            {
                "zoom": 9,
                "opacity": 0.44
            },
            {
                "zoom": 10,
                "opacity": 0.41
            },
            {
                "zoom": 11,
                "opacity": 0.38
            },
            {
                "zoom": 12,
                "opacity": 0.35
            },
            {
                "zoom": 13,
                "opacity": 0.33
            },
            {
                "zoom": 14,
                "opacity": 0.3
            },
            {
                "zoom": 15,
                "opacity": 0.28
            },
            {
                "zoom": 16,
                "opacity": 0.25
            },
            {
                "zoom": 17,
                "opacity": 0.25
            },
            {
                "zoom": 18,
                "opacity": 0.25
            },
            {
                "zoom": 19,
                "opacity": 0.25
            },
            {
                "zoom": 20,
                "opacity": 0.25
            },
            {
                "zoom": 21,
                "opacity": 0.25
            }
        ]
    },
    {
        "tags": "region",
        "elements": "geometry.fill",
        "stylers": [
            {
                "zoom": 0,
                "color": "#a6a6a6",
                "opacity": 0.5
            },
            {
                "zoom": 1,
                "color": "#a6a6a6",
                "opacity": 0.5
            },
            {
                "zoom": 2,
                "color": "#a6a6a6",
                "opacity": 0.5
            },
            {
                "zoom": 3,
                "color": "#a6a6a6",
                "opacity": 0.5
            },
            {
                "zoom": 4,
                "color": "#a6a6a6",
                "opacity": 0.5
            },
            {
                "zoom": 5,
                "color": "#a6a6a6",
                "opacity": 0.5
            },
            {
                "zoom": 6,
                "color": "#a6a6a6",
                "opacity": 1
            },
            {
                "zoom": 7,
                "color": "#a6a6a6",
                "opacity": 1
            },
            {
                "zoom": 8,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 9,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 10,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 11,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 12,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 13,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 14,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 15,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 16,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 17,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 18,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 19,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 20,
                "color": "#8c8c8c",
                "opacity": 1
            },
            {
                "zoom": 21,
                "color": "#8c8c8c",
                "opacity": 1
            }
        ]
    },
    {
        "tags": "region",
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "zoom": 0,
                "opacity": 0.15
            },
            {
                "zoom": 1,
                "opacity": 0.15
            },
            {
                "zoom": 2,
                "opacity": 0.15
            },
            {
                "zoom": 3,
                "opacity": 0.15
            },
            {
                "zoom": 4,
                "opacity": 0.15
            },
            {
                "zoom": 5,
                "opacity": 0.15
            },
            {
                "zoom": 6,
                "opacity": 0.25
            },
            {
                "zoom": 7,
                "opacity": 0.5
            },
            {
                "zoom": 8,
                "opacity": 0.47
            },
            {
                "zoom": 9,
                "opacity": 0.44
            },
            {
                "zoom": 10,
                "opacity": 0.41
            },
            {
                "zoom": 11,
                "opacity": 0.38
            },
            {
                "zoom": 12,
                "opacity": 0.35
            },
            {
                "zoom": 13,
                "opacity": 0.33
            },
            {
                "zoom": 14,
                "opacity": 0.3
            },
            {
                "zoom": 15,
                "opacity": 0.28
            },
            {
                "zoom": 16,
                "opacity": 0.25
            },
            {
                "zoom": 17,
                "opacity": 0.25
            },
            {
                "zoom": 18,
                "opacity": 0.25
            },
            {
                "zoom": 19,
                "opacity": 0.25
            },
            {
                "zoom": 20,
                "opacity": 0.25
            },
            {
                "zoom": 21,
                "opacity": 0.25
            }
        ]
    },
    {
        "tags": {
            "any": "admin",
            "none": [
                "country",
                "region",
                "locality",
                "district",
                "address"
            ]
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#8c8c8c"
            },
            {
                "zoom": 0,
                "opacity": 0.5
            },
            {
                "zoom": 1,
                "opacity": 0.5
            },
            {
                "zoom": 2,
                "opacity": 0.5
            },
            {
                "zoom": 3,
                "opacity": 0.5
            },
            {
                "zoom": 4,
                "opacity": 0.5
            },
            {
                "zoom": 5,
                "opacity": 0.5
            },
            {
                "zoom": 6,
                "opacity": 1
            },
            {
                "zoom": 7,
                "opacity": 1
            },
            {
                "zoom": 8,
                "opacity": 1
            },
            {
                "zoom": 9,
                "opacity": 1
            },
            {
                "zoom": 10,
                "opacity": 1
            },
            {
                "zoom": 11,
                "opacity": 1
            },
            {
                "zoom": 12,
                "opacity": 1
            },
            {
                "zoom": 13,
                "opacity": 1
            },
            {
                "zoom": 14,
                "opacity": 1
            },
            {
                "zoom": 15,
                "opacity": 1
            },
            {
                "zoom": 16,
                "opacity": 1
            },
            {
                "zoom": 17,
                "opacity": 1
            },
            {
                "zoom": 18,
                "opacity": 1
            },
            {
                "zoom": 19,
                "opacity": 1
            },
            {
                "zoom": 20,
                "opacity": 1
            },
            {
                "zoom": 21,
                "opacity": 1
            }
        ]
    },
    {
        "tags": {
            "any": "admin",
            "none": [
                "country",
                "region",
                "locality",
                "district",
                "address"
            ]
        },
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "zoom": 0,
                "opacity": 0.15
            },
            {
                "zoom": 1,
                "opacity": 0.15
            },
            {
                "zoom": 2,
                "opacity": 0.15
            },
            {
                "zoom": 3,
                "opacity": 0.15
            },
            {
                "zoom": 4,
                "opacity": 0.15
            },
            {
                "zoom": 5,
                "opacity": 0.15
            },
            {
                "zoom": 6,
                "opacity": 0.25
            },
            {
                "zoom": 7,
                "opacity": 0.5
            },
            {
                "zoom": 8,
                "opacity": 0.47
            },
            {
                "zoom": 9,
                "opacity": 0.44
            },
            {
                "zoom": 10,
                "opacity": 0.41
            },
            {
                "zoom": 11,
                "opacity": 0.38
            },
            {
                "zoom": 12,
                "opacity": 0.35
            },
            {
                "zoom": 13,
                "opacity": 0.33
            },
            {
                "zoom": 14,
                "opacity": 0.3
            },
            {
                "zoom": 15,
                "opacity": 0.28
            },
            {
                "zoom": 16,
                "opacity": 0.25
            },
            {
                "zoom": 17,
                "opacity": 0.25
            },
            {
                "zoom": 18,
                "opacity": 0.25
            },
            {
                "zoom": 19,
                "opacity": 0.25
            },
            {
                "zoom": 20,
                "opacity": 0.25
            },
            {
                "zoom": 21,
                "opacity": 0.25
            }
        ]
    },
    {
        "tags": {
            "any": "landcover",
            "none": "vegetation"
        },
        "stylers": [
            {
                "hue": "#F1F1F1"
            }
        ]
    },
    {
        "tags": "vegetation",
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#aab6c0",
                "opacity": 0.1
            },
            {
                "zoom": 1,
                "color": "#aab6c0",
                "opacity": 0.1
            },
            {
                "zoom": 2,
                "color": "#aab6c0",
                "opacity": 0.1
            },
            {
                "zoom": 3,
                "color": "#aab6c0",
                "opacity": 0.1
            },
            {
                "zoom": 4,
                "color": "#aab6c0",
                "opacity": 0.1
            },
            {
                "zoom": 5,
                "color": "#aab6c0",
                "opacity": 0.1
            },
            {
                "zoom": 6,
                "color": "#aab6c0",
                "opacity": 0.2
            },
            {
                "zoom": 7,
                "color": "#F1F1F1",
                "opacity": 0.3
            },
            {
                "zoom": 8,
                "color": "#F1F1F1",
                "opacity": 0.4
            },
            {
                "zoom": 9,
                "color": "#F1F1F1",
                "opacity": 0.6
            },
            {
                "zoom": 10,
                "color": "#F1F1F1",
                "opacity": 0.8
            },
            {
                "zoom": 11,
                "color": "#F1F1F1",
                "opacity": 1
            },
            {
                "zoom": 12,
                "color": "#F1F1F1",
                "opacity": 1
            },
            {
                "zoom": 13,
                "color": "#F1F1F1",
                "opacity": 1
            },
            {
                "zoom": 14,
                "color": "#cdd4da",
                "opacity": 1
            },
            {
                "zoom": 15,
                "color": "#d3d9df",
                "opacity": 1
            },
            {
                "zoom": 16,
                "color": "#d3d9df",
                "opacity": 1
            },
            {
                "zoom": 17,
                "color": "#d3d9df",
                "opacity": 1
            },
            {
                "zoom": 18,
                "color": "#d3d9df",
                "opacity": 1
            },
            {
                "zoom": 19,
                "color": "#d3d9df",
                "opacity": 1
            },
            {
                "zoom": 20,
                "color": "#d3d9df",
                "opacity": 1
            },
            {
                "zoom": 21,
                "color": "#d3d9df",
                "opacity": 1
            }
        ]
    },
    {
        "tags": "park",
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#F1F1F1",
                "opacity": 0.1
            },
            {
                "zoom": 1,
                "color": "#F1F1F1",
                "opacity": 0.1
            },
            {
                "zoom": 2,
                "color": "#F1F1F1",
                "opacity": 0.1
            },
            {
                "zoom": 3,
                "color": "#F1F1F1",
                "opacity": 0.1
            },
            {
                "zoom": 4,
                "color": "#F1F1F1",
                "opacity": 0.1
            },
            {
                "zoom": 5,
                "color": "#F1F1F1",
                "opacity": 0.1
            },
            {
                "zoom": 6,
                "color": "#F1F1F1",
                "opacity": 0.2
            },
            {
                "zoom": 7,
                "color": "#F1F1F1",
                "opacity": 0.3
            },
            {
                "zoom": 8,
                "color": "#F1F1F1",
                "opacity": 0.4
            },
            {
                "zoom": 9,
                "color": "#F1F1F1",
                "opacity": 0.6
            },
            {
                "zoom": 10,
                "color": "#F1F1F1",
                "opacity": 0.8
            },
            {
                "zoom": 11,
                "color": "#F1F1F1",
                "opacity": 1
            },
            {
                "zoom": 12,
                "color": "#F1F1F1",
                "opacity": 1
            },
            {
                "zoom": 13,
                "color": "#F1F1F1",
                "opacity": 1
            },
            {
                "zoom": 14,
                "color": "#cdd4da",
                "opacity": 1
            },
            {
                "zoom": 15,
                "color": "#d3d9df",
                "opacity": 1
            },
            {
                "zoom": 16,
                "color": "#d3d9df",
                "opacity": 0.9
            },
            {
                "zoom": 17,
                "color": "#d3d9df",
                "opacity": 0.8
            },
            {
                "zoom": 18,
                "color": "#d3d9df",
                "opacity": 0.7
            },
            {
                "zoom": 19,
                "color": "#d3d9df",
                "opacity": 0.7
            },
            {
                "zoom": 20,
                "color": "#d3d9df",
                "opacity": 0.7
            },
            {
                "zoom": 21,
                "color": "#d3d9df",
                "opacity": 0.7
            }
        ]
    },
    {
        "tags": "national_park",
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#F1F1F1",
                "opacity": 0.1
            },
            {
                "zoom": 1,
                "color": "#F1F1F1",
                "opacity": 0.1
            },
            {
                "zoom": 2,
                "color": "#F1F1F1",
                "opacity": 0.1
            },
            {
                "zoom": 3,
                "color": "#F1F1F1",
                "opacity": 0.1
            },
            {
                "zoom": 4,
                "color": "#F1F1F1",
                "opacity": 0.1
            },
            {
                "zoom": 5,
                "color": "#F1F1F1",
                "opacity": 0.1
            },
            {
                "zoom": 6,
                "color": "#F1F1F1",
                "opacity": 0.2
            },
            {
                "zoom": 7,
                "color": "#F1F1F1",
                "opacity": 0.3
            },
            {
                "zoom": 8,
                "color": "#F1F1F1",
                "opacity": 0.4
            },
            {
                "zoom": 9,
                "color": "#F1F1F1",
                "opacity": 0.6
            },
            {
                "zoom": 10,
                "color": "#F1F1F1",
                "opacity": 0.8
            },
            {
                "zoom": 11,
                "color": "#F1F1F1",
                "opacity": 1
            },
            {
                "zoom": 12,
                "color": "#F1F1F1",
                "opacity": 1
            },
            {
                "zoom": 13,
                "color": "#F1F1F1",
                "opacity": 1
            },
            {
                "zoom": 14,
                "color": "#cdd4da",
                "opacity": 1
            },
            {
                "zoom": 15,
                "color": "#d3d9df",
                "opacity": 1
            },
            {
                "zoom": 16,
                "color": "#d3d9df",
                "opacity": 0.7
            },
            {
                "zoom": 17,
                "color": "#d3d9df",
                "opacity": 0.7
            },
            {
                "zoom": 18,
                "color": "#d3d9df",
                "opacity": 0.7
            },
            {
                "zoom": 19,
                "color": "#d3d9df",
                "opacity": 0.7
            },
            {
                "zoom": 20,
                "color": "#d3d9df",
                "opacity": 0.7
            },
            {
                "zoom": 21,
                "color": "#d3d9df",
                "opacity": 0.7
            }
        ]
    },
    {
        "tags": "cemetery",
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#F1F1F1"
            },
            {
                "zoom": 1,
                "color": "#F1F1F1"
            },
            {
                "zoom": 2,
                "color": "#F1F1F1"
            },
            {
                "zoom": 3,
                "color": "#F1F1F1"
            },
            {
                "zoom": 4,
                "color": "#F1F1F1"
            },
            {
                "zoom": 5,
                "color": "#F1F1F1"
            },
            {
                "zoom": 6,
                "color": "#F1F1F1"
            },
            {
                "zoom": 7,
                "color": "#F1F1F1"
            },
            {
                "zoom": 8,
                "color": "#F1F1F1"
            },
            {
                "zoom": 9,
                "color": "#F1F1F1"
            },
            {
                "zoom": 10,
                "color": "#F1F1F1"
            },
            {
                "zoom": 11,
                "color": "#F1F1F1"
            },
            {
                "zoom": 12,
                "color": "#F1F1F1"
            },
            {
                "zoom": 13,
                "color": "#F1F1F1"
            },
            {
                "zoom": 14,
                "color": "#cdd4da"
            },
            {
                "zoom": 15,
                "color": "#d3d9df"
            },
            {
                "zoom": 16,
                "color": "#d3d9df"
            },
            {
                "zoom": 17,
                "color": "#d3d9df"
            },
            {
                "zoom": 18,
                "color": "#d3d9df"
            },
            {
                "zoom": 19,
                "color": "#d3d9df"
            },
            {
                "zoom": 20,
                "color": "#d3d9df"
            },
            {
                "zoom": 21,
                "color": "#d3d9df"
            }
        ]
    },
    {
        "tags": "sports_ground",
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 1,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 2,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 3,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 4,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 5,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 6,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 7,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 8,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 9,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 10,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 11,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 12,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 13,
                "color": "#b8c2cb",
                "opacity": 0
            },
            {
                "zoom": 14,
                "color": "#bec7cf",
                "opacity": 0
            },
            {
                "zoom": 15,
                "color": "#c4ccd4",
                "opacity": 0.5
            },
            {
                "zoom": 16,
                "color": "#c5cdd5",
                "opacity": 1
            },
            {
                "zoom": 17,
                "color": "#c6ced5",
                "opacity": 1
            },
            {
                "zoom": 18,
                "color": "#c7ced6",
                "opacity": 1
            },
            {
                "zoom": 19,
                "color": "#c8cfd7",
                "opacity": 1
            },
            {
                "zoom": 20,
                "color": "#c9d0d7",
                "opacity": 1
            },
            {
                "zoom": 21,
                "color": "#cad1d8",
                "opacity": 1
            }
        ]
    },
    {
        "tags": "terrain",
        "elements": "geometry",
        "stylers": [
            {
                "hue": "#F1F1F1"
            },
            {
                "zoom": 0,
                "opacity": 0.3
            },
            {
                "zoom": 1,
                "opacity": 0.3
            },
            {
                "zoom": 2,
                "opacity": 0.3
            },
            {
                "zoom": 3,
                "opacity": 0.3
            },
            {
                "zoom": 4,
                "opacity": 0.3
            },
            {
                "zoom": 5,
                "opacity": 0.35
            },
            {
                "zoom": 6,
                "opacity": 0.4
            },
            {
                "zoom": 7,
                "opacity": 0.6
            },
            {
                "zoom": 8,
                "opacity": 0.8
            },
            {
                "zoom": 9,
                "opacity": 0.9
            },
            {
                "zoom": 10,
                "opacity": 1
            },
            {
                "zoom": 11,
                "opacity": 1
            },
            {
                "zoom": 12,
                "opacity": 1
            },
            {
                "zoom": 13,
                "opacity": 1
            },
            {
                "zoom": 14,
                "opacity": 1
            },
            {
                "zoom": 15,
                "opacity": 1
            },
            {
                "zoom": 16,
                "opacity": 1
            },
            {
                "zoom": 17,
                "opacity": 1
            },
            {
                "zoom": 18,
                "opacity": 1
            },
            {
                "zoom": 19,
                "opacity": 1
            },
            {
                "zoom": 20,
                "opacity": 1
            },
            {
                "zoom": 21,
                "opacity": 1
            }
        ]
    },
    {
        "tags": "geographic_line",
        "elements": "geometry",
        "stylers": [
            {
                "color": "#747d86"
            }
        ]
    },
    {
        "tags": "land",
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#e1e3e4"
            },
            {
                "zoom": 1,
                "color": "#e1e3e4"
            },
            {
                "zoom": 2,
                "color": "#e1e3e4"
            },
            {
                "zoom": 3,
                "color": "#e1e3e4"
            },
            {
                "zoom": 4,
                "color": "#e1e3e4"
            },
            {
                "zoom": 5,
                "color": "#e4e5e6"
            },
            {
                "zoom": 6,
                "color": "#e6e8e9"
            },
            {
                "zoom": 7,
                "color": "#e9eaeb"
            },
            {
                "zoom": 8,
                "color": "#FEFEFE"
            },
            {
                "zoom": 9,
                "color": "#FEFEFE"
            },
            {
                "zoom": 10,
                "color": "#FEFEFE"
            },
            {
                "zoom": 11,
                "color": "#FEFEFE"
            },
            {
                "zoom": 12,
                "color": "#FEFEFE"
            },
            {
                "zoom": 13,
                "color": "#FEFEFE"
            },
            {
                "zoom": 14,
                "color": "#eeeff0"
            },
            {
                "zoom": 15,
                "color": "#f1f2f3"
            },
            {
                "zoom": 16,
                "color": "#f1f2f3"
            },
            {
                "zoom": 17,
                "color": "#f2f3f4"
            },
            {
                "zoom": 18,
                "color": "#f2f3f4"
            },
            {
                "zoom": 19,
                "color": "#f3f4f4"
            },
            {
                "zoom": 20,
                "color": "#f3f4f5"
            },
            {
                "zoom": 21,
                "color": "#f4f5f5"
            }
        ]
    },
    {
        "tags": "residential",
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 1,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 2,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 3,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 4,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 5,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 6,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 7,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 8,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 9,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 10,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 11,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 12,
                "color": "#F1F1F1",
                "opacity": 0.5
            },
            {
                "zoom": 13,
                "color": "#F1F1F1",
                "opacity": 1
            },
            {
                "zoom": 14,
                "color": "#e6e8e9",
                "opacity": 1
            },
            {
                "zoom": 15,
                "color": "#FEFEFE",
                "opacity": 1
            },
            {
                "zoom": 16,
                "color": "#edeeef",
                "opacity": 1
            },
            {
                "zoom": 17,
                "color": "#eeeff0",
                "opacity": 1
            },
            {
                "zoom": 18,
                "color": "#eeeff0",
                "opacity": 1
            },
            {
                "zoom": 19,
                "color": "#eff0f1",
                "opacity": 1
            },
            {
                "zoom": 20,
                "color": "#f0f1f2",
                "opacity": 1
            },
            {
                "zoom": 21,
                "color": "#f1f2f3",
                "opacity": 1
            }
        ]
    },
    {
        "tags": "locality",
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#F1F1F1"
            },
            {
                "zoom": 1,
                "color": "#F1F1F1"
            },
            {
                "zoom": 2,
                "color": "#F1F1F1"
            },
            {
                "zoom": 3,
                "color": "#F1F1F1"
            },
            {
                "zoom": 4,
                "color": "#F1F1F1"
            },
            {
                "zoom": 5,
                "color": "#F1F1F1"
            },
            {
                "zoom": 6,
                "color": "#F1F1F1"
            },
            {
                "zoom": 7,
                "color": "#F1F1F1"
            },
            {
                "zoom": 8,
                "color": "#F1F1F1"
            },
            {
                "zoom": 9,
                "color": "#F1F1F1"
            },
            {
                "zoom": 10,
                "color": "#F1F1F1"
            },
            {
                "zoom": 11,
                "color": "#F1F1F1"
            },
            {
                "zoom": 12,
                "color": "#F1F1F1"
            },
            {
                "zoom": 13,
                "color": "#F1F1F1"
            },
            {
                "zoom": 14,
                "color": "#e6e8e9"
            },
            {
                "zoom": 15,
                "color": "#FEFEFE"
            },
            {
                "zoom": 16,
                "color": "#edeeef"
            },
            {
                "zoom": 17,
                "color": "#eeeff0"
            },
            {
                "zoom": 18,
                "color": "#eeeff0"
            },
            {
                "zoom": 19,
                "color": "#eff0f1"
            },
            {
                "zoom": 20,
                "color": "#f0f1f2"
            },
            {
                "zoom": 21,
                "color": "#f1f2f3"
            }
        ]
    },
    {
        "tags": {
            "any": "structure",
            "none": [
                "building",
                "fence"
            ]
        },
        "elements": "geometry",
        "stylers": [
            {
                "opacity": 0.9
            },
            {
                "zoom": 0,
                "color": "#F1F1F1"
            },
            {
                "zoom": 1,
                "color": "#F1F1F1"
            },
            {
                "zoom": 2,
                "color": "#F1F1F1"
            },
            {
                "zoom": 3,
                "color": "#F1F1F1"
            },
            {
                "zoom": 4,
                "color": "#F1F1F1"
            },
            {
                "zoom": 5,
                "color": "#F1F1F1"
            },
            {
                "zoom": 6,
                "color": "#F1F1F1"
            },
            {
                "zoom": 7,
                "color": "#F1F1F1"
            },
            {
                "zoom": 8,
                "color": "#F1F1F1"
            },
            {
                "zoom": 9,
                "color": "#F1F1F1"
            },
            {
                "zoom": 10,
                "color": "#F1F1F1"
            },
            {
                "zoom": 11,
                "color": "#F1F1F1"
            },
            {
                "zoom": 12,
                "color": "#F1F1F1"
            },
            {
                "zoom": 13,
                "color": "#F1F1F1"
            },
            {
                "zoom": 14,
                "color": "#e6e8e9"
            },
            {
                "zoom": 15,
                "color": "#FEFEFE"
            },
            {
                "zoom": 16,
                "color": "#edeeef"
            },
            {
                "zoom": 17,
                "color": "#eeeff0"
            },
            {
                "zoom": 18,
                "color": "#eeeff0"
            },
            {
                "zoom": 19,
                "color": "#eff0f1"
            },
            {
                "zoom": 20,
                "color": "#f0f1f2"
            },
            {
                "zoom": 21,
                "color": "#f1f2f3"
            }
        ]
    },
    {
        "tags": "building",
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#dee0e3"
            },
            {
                "zoom": 0,
                "opacity": 0.7
            },
            {
                "zoom": 1,
                "opacity": 0.7
            },
            {
                "zoom": 2,
                "opacity": 0.7
            },
            {
                "zoom": 3,
                "opacity": 0.7
            },
            {
                "zoom": 4,
                "opacity": 0.7
            },
            {
                "zoom": 5,
                "opacity": 0.7
            },
            {
                "zoom": 6,
                "opacity": 0.7
            },
            {
                "zoom": 7,
                "opacity": 0.7
            },
            {
                "zoom": 8,
                "opacity": 0.7
            },
            {
                "zoom": 9,
                "opacity": 0.7
            },
            {
                "zoom": 10,
                "opacity": 0.7
            },
            {
                "zoom": 11,
                "opacity": 0.7
            },
            {
                "zoom": 12,
                "opacity": 0.7
            },
            {
                "zoom": 13,
                "opacity": 0.7
            },
            {
                "zoom": 14,
                "opacity": 0.7
            },
            {
                "zoom": 15,
                "opacity": 0.7
            },
            {
                "zoom": 16,
                "opacity": 0.9
            },
            {
                "zoom": 17,
                "opacity": 0.6
            },
            {
                "zoom": 18,
                "opacity": 0.6
            },
            {
                "zoom": 19,
                "opacity": 0.6
            },
            {
                "zoom": 20,
                "opacity": 0.6
            },
            {
                "zoom": 21,
                "opacity": 0.6
            }
        ]
    },
    {
        "tags": "building",
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#c8ccd1"
            },
            {
                "zoom": 0,
                "opacity": 0.5
            },
            {
                "zoom": 1,
                "opacity": 0.5
            },
            {
                "zoom": 2,
                "opacity": 0.5
            },
            {
                "zoom": 3,
                "opacity": 0.5
            },
            {
                "zoom": 4,
                "opacity": 0.5
            },
            {
                "zoom": 5,
                "opacity": 0.5
            },
            {
                "zoom": 6,
                "opacity": 0.5
            },
            {
                "zoom": 7,
                "opacity": 0.5
            },
            {
                "zoom": 8,
                "opacity": 0.5
            },
            {
                "zoom": 9,
                "opacity": 0.5
            },
            {
                "zoom": 10,
                "opacity": 0.5
            },
            {
                "zoom": 11,
                "opacity": 0.5
            },
            {
                "zoom": 12,
                "opacity": 0.5
            },
            {
                "zoom": 13,
                "opacity": 0.5
            },
            {
                "zoom": 14,
                "opacity": 0.5
            },
            {
                "zoom": 15,
                "opacity": 0.5
            },
            {
                "zoom": 16,
                "opacity": 0.5
            },
            {
                "zoom": 17,
                "opacity": 1
            },
            {
                "zoom": 18,
                "opacity": 1
            },
            {
                "zoom": 19,
                "opacity": 1
            },
            {
                "zoom": 20,
                "opacity": 1
            },
            {
                "zoom": 21,
                "opacity": 1
            }
        ]
    },
    {
        "tags": {
            "any": "urban_area",
            "none": [
                "residential",
                "industrial",
                "cemetery",
                "park",
                "medical",
                "sports_ground",
                "beach",
                "construction_site"
            ]
        },
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 1,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 2,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 3,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 4,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 5,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 6,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 7,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 8,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 9,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 10,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 11,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 12,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 13,
                "color": "#d6d9dc",
                "opacity": 1
            },
            {
                "zoom": 14,
                "color": "#dddfe2",
                "opacity": 1
            },
            {
                "zoom": 15,
                "color": "#e4e6e8",
                "opacity": 1
            },
            {
                "zoom": 16,
                "color": "#ebeced",
                "opacity": 0.67
            },
            {
                "zoom": 17,
                "color": "#f2f3f3",
                "opacity": 0.33
            },
            {
                "zoom": 18,
                "color": "#f2f3f3",
                "opacity": 0
            },
            {
                "zoom": 19,
                "color": "#f2f3f3",
                "opacity": 0
            },
            {
                "zoom": 20,
                "color": "#f2f3f3",
                "opacity": 0
            },
            {
                "zoom": 21,
                "color": "#f2f3f3",
                "opacity": 0
            }
        ]
    },
    {
        "tags": "poi",
        "elements": "label.icon",
        "stylers": [
            {
                "color": "#9da6af"
            },
            {
                "secondary-color": "#ffffff"
            },
            {
                "tertiary-color": "#ffffff"
            }
        ]
    },
    {
        "tags": "poi",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#778088"
            }
        ]
    },
    {
        "tags": "poi",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "outdoor",
        "elements": "label.icon",
        "stylers": [
            {
                "color": "#9da6af"
            },
            {
                "secondary-color": "#ffffff"
            },
            {
                "tertiary-color": "#ffffff"
            }
        ]
    },
    {
        "tags": "outdoor",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#778088"
            }
        ]
    },
    {
        "tags": "outdoor",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "park",
        "elements": "label.icon",
        "stylers": [
            {
                "color": "#9da6af"
            },
            {
                "secondary-color": "#ffffff"
            },
            {
                "tertiary-color": "#ffffff"
            }
        ]
    },
    {
        "tags": "park",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#778088"
            }
        ]
    },
    {
        "tags": "park",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "cemetery",
        "elements": "label.icon",
        "stylers": [
            {
                "color": "#9da6af"
            },
            {
                "secondary-color": "#ffffff"
            },
            {
                "tertiary-color": "#ffffff"
            }
        ]
    },
    {
        "tags": "cemetery",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#778088"
            }
        ]
    },
    {
        "tags": "cemetery",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "beach",
        "elements": "label.icon",
        "stylers": [
            {
                "color": "#9da6af"
            },
            {
                "secondary-color": "#ffffff"
            },
            {
                "tertiary-color": "#ffffff"
            }
        ]
    },
    {
        "tags": "beach",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#778088"
            }
        ]
    },
    {
        "tags": "beach",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "medical",
        "elements": "label.icon",
        "stylers": [
            {
                "color": "#9da6af"
            },
            {
                "secondary-color": "#ffffff"
            },
            {
                "tertiary-color": "#ffffff"
            }
        ]
    },
    {
        "tags": "medical",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#778088"
            }
        ]
    },
    {
        "tags": "medical",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "shopping",
        "elements": "label.icon",
        "stylers": [
            {
                "color": "#9da6af"
            },
            {
                "secondary-color": "#ffffff"
            },
            {
                "tertiary-color": "#ffffff"
            }
        ]
    },
    {
        "tags": "shopping",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#778088"
            }
        ]
    },
    {
        "tags": "shopping",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "commercial_services",
        "elements": "label.icon",
        "stylers": [
            {
                "color": "#9da6af"
            },
            {
                "secondary-color": "#ffffff"
            },
            {
                "tertiary-color": "#ffffff"
            }
        ]
    },
    {
        "tags": "commercial_services",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#778088"
            }
        ]
    },
    {
        "tags": "commercial_services",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "food_and_drink",
        "elements": "label.icon",
        "stylers": [
            {
                "color": "#9da6af"
            },
            {
                "secondary-color": "#ffffff"
            },
            {
                "tertiary-color": "#ffffff"
            }
        ]
    },
    {
        "tags": "food_and_drink",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#778088"
            }
        ]
    },
    {
        "tags": "food_and_drink",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "road",
        "elements": "label.icon",
        "types": "point",
        "stylers": [
            {
                "color": "#9da6af"
            },
            {
                "secondary-color": "#ffffff"
            },
            {
                "tertiary-color": "#ffffff"
            }
        ]
    },
    {
        "tags": "road",
        "elements": "label.text.fill",
        "types": "point",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "tags": "entrance",
        "elements": "label.icon",
        "stylers": [
            {
                "color": "#9da6af"
            },
            {
                "secondary-color": "#ffffff"
            }
        ]
    },
    {
        "tags": "locality",
        "elements": "label.icon",
        "stylers": [
            {
                "color": "#9da6af"
            },
            {
                "secondary-color": "#ffffff"
            }
        ]
    },
    {
        "tags": "country",
        "elements": "label.text.fill",
        "stylers": [
            {
                "opacity": 0.8
            },
            {
                "color": "#8f969e"
            }
        ]
    },
    {
        "tags": "country",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "region",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#8f969e"
            },
            {
                "opacity": 0.8
            }
        ]
    },
    {
        "tags": "region",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "district",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#8f969e"
            },
            {
                "opacity": 0.8
            }
        ]
    },
    {
        "tags": "district",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": {
            "any": "admin",
            "none": [
                "country",
                "region",
                "locality",
                "district",
                "address"
            ]
        },
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#8f969e"
            }
        ]
    },
    {
        "tags": {
            "any": "admin",
            "none": [
                "country",
                "region",
                "locality",
                "district",
                "address"
            ]
        },
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "locality",
        "elements": "label.text.fill",
        "stylers": [
            {
                "zoom": 0,
                "color": "#778088"
            },
            {
                "zoom": 1,
                "color": "#778088"
            },
            {
                "zoom": 2,
                "color": "#778088"
            },
            {
                "zoom": 3,
                "color": "#778088"
            },
            {
                "zoom": 4,
                "color": "#778088"
            },
            {
                "zoom": 5,
                "color": "#757e86"
            },
            {
                "zoom": 6,
                "color": "#737c83"
            },
            {
                "zoom": 7,
                "color": "#717a81"
            },
            {
                "zoom": 8,
                "color": "#6f777f"
            },
            {
                "zoom": 9,
                "color": "#6d757c"
            },
            {
                "zoom": 10,
                "color": "#6b737a"
            },
            {
                "zoom": 11,
                "color": "#6b737a"
            },
            {
                "zoom": 12,
                "color": "#6b737a"
            },
            {
                "zoom": 13,
                "color": "#6b737a"
            },
            {
                "zoom": 14,
                "color": "#6b737a"
            },
            {
                "zoom": 15,
                "color": "#6b737a"
            },
            {
                "zoom": 16,
                "color": "#6b737a"
            },
            {
                "zoom": 17,
                "color": "#6b737a"
            },
            {
                "zoom": 18,
                "color": "#6b737a"
            },
            {
                "zoom": 19,
                "color": "#6b737a"
            },
            {
                "zoom": 20,
                "color": "#6b737a"
            },
            {
                "zoom": 21,
                "color": "#6b737a"
            }
        ]
    },
    {
        "tags": "locality",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "road",
        "elements": "label.text.fill",
        "types": "polyline",
        "stylers": [
            {
                "color": "#778088"
            }
        ]
    },
    {
        "tags": "road",
        "elements": "label.text.outline",
        "types": "polyline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "road",
        "elements": "geometry.fill.pattern",
        "types": "polyline",
        "stylers": [
            {
                "scale": 1
            },
            {
                "color": "#adb3b8"
            }
        ]
    },
    {
        "tags": "road",
        "elements": "label.text.fill",
        "types": "point",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "tags": "structure",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#5f666d"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "structure",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "entrance",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#5f666d"
            },
            {
                "opacity": 1
            }
        ]
    },
    {
        "tags": "entrance",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "address",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#5f666d"
            },
            {
                "zoom": 0,
                "opacity": 0.9
            },
            {
                "zoom": 1,
                "opacity": 0.9
            },
            {
                "zoom": 2,
                "opacity": 0.9
            },
            {
                "zoom": 3,
                "opacity": 0.9
            },
            {
                "zoom": 4,
                "opacity": 0.9
            },
            {
                "zoom": 5,
                "opacity": 0.9
            },
            {
                "zoom": 6,
                "opacity": 0.9
            },
            {
                "zoom": 7,
                "opacity": 0.9
            },
            {
                "zoom": 8,
                "opacity": 0.9
            },
            {
                "zoom": 9,
                "opacity": 0.9
            },
            {
                "zoom": 10,
                "opacity": 0.9
            },
            {
                "zoom": 11,
                "opacity": 0.9
            },
            {
                "zoom": 12,
                "opacity": 0.9
            },
            {
                "zoom": 13,
                "opacity": 0.9
            },
            {
                "zoom": 14,
                "opacity": 0.9
            },
            {
                "zoom": 15,
                "opacity": 0.9
            },
            {
                "zoom": 16,
                "opacity": 0.9
            },
            {
                "zoom": 17,
                "opacity": 1
            },
            {
                "zoom": 18,
                "opacity": 1
            },
            {
                "zoom": 19,
                "opacity": 1
            },
            {
                "zoom": 20,
                "opacity": 1
            },
            {
                "zoom": 21,
                "opacity": 1
            }
        ]
    },
    {
        "tags": "address",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "landscape",
        "elements": "label.text.fill",
        "stylers": [
            {
                "zoom": 0,
                "color": "#8f969e",
                "opacity": 1
            },
            {
                "zoom": 1,
                "color": "#8f969e",
                "opacity": 1
            },
            {
                "zoom": 2,
                "color": "#8f969e",
                "opacity": 1
            },
            {
                "zoom": 3,
                "color": "#8f969e",
                "opacity": 1
            },
            {
                "zoom": 4,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 5,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 6,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 7,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 8,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 9,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 10,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 11,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 12,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 13,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 14,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 15,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 16,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 17,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 18,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 19,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 20,
                "color": "#5f666d",
                "opacity": 0.5
            },
            {
                "zoom": 21,
                "color": "#5f666d",
                "opacity": 0.5
            }
        ]
    },
    {
        "tags": "landscape",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "zoom": 0,
                "opacity": 0.5
            },
            {
                "zoom": 1,
                "opacity": 0.5
            },
            {
                "zoom": 2,
                "opacity": 0.5
            },
            {
                "zoom": 3,
                "opacity": 0.5
            },
            {
                "zoom": 4,
                "opacity": 0
            },
            {
                "zoom": 5,
                "opacity": 0
            },
            {
                "zoom": 6,
                "opacity": 0
            },
            {
                "zoom": 7,
                "opacity": 0
            },
            {
                "zoom": 8,
                "opacity": 0
            },
            {
                "zoom": 9,
                "opacity": 0
            },
            {
                "zoom": 10,
                "opacity": 0
            },
            {
                "zoom": 11,
                "opacity": 0
            },
            {
                "zoom": 12,
                "opacity": 0
            },
            {
                "zoom": 13,
                "opacity": 0
            },
            {
                "zoom": 14,
                "opacity": 0
            },
            {
                "zoom": 15,
                "opacity": 0
            },
            {
                "zoom": 16,
                "opacity": 0
            },
            {
                "zoom": 17,
                "opacity": 0
            },
            {
                "zoom": 18,
                "opacity": 0
            },
            {
                "zoom": 19,
                "opacity": 0
            },
            {
                "zoom": 20,
                "opacity": 0
            },
            {
                "zoom": 21,
                "opacity": 0
            }
        ]
    },
    {
        "tags": "water",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#5e6871"
            },
            {
                "opacity": 0.8
            }
        ]
    },
    {
        "tags": "water",
        "elements": "label.text.outline",
        "types": "polyline",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "opacity": 0.2
            }
        ]
    },
    {
        "tags": {
            "any": "road_1",
            "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "zoom": 0,
                "scale": 0
            },
            {
                "zoom": 1,
                "scale": 0
            },
            {
                "zoom": 2,
                "scale": 0
            },
            {
                "zoom": 3,
                "scale": 0
            },
            {
                "zoom": 4,
                "scale": 0
            },
            {
                "zoom": 5,
                "scale": 0
            },
            {
                "zoom": 6,
                "scale": 3.3
            },
            {
                "zoom": 7,
                "scale": 3.55
            },
            {
                "zoom": 8,
                "scale": 3.92
            },
            {
                "zoom": 9,
                "scale": 4.44
            },
            {
                "zoom": 10,
                "scale": 4.01
            },
            {
                "zoom": 11,
                "scale": 3.39
            },
            {
                "zoom": 12,
                "scale": 2.94
            },
            {
                "zoom": 13,
                "scale": 2.53
            },
            {
                "zoom": 14,
                "scale": 2.26
            },
            {
                "zoom": 15,
                "scale": 2.11
            },
            {
                "zoom": 16,
                "scale": 2.07
            },
            {
                "zoom": 17,
                "scale": 1.64
            },
            {
                "zoom": 18,
                "scale": 1.35
            },
            {
                "zoom": 19,
                "scale": 1.16
            },
            {
                "zoom": 20,
                "scale": 1.05
            },
            {
                "zoom": 21,
                "scale": 1
            }
        ]
    },
    {
        "tags": {
            "any": "road_1"
        },
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#c8ccd0"
            },
            {
                "zoom": 0,
                "scale": 1
            },
            {
                "zoom": 1,
                "scale": 1
            },
            {
                "zoom": 2,
                "scale": 1
            },
            {
                "zoom": 3,
                "scale": 1
            },
            {
                "zoom": 4,
                "scale": 1
            },
            {
                "zoom": 5,
                "scale": 1
            },
            {
                "zoom": 6,
                "scale": 2.18
            },
            {
                "zoom": 7,
                "scale": 2.18
            },
            {
                "zoom": 8,
                "scale": 2.25
            },
            {
                "zoom": 9,
                "scale": 2.4
            },
            {
                "zoom": 10,
                "scale": 2.4
            },
            {
                "zoom": 11,
                "scale": 2.26
            },
            {
                "zoom": 12,
                "scale": 2.15
            },
            {
                "zoom": 13,
                "scale": 2
            },
            {
                "zoom": 14,
                "scale": 1.9
            },
            {
                "zoom": 15,
                "scale": 1.86
            },
            {
                "zoom": 16,
                "scale": 1.88
            },
            {
                "zoom": 17,
                "scale": 1.53
            },
            {
                "zoom": 18,
                "scale": 1.28
            },
            {
                "zoom": 19,
                "scale": 1.11
            },
            {
                "zoom": 20,
                "scale": 1.01
            },
            {
                "zoom": 21,
                "scale": 0.96
            }
        ]
    },
    {
        "tags": {
            "any": "road_2",
            "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "zoom": 0,
                "scale": 0
            },
            {
                "zoom": 1,
                "scale": 0
            },
            {
                "zoom": 2,
                "scale": 0
            },
            {
                "zoom": 3,
                "scale": 0
            },
            {
                "zoom": 4,
                "scale": 0
            },
            {
                "zoom": 5,
                "scale": 0
            },
            {
                "zoom": 6,
                "scale": 3.3
            },
            {
                "zoom": 7,
                "scale": 3.55
            },
            {
                "zoom": 8,
                "scale": 3.92
            },
            {
                "zoom": 9,
                "scale": 4.44
            },
            {
                "zoom": 10,
                "scale": 4.01
            },
            {
                "zoom": 11,
                "scale": 3.39
            },
            {
                "zoom": 12,
                "scale": 2.94
            },
            {
                "zoom": 13,
                "scale": 2.53
            },
            {
                "zoom": 14,
                "scale": 2.26
            },
            {
                "zoom": 15,
                "scale": 2.11
            },
            {
                "zoom": 16,
                "scale": 2.07
            },
            {
                "zoom": 17,
                "scale": 1.64
            },
            {
                "zoom": 18,
                "scale": 1.35
            },
            {
                "zoom": 19,
                "scale": 1.16
            },
            {
                "zoom": 20,
                "scale": 1.05
            },
            {
                "zoom": 21,
                "scale": 1
            }
        ]
    },
    {
        "tags": {
            "any": "road_2"
        },
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#c8ccd0"
            },
            {
                "zoom": 0,
                "scale": 1
            },
            {
                "zoom": 1,
                "scale": 1
            },
            {
                "zoom": 2,
                "scale": 1
            },
            {
                "zoom": 3,
                "scale": 1
            },
            {
                "zoom": 4,
                "scale": 1
            },
            {
                "zoom": 5,
                "scale": 1
            },
            {
                "zoom": 6,
                "scale": 2.18
            },
            {
                "zoom": 7,
                "scale": 2.18
            },
            {
                "zoom": 8,
                "scale": 2.25
            },
            {
                "zoom": 9,
                "scale": 2.4
            },
            {
                "zoom": 10,
                "scale": 2.4
            },
            {
                "zoom": 11,
                "scale": 2.26
            },
            {
                "zoom": 12,
                "scale": 2.15
            },
            {
                "zoom": 13,
                "scale": 2
            },
            {
                "zoom": 14,
                "scale": 1.9
            },
            {
                "zoom": 15,
                "scale": 1.86
            },
            {
                "zoom": 16,
                "scale": 1.88
            },
            {
                "zoom": 17,
                "scale": 1.53
            },
            {
                "zoom": 18,
                "scale": 1.28
            },
            {
                "zoom": 19,
                "scale": 1.11
            },
            {
                "zoom": 20,
                "scale": 1.01
            },
            {
                "zoom": 21,
                "scale": 0.96
            }
        ]
    },
    {
        "tags": {
            "any": "road_3",
            "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "zoom": 0,
                "scale": 0
            },
            {
                "zoom": 1,
                "scale": 0
            },
            {
                "zoom": 2,
                "scale": 0
            },
            {
                "zoom": 3,
                "scale": 0
            },
            {
                "zoom": 4,
                "scale": 0
            },
            {
                "zoom": 5,
                "scale": 0
            },
            {
                "zoom": 6,
                "scale": 0
            },
            {
                "zoom": 7,
                "scale": 0
            },
            {
                "zoom": 8,
                "scale": 0
            },
            {
                "zoom": 9,
                "scale": 2.79
            },
            {
                "zoom": 10,
                "scale": 2.91
            },
            {
                "zoom": 11,
                "scale": 1.86
            },
            {
                "zoom": 12,
                "scale": 1.86
            },
            {
                "zoom": 13,
                "scale": 1.54
            },
            {
                "zoom": 14,
                "scale": 1.32
            },
            {
                "zoom": 15,
                "scale": 1.2
            },
            {
                "zoom": 16,
                "scale": 1.15
            },
            {
                "zoom": 17,
                "scale": 1.01
            },
            {
                "zoom": 18,
                "scale": 0.93
            },
            {
                "zoom": 19,
                "scale": 0.91
            },
            {
                "zoom": 20,
                "scale": 0.93
            },
            {
                "zoom": 21,
                "scale": 1
            }
        ]
    },
    {
        "tags": {
            "any": "road_3"
        },
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#c8ccd0"
            },
            {
                "zoom": 0,
                "scale": 1.14
            },
            {
                "zoom": 1,
                "scale": 1.14
            },
            {
                "zoom": 2,
                "scale": 1.14
            },
            {
                "zoom": 3,
                "scale": 1.14
            },
            {
                "zoom": 4,
                "scale": 1.14
            },
            {
                "zoom": 5,
                "scale": 1.14
            },
            {
                "zoom": 6,
                "scale": 1.14
            },
            {
                "zoom": 7,
                "scale": 1.14
            },
            {
                "zoom": 8,
                "scale": 0.92
            },
            {
                "zoom": 9,
                "scale": 3.01
            },
            {
                "zoom": 10,
                "scale": 1.95
            },
            {
                "zoom": 11,
                "scale": 1.46
            },
            {
                "zoom": 12,
                "scale": 1.52
            },
            {
                "zoom": 13,
                "scale": 1.35
            },
            {
                "zoom": 14,
                "scale": 1.22
            },
            {
                "zoom": 15,
                "scale": 1.14
            },
            {
                "zoom": 16,
                "scale": 1.11
            },
            {
                "zoom": 17,
                "scale": 0.98
            },
            {
                "zoom": 18,
                "scale": 0.9
            },
            {
                "zoom": 19,
                "scale": 0.88
            },
            {
                "zoom": 20,
                "scale": 0.9
            },
            {
                "zoom": 21,
                "scale": 0.96
            }
        ]
    },
    {
        "tags": {
            "any": "road_4",
            "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "zoom": 0,
                "scale": 0
            },
            {
                "zoom": 1,
                "scale": 0
            },
            {
                "zoom": 2,
                "scale": 0
            },
            {
                "zoom": 3,
                "scale": 0
            },
            {
                "zoom": 4,
                "scale": 0
            },
            {
                "zoom": 5,
                "scale": 0
            },
            {
                "zoom": 6,
                "scale": 0
            },
            {
                "zoom": 7,
                "scale": 0
            },
            {
                "zoom": 8,
                "scale": 0
            },
            {
                "zoom": 9,
                "scale": 0
            },
            {
                "zoom": 10,
                "scale": 1.88
            },
            {
                "zoom": 11,
                "scale": 1.4
            },
            {
                "zoom": 12,
                "scale": 1.57
            },
            {
                "zoom": 13,
                "scale": 1.32
            },
            {
                "zoom": 14,
                "scale": 1.16
            },
            {
                "zoom": 15,
                "scale": 1.07
            },
            {
                "zoom": 16,
                "scale": 1.28
            },
            {
                "zoom": 17,
                "scale": 1.1
            },
            {
                "zoom": 18,
                "scale": 0.99
            },
            {
                "zoom": 19,
                "scale": 0.94
            },
            {
                "zoom": 20,
                "scale": 0.95
            },
            {
                "zoom": 21,
                "scale": 1
            }
        ]
    },
    {
        "tags": {
            "any": "road_4"
        },
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#c8ccd0"
            },
            {
                "zoom": 0,
                "scale": 1
            },
            {
                "zoom": 1,
                "scale": 1
            },
            {
                "zoom": 2,
                "scale": 1
            },
            {
                "zoom": 3,
                "scale": 1
            },
            {
                "zoom": 4,
                "scale": 1
            },
            {
                "zoom": 5,
                "scale": 1
            },
            {
                "zoom": 6,
                "scale": 1
            },
            {
                "zoom": 7,
                "scale": 1
            },
            {
                "zoom": 8,
                "scale": 1
            },
            {
                "zoom": 9,
                "scale": 0.8
            },
            {
                "zoom": 10,
                "scale": 1.36
            },
            {
                "zoom": 11,
                "scale": 1.15
            },
            {
                "zoom": 12,
                "scale": 1.3
            },
            {
                "zoom": 13,
                "scale": 1.17
            },
            {
                "zoom": 14,
                "scale": 1.08
            },
            {
                "zoom": 15,
                "scale": 1.03
            },
            {
                "zoom": 16,
                "scale": 1.21
            },
            {
                "zoom": 17,
                "scale": 1.05
            },
            {
                "zoom": 18,
                "scale": 0.96
            },
            {
                "zoom": 19,
                "scale": 0.91
            },
            {
                "zoom": 20,
                "scale": 0.91
            },
            {
                "zoom": 21,
                "scale": 0.96
            }
        ]
    },
    {
        "tags": {
            "any": "road_5",
            "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "zoom": 0,
                "scale": 0
            },
            {
                "zoom": 1,
                "scale": 0
            },
            {
                "zoom": 2,
                "scale": 0
            },
            {
                "zoom": 3,
                "scale": 0
            },
            {
                "zoom": 4,
                "scale": 0
            },
            {
                "zoom": 5,
                "scale": 0
            },
            {
                "zoom": 6,
                "scale": 0
            },
            {
                "zoom": 7,
                "scale": 0
            },
            {
                "zoom": 8,
                "scale": 0
            },
            {
                "zoom": 9,
                "scale": 0
            },
            {
                "zoom": 10,
                "scale": 0
            },
            {
                "zoom": 11,
                "scale": 0
            },
            {
                "zoom": 12,
                "scale": 1.39
            },
            {
                "zoom": 13,
                "scale": 1.05
            },
            {
                "zoom": 14,
                "scale": 0.9
            },
            {
                "zoom": 15,
                "scale": 1.05
            },
            {
                "zoom": 16,
                "scale": 1.22
            },
            {
                "zoom": 17,
                "scale": 1.04
            },
            {
                "zoom": 18,
                "scale": 0.94
            },
            {
                "zoom": 19,
                "scale": 0.91
            },
            {
                "zoom": 20,
                "scale": 0.93
            },
            {
                "zoom": 21,
                "scale": 1
            }
        ]
    },
    {
        "tags": {
            "any": "road_5"
        },
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#c8ccd0"
            },
            {
                "zoom": 0,
                "scale": 1
            },
            {
                "zoom": 1,
                "scale": 1
            },
            {
                "zoom": 2,
                "scale": 1
            },
            {
                "zoom": 3,
                "scale": 1
            },
            {
                "zoom": 4,
                "scale": 1
            },
            {
                "zoom": 5,
                "scale": 1
            },
            {
                "zoom": 6,
                "scale": 1
            },
            {
                "zoom": 7,
                "scale": 1
            },
            {
                "zoom": 8,
                "scale": 1
            },
            {
                "zoom": 9,
                "scale": 1
            },
            {
                "zoom": 10,
                "scale": 1
            },
            {
                "zoom": 11,
                "scale": 0.44
            },
            {
                "zoom": 12,
                "scale": 1.15
            },
            {
                "zoom": 13,
                "scale": 0.97
            },
            {
                "zoom": 14,
                "scale": 0.87
            },
            {
                "zoom": 15,
                "scale": 1.01
            },
            {
                "zoom": 16,
                "scale": 1.16
            },
            {
                "zoom": 17,
                "scale": 1
            },
            {
                "zoom": 18,
                "scale": 0.91
            },
            {
                "zoom": 19,
                "scale": 0.88
            },
            {
                "zoom": 20,
                "scale": 0.89
            },
            {
                "zoom": 21,
                "scale": 0.96
            }
        ]
    },
    {
        "tags": {
            "any": "road_6",
            "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "zoom": 0,
                "scale": 0
            },
            {
                "zoom": 1,
                "scale": 0
            },
            {
                "zoom": 2,
                "scale": 0
            },
            {
                "zoom": 3,
                "scale": 0
            },
            {
                "zoom": 4,
                "scale": 0
            },
            {
                "zoom": 5,
                "scale": 0
            },
            {
                "zoom": 6,
                "scale": 0
            },
            {
                "zoom": 7,
                "scale": 0
            },
            {
                "zoom": 8,
                "scale": 0
            },
            {
                "zoom": 9,
                "scale": 0
            },
            {
                "zoom": 10,
                "scale": 0
            },
            {
                "zoom": 11,
                "scale": 0
            },
            {
                "zoom": 12,
                "scale": 0
            },
            {
                "zoom": 13,
                "scale": 2.5
            },
            {
                "zoom": 14,
                "scale": 1.41
            },
            {
                "zoom": 15,
                "scale": 1.39
            },
            {
                "zoom": 16,
                "scale": 1.45
            },
            {
                "zoom": 17,
                "scale": 1.16
            },
            {
                "zoom": 18,
                "scale": 1
            },
            {
                "zoom": 19,
                "scale": 0.94
            },
            {
                "zoom": 20,
                "scale": 0.94
            },
            {
                "zoom": 21,
                "scale": 1
            }
        ]
    },
    {
        "tags": {
            "any": "road_6"
        },
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#c8ccd0"
            },
            {
                "zoom": 0,
                "scale": 1
            },
            {
                "zoom": 1,
                "scale": 1
            },
            {
                "zoom": 2,
                "scale": 1
            },
            {
                "zoom": 3,
                "scale": 1
            },
            {
                "zoom": 4,
                "scale": 1
            },
            {
                "zoom": 5,
                "scale": 1
            },
            {
                "zoom": 6,
                "scale": 1
            },
            {
                "zoom": 7,
                "scale": 1
            },
            {
                "zoom": 8,
                "scale": 1
            },
            {
                "zoom": 9,
                "scale": 1
            },
            {
                "zoom": 10,
                "scale": 1
            },
            {
                "zoom": 11,
                "scale": 1
            },
            {
                "zoom": 12,
                "scale": 1
            },
            {
                "zoom": 13,
                "scale": 1.65
            },
            {
                "zoom": 14,
                "scale": 1.21
            },
            {
                "zoom": 15,
                "scale": 1.26
            },
            {
                "zoom": 16,
                "scale": 1.35
            },
            {
                "zoom": 17,
                "scale": 1.1
            },
            {
                "zoom": 18,
                "scale": 0.97
            },
            {
                "zoom": 19,
                "scale": 0.91
            },
            {
                "zoom": 20,
                "scale": 0.91
            },
            {
                "zoom": 21,
                "scale": 0.96
            }
        ]
    },
    {
        "tags": {
            "any": "road_7",
            "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "zoom": 0,
                "scale": 0
            },
            {
                "zoom": 1,
                "scale": 0
            },
            {
                "zoom": 2,
                "scale": 0
            },
            {
                "zoom": 3,
                "scale": 0
            },
            {
                "zoom": 4,
                "scale": 0
            },
            {
                "zoom": 5,
                "scale": 0
            },
            {
                "zoom": 6,
                "scale": 0
            },
            {
                "zoom": 7,
                "scale": 0
            },
            {
                "zoom": 8,
                "scale": 0
            },
            {
                "zoom": 9,
                "scale": 0
            },
            {
                "zoom": 10,
                "scale": 0
            },
            {
                "zoom": 11,
                "scale": 0
            },
            {
                "zoom": 12,
                "scale": 0
            },
            {
                "zoom": 13,
                "scale": 0
            },
            {
                "zoom": 14,
                "scale": 1
            },
            {
                "zoom": 15,
                "scale": 0.87
            },
            {
                "zoom": 16,
                "scale": 0.97
            },
            {
                "zoom": 17,
                "scale": 0.89
            },
            {
                "zoom": 18,
                "scale": 0.86
            },
            {
                "zoom": 19,
                "scale": 0.88
            },
            {
                "zoom": 20,
                "scale": 0.92
            },
            {
                "zoom": 21,
                "scale": 1
            }
        ]
    },
    {
        "tags": {
            "any": "road_7"
        },
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#c8ccd0"
            },
            {
                "zoom": 0,
                "scale": 1
            },
            {
                "zoom": 1,
                "scale": 1
            },
            {
                "zoom": 2,
                "scale": 1
            },
            {
                "zoom": 3,
                "scale": 1
            },
            {
                "zoom": 4,
                "scale": 1
            },
            {
                "zoom": 5,
                "scale": 1
            },
            {
                "zoom": 6,
                "scale": 1
            },
            {
                "zoom": 7,
                "scale": 1
            },
            {
                "zoom": 8,
                "scale": 1
            },
            {
                "zoom": 9,
                "scale": 1
            },
            {
                "zoom": 10,
                "scale": 1
            },
            {
                "zoom": 11,
                "scale": 1
            },
            {
                "zoom": 12,
                "scale": 1
            },
            {
                "zoom": 13,
                "scale": 1
            },
            {
                "zoom": 14,
                "scale": 0.93
            },
            {
                "zoom": 15,
                "scale": 0.85
            },
            {
                "zoom": 16,
                "scale": 0.94
            },
            {
                "zoom": 17,
                "scale": 0.86
            },
            {
                "zoom": 18,
                "scale": 0.83
            },
            {
                "zoom": 19,
                "scale": 0.84
            },
            {
                "zoom": 20,
                "scale": 0.88
            },
            {
                "zoom": 21,
                "scale": 0.95
            }
        ]
    },
    {
        "tags": {
            "any": "road_minor",
            "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "zoom": 0,
                "scale": 0
            },
            {
                "zoom": 1,
                "scale": 0
            },
            {
                "zoom": 2,
                "scale": 0
            },
            {
                "zoom": 3,
                "scale": 0
            },
            {
                "zoom": 4,
                "scale": 0
            },
            {
                "zoom": 5,
                "scale": 0
            },
            {
                "zoom": 6,
                "scale": 0
            },
            {
                "zoom": 7,
                "scale": 0
            },
            {
                "zoom": 8,
                "scale": 0
            },
            {
                "zoom": 9,
                "scale": 0
            },
            {
                "zoom": 10,
                "scale": 0
            },
            {
                "zoom": 11,
                "scale": 0
            },
            {
                "zoom": 12,
                "scale": 0
            },
            {
                "zoom": 13,
                "scale": 0
            },
            {
                "zoom": 14,
                "scale": 0
            },
            {
                "zoom": 15,
                "scale": 0
            },
            {
                "zoom": 16,
                "scale": 1
            },
            {
                "zoom": 17,
                "scale": 1
            },
            {
                "zoom": 18,
                "scale": 1
            },
            {
                "zoom": 19,
                "scale": 1
            },
            {
                "zoom": 20,
                "scale": 1
            },
            {
                "zoom": 21,
                "scale": 1
            }
        ]
    },
    {
        "tags": {
            "any": "road_minor"
        },
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#c8ccd0"
            },
            {
                "zoom": 0,
                "scale": 0.29
            },
            {
                "zoom": 1,
                "scale": 0.29
            },
            {
                "zoom": 2,
                "scale": 0.29
            },
            {
                "zoom": 3,
                "scale": 0.29
            },
            {
                "zoom": 4,
                "scale": 0.29
            },
            {
                "zoom": 5,
                "scale": 0.29
            },
            {
                "zoom": 6,
                "scale": 0.29
            },
            {
                "zoom": 7,
                "scale": 0.29
            },
            {
                "zoom": 8,
                "scale": 0.29
            },
            {
                "zoom": 9,
                "scale": 0.29
            },
            {
                "zoom": 10,
                "scale": 0.29
            },
            {
                "zoom": 11,
                "scale": 0.29
            },
            {
                "zoom": 12,
                "scale": 0.29
            },
            {
                "zoom": 13,
                "scale": 0.29
            },
            {
                "zoom": 14,
                "scale": 0.29
            },
            {
                "zoom": 15,
                "scale": 0.29
            },
            {
                "zoom": 16,
                "scale": 1
            },
            {
                "zoom": 17,
                "scale": 0.9
            },
            {
                "zoom": 18,
                "scale": 0.91
            },
            {
                "zoom": 19,
                "scale": 0.92
            },
            {
                "zoom": 20,
                "scale": 0.93
            },
            {
                "zoom": 21,
                "scale": 0.95
            }
        ]
    },
    {
        "tags": {
            "any": "road_unclassified",
            "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "zoom": 0,
                "scale": 0
            },
            {
                "zoom": 1,
                "scale": 0
            },
            {
                "zoom": 2,
                "scale": 0
            },
            {
                "zoom": 3,
                "scale": 0
            },
            {
                "zoom": 4,
                "scale": 0
            },
            {
                "zoom": 5,
                "scale": 0
            },
            {
                "zoom": 6,
                "scale": 0
            },
            {
                "zoom": 7,
                "scale": 0
            },
            {
                "zoom": 8,
                "scale": 0
            },
            {
                "zoom": 9,
                "scale": 0
            },
            {
                "zoom": 10,
                "scale": 0
            },
            {
                "zoom": 11,
                "scale": 0
            },
            {
                "zoom": 12,
                "scale": 0
            },
            {
                "zoom": 13,
                "scale": 0
            },
            {
                "zoom": 14,
                "scale": 0
            },
            {
                "zoom": 15,
                "scale": 0
            },
            {
                "zoom": 16,
                "scale": 1
            },
            {
                "zoom": 17,
                "scale": 1
            },
            {
                "zoom": 18,
                "scale": 1
            },
            {
                "zoom": 19,
                "scale": 1
            },
            {
                "zoom": 20,
                "scale": 1
            },
            {
                "zoom": 21,
                "scale": 1
            }
        ]
    },
    {
        "tags": {
            "any": "road_unclassified"
        },
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#c8ccd0"
            },
            {
                "zoom": 0,
                "scale": 0.29
            },
            {
                "zoom": 1,
                "scale": 0.29
            },
            {
                "zoom": 2,
                "scale": 0.29
            },
            {
                "zoom": 3,
                "scale": 0.29
            },
            {
                "zoom": 4,
                "scale": 0.29
            },
            {
                "zoom": 5,
                "scale": 0.29
            },
            {
                "zoom": 6,
                "scale": 0.29
            },
            {
                "zoom": 7,
                "scale": 0.29
            },
            {
                "zoom": 8,
                "scale": 0.29
            },
            {
                "zoom": 9,
                "scale": 0.29
            },
            {
                "zoom": 10,
                "scale": 0.29
            },
            {
                "zoom": 11,
                "scale": 0.29
            },
            {
                "zoom": 12,
                "scale": 0.29
            },
            {
                "zoom": 13,
                "scale": 0.29
            },
            {
                "zoom": 14,
                "scale": 0.29
            },
            {
                "zoom": 15,
                "scale": 0.29
            },
            {
                "zoom": 16,
                "scale": 1
            },
            {
                "zoom": 17,
                "scale": 0.9
            },
            {
                "zoom": 18,
                "scale": 0.91
            },
            {
                "zoom": 19,
                "scale": 0.92
            },
            {
                "zoom": 20,
                "scale": 0.93
            },
            {
                "zoom": 21,
                "scale": 0.95
            }
        ]
    },
    {
        "tags": {
            "all": "is_tunnel",
            "none": "path"
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "zoom": 0,
                "color": "#dcdee0"
            },
            {
                "zoom": 1,
                "color": "#dcdee0"
            },
            {
                "zoom": 2,
                "color": "#dcdee0"
            },
            {
                "zoom": 3,
                "color": "#dcdee0"
            },
            {
                "zoom": 4,
                "color": "#dcdee0"
            },
            {
                "zoom": 5,
                "color": "#dcdee0"
            },
            {
                "zoom": 6,
                "color": "#dcdee0"
            },
            {
                "zoom": 7,
                "color": "#dcdee0"
            },
            {
                "zoom": 8,
                "color": "#dcdee0"
            },
            {
                "zoom": 9,
                "color": "#dcdee0"
            },
            {
                "zoom": 10,
                "color": "#dcdee0"
            },
            {
                "zoom": 11,
                "color": "#dcdee0"
            },
            {
                "zoom": 12,
                "color": "#dcdee0"
            },
            {
                "zoom": 13,
                "color": "#dcdee0"
            },
            {
                "zoom": 14,
                "color": "#F1F1F1"
            },
            {
                "zoom": 15,
                "color": "#e6e8ea"
            },
            {
                "zoom": 16,
                "color": "#e7e9eb"
            },
            {
                "zoom": 17,
                "color": "#e8eaeb"
            },
            {
                "zoom": 18,
                "color": "#e9eaec"
            },
            {
                "zoom": 19,
                "color": "#eaebed"
            },
            {
                "zoom": 20,
                "color": "#ebeced"
            },
            {
                "zoom": 21,
                "color": "#FEFEFE"
            }
        ]
    },
    {
        "tags": {
            "all": "path",
            "none": "is_tunnel"
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#c8ccd0"
            }
        ]
    },
    {
        "tags": {
            "all": "path",
            "none": "is_tunnel"
        },
        "elements": "geometry.outline",
        "stylers": [
            {
                "opacity": 0.7
            },
            {
                "zoom": 0,
                "color": "#F1F1F1"
            },
            {
                "zoom": 1,
                "color": "#F1F1F1"
            },
            {
                "zoom": 2,
                "color": "#F1F1F1"
            },
            {
                "zoom": 3,
                "color": "#F1F1F1"
            },
            {
                "zoom": 4,
                "color": "#F1F1F1"
            },
            {
                "zoom": 5,
                "color": "#F1F1F1"
            },
            {
                "zoom": 6,
                "color": "#F1F1F1"
            },
            {
                "zoom": 7,
                "color": "#F1F1F1"
            },
            {
                "zoom": 8,
                "color": "#F1F1F1"
            },
            {
                "zoom": 9,
                "color": "#F1F1F1"
            },
            {
                "zoom": 10,
                "color": "#F1F1F1"
            },
            {
                "zoom": 11,
                "color": "#F1F1F1"
            },
            {
                "zoom": 12,
                "color": "#F1F1F1"
            },
            {
                "zoom": 13,
                "color": "#F1F1F1"
            },
            {
                "zoom": 14,
                "color": "#e6e8e9"
            },
            {
                "zoom": 15,
                "color": "#FEFEFE"
            },
            {
                "zoom": 16,
                "color": "#edeeef"
            },
            {
                "zoom": 17,
                "color": "#eeeff0"
            },
            {
                "zoom": 18,
                "color": "#eeeff0"
            },
            {
                "zoom": 19,
                "color": "#eff0f1"
            },
            {
                "zoom": 20,
                "color": "#f0f1f2"
            },
            {
                "zoom": 21,
                "color": "#f1f2f3"
            }
        ]
    },
    {
        "tags": "road_construction",
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "tags": "road_construction",
        "elements": "geometry.outline",
        "stylers": [
            {
                "zoom": 0,
                "color": "#e4e6e8"
            },
            {
                "zoom": 1,
                "color": "#e4e6e8"
            },
            {
                "zoom": 2,
                "color": "#e4e6e8"
            },
            {
                "zoom": 3,
                "color": "#e4e6e8"
            },
            {
                "zoom": 4,
                "color": "#e4e6e8"
            },
            {
                "zoom": 5,
                "color": "#e4e6e8"
            },
            {
                "zoom": 6,
                "color": "#e4e6e8"
            },
            {
                "zoom": 7,
                "color": "#e4e6e8"
            },
            {
                "zoom": 8,
                "color": "#e4e6e8"
            },
            {
                "zoom": 9,
                "color": "#e4e6e8"
            },
            {
                "zoom": 10,
                "color": "#e4e6e8"
            },
            {
                "zoom": 11,
                "color": "#e4e6e8"
            },
            {
                "zoom": 12,
                "color": "#e4e6e8"
            },
            {
                "zoom": 13,
                "color": "#e4e6e8"
            },
            {
                "zoom": 14,
                "color": "#c8ccd0"
            },
            {
                "zoom": 15,
                "color": "#e4e6e8"
            },
            {
                "zoom": 16,
                "color": "#e8eaec"
            },
            {
                "zoom": 17,
                "color": "#edeef0"
            },
            {
                "zoom": 18,
                "color": "#f1f2f3"
            },
            {
                "zoom": 19,
                "color": "#f6f7f7"
            },
            {
                "zoom": 20,
                "color": "#fafbfb"
            },
            {
                "zoom": 21,
                "color": "#ffffff"
            }
        ]
    },
    {
        "tags": {
            "any": "ferry"
        },
        "stylers": [
            {
                "color": "#919ba4"
            }
        ]
    },
    {
        "tags": "transit_location",
        "elements": "label.icon",
        "stylers": [
            {
                "saturation": -1
            },
            {
                "zoom": 0,
                "opacity": 0
            },
            {
                "zoom": 1,
                "opacity": 0
            },
            {
                "zoom": 2,
                "opacity": 0
            },
            {
                "zoom": 3,
                "opacity": 0
            },
            {
                "zoom": 4,
                "opacity": 0
            },
            {
                "zoom": 5,
                "opacity": 0
            },
            {
                "zoom": 6,
                "opacity": 0
            },
            {
                "zoom": 7,
                "opacity": 0
            },
            {
                "zoom": 8,
                "opacity": 0
            },
            {
                "zoom": 9,
                "opacity": 0
            },
            {
                "zoom": 10,
                "opacity": 0
            },
            {
                "zoom": 11,
                "opacity": 0
            },
            {
                "zoom": 12,
                "opacity": 0
            },
            {
                "zoom": 13,
                "opacity": 1
            },
            {
                "zoom": 14,
                "opacity": 1
            },
            {
                "zoom": 15,
                "opacity": 1
            },
            {
                "zoom": 16,
                "opacity": 1
            },
            {
                "zoom": 17,
                "opacity": 1
            },
            {
                "zoom": 18,
                "opacity": 1
            },
            {
                "zoom": 19,
                "opacity": 1
            },
            {
                "zoom": 20,
                "opacity": 1
            },
            {
                "zoom": 21,
                "opacity": 1
            }
        ]
    },
    {
        "tags": "transit_location",
        "elements": "label.text",
        "stylers": [
            {
                "zoom": 0,
                "opacity": 0
            },
            {
                "zoom": 1,
                "opacity": 0
            },
            {
                "zoom": 2,
                "opacity": 0
            },
            {
                "zoom": 3,
                "opacity": 0
            },
            {
                "zoom": 4,
                "opacity": 0
            },
            {
                "zoom": 5,
                "opacity": 0
            },
            {
                "zoom": 6,
                "opacity": 0
            },
            {
                "zoom": 7,
                "opacity": 0
            },
            {
                "zoom": 8,
                "opacity": 0
            },
            {
                "zoom": 9,
                "opacity": 0
            },
            {
                "zoom": 10,
                "opacity": 0
            },
            {
                "zoom": 11,
                "opacity": 0
            },
            {
                "zoom": 12,
                "opacity": 0
            },
            {
                "zoom": 13,
                "opacity": 1
            },
            {
                "zoom": 14,
                "opacity": 1
            },
            {
                "zoom": 15,
                "opacity": 1
            },
            {
                "zoom": 16,
                "opacity": 1
            },
            {
                "zoom": 17,
                "opacity": 1
            },
            {
                "zoom": 18,
                "opacity": 1
            },
            {
                "zoom": 19,
                "opacity": 1
            },
            {
                "zoom": 20,
                "opacity": 1
            },
            {
                "zoom": 21,
                "opacity": 1
            }
        ]
    },
    {
        "tags": "transit_location",
        "elements": "label.text.fill",
        "stylers": [
            {
                "color": "#6c8993"
            }
        ]
    },
    {
        "tags": "transit_location",
        "elements": "label.text.outline",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "tags": "transit_schema",
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#6c8993"
            },
            {
                "scale": 0.7
            },
            {
                "zoom": 0,
                "opacity": 0.6
            },
            {
                "zoom": 1,
                "opacity": 0.6
            },
            {
                "zoom": 2,
                "opacity": 0.6
            },
            {
                "zoom": 3,
                "opacity": 0.6
            },
            {
                "zoom": 4,
                "opacity": 0.6
            },
            {
                "zoom": 5,
                "opacity": 0.6
            },
            {
                "zoom": 6,
                "opacity": 0.6
            },
            {
                "zoom": 7,
                "opacity": 0.6
            },
            {
                "zoom": 8,
                "opacity": 0.6
            },
            {
                "zoom": 9,
                "opacity": 0.6
            },
            {
                "zoom": 10,
                "opacity": 0.6
            },
            {
                "zoom": 11,
                "opacity": 0.6
            },
            {
                "zoom": 12,
                "opacity": 0.6
            },
            {
                "zoom": 13,
                "opacity": 0.6
            },
            {
                "zoom": 14,
                "opacity": 0.6
            },
            {
                "zoom": 15,
                "opacity": 0.5
            },
            {
                "zoom": 16,
                "opacity": 0.4
            },
            {
                "zoom": 17,
                "opacity": 0.4
            },
            {
                "zoom": 18,
                "opacity": 0.4
            },
            {
                "zoom": 19,
                "opacity": 0.4
            },
            {
                "zoom": 20,
                "opacity": 0.4
            },
            {
                "zoom": 21,
                "opacity": 0.4
            }
        ]
    },
    {
        "tags": "transit_schema",
        "elements": "geometry.outline",
        "stylers": [
            {
                "opacity": 0
            }
        ]
    },
    {
        "tags": "transit_line",
        "elements": "geometry.fill.pattern",
        "stylers": [
            {
                "color": "#949c9e"
            },
            {
                "zoom": 0,
                "opacity": 0
            },
            {
                "zoom": 1,
                "opacity": 0
            },
            {
                "zoom": 2,
                "opacity": 0
            },
            {
                "zoom": 3,
                "opacity": 0
            },
            {
                "zoom": 4,
                "opacity": 0
            },
            {
                "zoom": 5,
                "opacity": 0
            },
            {
                "zoom": 6,
                "opacity": 0
            },
            {
                "zoom": 7,
                "opacity": 0
            },
            {
                "zoom": 8,
                "opacity": 0
            },
            {
                "zoom": 9,
                "opacity": 0
            },
            {
                "zoom": 10,
                "opacity": 0
            },
            {
                "zoom": 11,
                "opacity": 0
            },
            {
                "zoom": 12,
                "opacity": 0
            },
            {
                "zoom": 13,
                "opacity": 1
            },
            {
                "zoom": 14,
                "opacity": 1
            },
            {
                "zoom": 15,
                "opacity": 1
            },
            {
                "zoom": 16,
                "opacity": 1
            },
            {
                "zoom": 17,
                "opacity": 1
            },
            {
                "zoom": 18,
                "opacity": 1
            },
            {
                "zoom": 19,
                "opacity": 1
            },
            {
                "zoom": 20,
                "opacity": 1
            },
            {
                "zoom": 21,
                "opacity": 1
            }
        ]
    },
    {
        "tags": "transit_line",
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#949c9e"
            },
            {
                "scale": 0.4
            },
            {
                "zoom": 0,
                "opacity": 0
            },
            {
                "zoom": 1,
                "opacity": 0
            },
            {
                "zoom": 2,
                "opacity": 0
            },
            {
                "zoom": 3,
                "opacity": 0
            },
            {
                "zoom": 4,
                "opacity": 0
            },
            {
                "zoom": 5,
                "opacity": 0
            },
            {
                "zoom": 6,
                "opacity": 0
            },
            {
                "zoom": 7,
                "opacity": 0
            },
            {
                "zoom": 8,
                "opacity": 0
            },
            {
                "zoom": 9,
                "opacity": 0
            },
            {
                "zoom": 10,
                "opacity": 0
            },
            {
                "zoom": 11,
                "opacity": 0
            },
            {
                "zoom": 12,
                "opacity": 0
            },
            {
                "zoom": 13,
                "opacity": 1
            },
            {
                "zoom": 14,
                "opacity": 1
            },
            {
                "zoom": 15,
                "opacity": 1
            },
            {
                "zoom": 16,
                "opacity": 1
            },
            {
                "zoom": 17,
                "opacity": 1
            },
            {
                "zoom": 18,
                "opacity": 1
            },
            {
                "zoom": 19,
                "opacity": 1
            },
            {
                "zoom": 20,
                "opacity": 1
            },
            {
                "zoom": 21,
                "opacity": 1
            }
        ]
    },
    {
        "tags": "water",
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#adb4bb"
            },
            {
                "zoom": 1,
                "color": "#adb4bb"
            },
            {
                "zoom": 2,
                "color": "#adb4bb"
            },
            {
                "zoom": 3,
                "color": "#adb4bb"
            },
            {
                "zoom": 4,
                "color": "#adb4bb"
            },
            {
                "zoom": 5,
                "color": "#adb4bb"
            },
            {
                "zoom": 6,
                "color": "#adb4bb"
            },
            {
                "zoom": 7,
                "color": "#adb4bb"
            },
            {
                "zoom": 8,
                "color": "#afb6bd"
            },
            {
                "zoom": 9,
                "color": "#b1b7be"
            },
            {
                "zoom": 10,
                "color": "#b3b9c0"
            },
            {
                "zoom": 11,
                "color": "#b4bac1"
            },
            {
                "zoom": 12,
                "color": "#b4bbc1"
            },
            {
                "zoom": 13,
                "color": "#b5bcc2"
            },
            {
                "zoom": 14,
                "color": "#b6bdc3"
            },
            {
                "zoom": 15,
                "color": "#b8bec4"
            },
            {
                "zoom": 16,
                "color": "#b9c0c5"
            },
            {
                "zoom": 17,
                "color": "#bbc1c6"
            },
            {
                "zoom": 18,
                "color": "#bcc2c8"
            },
            {
                "zoom": 19,
                "color": "#bec3c9"
            },
            {
                "zoom": 20,
                "color": "#bfc5ca"
            },
            {
                "zoom": 21,
                "color": "#c1c6cb"
            }
        ]
    },
    {
        "tags": "water",
        "elements": "geometry",
        "types": "polyline",
        "stylers": [
            {
                "zoom": 0,
                "opacity": 0.4
            },
            {
                "zoom": 1,
                "opacity": 0.4
            },
            {
                "zoom": 2,
                "opacity": 0.4
            },
            {
                "zoom": 3,
                "opacity": 0.4
            },
            {
                "zoom": 4,
                "opacity": 0.6
            },
            {
                "zoom": 5,
                "opacity": 0.8
            },
            {
                "zoom": 6,
                "opacity": 1
            },
            {
                "zoom": 7,
                "opacity": 1
            },
            {
                "zoom": 8,
                "opacity": 1
            },
            {
                "zoom": 9,
                "opacity": 1
            },
            {
                "zoom": 10,
                "opacity": 1
            },
            {
                "zoom": 11,
                "opacity": 1
            },
            {
                "zoom": 12,
                "opacity": 1
            },
            {
                "zoom": 13,
                "opacity": 1
            },
            {
                "zoom": 14,
                "opacity": 1
            },
            {
                "zoom": 15,
                "opacity": 1
            },
            {
                "zoom": 16,
                "opacity": 1
            },
            {
                "zoom": 17,
                "opacity": 1
            },
            {
                "zoom": 18,
                "opacity": 1
            },
            {
                "zoom": 19,
                "opacity": 1
            },
            {
                "zoom": 20,
                "opacity": 1
            },
            {
                "zoom": 21,
                "opacity": 1
            }
        ]
    },
    {
        "tags": "bathymetry",
        "elements": "geometry",
        "stylers": [
            {
                "hue": "#adb4bb"
            }
        ]
    },
    {
        "tags": {
            "any": [
                "industrial",
                "construction_site"
            ]
        },
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#dcdee0"
            },
            {
                "zoom": 1,
                "color": "#dcdee0"
            },
            {
                "zoom": 2,
                "color": "#dcdee0"
            },
            {
                "zoom": 3,
                "color": "#dcdee0"
            },
            {
                "zoom": 4,
                "color": "#dcdee0"
            },
            {
                "zoom": 5,
                "color": "#dcdee0"
            },
            {
                "zoom": 6,
                "color": "#dcdee0"
            },
            {
                "zoom": 7,
                "color": "#dcdee0"
            },
            {
                "zoom": 8,
                "color": "#dcdee0"
            },
            {
                "zoom": 9,
                "color": "#dcdee0"
            },
            {
                "zoom": 10,
                "color": "#dcdee0"
            },
            {
                "zoom": 11,
                "color": "#dcdee0"
            },
            {
                "zoom": 12,
                "color": "#dcdee0"
            },
            {
                "zoom": 13,
                "color": "#dcdee0"
            },
            {
                "zoom": 14,
                "color": "#F1F1F1"
            },
            {
                "zoom": 15,
                "color": "#e7e8ea"
            },
            {
                "zoom": 16,
                "color": "#e8e9eb"
            },
            {
                "zoom": 17,
                "color": "#e9eaeb"
            },
            {
                "zoom": 18,
                "color": "#e9eaec"
            },
            {
                "zoom": 19,
                "color": "#eaebed"
            },
            {
                "zoom": 20,
                "color": "#ebeced"
            },
            {
                "zoom": 21,
                "color": "#FEFEFE"
            }
        ]
    },
    {
        "tags": {
            "any": "transit",
            "none": [
                "transit_location",
                "transit_line",
                "transit_schema",
                "is_unclassified_transit"
            ]
        },
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#dcdee0"
            },
            {
                "zoom": 1,
                "color": "#dcdee0"
            },
            {
                "zoom": 2,
                "color": "#dcdee0"
            },
            {
                "zoom": 3,
                "color": "#dcdee0"
            },
            {
                "zoom": 4,
                "color": "#dcdee0"
            },
            {
                "zoom": 5,
                "color": "#dcdee0"
            },
            {
                "zoom": 6,
                "color": "#dcdee0"
            },
            {
                "zoom": 7,
                "color": "#dcdee0"
            },
            {
                "zoom": 8,
                "color": "#dcdee0"
            },
            {
                "zoom": 9,
                "color": "#dcdee0"
            },
            {
                "zoom": 10,
                "color": "#dcdee0"
            },
            {
                "zoom": 11,
                "color": "#dcdee0"
            },
            {
                "zoom": 12,
                "color": "#dcdee0"
            },
            {
                "zoom": 13,
                "color": "#dcdee0"
            },
            {
                "zoom": 14,
                "color": "#F1F1F1"
            },
            {
                "zoom": 15,
                "color": "#e7e8ea"
            },
            {
                "zoom": 16,
                "color": "#e8e9eb"
            },
            {
                "zoom": 17,
                "color": "#e9eaeb"
            },
            {
                "zoom": 18,
                "color": "#e9eaec"
            },
            {
                "zoom": 19,
                "color": "#eaebed"
            },
            {
                "zoom": 20,
                "color": "#ebeced"
            },
            {
                "zoom": 21,
                "color": "#FEFEFE"
            }
        ]
    },
    {
        "tags": "fence",
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#d1d4d6"
            },
            {
                "zoom": 0,
                "opacity": 0.75
            },
            {
                "zoom": 1,
                "opacity": 0.75
            },
            {
                "zoom": 2,
                "opacity": 0.75
            },
            {
                "zoom": 3,
                "opacity": 0.75
            },
            {
                "zoom": 4,
                "opacity": 0.75
            },
            {
                "zoom": 5,
                "opacity": 0.75
            },
            {
                "zoom": 6,
                "opacity": 0.75
            },
            {
                "zoom": 7,
                "opacity": 0.75
            },
            {
                "zoom": 8,
                "opacity": 0.75
            },
            {
                "zoom": 9,
                "opacity": 0.75
            },
            {
                "zoom": 10,
                "opacity": 0.75
            },
            {
                "zoom": 11,
                "opacity": 0.75
            },
            {
                "zoom": 12,
                "opacity": 0.75
            },
            {
                "zoom": 13,
                "opacity": 0.75
            },
            {
                "zoom": 14,
                "opacity": 0.75
            },
            {
                "zoom": 15,
                "opacity": 0.75
            },
            {
                "zoom": 16,
                "opacity": 0.75
            },
            {
                "zoom": 17,
                "opacity": 0.45
            },
            {
                "zoom": 18,
                "opacity": 0.45
            },
            {
                "zoom": 19,
                "opacity": 0.45
            },
            {
                "zoom": 20,
                "opacity": 0.45
            },
            {
                "zoom": 21,
                "opacity": 0.45
            }
        ]
    },
    {
        "tags": "medical",
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#dcdee0"
            },
            {
                "zoom": 1,
                "color": "#dcdee0"
            },
            {
                "zoom": 2,
                "color": "#dcdee0"
            },
            {
                "zoom": 3,
                "color": "#dcdee0"
            },
            {
                "zoom": 4,
                "color": "#dcdee0"
            },
            {
                "zoom": 5,
                "color": "#dcdee0"
            },
            {
                "zoom": 6,
                "color": "#dcdee0"
            },
            {
                "zoom": 7,
                "color": "#dcdee0"
            },
            {
                "zoom": 8,
                "color": "#dcdee0"
            },
            {
                "zoom": 9,
                "color": "#dcdee0"
            },
            {
                "zoom": 10,
                "color": "#dcdee0"
            },
            {
                "zoom": 11,
                "color": "#dcdee0"
            },
            {
                "zoom": 12,
                "color": "#dcdee0"
            },
            {
                "zoom": 13,
                "color": "#dcdee0"
            },
            {
                "zoom": 14,
                "color": "#F1F1F1"
            },
            {
                "zoom": 15,
                "color": "#e7e8ea"
            },
            {
                "zoom": 16,
                "color": "#e8e9eb"
            },
            {
                "zoom": 17,
                "color": "#e9eaeb"
            },
            {
                "zoom": 18,
                "color": "#e9eaec"
            },
            {
                "zoom": 19,
                "color": "#eaebed"
            },
            {
                "zoom": 20,
                "color": "#ebeced"
            },
            {
                "zoom": 21,
                "color": "#FEFEFE"
            }
        ]
    },
    {
        "tags": "beach",
        "elements": "geometry",
        "stylers": [
            {
                "zoom": 0,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 1,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 2,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 3,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 4,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 5,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 6,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 7,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 8,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 9,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 10,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 11,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 12,
                "color": "#dcdee0",
                "opacity": 0.3
            },
            {
                "zoom": 13,
                "color": "#dcdee0",
                "opacity": 0.65
            },
            {
                "zoom": 14,
                "color": "#F1F1F1",
                "opacity": 1
            },
            {
                "zoom": 15,
                "color": "#e7e8ea",
                "opacity": 1
            },
            {
                "zoom": 16,
                "color": "#e8e9eb",
                "opacity": 1
            },
            {
                "zoom": 17,
                "color": "#e9eaeb",
                "opacity": 1
            },
            {
                "zoom": 18,
                "color": "#e9eaec",
                "opacity": 1
            },
            {
                "zoom": 19,
                "color": "#eaebed",
                "opacity": 1
            },
            {
                "zoom": 20,
                "color": "#ebeced",
                "opacity": 1
            },
            {
                "zoom": 21,
                "color": "#FEFEFE",
                "opacity": 1
            }
        ]
    },
    {
        "tags": {
            "all": [
                "is_tunnel",
                "path"
            ]
        },
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#c3c7cb"
            },
            {
                "opacity": 0.3
            }
        ]
    },
    {
        "tags": {
            "all": [
                "is_tunnel",
                "path"
            ]
        },
        "elements": "geometry.outline",
        "stylers": [
            {
                "opacity": 0
            }
        ]
    },
    {
        "tags": "road_limited",
        "elements": "geometry.fill",
        "stylers": [
            {
                "color": "#c8ccd0"
            },
            {
                "zoom": 0,
                "scale": 0
            },
            {
                "zoom": 1,
                "scale": 0
            },
            {
                "zoom": 2,
                "scale": 0
            },
            {
                "zoom": 3,
                "scale": 0
            },
            {
                "zoom": 4,
                "scale": 0
            },
            {
                "zoom": 5,
                "scale": 0
            },
            {
                "zoom": 6,
                "scale": 0
            },
            {
                "zoom": 7,
                "scale": 0
            },
            {
                "zoom": 8,
                "scale": 0
            },
            {
                "zoom": 9,
                "scale": 0
            },
            {
                "zoom": 10,
                "scale": 0
            },
            {
                "zoom": 11,
                "scale": 0
            },
            {
                "zoom": 12,
                "scale": 0
            },
            {
                "zoom": 13,
                "scale": 0.1
            },
            {
                "zoom": 14,
                "scale": 0.2
            },
            {
                "zoom": 15,
                "scale": 0.3
            },
            {
                "zoom": 16,
                "scale": 0.5
            },
            {
                "zoom": 17,
                "scale": 0.6
            },
            {
                "zoom": 18,
                "scale": 0.7
            },
            {
                "zoom": 19,
                "scale": 0.88
            },
            {
                "zoom": 20,
                "scale": 0.92
            },
            {
                "zoom": 21,
                "scale": 1
            }
        ]
    },
    {
        "tags": "road_limited",
        "elements": "geometry.outline",
        "stylers": [
            {
                "color": "#c8ccd0"
            },
            {
                "zoom": 0,
                "scale": 1
            },
            {
                "zoom": 1,
                "scale": 1
            },
            {
                "zoom": 2,
                "scale": 1
            },
            {
                "zoom": 3,
                "scale": 1
            },
            {
                "zoom": 4,
                "scale": 1
            },
            {
                "zoom": 5,
                "scale": 1
            },
            {
                "zoom": 6,
                "scale": 1
            },
            {
                "zoom": 7,
                "scale": 1
            },
            {
                "zoom": 8,
                "scale": 1
            },
            {
                "zoom": 9,
                "scale": 1
            },
            {
                "zoom": 10,
                "scale": 1
            },
            {
                "zoom": 11,
                "scale": 1
            },
            {
                "zoom": 12,
                "scale": 1
            },
            {
                "zoom": 13,
                "scale": 0.1
            },
            {
                "zoom": 14,
                "scale": 0.2
            },
            {
                "zoom": 15,
                "scale": 0.3
            },
            {
                "zoom": 16,
                "scale": 0.5
            },
            {
                "zoom": 17,
                "scale": 0.6
            },
            {
                "zoom": 18,
                "scale": 0.7
            },
            {
                "zoom": 19,
                "scale": 0.84
            },
            {
                "zoom": 20,
                "scale": 0.88
            },
            {
                "zoom": 21,
                "scale": 0.95
            }
        ]
    },
    {
        "tags": {
            "any": "landcover",
            "none": "vegetation"
        },
        "stylers": {
            "visibility": "off"
        }
    }
]
            }));
            map.addChild(new YMapDefaultFeaturesLayer());

            // Create custom marker
            const markerElement = document.createElement('div');
            markerElement.className = 'custom-marker';
            markerElement.innerHTML = '<img id="MapMarker" style="height:63.97px; width: 54px;" src="https://optim.tildacdn.com/tild6431-3038-4561-b666-653933616637/-/resize/108x/-/format/webp/Tokarevo_Map_pin.png.webp" alt="">';
            
            // Create container for marker elements
            const markerContainer = document.createElement('div');
            markerContainer.appendChild(markerElement);

            // Add click handler
            markerContainer.onclick = () => {
                map.update({
                    location: {
                        ...LOCATION,
                        duration: 400
                    }
                });
            };

            // Add marker to map
            map.addChild(new YMapMarker(
                { coordinates: MARKER_COORDINATES },
                markerContainer
            ));
            let MapMarkerImage = document.querySelector('#MapMarker')
            MapMarkerImage.style.transform = 'translateY(-64px)';
        }
})
