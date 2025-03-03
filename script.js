document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }
  
  // Countdown Timer for Next Event
  const countdownElement = document.getElementById('countdown');
  if (countdownElement) {
    // Set the date we're counting down to (Summer Festival - June 15, 2023)
    const countDownDate = new Date("June 15, 2023 10:00:00").getTime();
    
    // Update the countdown every 1 second
    const countdownTimer = setInterval(function() {
      // Get today's date and time
      const now = new Date().getTime();
      
      // Find the distance between now and the countdown date
      const distance = countDownDate - now;
      
      // If the countdown is over, show a message
      if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById('days').innerHTML = "00";
        document.getElementById('hours').innerHTML = "00";
        document.getElementById('minutes').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
        return;
      }
      
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Display the result
      document.getElementById('days').innerHTML = days < 10 ? "0" + days : days;
      document.getElementById('hours').innerHTML = hours < 10 ? "0" + hours : hours;
      document.getElementById('minutes').innerHTML = minutes < 10 ? "0" + minutes : minutes;
      document.getElementById('seconds').innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
  }
  
  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  
  if (testimonials.length > 0 && prevBtn && nextBtn) {
    let currentTestimonial = 0;
    
    // Show the first testimonial
    testimonials[currentTestimonial].classList.add('active');
    
    // Function to show a specific testimonial
    function showTestimonial(index) {
      testimonials.forEach(testimonial => testimonial.classList.remove('active'));
      testimonials[index].classList
    }
  }
}
)