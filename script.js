// Example JavaScript code (can be expanded as needed)
document.addEventListener('DOMContentLoaded', function() {
    // Add JavaScript code here
    var signupForm = document.querySelector('form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = new FormData(signupForm);
        var username = formData.get('username');
        var email = formData.get('email');
        var password = formData.get('password');

        // Basic validation
        if (!username || !email || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Dummy AJAX request (Replace this with actual signup logic)
        setTimeout(function() {
            alert('Sign up successful for user: ' + username);
            // Redirect to another page or perform any other action after successful signup
        }, 1000);
    });
});
