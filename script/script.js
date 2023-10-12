//WRITE SOCIALIZER.JS INTO HEAD
let script = document.createElement('script');
script.src = '/script/socializer.js';
document.getElementsByTagName('head')[0].appendChild(script);


//SOCIAL MEDIA SHARE LOAD
function socializerLoad() {
  (function () {
    socializer('.socializer');
  }());
}


//TABLE OF CONTENTS
function tocDropdown() {
  if (document.getElementById("toc-dropdown").classList.contains("show")) {
    document.getElementById("toc-dropdown").classList.remove("show");
  } else {
    document.getElementById("toc-dropdown").classList.add("show");
  }

  if (document.getElementById("header_grid_change").classList.contains("content-header-pattern")) {
    document.getElementById("header_grid_change").classList.remove("content-header-pattern");
    document.getElementById("header_grid_change").classList.add("content-header-pattern_grid_change");
  } else {
    document.getElementById("header_grid_change").classList.remove("content-header-pattern_grid_change");
    document.getElementById("header_grid_change").classList.add("content-header-pattern");
  }
}


//SIDE NAV HAMBURGER
function openSideNav() {
  if (document.getElementById("inc-side-nav").classList.contains("show")) {
    document.getElementById("inc-side-nav").classList.remove("show");
    document.querySelector("main").classList.remove("blur");
  } else {
    document.getElementById("inc-side-nav").classList.add("show");
    document.querySelector("main").classList.add("blur");
  }
}

function hideSideNav() {
  if (window.innerWidth <= 940) {
    document.getElementById("inc-side-nav").classList.remove("show");
    document.querySelector("main").classList.remove("blur");
  }
}


//SIDE NAV COLLAPSE
function sidenavDropdown(element) {
  let nextElement = element.nextElementSibling;
  if (nextElement.classList.contains("show")) {
    nextElement.classList.remove("show");
  } else {
    nextElement.classList.add("show");
  }
}



//RELEASE SCHDULE TO LOCAL TIME
function localTime() {
  // get the user's time zone offset in minutes
  const timeZoneOffset = new Date().getTimezoneOffset();

  // get all the elements in the date and time column of the table
  const dateAndTimeElements = document.querySelectorAll('.date-and-time-column');

  // loop through the elements and convert each value to local time
  dateAndTimeElements.forEach(element => {
    // get the UTC timestamp of the date and time value
    const utcTimestamp = new Date(element.textContent.trim()).getTime();

    // convert the UTC timestamp to the local timestamp
    const localTimestamp = utcTimestamp - (timeZoneOffset * 60 * 1000);

    // create a new Date object with the local timestamp
    const localDate = new Date(localTimestamp);

    // format the local date and time as strings in the desired formats
    const localDateString = localDate.toLocaleString(undefined, {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      month: 'numeric',
      day: 'numeric'
    }).replace(',', '');

    const localTimeString = localDate.toLocaleString(undefined, {
      hour: 'numeric',
      hour12: true
    }).toLowerCase().replace(' ', '');

    // set the HTML content of the element to the local date and time strings
    element.innerHTML = `${localDateString}`;
  });
}
