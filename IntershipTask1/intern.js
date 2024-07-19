document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const dobInput = document.getElementById('dob');
    const atDateInput = document.getElementById('at-date');
    const dob = new Date(dobInput.value);
    const atDate = new Date(atDateInput.value);

    const years = atDate.getFullYear() - dob.getFullYear();
    const months = atDate.getMonth() - dob.getMonth();
    const days = atDate.getDate() - dob.getDate();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        days += getDaysInMonth(atDate.getMonth(), atDate.getFullYear());
    }

    const weeks = Math.floor(days / 7);
    const monthsInYears = months + (years * 12);
    const daysInYears = days + (years * 365) + (months * 30);

    // Calculate total weeks
    const totalWeeks = Math.floor((atDate.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24 * 7));

    const resultElement = document.getElementById('result');
    resultElement.innerText = `
        Age = ${years} years ${months} months
        Total Months= ${monthsInYears} months ${weeks} weeks
        Total weeks= ${totalWeeks} total weeks
        Total days = ${daysInYears} days
    `;
});

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}