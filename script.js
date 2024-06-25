const mobileNavBtn = document.querySelector('.mobile-nav-btn');
const header = document.querySelector('.header');

mobileNavBtn.addEventListener('click', function() {
    header.classList.toggle('active');
});

    const signInBtn = document.querySelector('.sign-in-btn');
    const signInDialog = document.getElementById('signin-dialog');
    const closeBtn = document.querySelector('.close-btn');

    // Hiding the sign-in dialog box in starting
    signInDialog.style.display = 'none';

    // Show the sign-in dialog box when the "Join Us" button is clicked
    signInBtn.addEventListener('click', function () {
        header.classList.remove('active');
        signInDialog.style.display = 'block';
    });

    // Close the sign-in dialog box when the close button is clicked
    closeBtn.addEventListener('click', function () {
        signInDialog.style.display = 'none';
    });

    // Close the sign-in dialog box when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === signInDialog) {
            signInDialog.style.display = 'none';
        }
    });

 
    