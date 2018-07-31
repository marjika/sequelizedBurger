// $(document).ready(function() {
//     $(".create-form").on("submit", function(event) {
//         event.preventDefault();
//         if ($("#burgs").val().trim()==="") {
//             location.reload();
//         }
//         else {
//             var newBurger = {
//                 burgerName: $("#burgs").val().trim(),
//                 devoured: false
//             };
//             // Send the POST request.
//             $.ajax("/api/burgers", {
//                 type: "POST",
//                 data: newBurger
//             }).then(
//                 function() {
//                     console.log("created new burger");
//                     // Reload the page to get the updated list
//                     location.reload();
//                 }
//             );
//         }
//     });

// });