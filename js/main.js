
var current_card = ""
var selected_option = "" 
var key = "" 
var value = "" 
flashcard_array = [
    {key: "2 + 2", value: "4"},
    {key: "3 + 3", value: "6"},
    {key: "4 + 4", value: "8"},
    {key: "5 + 5", value: "10"},
    {key: "6 + 6", value: "12"},
    {key: "7 + 7", value: "14"},
    {key: "8 + 8", value: "16"},
]


$("#study").click(function() {
    current_card = flashcard_array[Math.floor(Math.random() * flashcard_array.length)];
    $(".flashcard_section").text(current_card.key)
})
//allows me to switch back and forth between the front and back of the card
$("#flip").click(function() {
    if ($(".flashcard_section").text() == current_card.key) {
        $(".flashcard_section").text(current_card.value)
    }
    else {
        $(".flashcard_section").text(current_card.key)
    }
}) 
//where I grab what the user enters and push it into the array
//I'm also trying to get it to recognize that if the items already have an ID
//then push that edited item back to the same place in the array
$("#submit").click(function() {
    key = $("#front").val();
    value = $("#back").val();
   
    if ($("#card_options2 option:selected").text() !== null ) {
        flashcard_array.splice([(selected_option - 1)], 1, {key, value})
        // $("#card_options2 option[value = '" + (selected_option) + "']").remove()
        // append('<option>' + (selected_option - 1) + ") " + key + '</option>')
        $("#card_options2 option").eq(selected_option).text((selected_option) + ") " + key)
        $("#card_options option").eq(selected_option).text((selected_option) + ") " + key)
        $("#front").val("");
        $("#back").val("");
        debugger 
    } else  {
        flashcard_array.push({key, value});  
        //this clears the input boxes 
        $("#front").val("");
        $("#back").val("");
        //this puts new options onto the array when they're created 
        $('#card_options').append('<option>' + key + '</option>');
        $('#card_options2').append('<option>' + key + '</option>');
    } 
    
   


})
//this is where I append all of my array items onto the dropwdowns 
$.each(flashcard_array, function(index, flashcard) {
    $('#card_options').append('<option>' + (index+1) + ") " + flashcard.key + '</option>');
    $('#card_options2').append('<option>' + (index+1) + ") " + flashcard.key + '</option>'); 
});
//where I'm trying to have the create/edit boxes fill with array info 
//based on the option you choose 
$( "#card_options2" ).change(function() {
    selected_option = $( "#card_options2 option:selected" ).index()
        $("#front").val(flashcard_array[(selected_option - 1)].key);
        $("#back").val(flashcard_array[(selected_option - 1)].value);  
    });

// $( "#card_options2" ).change(function() {
//     $("#front").val(card.key); 
//     $("#back").val(card.value);
// })
