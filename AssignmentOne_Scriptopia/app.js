
//app
var currentRoom = "start"; //keeping track of the current room
var commands = ["cleaning", "homework", "assignments", "inventory", "dishes",, "bed", "done"];
var inventory = ["headphones(for focus)", "ipad(for research), "];


function changeRoom(dir) { //go to direction
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir]
        $('#gameText').append("<p>" + rooms[currentRoom].description + "</p>");
    } else {
        $('#gameText').append("<p>You cannot go that way!</p>");
    }


}

function showHelp() {
    $('#gameText').append("<p>Here are the possible commands (say 'do' before the command): </p>");
    $('#gameText').append("<p><ul>");
    for (var i = 0; i < commands.length; i++) {
        $('#gameText').append("<li>" + commands[i] + "</li>");
    }
    $('#gameText').append("</ul></p>");
    

}

function showInventory() {
    if (inventory.length === 0) {
        $('#gameText').append("<p>You are not carrying anything!</p>");
        return;
    }
    $('#gameText').append("<p>Here is your inventory: </p>");
    $('#gameText').append("<p><ul>");
    for (var i = 0; i < inventory.length; i++) {
        $('#gameText').append("<li>" + inventory[i] + "</li>");
    }
    $('#gameText').append("</ul></p>");

}

function playerInput(input) {
    var command = input.split(" ")[0]; 
    //converts to an array from string - and then forget
    switch (command) {
        case "do": 
            var dir = input.split(" ")[1];
            changeRoom(dir);
            break;
        case "help":
            showHelp();
            break;
        case "inventory": //tasks?
            showInventory();
            break;
        default:
            $('#gameText').append("<p>Invalid command!</p>");
    }
}

$(document).ready(function() {
    $('#gameText').append("<p>" + rooms.start.description + "</p>");

    $(document).keypress(function(key) { 
        //go to function player input, thake this when you go
        if (key.which === 13 && $('#userInput').is(':focus')) {
            var value = $('#userInput').val().toLowerCase();
            $('#userInput').val("");
            playerInput(value);
        }
    })


})


//details

var rooms = {
    "start": {
        "description": "You wake up and set out to start your day todays tasks are <b>cleaning</b>\
     and <b>homework</b>",
        "directions": {       //moves you to the matching stage
            "cleaning": "kitchen",
            "homework": "desk"
        }
    },
    "kitchen": {
        "description": "In the kitchen you notice many tasks to do <b>dishes</b>\
      , will you continue or go back to <b>start</b>?",
        "directions": {
            "start": "start",
            "dishes": "sink",
            // "meals": "counters"
        }
    },
    "sink": {
        "description": "This is a hard task to do, I am proud of you!\
     type <b>done<b/> to finish",
        "directions": {
            "start": "start",
            // "meals": "counters",
            "homework": "desk",
            "done": "Congradulations"
        }
    },
    // "counters": {
    //     "description": "You can only do your meal prep once the dishes are done\
    //  can you go back to <b>sart</b> ?",
    //     "directions": {
    //         "start": "start",
    //         "meals": "counters",
    //         "homework": "desk",
    //         "done" : "Congradulations"
    //     }
    // },
    "desk": {
        "description": "Your homework is hard and long, <b>start</b> over or continue to <b>assignments</b>",
        "directions": {
            "start": "start",
            "assignments": "assignments"
        }
    },
    "assignments": {
        "description": "You have a long task ahead, you can go back to <b>start</b>, go back to <b>bed</b>, or put on <b>headphones</b> and get that assigment done!",
        "directions": {
            "bed": "bed",
            "headphones" : "headphones",
            "start" : "start",

        }
    },
    "headphones": {
        "description": "Your headphones gave you everything you needed to finish that assigment, type <b>done</b>! to finish",
        "directions": {
            "done": "Congradulations"
        }
    },
    "bed": {
        "description": "You have failed to accomplish anything game over, go back to <b>start</b>",
        "directions": {
            "start": "start"
        }
    },
    "Congradulations": {
        "description": "You Did it you made it though your day!! type <b>start</b> to start over",
        "directions": {
            "start": "start"
        }
    }
}