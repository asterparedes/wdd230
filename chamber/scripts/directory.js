const grid = document.querySelector('#grid');
const list = document.querySelector('#list');
const directory = document.querySelector('.directory-info');
const memberURL = "https://asterparedes.github.io/wdd230/chamber/data/members.json";

grid.addEventListener('click', () => {
    directory.classList.add('grid');
    directory.classList.remove('list');
});

list.addEventListener('click', () => {
    directory.classList.add('list');
    directory.classList.remove('grid');
});


const getMemberData = async () => {
    const response = await fetch(memberURL);
    const data = await response.json();
    displayMembers(data.companies);
}

const displayMembers = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let companyName = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let websiteUrl = document.createElement('a');
        let membership = document.createElement('p');

        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `${member.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '250');
        logo.setAttribute('height', '100');

        companyName.textContent = member.name;
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
        directory.appendChild(card);
    });
}

getMemberData();