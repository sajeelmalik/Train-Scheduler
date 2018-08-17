# Train-Scheduler

Schedule your next train and see how long you have to wait until it arrives!

* Powered by Javascript, jQuery, Moment.JS, and Firebase!

Further design and updates to come!

## Getting Started

Follow the deployed project link below to utilize the application.

### Deployed Project Link
<!-- make a link to the deployed site -->
 
[Train Scheduler](https://sajeelmalik.github.io/Train-Scheduler)


### Image Preview of Train Scheduler
<!-- take a picture of the image and add it into the readme  -->
![Train Scheduler Preview]( "Train Scheduler")

## Prerequisites

The page can be run from any browser, preferably on Google Chrome!

## Technology Used

* **HTML5**
* **CSS3** 
* **Javascript** - the primary scripting logic powering the game
* **jQuery** - the robust scripting library for Javascript
* [**Firebase**](https://firebase.google.com/) - the online infrastructual database utilized
* [**Moment.js**](https://momentjs.com/docs) - a date-time Javascript library to enable ease of time manipulation
* [**Bootstrap CDN v4.1.0**](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - the open-source web styling framework used
* [**Google Fonts**](https://fonts.google.com/) - an interactive library of licensed fonts 

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Dynamic generation of HTML elements via jQuery is an extremely powerful tool to instantaneously adjust the webpage to the user's interaction with the interface. Here, jQuery interacts with Firebase to push new user entries onto the cloud.

```
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

```

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
* Moment JS allows developers to interact more fluidly with a generally difficult-to-deal-with user input - time
* Firebase is extremely useful for long-term cloud storage of user data


## Authors

* **Sajeel Malik** - *Initial work* - [GitHub](https://github.com/sajeelmalik)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details