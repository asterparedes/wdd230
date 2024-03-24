const memberSpotlight = document.querySelector('#spotlight-card');
const memberURL = "https://asterparedes.github.io/wdd230/chamber/data/members.json";

const getMember = async () => {
    try {
        const response = await fetch(memberURL);
        if (response.ok) {
            const data = await response.json();
            initializeSpotlight(data);   
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
    }
}

const displaySpotlight = (member) => {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let websiteUrl = document.createElement('a');
    let membership = document.createElement('p');

    logo.setAttribute('src', member.image);
    logo.setAttribute('alt', `${member.name} logo`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '250');
    logo.setAttribute('height', '100');

    address.textContent = member.address;
    phone.textContent = member.phoneNumber;
    websiteUrl.textContent = member.name;
    websiteUrl.href = member.website;
    membership.textContent = `Membership Level: ${member.membershipLevel}`;

    card.appendChild(logo);
    card.appendChild(companyName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(websiteUrl);
    card.appendChild(membership);

    memberSpotlight.appendChild(card);
}


const initializeSpotlight = (data) => {
    const members = data.companies.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
    for (let number = 0; number < 3; number++ ) {
        if (members.length > 0) {
            const randomIndex = Math.floor(Math.random() * members.length);
            displaySpotlight(members[randomIndex]);
            members.splice(randomIndex, 1);
        }
    }
}

getMember()