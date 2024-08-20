const ElcountryList = document.getElementById('country-list');
const searchInput = document.getElementById('search-input');
const tun = document.getElementById('tun');
const kun = document.getElementById('kun');
const body = document.querySelector('body');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const searchSelect = document.querySelector('.search-select'); 
const likeCountElement = document.getElementById('like-count');
const bookmarkCountElement = document.getElementById('bookmark-count');

const countrys = [
    {
        id: 1,
        name: "Uzbekistan",
        capital: "Tashkent",
        population: 37000000,
        flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 2,
        name: "Russia", 
        capital: "Moscow",
        population: 146150789,
        flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg?uselang=ru",
        isLiked:false,
        isBasket:false
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 11,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 12,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg",
        isLiked:false,
        isBasket:false
    }
];

function chooseSelect() {
    searchSelect.innerHTML = '<option value="all">All</option>';
    countrys.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name;
        option.textContent = country.name;
        searchSelect.appendChild(option);
    });
}

function openModal(country) {
    modalTitle.textContent = `More about ${country.name}`;
    modalBody.innerHTML = `
        <p><strong>ID:</strong> ${country.id}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Flag:</strong></p>
        <img src="${country.flag}" alt="Flag of ${country.name}" class="w-1/2">
    `;
    modal.classList.remove('hidden');
}

modalClose.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});
/*isliked and isBasket */
let counts = {
    like: 0,
    bookmark: 0
};

function toggleCount(type, countryId) {
    const country = countrys.find(c => c.id === countryId);

    if (!country) {
        console.error(`Country with ID ${countryId} not found.`);
        return;
    }

    if (type === 'like') {
        if (country.isLiked) {
            counts.like--;
            country.isLiked = false;
        } 
        else {
            counts.like++;
            country.isLiked = true;
        }
        likeCountElement.textContent = ` ${counts.like}`;
    } 
    else if (type === 'bookmark') {
        if (country.isBasket) {
            counts.bookmark--;
            country.isBasket = false;
        } 
        else {
            counts.bookmark++;
            country.isBasket = true;
        }
        bookmarkCountElement.textContent = ` ${counts.bookmark}`;
    }

    renderCountry(countrys);
}

function updateButtonState(button, type, isActive) {
    if (type === 'like') {
        button.classList.toggle('liked', isActive);
    } else if (type === 'bookmark') {
        button.classList.toggle('bookmarked', isActive);
    }
}

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
                <button class="like-btn" data-id="${country.id}" data-type="like">
                    <i class="fas fa-heart ${country.isLiked ? 'liked' : ''}"></i>
                </button>
                <button class="bookmark-btn" data-id="${country.id}" data-type="bookmark">
                    <i class="fas fa-bookmark ${country.isBasket ? 'bookmarked' : ''}"></i>
                </button>
                <button class="more-btn" data-id="${country.id}">More</button>
            </div>
        `;

        ElcountryList.appendChild(countryCard);
    });

    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', () => {
            const countryId = parseInt(button.getAttribute('data-id'));
            toggleCount('like', countryId);
            updateButtonState(button.querySelector('i'), 'like', countrys.find(c => c.id === countryId).isLiked);
        });
    });

    document.querySelectorAll('.bookmark-btn').forEach(button => {
        button.addEventListener('click', () => {
            const countryId = parseInt(button.getAttribute('data-id'));
            toggleCount('bookmark', countryId);
            updateButtonState(button.querySelector('i'), 'bookmark', countrys.find(c => c.id === countryId).isBasket);
        });
    });

    document.querySelectorAll('.more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const countryId = parseInt(button.getAttribute('data-id'));
            const country = countrys.find(c => c.id === countryId);
            if (country) {
                openModal(country);
            }
        });
    });
}

function filterCountries() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCountry = searchSelect.value;

    const filteredCountries = countrys.filter(country => {
        const matchesSearchTerm = country.name.toLowerCase().includes(searchTerm) ||
            country.population.toString().includes(searchTerm);
        const matchesSelectedCountry = selectedCountry === 'all' || country.name === selectedCountry;

        return matchesSearchTerm && matchesSelectedCountry;
    });

    renderCountry(filteredCountries);
}

document.addEventListener('DOMContentLoaded', () => {
    chooseSelect(); 
    renderCountry(countrys);
    searchInput.addEventListener('input', filterCountries);
    searchSelect.addEventListener('change', filterCountries);
});

tun.addEventListener('click', () => {
    body.classList.add('dark_bg');
    tun.style.display = 'none';
    kun.style.display = 'block';
});

kun.addEventListener('click', () => {
    body.classList.remove('dark_bg');
    tun.style.display = 'block';
    kun.style.display = 'none';
});