fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
        displayData(data);
    });
function displayData(data) {
    const parent = document.getElementById('container');
    for (let i = 0; i < data.length; i++) {
        const name = data[i].name;
        const div = document.createElement('div');
        div.className = "country";
        const h1 = document.createElement('h1');
        h1.innerText = name;
        div.appendChild(h1);
        parent.appendChild(div);
    }
}
document.getElementById('container').addEventListener('click', function (event) {
    const name = event.target.innerText;
    fetch('https://restcountries.eu/rest/v2/name/' + name + ' ')

        .then(response => response.json())
        .then(data => {
            displayCountryDetails(data);
            document.getElementById('country-container').style.display = 'none';
            document.getElementById('countryDetails').style.display = 'block';
        });

    function displayCountryDetails(data) {
        const name = data[0].name;
        const capital = data[0].capital;
        const region = data[0].region;
        const population = data[0].population;

        document.getElementById('name').innerText = name;
        document.getElementById('capital').innerText = capital;
        document.getElementById('region').innerText = region;
        document.getElementById('population').innerText = population;


    }
})
document.getElementById('back').addEventListener('click', function () {
    document.getElementById('countryDetails').style.display = 'none';
    document.getElementById('country-container').style.display = 'block';
})