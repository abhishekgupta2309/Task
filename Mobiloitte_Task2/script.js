document.addEventListener('DOMContentLoaded', function() {
      const form = document.querySelector('form');
      form.addEventListener('submit', function(event) {
          event.preventDefault(); 
  
         
          const emailField = document.getElementById('emailID');
          if (!isValidEmail(emailField.value)) {
              alert('Please enter a valid email address');
              return;
          }
  

          const passwordField = document.getElementById('password');
          if (passwordField.value.length < 8) {
              alert('Password must be at least 8 characters long');
              return;
          }
  
          
          const alphaField = document.getElementById('alpha');
          if (!isValidAlpha(alphaField.value)) {
              alert('Alpha field must contain only alphabetic characters');
              return;
          }
  
          
          const datePickerField = document.getElementById('datepicker');
          if (!isValidDate(datePickerField.value)) {
              alert('Please select a valid date');
              return;
          }
  
          // Add validation for other fields as needed...
  
          
          alert('Form submitted successfully!');
          form.reset(); 
      });
  });
  
  function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }
  
  function isValidAlpha(alpha) {
      const alphaPattern = /^[a-zA-Z]+$/;
      return alphaPattern.test(alpha);
  }
  
  function isValidDate(date) {
      return !isNaN(Date.parse(date));
  }
  