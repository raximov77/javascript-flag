let ElcountryList = document.getElementById('country-list');
let searchInput = document.getElementById('search-input');

const countrys = [
    {
        id: 1,
        name: "Uzbekistan",
        capital: "Tashkent",
        population: 37000000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"
    },
    {
        id: 2,
        name: "Russia", 
        capital: "Moscow",
        population: 146150789,
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg?uselang=ru"
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg"
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg"
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg"
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg"
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg"
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg"
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg"
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg"
    },
    {
        id: 11,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg"
    },
    {
        id: 12,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg"
    }
];

function renderCountry(filteredCountries) {
    ElcountryList.innerHTML = '';

    filteredCountries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.className = 'country-lists';

        countryCard.innerHTML = `
            <img src="${country.flag}" alt="Flag of ${country.name}">
            <div class="details">
                <p><strong>ID:</strong> ${country.id}</p>
                <p><strong>Country:</strong> ${country.name}</p>
                <p><strong>Capital:</strong> ${country.capital}</p>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            </div>
            <div class="actions">
                <button><i class="fas fa-heart"></i></button>
                <button><i class="fas fa-bookmark"></i></button>
                <button>More</button>
            </div>
        `;

        ElcountryList.appendChild(countryCard);
    });
}

function filterCountries() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCountries = countrys.filter(country =>
        country.name.toLowerCase().includes(searchTerm)
    );
    renderCountry(filteredCountries);
}

document.addEventListener('DOMContentLoaded', () => {
    renderCountry(countrys);
    searchInput.addEventListener('input', filterCountries);
});
