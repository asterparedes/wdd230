const rentalTable = document.querySelector('#rental-table');
const rentalURL = 'https://asterparedes.github.io/wdd230/scoots/data/services.json';

const getRentalData = async () => {
    const response = await fetch(rentalURL);
    const data = await response.json();
    console.log(data);
    displayTable(data.vehicles);
}

const displayTable = (tables) => {
    tables.forEach(table => {
        let tableRow = document.createElement('tr');
        let tableImg = document.createElement('img');
        let tableData = document.createElement('td');
        let tableData1 = document.createElement('td');
        let tableData2 = document.createElement('td');
        let tableData3 = document.createElement('td');
        let tableData4 = document.createElement('td');
        let tableData5 = document.createElement('td');
        
        tableImg.setAttribute('src', table.image);
        tableImg.setAttribute('alt', `${table.name}`);
        tableImg.setAttribute('loading', 'lazy');
        tableImg.setAttribute('width', '150');
        tableImg.setAttribute('height', '100');

        tableData.textContent = table.name;
        tableData1.textContent = table.maxPersons;
        tableData2.textContent = table.reservation[0].halfDay;
        tableData3.textContent = table.reservation[0].fullDay;
        tableData4.textContent = table.walkIn[0].halfDay;
        tableData5.textContent = table.walkIn[0].fullDay;

        tableData.appendChild(tableImg);
        tableRow.appendChild(tableData);
        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        tableRow.appendChild(tableData3);
        tableRow.appendChild(tableData4);
        tableRow.appendChild(tableData5);
        rentalTable.appendChild(tableRow);
    });
}

getRentalData();