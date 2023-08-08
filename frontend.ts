console.log(`${cDT()} Frontend app started`);

console.log(window.location.href);
console.log(window.location.hostname);

const btn = document.getElementById('btn');
const msg = document.getElementById('msg');

if (btn) {
    btn.onclick = () => {
        if (msg) {
            console.log(`${cDT()} btn.onlick() updating data`);
            msg.innerText = `${cDT()}  Contenuto modificato da tzpescript`;
        }
    }
}

// Defining a reusable function
function padTo2Digits(num: number): String {
    return num.toString().padStart(2, '0');
}

// format as "DD-MM-YYYY"
function cDate(): String {
    const date: Date = new Date();
    return (
        [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear()
        ].join(":"));
}

// format as "hh:mm:ss"
function cTime(): String {
    const date: Date = new Date();
    return (
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
        ].join(':')
    );
}

// format as "DD-MM-YYYY hh:mm:ss"
function cDT(): String {
    const date: Date = new Date();
    return (
        cDate() +
        ' ' +
        cTime()
    );
}


