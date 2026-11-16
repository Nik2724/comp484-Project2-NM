$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.rub-button').click(clickedBellyRubButton);
  

  /*Added siblings() to allow it so only the most recent used button will be higlighted green, since siblings() retunrs every element that shares the same parent as the element that its called on, but excluding the element itself.  */
    
  $('.button-container button').click(function() {
    $(this).addClass('active').siblings().removeClass('active');

    var uses = ($(this).data('uses') ||0) +1;
  $(this).data('uses', uses);

  var total = 0;
  $('.button-container button').each(function() {
    total += $(this).data('uses') || 0;
  });
  $('.actions-count').text(total);
  })
  
  /* Added data() allows each button to remember how many times it was clicked which allows for total of actions used to be shown.
  */ 
});

    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Niko", weight: 30, happiness: 50};
    var MAX_HAPPINESS = 100;

    function clickedTreatButton() {
      // Increase pet happiness
      // Increase pet weight
      pet_info.happiness += 5;
      pet_info.weight += 2;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("Fish! Nom nom nom!");
      animatePet('hop');
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      // Decrease pet weight
      pet_info.happiness += 8;
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("Splash! Throw the ball!");
      animatePet('hop');
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
      pet_info.happiness -= 6;
      pet_info.weight -= 2;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("So tired... need a nap.");
      animatePet('shake');
    }

   function clickedBellyRubButton() {
      // Increase pet happiness
      pet_info.happiness += 4;
      checkAndUpdatePetInfoInHtml();
      showPetMessage("Rub mah bellah!");
      animatePet('fade');
    }
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight < 0) {
        pet_info.weight = 0;
      }
      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }
      if (pet_info.happiness > MAX_HAPPINESS) {
        pet_info.happiness = MAX_HAPPINESS;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  
    //notification for meesage with delayso rapid clicks dont overlap or stack up
  function showPetMessage(message) {
    $('.pet-message').stop(true,true).text(message).fadeIn(200).delay(2000).fadeOut(400);
  }

  //small animation for the pet image per what action clicked 
  function animatePet(type) {
    var $img = $('.pet-image').stop(true,true);
    if (type === 'hop') {
      $img.animate({marginTop: '-20px'}, 120).animate({marginTop: '0px'}, 120);
    } else if (type === 'shake') {
      $img.animate({marginLeft: '-12px'}, 60).animate({marginLeft: '12px'}, 60).animate({marginLeft: '-12px'}, 60).animate({marginLeft: '0px'}, 60);
    }else{
      $img.fadeTo(300,0.5).fadeTo(300,1);
    }
  }