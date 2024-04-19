// function that makes image on home page have a pulse animation

function addPulseEffect() {
    const image = document.querySelector('.image-container');
    image.classList.add('pulse');
}

// simple function that validates user input for email on the contact page

const validateEmail = (email) => {
    return email.includes('@') && email.includes('.')
};

// Alert function when clicking link

function leavePageAlert() {
    alert("This will bring you to another website!")
}

// Function that shows date and updates dynamically

// function showDate() {
//     let d = new Date();
//     let curr_date = d.getDate();
//     let curr_month = d.getMonth() + 1;
//     let curr_year = d.getFullYear();
//     document.write(curr_date + "-" + curr_month + "-" + curr_year);
// }
