export const initMap = (container) => {
    // const center = {lat: 23.2927677, lng: -111.6620778};
    const center = { lat: 19.3910038, lng: -99.2836966 };

    const map = new google.maps.Map(container, {
        zoom: 5,
        center
    });
    
    return map;
};

// 23.2927677,-111.6620778

export const setMarkers = (positions, map) => {
    const markers = [];
    for (const position of positions) {
        const infoWindow = new google.maps.InfoWindow( {
            content: `<p>${position.title}</p>`
        } );
        const marker = new google.maps.Marker( {
            position:  { lat: position.lat, lng: position.lng },
            map,
            title: position.title
        } );
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        } );
        markers.push(marker);
    }
    return markers;
};

export const addClusters = (map, markers) => {
    new MarkerClusterer(
        map,
        markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

};