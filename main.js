$(function (){

  var $signupquestions = $('#signupquestions');

  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/signupquestions',
    success: function(signupquestions){
      $.each(signupquestions, function(i, signupquestion) {
        $signupquestions.append(signupquestion.Question + signupquestion.Answer);
      });
    }
  });
});
