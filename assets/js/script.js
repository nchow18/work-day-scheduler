var tasksdescription = {};

var loadTasks = function() {
    tasksdescription = JSON.parse(localStorage.getItem("tasksdescription"));

    // if(!tasksdescription) {
    //     tasksdescription = {
    //         toDo: ["9AM - Enter Hourly Task Here", 
    //         "10AM - Enter Hourly Task Here", 
    //         "11AM - Enter Hourly Task Here", 
    //         "12PM - Enter Hourly Task Here", 
    //         "1PM - Enter Hourly Task Here", 
    //         "2PM - Enter Hourly Task Here", 
    //         "3PM - Enter Hourly Task Here", 
    //         "4PM - Enter Hourly Task Here", 
    //         "5PM - Enter Hourly Task Here"]
    //     };
    // }

    if(!tasksdescription) {
        tasksdescription = {
            toDo: ["", 
            "", 
            "", 
            "", 
            "", 
            "", 
            "", 
            "", 
            ""]
        };
    }

    var printTask0 = tasksdescription.toDo[0];
    var printTask1 = tasksdescription.toDo[1];
    var printTask2 = tasksdescription.toDo[2];
    var printTask3 = tasksdescription.toDo[3];
    var printTask4 = tasksdescription.toDo[4];
    var printTask5 = tasksdescription.toDo[5];
    var printTask6 = tasksdescription.toDo[6];
    var printTask7 = tasksdescription.toDo[7];
    var printTask8 = tasksdescription.toDo[8];

    
    // prints to 9am
    document.getElementById("0-toDo").value = printTask0;
    // prints to 10am
    document.getElementById("1-toDo").value = printTask1;
    // prints to 11am
    document.getElementById("2-toDo").value = printTask2;
    // prints to 12pm
    document.getElementById("3-toDo").value = printTask3;
    // prints to 1pm
    document.getElementById("4-toDo").value = printTask4;
    // prints to 2pm
    document.getElementById("5-toDo").value = printTask5;
    // prints to 3pm
    document.getElementById("6-toDo").value = printTask6;
    // prints to 4pm
    document.getElementById("7-toDo").value = printTask7;
    // prints to 5pm
    document.getElementById("8-toDo").value = printTask8;
        

    //loop over object properties
    $.each(tasksdescription, function(list, arr) {
        console.log(list, arr);
        })
}

var saveTasks = function() {
    localStorage.setItem("tasksdescription", JSON.stringify(tasksdescription));
}

// task text clicked
$(".description").on("click", "textarea", function() {
    //get current text of p element
    var text = $(this)
        .text()
        .trim();

    //replace p element with new text
    var textInput = $("<textarea>")
        .addClass("newtext")
        .val(text);
        $(this).replaceWith(textInput);

    //auto focus new element/close current
    textInput.trigger("focus");
});

//save button-0 clicked
$("#btn-toDo-0").click(function() {
    var description = $("#0-toDo").val();

    var status = $("#0-toDo")
        .closest("#0-toDo")
        .attr("id")
        .replace("0-", "")
    var index = $(this)
        .attr("id")
        .replace("btn-toDo-", "")

    console.log(description);
    console.log(status);
    console.log(index);

    if (description) {
        tasksdescription[status][index] = description;
        document.getElementById(index + "-toDo").value = tasksdescription.toDo[index];
    }
    
    saveTasks();
})

//save button-1 clicked
$("#btn-toDo-1").click(function() {
    var description = $("#1-toDo").val();

    var status = $("#1-toDo")
        .closest("#1-toDo")
        .attr("id")
        .replace("1-", "")
    var index = $(this)
        .attr("id")
        .replace("btn-toDo-", "")

    console.log(description);
    console.log(status);
    console.log(index);

    if (description) {
        tasksdescription[status][index] = description;
        document.getElementById(index + "-toDo").value = tasksdescription.toDo[index];
    }
    
    saveTasks();
})

//save button-2 clicked
$("#btn-toDo-2").click(function() {
    var description = $("#2-toDo").val();

    var status = $("#2-toDo")
        .closest("#2-toDo")
        .attr("id")
        .replace("2-", "")
    var index = $(this)
        .attr("id")
        .replace("btn-toDo-", "")

    console.log(description);
    console.log(status);
    console.log(index);

    if (description) {
        tasksdescription[status][index] = description;
        document.getElementById(index + "-toDo").value = tasksdescription.toDo[index];
    }
    
    saveTasks();
});

//save button-3 clicked
$("#btn-toDo-3").click(function() {
    var description = $("#3-toDo").val();

    var status = $("#3-toDo")
        .closest("#3-toDo")
        .attr("id")
        .replace("3-", "")
    var index = $(this)
        .attr("id")
        .replace("btn-toDo-", "")

    console.log(description);
    console.log(status);
    console.log(index);

    if (description) {
        tasksdescription[status][index] = description;
        document.getElementById(index + "-toDo").value = tasksdescription.toDo[index];
    }
    
    saveTasks();
})

//save button-4 clicked
$("#btn-toDo-4").click(function() {
    var description = $("#4-toDo").val();

    var status = $("#4-toDo")
        .closest("#4-toDo")
        .attr("id")
        .replace("4-", "")
    var index = $(this)
        .attr("id")
        .replace("btn-toDo-", "")

    console.log(description);
    console.log(status);
    console.log(index);

    if (description) {
        tasksdescription[status][index] = description;
        document.getElementById(index + "-toDo").value = tasksdescription.toDo[index];
    }
    
    saveTasks();
})

//save button-5 clicked
$("#btn-toDo-5").click(function() {
    var description = $("#5-toDo").val();

    var status = $("#5-toDo")
        .closest("#5-toDo")
        .attr("id")
        .replace("5-", "")
    var index = $(this)
        .attr("id")
        .replace("btn-toDo-", "")

    console.log(description);
    console.log(status);
    console.log(index);

    if (description) {
        tasksdescription[status][index] = description;
        document.getElementById(index + "-toDo").value = tasksdescription.toDo[index];
    }
    
    saveTasks();
})

//save button-6 clicked
$("#btn-toDo-6").click(function() {
    var description = $("#6-toDo").val();

    var status = $("#6-toDo")
        .closest("#6-toDo")
        .attr("id")
        .replace("6-", "")
    var index = $(this)
        .attr("id")
        .replace("btn-toDo-", "")

    console.log(description);
    console.log(status);
    console.log(index);

    if (description) {
        tasksdescription[status][index] = description;
        document.getElementById(index + "-toDo").value = tasksdescription.toDo[index];
    }
    
    saveTasks();
})

//save button-7 clicked
$("#btn-toDo-7").click(function() {
    var description = $("#7-toDo").val();

    var status = $("#7-toDo")
        .closest("#7-toDo")
        .attr("id")
        .replace("7-", "")
    var index = $(this)
        .attr("id")
        .replace("btn-toDo-", "")

    console.log(description);
    console.log(status);
    console.log(index);

    if (description) {
        tasksdescription[status][index] = description;
        document.getElementById(index + "-toDo").value = tasksdescription.toDo[index];
    }
    
    saveTasks();
})

//save button-8 clicked
$("#btn-toDo-8").click(function() {
    var description = $("#5-toDo").val();

    var status = $("#8-toDo")
        .closest("#8-toDo")
        .attr("id")
        .replace("5-", "")
    var index = $(this)
        .attr("id")
        .replace("btn-toDo-", "")

    console.log(description);
    console.log(status);
    console.log(index);

    if (description) {
        tasksdescription[status][index] = description;
        document.getElementById(index + "-toDo").value = tasksdescription.toDo[index];
    }
    
    saveTasks();
})



//load tasksdescription
loadTasks();