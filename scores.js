  function onSubmit(){
      var score = 0;
      var numOfQuestions = 10;
      var ansArr = ['a', 'a', 'a', 'a', 'c', 'b', 'b', 'c', 'b', 'b'];

      var q1 = document.forms['quiz']['q1'].value;
      var q2 = document.forms['quiz']['q2'].value;
      var q3 = document.forms['quiz']['q3'].value;
      var q4 = document.forms['quiz']['q4'].value;
      var q5 = document.forms['quiz']['q5'].value;
      var q6 = document.forms['quiz']['q6'].value;
      var q7 = document.forms['quiz']['q7'].value;
      var q8 = document.forms['quiz']['q8'].value;
      var q9 = document.forms['quiz']['q9'].value;
      var q10 = document.forms['quiz']['q10'].value;

      for(var i=1; i<=numOfQuestions; i++){
        if(eval('q'+i) == ''){
          alert("You missed question number " + i);
        }
      }
      for(var i=1; i<=numOfQuestions; i++){
        if(eval('q'+i) == ansArr[i-1]){
          score++;
        }
      }

      var results = document.getElementById('results');
      results.innerHTML="<h2>You scored " + score + " points out of " + numOfQuestions+"</h2>"
    if(score > 9){
        window.location.href = "http://localhost:3000/add-listener.html";
    }
      else{
        alert("You failed the test");
        window.location.href = "http://localhost/FriendsInNeed/";

      }
     return false;
     }
