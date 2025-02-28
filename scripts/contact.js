document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = form.querySelector('.submit-btn');
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;
      
      const formData = new FormData(form);
      
      fetch('https://script.google.com/macros/s/AKfycbwWgqhIRj9v8hhPBcX-PbtKxLGQH9i12AbLQFTcK2eta9X82jezCim8XnthmAKTZMZSZA/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })
      .then(function(response) {
        submitBtn.textContent = 'Submitted Successfully!';
        form.reset();
        
        setTimeout(function() {
          submitBtn.textContent = originalBtnText;
          submitBtn.disabled = false;
        }, 3000);
      })
      .catch(function(error) {
        console.error('Error:', error);
        submitBtn.textContent = 'Submission Failed';

        setTimeout(function() {
          submitBtn.textContent = originalBtnText;
          submitBtn.disabled = false;
        }, 3000);
      });
    });
  });