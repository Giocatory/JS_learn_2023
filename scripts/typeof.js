let paragraph = document.querySelector('p');
let values = ['Mike', 3.142, true, console, console.log, null, undefined];

paragraph.innerHTML += `values - ${typeof values}<br><br>`;

paragraph.innerHTML += values.map(
    value => `<li>${String(value)} - ${typeof value}</li>`
    ).join('');
