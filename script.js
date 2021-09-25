let today = moment();

//display current time and date in header
$("#currentDay")
    .text(moment().format("dddd, MMMM Do YYYY")); 

//timeslot was clicked
$(".task").on("click", "span", function(){
    //get current text
    let id = $(this).attr('id');
    let text = $(this)
        .text()
        .trim();
        //create new input elements
    let taskInput = $("<textarea>")
        .attr("type", "text")
        .attr("id", id)
        .addClass("task-input")
        .val(text);
        //replace span with input
    $(this).replaceWith(taskInput);
    // unlock icon
    // $(this).siblings([".oi-lock-locked"])
    //     .removeClass("oi-lock-locked")
    //     .addClass("oi-lock-unlocked");
    taskInput.trigger("focus");
});
//timeslot was clicked away from
$(".task").on("blur", "textarea", function() {
    let id = $(this).attr('id');
    //get text from input
    let newText = $(this)
        .val()
        .trim();
    //create new span with updated text
    let updatedText = $("<span>")
        .text(newText)
        .attr("id", id);
    //replace input with span
    $(this).replaceWith(updatedText);
});

//adds color classes to time blocks based on relative time
let nine = today.hour(9).minute(0).second(0);
$(".nine")
    .text(nine.format("h a"));
    if(moment().isBefore(nine, "hour")) {
        $(".nine")
        .removeClass("bg-light")
        .addClass("bg-info");
    }else if(  moment().isAfter(nine, "hour")) {
        $(".nine")
        .removeClass("bg-light")
        .addClass("bg-danger");
    };
let ten = today.hour(10).minute(0).second(0);
$(".ten")
    .text(ten.format("h a"));
    if(moment().isBefore(ten, "hour")) {
        $(".ten")
        .removeClass("bg-light")
        .addClass("bg-info");
    }else if(  moment().isAfter(ten, "hour")) {
        $(".ten")
        .removeClass("bg-light")
        .addClass("bg-danger");
    };
let eleven = today.hour(11).minute(0).second(0);
$(".eleven")
    .text(eleven.format("h a"));
    if(moment().isBefore(eleven, "hour")) {
        $(".eleven")
        .removeClass("bg-light")
        .addClass("bg-info");
    }else if(  moment().isAfter(eleven, "hour")) {
        $(".eleven")
        .removeClass("bg-light")
        .addClass("bg-danger");
    };
let twelve = today.hour(12).minute(0).second(0);
$(".twelve")
    .text(twelve.format("h a"));
    if(moment().isBefore(twelve, "hour")) {
        $(".twelve")
        .removeClass("bg-light")
        .addClass("bg-info");
    }else if(  moment().isAfter(twelve, "hour")) {
        $(".twelve")
        .removeClass("bg-light")
        .addClass("bg-danger");
    };
let one = today.hour(13).minute(0).second(0);
$(".one")
    .text(one.format("h a"));
    if(moment().isBefore(one, "hour")) {
        $(".one")
        .removeClass("bg-light")
        .addClass("bg-info");
    }else if(  moment().isAfter(one, "hour")) {
        $(".one")
        .removeClass("bg-light")
        .addClass("bg-danger");
    };
let two = today.hour(14).minute(0).second(0);
$(".two")
    .text(two.format("h a"));
    if(moment().isBefore(two, "hour")) {
        $(".two")
        .removeClass("bg-light")
        .addClass("bg-info");
    }else if(  moment().isAfter(two, "hour")) {
        $(".two")
        .removeClass("bg-light")
        .addClass("bg-danger");
    };
let three = today.hour(15).minute(0).second(0);
$(".three")
    .text(three.format("h a"));
    
    if(moment().isBefore(three, "hour")) {
        $(".three")
        .removeClass("bg-light")
        .addClass("bg-info");
    }else if(  moment().isAfter(three, "hour")) {
        $(".three")
        .removeClass("bg-light")
        .addClass("bg-danger");
    };
let four = today.hour(16).minute(0).second(0);
$(".four")
    .text(four.format("h a"));
    if(moment().isBefore(four, "hour")) {
        $(".four")
        .removeClass("bg-light")
        .addClass("bg-info");
    }else if(  moment().isAfter(four, "hour")) {
        $(".four")
        .removeClass("bg-light")
        .addClass("bg-danger");
    };



    function loadTimeslots() {
            let timeslotArr =['hour9event','hour10event','hour11event','hour12event','hour1event',
            'hour2event','hour3event','hour4event'];
        for (let i = 0; i < timeslotArr.length; i++) {
            let timeslot = localStorage.getItem(timeslotArr[i]);
            
           
            if (timeslot){
                let hourSpan = $('#' + timeslotArr[i]);
                console.log('timeslot', timeslot);
                console.log('hourSpan', hourSpan);
                hourSpan.text(timeslot);
                };
        }
    }


    function save(id) {
       
        let text = document.querySelector('#' + id).textContent;
        console.log(text);
         localStorage.setItem(id, text );
       
        
    }
    loadTimeslots()
// //save button saves to local memory
// $(".saveBtn").on("click", function() {
//     console.log("save button clicked");
//     $(#)
//     // localStorage.setItem();
// })
//loads planner from local memory upon start
