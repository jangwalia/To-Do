//Checking of the things done by line through
$("ul").on("click","li", function(){
    $(this).toggleClass("completed");
});

//press X to remove the items
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

//Enter the value of input in list

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
       var to_do =  $(this).val();
       $(this).val("");
       $("ul").append('<li> <span> <i class="fas fa-trash-alt"></i> </span>' + to_do + '</li>');
    }
})

$(".add").click(function(){
    $('input').fadeToggle();
})