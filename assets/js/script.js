var taskdescription = {};

var createTask = function() {

}

var loadTasks = function() {
    tasksdescription = JSON.parse(localStorage.getItem("tasksdescription"));

    if(!tasksdescription) {
        tasksdescription = {
            toDo: []
        }
    }

    //loop over object properties
    $.each(tasksdescription, function(list, arr) {
        console.log(list, arr);
        })
}


var saveTasks = function() {
    localStorage.setItem("tasksdescription", JSON.stringify(tasksdescription));
}

// task text clicked
$("#description").on("click", "textarea", function() {
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

//task text is blurred
$("#description").on("blur", "textarea", function() {
    //current value of textarea
    var text = $(this).val();

    //type and position
    var status = $(this)
    .closest("#description")
    .attr("id")
    .replace("")
})

//save button clicked
$(".saveBtn").click(function() {
    var description = $("#description").val();

    if (description) {
        loadTasks("toDo");
    }

    //save task
    tasksdescription.toDo.push({
        work: description,
    });

    saveTasks();
})

//load tasksdescription
loadTasks();