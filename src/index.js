import { initMap, setMarkers, addClusters } from './map';

const main = document.querySelector('main');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const button = document.getElementById('reporte');
const showMap = document.getElementById('showMap');
const showCluster = document.getElementById('showCluster');
const table = document.querySelector('table');

fetch('http://localhost:9000')
    .then( function (response) {
        return response.json();
    } )
    .then( function (json) {
        const { data } = json;
        // console.log(data);
        window.data = data
        renderDataInTable(data);
        // groupByUser(window.data);
    } )
    .catch( function (error) {
        console.log("Hubo un error: ", error);
    } );

button.addEventListener ('click', function () {
    const results = groupByUser(window.data);
    const div = document.createElement('div');
    for (const [user, visits] of Object.entries(results) ){
        const p = document.createElement('p');
        p.textContent = `El usuario ${user} tiene ${visits}.`;
        div.appendChild(p);
    }
    table.parentElement.replaceChild(div, table);
} );

function renderDataInTable(data) {
    const columnas = Object.keys(data[0]);
    for (const columna of columnas){
        const th = document.createElement('th');
        th.textContent = columna;
        thead.appendChild(th);
    }
    for(const row of data) {
        const tr = document.createElement('tr');
        for (const columna of columnas) {
            const td = document.createElement('td');
            td.textContent = row[columna];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
};

function groupByUser(data) {
    const results = {};
    for ( const row of data ){
        const user = row.username;
        if ( results[user] ) {
            results[user] = results[user] + 1;
        } else {
            results[user] = 1;
        }
    }

    return results;
};

showMap.addEventListener ('click', function () {
    const container = document.createElement('div');
    container.style.width='100%';
    container.style.height='50vh';

    const positions = window.data
    .filter( (element) => {
        return element['ubicaciónlatitude'] && element['ubicaciónlongitude']
    } )
    .map( (element) => {
        return {
            lat: Number(element['ubicaciónlatitude']),
            lng: Number(element['ubicaciónlongitude']),
            title: `Visita de ${element['username']}`
        }
    } );
    const map = initMap(container);
    setMarkers(positions, map);

    main.replaceChild(container, main.children[0]);
    // table.parentElement.replaceChild(container, table);

    
} );

showCluster.addEventListener ( 'click', () => {
    const container = document.createElement('div');
    container.style.width='100%';
    container.style.height='50vh';

    const positions = window.data
    .filter( (element) => {
        return element['ubicaciónlatitude'] && element['ubicaciónlongitude']
    } )
    .map( (element) => {
        return {
            lat: Number(element['ubicaciónlatitude']),
            lng: Number(element['ubicaciónlongitude']),
            title: `Visita de ${element['username']}`
        }
    } );
    const map = initMap(container);
    const markers = setMarkers(positions, map);
    addClusters(map,markers);

    main.replaceChild(container, main.children[0]);
} );