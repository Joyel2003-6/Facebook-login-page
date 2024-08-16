//code is made by joyel thomas
$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6,
                useSpecial:true
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            Gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Enter atleast 4 characters"
            },
            sname:{
                required:"Enter second name",
                minlength:"Enter atleast 4 characters"
            },
            emailAddress:{
                required:"Enter valid email"
            },
            password:{
                required:"Enter min 4 characters"
                
            },
           
            day:{
                required:"Enter day"
            },
            month:{
                required:"Enter month"
            },
            year:{
                required:"Enter year"
            },
            Gender:{
                required:"Enter gender"
            }

        }
       
    })
})
