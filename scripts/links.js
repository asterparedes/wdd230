const baseURL = "https://asterparedes.github.io/wdd230";
const linksURL = "https://asterparedes.github.io/wdd230/data/links.json";
const lessonLinks = document.querySelector('#lessonLinks');

const getLinks = async () => {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach(week => {
        let weekLesson = document.createElement('p');
        weekLesson.textContent = `Week ${week.lesson}: `;

        week.links.forEach((link, index) => {
            let lessonURL = document.createElement('a');

            lessonURL.textContent = link.title;
            lessonURL.href = link.url;

            if (index > 0) {
                let separator = document.createElement('span');

                separator.textContent = ' | ';
                separator.appendChild(lessonURL);
                weekLesson.appendChild(separator);
            }else{
                weekLesson.appendChild(lessonURL);
            }
        });
        lessonLinks.appendChild(weekLesson);
    });
};

getLinks();