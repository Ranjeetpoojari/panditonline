
//  login form validation
$(document).ready(function() {
    $('#Loginform').on('submit',function(event) {
        event.preventDefault()
        var PhoneInput = $('#PhoneInput').val();
        var emailphone = $('#exampleInputEmail1').val();
        var password = $('#passwordInput').val();
        var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var num_pattern = /^\d{10}$/;
        let isValid = true;
        if(emailphone.trim() === ''){
            $('#emailError').text('');
            $('#exampleInputEmail1').removeClass('border-danger');
            isValid= true;
        }
    else if(!emailpattern.test(emailphone)){
            $('#emailError').text('Please Provide valid email id');
            $('#exampleInputEmail1').addClass('border-danger');
            isValid = false; 
        }
        else {
            $('#emailError').text('');
            isValid = true;
            console.log('done');
        }
        if(PhoneInput === ''){
            $('#PhoneError').text('Please Provide your contact number');
            $('#PhoneInput').addClass('border-danger');
        }
        else if(!num_pattern.test(PhoneInput)){
            $('#PhoneInput').addClass('border-danger');
            $('#PhoneError').text('Please fill the right number');
        }
        else{
            $('#PhoneError').text('');
            $('#PhoneInput').removeClass('border-danger');
            isValid =true;
        }
        if(password.trim() === ''){
            $('#passwordError').text('The pass word  is required.');
            $('#passwordInput').addClass('border-danger');
            isValid = false;
        }
        else if(password.length < 8 ){
            $('#passwordError').text('The password must be 8 charters');
            $('#passwordInput').addClass('border-danger');
            isValid = false;
        }
        else{
            $('#passwordError').text('');
            $('#passwordInput').removeClass('border-danger');
            isValid =true;
            console.log('done');
        }
        if(isValid){
            console.log("login submit");
        }
});
 });
 
 $(document).ready(function() {
    $('#signup').on('click',function(event) {
        event.preventDefault()
        var emailphone = $('#exampleInputEmail1').val();
        var password = $('#passwordInput').val();
        var name = $('#Fullname').val();
        var regEx = /^[A-Za-z ]+$/;
        var emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var num_pattern = /^\d{10}$/;
        // var passparttren =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        let isValid = true;
        if(name.trim() === ''){
            $('#fullnameerror').text('Full name is required');
            $('#Fullname').addClass('border-danger');
            isValid =false
        }
        else if(!regEx.test(name)){
            $('#Fullname').addClass('border-danger');
            $('#fullnameerror').text('Please provide Valid name');
            isValid = false
        } 
        else{
            $('#Fullname').removeClass('border-danger');
            $('#fullnameerror').text('');
            isValid = true
            console.log('done');
        }
        if(emailphone.trim() === ''){
            $('#emailError').text('');
            $('#exampleInputEmail1').removeClass('border-danger');
            isValid= true;
        }
    else if(!emailpattern.test(emailphone)){
            $('#emailError').text('Please Provide valid email id');
            $('#exampleInputEmail1').addClass('border-danger');
            isValid = false; 
        }
        else {
            $('#emailError').text('');
            isValid = true;
            console.log('done');
        }
        if(PhoneInput === ''){
            $('#PhoneError').text('Please Provide your contact number');
            $('#PhoneInput').addClass('border-danger');
        }
        else if(!num_pattern.test(PhoneInput)){
            $('#PhoneInput').addClass('border-danger');
            $('#PhoneError').text('Please fill the right number');
        }
        else{
            $('#PhoneError').text('');
            $('#PhoneInput').removeClass('border-danger');
            isValid =true;
        }
        if(password.trim() === ''){
            $('#passwordError').text('The pass word  is required.');
            $('#passwordInput').addClass('border-danger');
            isValid = false;
        }
        else if(password.length < 8 ){
            $('#passwordError').text('The password must be 8 charters');
            $('#passwordInput').addClass('border-danger');
            isValid = false;
        }
        else{
            $('#passwordError').text('');
            $('#passwordInput').removeClass('border-danger');
            isValid =true;
            console.log('done');
        }
    });
});
$(document).ready(function() {
    $('#continue').on('click',function(event) {
        event.preventDefault();
        var cover_Location = $('#cover_Location').val();
        var addreess = $('#addreess').val();
        var regEx = /^[A-Za-z]+$/;
        var dob = $('#dob').val();
        let isValid = true;
        if(dob.trim() === ''){
             isValid = false;
            $('#dobError').text("Date of Birth is required");
            $('#dob').addClass('border-danger');
        }
        else{
            $('#dobError').text("");
            $('#dob').removeClass('border-danger');
        }
        if(addreess.trim() === ''){
            console.log("not Yet addree")
            $('#addressError').text("Address is required");
            $('#addreess').addClass('border-danger');
            isValid = false;
        }
        else{
            $('#addressError').text("");
            $('#addreess').removeClass('border-danger');
            console.log('done');
        }
        if(cover_Location.trim() === ''){
            console.log("not yet");
            $('#cover_Location').addClass('border-danger');
            $('#cover_LocationError').text('Location will cover for puja is required.');
            isValid = false;
        }else if(!regEx.test(cover_Location)){
            $('#cover_Location').addClass('border-danger');
            $('#cover_LocationError').text('Please Provide Your Currect Location');
            isValid = false;
        }
        else {
            isValid =true;
            $('#cover_Location').removeClass('border-danger');
            $('#cover_LocationError').text('');
        }
        if(isValid){
            console.log("form is submited")
            $('#pills-profile-tab').addClass('show active');
            $('#pills-profile').addClass('show active');
            $('#pills-home').removeClass('show active');
            $('#pills-home-tab').removeClass('show active');
            $('.rangeid').addClass('range-color2');
            $('.rangeid').removeClass('range-color1');
            $('.rangeid').removeClass('range-color3');
            $('.ch1').removeClass('d-none');
        }
    });
});
$(document).ready(function() {
    $('#continue1').on('click',function(event) {
        event.preventDefault();
        var isChecked = $(".Pujacheck:checked").length ;
        if(isChecked < 2){
            $('#pujaError').text('Expertise in puja is required');
            
        }
        else{
            $('#pills-contact-tab').addClass('show active');
            $('#pills-contact').addClass('show active');
            $('#pills-profile-tab').removeClass('show active');
            $('#pills-profile').removeClass('show active');
            $('.rangeid').addClass('range-color3');
            $('.rangeid').removeClass('range-color2');
            $('.rangeid').removeClass('range-color1');
            $('.ch2').removeClass('d-none');
        }
    });
});
// $(document).ready(function(){
//     $('form').submit(function(event){
//         event.preventDefault();
//         var isVslid =true;
//         isVslid= true;
 
//     });
// });

$(document).ready(function(){
$("#continue2").on("click", function(event){
    event.preventDefault();
    var total_no_puja = $("#total_no_puja").val();
    var reference = $("#referenceid").val();
    var regEx = /^[0-9]+$/;
    let isValid = true;
    if(reference.trim() ===''){
        // console.log("good night");
        $("#referenceError").text("Reference ID is required");  
        $('#referenceid').addClass('border-danger');
        isValid = false;
    }
    else if(!regEx.test(reference)){
        $("#referenceError").text("Only numbers");  
        $('#referenceid').addClass('border-danger');
        isValid = false;
    }
    else{
        isValid = true;
        $('#referenceid').removeClass('border-danger');
        $("#referenceError").text("");  
        // console.log("good morning");
        $("#referenceError").text(""); 
    }
    if(total_no_puja.trim() ===""){
        
        $('#total_no_puja').addClass('border-danger');
        $("#total_no_pujaError").text("Reference ID is required");  
        isValid = false;
    }else if(!regEx.test(total_no_puja)){
        $('#total_no_puja').addClass('border-danger');
        $("#total_no_pujaError").text("Only numbers");  
        isValid = false;
    }
    else{
        $("#total_no_pujaError").text("");
        $('#total_no_puja').removeClass('border-danger');
    isValid = true;
}
var isLanguage_preference = $(".Language_preference:checked").length ;
if(isLanguage_preference < 1){
    isValid = false;
     $('#Language_preferenceError').text('Expertise in puja is required');
    }
    else{
       isValid = true; 
    $('#Language_preferenceError').text('');
}
if(isValid){
    $('#pills-last-tab').addClass('show active');
    $('#pills-last').addClass('show active');
    $('#pills-contact-tab').removeClass('show active');
    $('#pills-contact').removeClass('show active');
    $('.rangeid').addClass('range-color4');
    $('.rangeid').removeClass('range-color3');
    $('.ch3').removeClass('d-none');
}
});
});

$(document).ready(function(){
    $('input[name="passport"]').on('click', function() {
        var selectedValue = $('input[name="passport"]:checked').val();
        if (selectedValue === 'pass_yes') {
            $('#seleiectFld').prop('disabled', true);
            console.log('my name');
        }
        else 
        {
            $('#seleiectFld').prop('disabled', false);  
            console.log('your name')
        }
    });
});

$(document).ready(function() {
    var previousWord = "";
  
    $("#extrapuja").keyup(function(event) {
      var inputValue = $(this).val().trim();
  
      if (event.keyCode === 32 || event.keyCode === 13) { 
        if (inputValue !== '') {
          addWord(inputValue);
          previousWord = inputValue;
          $(this).val('');
        }
      } else if (event.keyCode === 8) { 
        if (inputValue === '') {
          removeLastWord();
          $(this).val(previousWord);
        }
      }
    });
  
    $("#wordContainer").on("click", ".remove-cross", function() {
      $(this).parent().remove();
    });
  });
  
  function addWord(word) {
    var redBox = $("<div>").addClass("red-box").text(word);
    var removeCross = $("<span>").addClass("remove-cross").text("x");
    redBox.append(removeCross);
    $("#wordContainer").append(redBox);
  }
  
  function removeLastWord() {
    $("#wordContainer").children().last().remove().delete();
  }
 
  // pandit for extra puja end js 
  $('.Pujacarousel').owlCarousel({
    loop: true,

    nav: true,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },

      1200: {
        items: 3
      },
      1400: {
        items: 4
      }
    }
  })
  $('.videocon_iteam').owlCarousel({
    loop: true, 
    nav: true,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
    500:{
        items: 3
      }
    }
  })
  $('.testimonial_carousel').owlCarousel({
    loop: true,
    nav: true,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      }

    }
  })

$('.custom-owl-prev').click(function () {
  // Find the data-carousel-id of the clicked previous button
  var carouselId = $(this).closest('.custom-owl-controls').data('carousel-id');
  
  // Find the carousel associated with the data-carousel-id
  var carousel = $('.owl-carousel[data-carousel-id="' + carouselId + '"]');
  
  // Trigger the 'prev.owl.carousel' event only for that carousel
  carousel.trigger('prev.owl.carousel');
});

$('.custom-owl-next').click(function () {
  // Find the data-carousel-id of the clicked next button
  var carouselId = $(this).closest('.custom-owl-controls').data('carousel-id');
  
  // Find the carousel associated with the data-carousel-id
  var carousel = $('.owl-carousel[data-carousel-id="' + carouselId + '"]');
  
  // Trigger the 'next.owl.carousel' event only for that carousel
  carousel.trigger('next.owl.carousel');
});

document.addEventListener("DOMContentLoaded", function () {
  // Click event for the button with ID "dnone"
  var dnoneButton = document.getElementById("dnone");
  var firstModal = document.getElementById("firstModal");
  var secModal = document.getElementById("secondModal");
  var secbtn = document.getElementById("secBtn")
  var primium = document.getElementById("premium")
  var primiumBtn = document.getElementById("premiumBtn")
  var login = document.getElementById("logIn")



  if (dnoneButton && firstModal) {
    dnoneButton.addEventListener("click", function () {
      // Hide the "firstModal" element by setting its display property to "none"
      firstModal.classList.add('d-none');
      secModal.classList.remove('d-none');
      secModal.classList.add('d-block');
    });

    if (secbtn && primium && primiumBtn) {
      secbtn.addEventListener('click', function () {
        secModal.classList.remove('d-block');
        secModal.classList.add('d-none');
        primium.classList.remove('d-none');
        primium.classList.add('d-block');
      });
    }

    if (primiumBtn && login) {
      primiumBtn.addEventListener('click', function () {
        primium.classList.remove('d-block');
        primium.classList.add('d-none');
        login.classList.remove('d-none');
        login.classList.add('d-block');
      });
    }
    
    if (loginBtn && planModal) {
      loginBtn.addEventListener('click', function () {
        login.classList.remove('d-block');
        login.classList.add('d-none');
        planModal.classList.remove('d-none');
        planModal.classList.add('d-block');
      });
    }
  }
});

    // Handle item selection
    // dropdownItems.forEach(function (item) {
    //   item.addEventListener('click', function () {
    //     const selectedValue = item.textContent;
    //     searchInput.value = selectedValue;
    //   });
    // });
    

// video carousal code
// const playButton = document.getElementById('playButton');
// const video = document.getElementById('video');
// document.addEventListener('DOMContentLoaded', function () {


//   playButton.addEventListener('click', () => {
//     if (video.paused) {
//       video.play();
//       playButton.style.display = 'none'; // Hide the play button
//     }
//   });

//   video.addEventListener('click', () => {
//     if (!video.paused) {
//       video.pause();
//       playButton.style.display = 'block'; // Show the play button
//     }
//   });
// });
$(document).ready(function() {
  var owl = $('.owl-carousel');

  // Initialize Owl Carousel
  owl.owlCarousel();

  // Handle video thumbnail click
  $('.owl-carousel .item').on('click', function() {
      updateSelectedVideo(this);
  });

  // Handle "Next" button click
  $('.owl-next').click(function() {
      owl.trigger('next.owl.carousel');
      updateSelectedVideo(owl.find('.active .item'));
  });

  // Handle "Previous" button click
  $('.owl-prev').click(function() {
      owl.trigger('prev.owl.carousel');
      updateSelectedVideo(owl.find('.active .item'));
  });

  // Function to update the selected video
  function updateSelectedVideo(item) {
      var videoSrc = $(item).find('video').attr('src');
      var videoText = $(item).find('.video-text').text();
      var videoTitle = $(item).find('h3').text();

      $('#selected-video').attr('src', videoSrc);
      $('.selected-video .video-text').text(videoText);
      $('.selected-video h3').text(videoTitle);
  }

  // Set the initial video to the first video item by default
  updateSelectedVideo(owl.find('.active .item'));
});
function showFaqAns(id) {
  // <!--  -->
  if ($('#ans_' + id).is(':visible')) {

     $('#ans_' + id).slideUp()
     $('#icon_' + id).removeClass('bi-dash').addClass('bi-plus')
  } else {
     $('.faq-content').hide()

     $('#ans_' + id).slideDown()
     $('#icon_' + id).removeClass('bi-plus').addClass('bi-dash')
  }
}






