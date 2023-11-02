$('#owlProfile').owlCarousel({
  autoWidth: true,
  dots: false,
  loop: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3,
    }
  }
});
$('#owl-reviews').owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      dots: true,
      items: 1
    },
    600: {
      dots: true,
      items: 2
    },
    1000: {
      items: 3,
      dots: false,

    }
  }
});
var thumbnails = document.getElementById("owlProfile");
var imgs = document.querySelectorAll(".item .img-circle img");
var main = document.querySelector("#main img");
// var i = 0;

for (let i = 0; i < imgs.length; i++) {
  let img = imgs[i];

  img.addEventListener("click", function () {
    main.src = this.src;
  });
}
const imgCircleButtons = document.querySelectorAll(".img-circle");
// Add a click event listener to each "img-circle" button
imgCircleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the "border-dashed" class from all "img-circle" buttons
    imgCircleButtons.forEach((btn) => {
      btn.classList.remove("border-dashed");
    });

    // Add the "border-dashed" class to the clicked button
    button.classList.add("border-dashed");
  });
});

$(document).ready(function(){
  $("#creditcard-form-btn").click(function(){
    var cardNumber = $("#cardNumber").val();
        var cardholderName = $("#cardholderName").val();
        var expiryDate = $("#expiryDate").val();
        var cvv = $("#cvv").val();
        var upiPin = $("#upiPin").val();
    
        var cardNumberPattern = /^\d{16}$/; // 16 digits
        var cardholderNamePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
        var expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
        var cvvPattern = /^\d{3}$/; // 3 digits
        var upiPinPattern = /^\d{4,6}$/;
        var checkBox = $("#check-out-dis").is(":checked");
    
        var isValid = true;
    
        if (!cardNumber.match(cardNumberPattern)) {
          $("#cardNumbererror").text("Invalid card number. It should be a 16-digit number.");
          $("#cardNumber").addClass("border-danger");
          isValid = false;
        }
        else{
          $("#cardNumbererror").text("");
          $("#cardNumber").removeClass("border-danger");

        }
    
        if (!cardholderName.match(cardholderNamePattern)) {
          $("#cardholderNameerror").text("Invalid cardholder name. Use only letters and spaces.");
          $("#cardholderName").addClass("border-danger");
          isValid = false;
        }else{
          $("#cardholderNameerror").text("");
          $("#cardholderName").removeClass("border-danger");

        }
        
        if (!expiryDate.match(expiryDatePattern)) {
          $("#expiryDateerror").text("Invalid expiry date. Use MM/YY format.");
          $("#expiryDate").addClass("border-danger");
          isValid = false;
        }else{
          $("#expiryDateerror").text("");
          $("#expiryDate").removeClass("border-danger");

        }
        
        if (!cvv.match(cvvPattern)) {
          $("#cvverror").text("Enter 3-digit number.");
          $("#cvv").addClass("border-danger");
          
          isValid = false;
        }else{
          $("#cvverror").text("");
          $("#cvv").removeClass("border-danger");
        }
        if (!upiPin.match(upiPinPattern)) {
          $("#upiPinerror").text("Invalid UPI PIN. It should be a 4 to 6-digit number.");
          $("#upiPin").addClass("border-danger");
          
          isValid = false;
        }else{
          $("#upiPinerror").text("");
          $("#upiPin").removeClass("border-danger");
        }
      if(!checkBox){
       
        $(".check-out-dis").addClass("text-danger");
      }else{
        $(".check-out-dis").removeClass("text-danger");
      }
        if (!isValid) {
          isValid = true;
          event.preventDefault(); // Prevent form submission
         
        }
  });
  });
$(document).ready(function(){
  $("#creditcard-form-btn1").click(function(){
        var upiPin = $("#upiPin1").val();
        var checkBox = $("#check-out-dis1").is(":checked");
        var upiPinPattern = /^\d{4,6}$/;
        var isValid = true;
        if (!upiPin.match(upiPinPattern)) {
          $("#upiPinerror1").text("Invalid UPI PIN. It should be a 4 to 6-digit number.");
          $("#upiPin1").addClass("border-danger");
          
          isValid = false;
        }else{
          $("#upiPinerror1").text("");
          $("#upiPin1").removeClass("border-danger");
        }
      if(!checkBox){ 
        $(".check-out-dis1").addClass("text-danger");
      }else{
        $(".check-out-dis1").removeClass("text-danger");
      }
        if (!isValid) {
          isValid = true;
          event.preventDefault(); 
        }
  });
  });
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
  $("#puja-card[data-carousel-id='9']").owlCarousel({
    items: 4,
    loop: true,
  });
  // Custom button next for the first carousel
  $("#custom-button-next[data-carousel-id='9']").click(function () {
    $("#puja-card1[data-carousel-id='9']").trigger("next.owl.carousel");
  });

  // Custom button previous for the first carousel
  $("#custom-button-per[data-carousel-id='9']").click(function () {
    $("#puja-card1[data-carousel-id='9']").trigger("prev.owl.carousel");
  });
//   $(document).ready(function () {
//     const carousel = $("#puja-card");
    
//     // Custom button next
//     $("#custom-button-next").click(function () {
//       carousel.trigger("next.owl.carousel");
//       console.log("yes");
//     });
    
//     // Custom button previous
//     $("#custom-button-per").click(function () {
//       carousel.trigger("prev.owl.carousel");
//       console.log("yes");
//     });
//   });
  $('#testimonal').owlCarousel({

    loop:true,
    margin:100,
    nav:true,
   center:true,
    responsive:{
  
        0:{
            items:1
        },
  
        640:{
            items:2
        },
        1200:{
            items:3
        }
        
    }
  });



$('.custom-owl-prev').click(function () {
  // Find the data-carousel-id of the clicked previous button
  var carouselId = $(this).closest('.custom-owl-controls').data('carousel-id');
  
  // Find the carousel associated with the data-carousel-id
  var carousel = $('.owl-carousel[data-carousel-id="' + carouselId + '"]');
  
  // Trigger the 'prev.owl.carousel' event only for that carousel
  carousel.trigger('prev.owl.carousel');
});

$('.custom-owl-next').click(function () {
  
  var carouselId = $(this).closest('.custom-owl-controls').data('carousel-id');
  console.log(carouselId);
  var carousel = $('.owl-carousel[data-carousel-id="' + carouselId + '"]');
  carousel.trigger('next.owl.carousel');
});


document.addEventListener("DOMContentLoaded", function () {
    var dnoneButton = document.getElementById("results");
    // var dnoneButton1 = document.getElementById("dropdown");
    // var firstModal = document.getElementById("firstModal");
    var secModal = document.getElementById("secondModal");
    $(dnoneButton).click(function(){
        secModal.classList.remove('d-none');
        secModal.classList.add('d-block');
       
        $("#results").addClass("d-none");
        
    });
    $("#search-input").click(function(){
        $("#results").removeClass("d-none");
    });
   
});
document.addEventListener("DOMContentLoaded", function () {
    var dnoneButton = document.getElementById("results1");
    // var dnoneButton1 = document.getElementById("dropdown");
    // var firstModal = document.getElementById("firstModal");
    var secModal = document.getElementById("secondModal");
    $(dnoneButton).click(function(){
      
       
        $("#results1").addClass("d-none");
        
    });
    $("#search-input1").click(function(){
        $("#results1").removeClass("d-none");
    });
   
});
$(document).ready(function(){
    $("#back-btm").addClass("d-none");
    $(".pooja-title").addClass('d-none');
    $('#adv_search-con1').addClass('d-none');
    $("#puja-next").click(function(){
        event.preventDefault();
        var selectedDate = new Date($("#dateInput").val());
        if (!selectedDate || isNaN(selectedDate)) {
          
            $('#wantpoojaError').text('Please select the data of pooja');
          }else {
            var today = new Date();
            var minAllowedDate = new Date(today);
            minAllowedDate.setDate(today.getDate() + 2); // Set the minimum allowed date to be 2 days in the future.
        
            if (selectedDate < minAllowedDate) {
                 $('#wantpoojaError').text('Please provide a date starting from the day after tomorrow');
        } else {
                $('#wantpoojaError').text('');
                $('#premium').removeClass('d-none');
                $('#secondModal').addClass('d-none');
                $('#adv_search-con').addClass('d-none');
                $(".Freemium").addClass('d-none');
                $(".pooja-title").removeClass('d-none');
                $("#back-btm").removeClass('d-none');
            }
          }
    
    });
    $(".pooja-title").click(function(){
        $("#adv_search-con1").removeClass("d-none");
        $(".pooja-title").addClass("d-none");
    });
    $("#results1").click(function(){
        $(".pooja-title").removeClass("d-none");
        $("#adv_search-con1").addClass("d-none");
    });
    $("#back-btm").click(function(){
        if($('#premium').hasClass('d-none')){
            $('#premium').removeClass('d-none');
            $("#planModal").addClass("d-none");
         
        }else{
            $('#secondModal').removeClass('d-none');
            $("#back-btm").addClass('d-none');
            $(".Freemium").removeClass('d-none');
            $(".pooja-title").addClass('d-none');
            $('#premium').addClass('d-none');
            $('#adv_search-con').removeClass('d-none');
        }
    });
    $("#cont-Freemium-btn").click(function(){
        $("#planModal").removeClass("d-none");
        $('#premium').addClass('d-none');
    });
    $(".plan-select-item").focus(function(){
        $("#continue-billing").removeClass('disabled');
    });
});
// document.addEventListener("DOMContentLoaded", function () {
//     // Click event for the button with ID "dnone"
//     var dnoneButton = document.getElementById("results");
//     var firstModal = document.getElementById("firstModal");
//     var secModal = document.getElementById("secondModal");
//     var secbtn = document.getElementById("secBtn")
//     var primium = document.getElementById("premium")
//     var primiumBtn = document.getElementById("premiumBtn")
//     var login = document.getElementById("logIn")
  
  
  
//     if (dnoneButton && firstModal) {
//       dnoneButton.addEventListener("click", function () {
//         // Hide the "firstModal" element by setting its display property to "none"
//         // firstModal.classList.add('d-none');
//         secModal.classList.remove('d-none');
//         secModal.classList.add('d-block');
//       });
  
//       if (secbtn && primium && primiumBtn) {
//         secbtn.addEventListener('click', function () {
//           secModal.classList.remove('d-block');
//           secModal.classList.add('d-none');
//           primium.classList.remove('d-none');
//           primium.classList.add('d-block');
//         });
//       }
  
//       if (primiumBtn && login) {
//         primiumBtn.addEventListener('click', function () {
//           primium.classList.remove('d-block');
//           primium.classList.add('d-none');
//           login.classList.remove('d-none');
//           login.classList.add('d-block');
//         });
//       }
      
//       if (loginBtn && planModal) {
//         loginBtn.addEventListener('click', function () {
//           login.classList.remove('d-block');
//           login.classList.add('d-none');
//           planModal.classList.remove('d-none');
//           planModal.classList.add('d-block');
//         });
//       }
//     }
//   });
//    

    // Handle item selection
    // dropdownItems.forEach(function (item) {
    //   item.addEventListener('click', function () {
    //     const selectedValue = item.textContent;
    //     searchInput.value = selectedValue;
    //   });
    // });
    

// video carousal code

$(document).ready(function () {
    $('.limited-paragraph').each(function () {
        const words = $(this).text().split(' ');

        if (words.length > 15) {
            $(this).text(words.slice(0, 15).join(' ') + '...');
        }
    });
});
var splide = new Splide( '#first-cards', {

    // type   : 'loop',
  perPage: 4,

  breakpoints: {
      // Change the number of slides at different viewport widths
      1200:{
        perPage: 3,
      },
      768: {
        perPage: 2, // Number of slides to show on tablets
      },
      480: {
        perPage: 1, // Number of slides to show on smaller screens
      },
    },
  }).mount();
 
var splide = new Splide( '#sec', {

    type   : 'loop',
  perPage: 3,
  focus  : 'center',
 
  breakpoints: {
     
   
      960: {
        perPage: 1, 
      },
    },
  }).mount();
var splide = new Splide( '#sec1', {

    type   : 'loop',
  perPage: 1,
  focus  : 'center',

  breakpoints: {
      // Change the number of slides at different viewport widths
   
    
    },
  }).mount();


// Handle click events on video items
// ++++++++++++++++++++++++++++++++++++++++++++ video start
$('.video-con').on('click', function () {

    var videoUrl = $(this).find('video').attr('src');
    var videoText = $(this).find('.none-selected-text').text();
    var selectedVideo = $('#selected-video');
    var videoTextElement = $('.video-text-select');

    selectedVideo.attr('src', videoUrl);
    videoTextElement.text(videoText);

  

  });

  $(document).ready(function() {
    const video = document.getElementById("selected-video");
    const playPauseButton = $("#playPauseButton");

    playPauseButton.on("click", function() {
      if (video.paused) {
        video.play();
        playPauseButton.html("&#9656;");
        $('#playPauseButton').addClass("d-none");

      } else {
        video.pause();
        playPauseButton.html("&#9656;");
      }
    });
  
    $(video).on("click", function() {
        if (video.paused) {
          video.play();
          $('#playPauseButton').addClass("d-none");  
        } else {
            video.pause();
            $('#playPauseButton').removeClass("d-none");  
        }
      });
     
    });
 
    $(document).ready(function() {
        const video = $("#selected-video")[0]; // Get the video element
  
        $("#full-screen-button").on("click", function() {
          if (!document.fullscreenElement) {
            video.requestFullscreen();
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            }
          }
        });
      });
// ++++++++++++++++++++++++++++++++++++++++ end video
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}


// profile img 

// $(document).ready(function() {
//   $("#creditcard-form-btn").click(function(event) {
//     var cardNumber = $("#cardNumber").val();
//     var cardholderName = $("#cardholderName").val();
//     var expiryDate = $("#expiryDate").val();
//     var cvv = $("#cvv").val();

//     var cardNumberPattern = /^\d{16}$/; // 16 digits
//     var cardholderNamePattern = /^[A-Za-z\s]+$/; // Only letters and spaces
//     var expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
//     var cvvPattern = /^\d{3}$/; // 3 digits

//     var isValid = true;

//     if (!cardNumber.match(cardNumberPattern)) {
//       alert("Invalid card number. It should be a 16-digit number.");
//       isValid = false;
//     }

//     if (!cardholderName.match(cardholderNamePattern)) {
//       alert("Invalid cardholder name. Use only letters and spaces.");
//       isValid = false;
//     }

//     if (!expiryDate.match(expiryDatePattern)) {
//       alert("Invalid expiry date. Use MM/YY format.");
//       isValid = false;
//     }

//     if (!cvv.match(cvvPattern)) {
//       alert("Invalid CVV. It should be a 3-digit number.");
//       isValid = false;
//     }

//     if (!isValid) {
//       isValid = true;
//       event.preventDefault(); // Prevent form submission
//     }
//   });
// });







