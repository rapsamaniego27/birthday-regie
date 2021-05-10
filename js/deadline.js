/* announcement */
const announcement = document.querySelector('.announcement');

/* Setting the timezone */
options = {
 hour: 'numeric', minute: 'numeric',
 timeZone: 'Asia/Manila',
 timeZoneName: 'short'
};


/* Individually getting the values */
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

/* We used Native Date Time format from Javascript */
const time = new Intl.DateTimeFormat('en-AU', options).format(futureDate);


/* Old Style */
/* announcement.textContent = `Christmas Day is on ${weekday}, ${date}, ${month}, ${year} ${hours}:${minutes}`; */