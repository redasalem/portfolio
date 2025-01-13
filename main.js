$(window).scroll(function(){
    if($(this).scrollTop()>=200){
        $("#navbar").addClass("notransparent");
    }else{
        $("#navbar").removeClass("notransparent");
        
    }
});

 $(document).ready(function(){
    $('.circle').circleProgress({
         startAngle:-Math.PI/2,
         fill:{color:'#0575e6'}
     }).on('circle-animation-progress',function(event,progress,stepValue){
         $(this).find('span').html(Math.round(stepValue*100)+'%');
     })
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()



  
