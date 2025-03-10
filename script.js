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
    // Set the date we're counting down to
    var countDownDate = new Date("April 24, 2025 15:37:25").getTime();

    // Update the count down every 1 second
    var countdownfunction = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();
      
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Output the result in elements with corresponding ids
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
      
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
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
      testimonials[index].classList.add('active');
    }
    
    // Event listeners for the previous button
    prevBtn.addEventListener('click', function() {
      currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
      showTestimonial(currentTestimonial);
    });
    
    // Event listeners for the next button
    nextBtn.addEventListener('click', function() {
      currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
      showTestimonial(currentTestimonial);
    });
  }
});
