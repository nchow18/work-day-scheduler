var tasksdescription = {};
var hours = {};

var loadTasks = function() {
    tasksdescription = JSON.parse(localStorage.getItem("tasksdescription"));

    var currentDay = moment().format('L')
    $("#currentDay").html(currentDay);

    if(!tasksdescription) {
        tasksdescription = {
            toDo: [
                {text:"",
                date:moment(moment().format("L"), "L").set("hour", 9)}, 
                {text:"",
                date:moment(moment().format("L"), "L").set("hour", 10)}, 
                {text:"",
                date:moment(moment().format("L"), "L").set("hour", 11)}, 
                {text:"",
                date:moment(moment().format("L"), "L").set("hour", 12)}, 
                {text:"",
                date:moment(moment().format("L"), "L").set("hour", 13)}, 
                {text:"",
                date:moment(moment().format("L"), "L").set("hour", 14)}, 
                {text:"",
                date:moment(moment().format("L"), "L").set("hour", 15)}, 
                {text:"",
                date:moment(moment().format("L"), "L").set("hour", 16)}, 
                {text:"",
                date:moment(moment().format("L"), "L").set("hour", 17)}]
        };
    }

    var printTask0 = tasksdescription.toDo[0].text;
    var printTask1 = tasksdescription.toDo[1].text;
    var printTask2 = tasksdescription.toDo[2].text;
    var printTask3 = tasksdescription.toDo[3].text;
    var printTask4 = tasksdescription.toDo[4].text;
    var printTask5 = tasksdescription.toDo[5].text;
    var printTask6 = tasksdescription.toDo[6].text;
    var printTask7 = tasksdescription.toDo[7].text;
    var printTask8 = tasksdescription.toDo[8].text;

    // for (var i = 0; 0 < tasksdescription.toDo.length; i++) {
    //     document.getElementById([i] + "-toDo").value = tasksdescription.toDo[i].text;
    // }
    
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

var auditTask = function() {

    var hour0 = moment(moment().format("L"), "L").set("hour", 9);
    var hour1 = moment(moment().format("L"), "L").set("hour", 10);
    var hour2 = moment(moment().format("L"), "L").set("hour", 11);
    var hour3 = moment(moment().format("L"), "L").set("hour", 12);
    var hour4 = moment(moment().format("L"), "L").set("hour", 13);
    var hour5 = moment(moment().format("L"), "L").set("hour", 14);
    var hour6 = moment(moment().format("L"), "L").set("hour", 15);
    var hour7 = moment(moment().format("L"), "L").set("hour", 16);
    var hour8 = moment(moment().format("L"), "L").set("hour", 17);

    // var hour0 = moment('9:00am', 'h:mma');
    // var hour1 = moment('10:00am', 'h:mma');
    // var hour2 = moment('11:00am', 'h:mma');
    // var hour3 = moment('12:00pm', 'h:mma');
    // var hour4 = moment('1:00pm', 'h:mma');
    // var hour5 = moment('2:00pm', 'h:mma');
    // var hour6 = moment('3:00pm', 'h:mma');
    // var hour7 = moment('4:00pm', 'h:mma');
    // var hour8 = moment('5:00pm', 'h:mma');

    var changeColour = [
        hour0, 
        hour1,
        hour2,
        hour3,
        hour4,
        hour5,
        hour6,
        hour7,
        hour8
    ]

    var one = "#0-toDo";
    var two = "#1-toDo";
    var three = "#2-toDo";
    var four = "#3-toDo";
    var five = "#4-toDo";
    var six = "#5-toDo";
    var seven = "#6-toDo";
    var eight = "#7-toDo";
    var nine = "#8-toDo";

    var id = [
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine
    ]

    // var currentDayTime = moment().format('MMM Do YYYY, h:mm:ss a');
    // var currentTime = moment().format('LT')
    //var currentDay = moment('1:00pm', 'h:mma');
    var currentDay = moment(moment().format("L"), "L").set("hour", 13);
    console.log(currentDay)
    // var test = moment();

    // console.log(hour0);
    // console.log(agendaTime);
    // console.log(currentDay);
    // console.log(currentDayTime);
    // console.log(currentTime)
    // console.log(test)
    
    //remove old classes from hour elements
    $("textarea").removeClass("past present future");

    //past = grey
    //present = red
    //future = green

    for ( var i = 0; 0 < changeColour.length; i++) {
            if (currentDay > changeColour[i]) {
            $(id[i]).addClass("past");} 
        else 
            if (currentDay < changeColour[i]) {
            $(id[i]).addClass("future");} 
        else 
            if (currentDay.isSame(changeColour[i])) {
            $(id[i]).addClass("present"); break;}
    }

//     if (currentDay.isSame(hour4)) {$(id[4]).addClass("present")}

//
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
        tasksdescription[status][index].text = description;
        //$("#" + index + "-toDo").html(tasksdescription.toDo[index].text);
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
        tasksdescription[status][index].text = description;
        $(index + "-toDo").html(tasksdescription.toDo[index]);
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
        tasksdescription[status][index].text = description;
        $(index + "-toDo").html(tasksdescription.toDo[index]);
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
        tasksdescription[status][index].text = description;
        $(index + "-toDo").html(tasksdescription.toDo[index]);
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
        tasksdescription[status][index].text = description;
        $(index + "-toDo").html(tasksdescription.toDo[index]);
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
        tasksdescription[status][index].text = description;
        $(index + "-toDo").html(tasksdescription.toDo[index]);
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
        tasksdescription[status][index].text = description;
        $(index + "-toDo").html(tasksdescription.toDo[index]);
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
        tasksdescription[status][index].text = description;
        $(index + "-toDo").html(tasksdescription.toDo[index]);
    }
    
    saveTasks();
})

//save button-8 clicked
$("#btn-toDo-8").click(function() {
    var description = $("#8-toDo").val();

    var status = $("#8-toDo")
        .closest("#8-toDo")
        .attr("id")
        .replace("8-", "")
    var index = $(this)
        .attr("id")
        .replace("btn-toDo-", "")

    console.log(description);
    console.log(status);
    console.log(index);

    if (description) {
        tasksdescription[status][index].text = description;
        $(index + "-toDo").html(tasksdescription.toDo[index]);
    }
    
    saveTasks();
})

//load tasksdescription
loadTasks();
auditTask();