+ function($) {
  $('.palceholder').click(function() {
    $(this).siblings('input').focus();
  });

  $('.form-control').focus(function() {
    $(this).parent().addClass("focused");
  });

  $('.form-control').blur(function() {
    var $this = $(this);
    if ($this.val().length == 0)
      $(this).parent().removeClass("focused");
  });
  $('.form-control').blur();

  $.validator.setDefaults({
    errorElement: 'span',
    errorClass: 'validate-tooltip'
  });

  $("#formvalidate").validate({
    rules: {
      userName: {
        required: true,
        minlength: 6
      },
      userPassword: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      userName: {
        required: "Please enter username.",
        minlength: "Please enter valid username."
      },
      userPassword: {
        required: "Enter your password",
        minlength: "Incorrect username or password."
      }
    }
  });
}(jQuery);

function upload_func1(){
  window.alert("Hi"); 
}

function onSighnIn(googleUser){
   
    var profile =googleUser.getBasicProfile();
    $(".g-signin2").css("display","none");
    $(".data").css("display","block");
    $(".2data").css("display","none");
    $("#pic").attr('scr',profile.getImageUrl());
    $("#email").text(profile.getEmail());
    $("#uname").text(profile.getName());
  
}

function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        alert("You are successfully signed out");
        $(".g-signin2").css("display","block");
        $(".data").css("display","none")
        $(".2data").css("display","block");
    });
}

async function listFiles() {
    alert("You are successfully signed out");
  let response;
  try {
    response = await gapi.client.drive.files.list({
      'pageSize': 10,
      'fields': 'files(id, name)',
    });
  } catch (err) {
    document.getElementById('content').innerText = err.message;
    return;
  }
  const files = response.result.files;
  if (!files || files.length == 0) {
    document.getElementById('content').innerText = 'No files found.';
    return;
  }
  // Flatten to string to display
  const output = files.reduce(
      (str, file) => `${str}${file.name} (${file.id}\n`,
      'Files:\n');
  document.getElementById('content').innerText = output;
}

