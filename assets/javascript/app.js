// Sajeel Malik
// adapted from Employee Data Collector


//obtain database from Firebase

var config = {
    apiKey: "AIzaSyBAVYiQ_exo0N08WlDuvVZ9ZDh3iWV95Bs",
    authDomain: "first-demo-69b97.firebaseapp.com",
    databaseURL: "https://first-demo-69b97.firebaseio.com",
    projectId: "first-demo-69b97",
    storageBucket: "first-demo-69b97.appspot.com",
    messagingSenderId: "251102785219"
  };
  firebase.initializeApp(config);

//initialize local pointer to database
var database = firebase.database();

//create an array of "children" to enable precise deletion later
var childArray = [];

$(document).ready(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();

        var name = $("#name").val().trim();
        var destination = $("#destination").val().trim();
        var trainTime = $("#trainTime").val().trim();
        console.log(trainTime);
        var frequency = $("#frequency").val().trim();

        database.ref().push({
            name: name,
            destination: destination,
            trainTime: trainTime,
            frequency: frequency
        })
        $("#form").trigger("reset");
    });

    var counter = 0;
    database.ref().on("child_added", function (snapshot){
        console.log(snapshot);
        console.log(snapshot.ref_.path.pieces_[0]);

        //create a variable tied to the specific ID of each firebase directory
        var child = snapshot.ref_.path.pieces_[0];
        childArray.push(child);
        var name = snapshot.val().name;
        var destination = snapshot.val().destination;
        var trainTime = snapshot.val().trainTime
        var current = moment().format("HH:mm");
        trainTime = moment(trainTime, "hmm").format("HH:mm");
        var frequency = snapshot.val().frequency
        var nextArrival = trainTime;

        console.log("Pre loop " + nextArrival)

        var minutesAway = moment(nextArrival, "HH:mm").diff(moment(current), "minutes");
        do{
            nextArrival = moment(nextArrival, "HH:mm").add(frequency, "minutes");
            nextArrival = moment(nextArrival).format("HH:mm");
            minutesAway = moment(nextArrival, "HH:mm").diff(moment(current), "minutes");

        }
        while(minutesAway < 0);

        console.log("Pre loop " + nextArrival)
        

        
     
        counter++;

        $("#tbody").append(
            "<tr id='row" + counter + "'><td>" + name + "</td><td>" +
            destination + "</td><td>" +
            frequency + "</td><td>" +
            nextArrival + "</td><td>" +
            minutesAway + "</td><td> <button class='clearButton' data-counter='" + counter + "'>Delete</button></tr>");

    });

    //on-click function that searches for the specific counter number of the row clicked and passes that as an index to the childArray, which lets us reference a firebase directory
    $(document).on("click", ".clearButton", function(){

        var counter = $(this).attr("data-counter");
        database.ref(childArray[counter]).remove();
        $("#row" + counter).empty();
   
    });


});