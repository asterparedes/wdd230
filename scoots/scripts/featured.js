const featuredRental = document.querySelector('#rental-info');
const rentalURL = 'https://asterparedes.github.io/wdd230/scoots/data/services.json';

const getFeaturedRental = async () => {
    try {
        const response = await fetch(rentalURL);
        if (response.ok) {
            const data = await response.json();
            initializeRental(data);   
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
    }
}

const displayRental = (vehicle) => {
    let rentalCard = document.createElement('section');
    let rentalImage = document.createElement('img');
    let vehicleName = document.createElement('p');
    let rentalLink = document.createElement('a');

    rentalImage.setAttribute('src', vehicle.image);
    rentalImage.setAttribute('alt', `${vehicle.name}`);
    rentalImage.setAttribute('loading', 'lazy');
    rentalImage.setAttribute('width', '150');
    rentalImage.setAttribute('height', '100');

    vehicleName.textContent = vehicle.name;
    rentalLink.textContent = 'Check More Rentals';
    rentalLink.href = 'rentals.html';

    rentalCard.appendChild(rentalImage);
    rentalCard.appendChild(vehicleName);
    rentalCard.appendChild(rentalLink);

    featuredRental.appendChild(rentalCard);
}

const initializeRental = (data) => {
    const rentals = data.vehicles.filter(rental => rental.name);
    for (let number = 0; number < 3; number++) {
        if (rentals.length > 0) {
            const randomIndex = Math.floor(Math.random() * rentals.length);
            displayRental(rentals[randomIndex]);
            rentals.splice(randomIndex, 1);
        }
    }
}

getFeaturedRental();