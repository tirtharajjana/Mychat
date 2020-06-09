function send_from_A() {
    var send = document.getElementById("send_A");
    send.onclick = function () {
        send_A();
    }
    var chat_A = document.getElementById("chat_A");
    chat_A.onkeyup = function (event) {
        if (event.keyCode == 13) {
            // alert();
            send_A();
        }
    }
}


function send_A() {
    {
        // var chat_input-document.getElementById()
        var chat = document.getElementById("chat_A").value;
        if (chat != "") {
            var i, large = 0;
            for (i = 0; i < localStorage.length; i++) {
                var all_keys = localStorage.key(i);
                if (all_keys.match("_chat_")) {
                    var no = all_keys.split("_");
                    var num = Number(no[0]);
                    if (large < num) {
                        large = num;
                    }
                }
            }
            var max = large + 1;


            var d = new Date();
            var hour = d.getHours();
            var min = d.getMinutes();
            var time = [];
            time[0] = hour;
            time[1] = min;
            var data = {
                chat: chat,
                time: time
            }
            var main_data = JSON.stringify(data);
            localStorage.setItem(max + "_chat_A", main_data);
            if (localStorage.getItem(max + "_chat_A") != null) {
                var data2 = localStorage.getItem(max + "_chat_A");
                var main = JSON.parse(data2);
                // alert(main.chat + "    " + main.time);
                window.location = location.href;
            }
        }
        else {
            alert("chat field is empty");
            chat.focus();
        }
    }
}


send_from_A();


function send_from_B() {
    var send = document.getElementById("send_B");
    send.onclick = function () {
        send_B();
    }

    var chat_B = document.getElementById("chat_B");
    chat_B.onkeyup = function (event) {
        if (event.keyCode == 13) {
            // alert();
            send_B();
        }
    }

}



function send_B() {
    var chat = document.getElementById("chat_B").value;
    if (chat != "") {
        var i, large = 0;
        for (i = 0; i < localStorage.length; i++) {
            var all_keys = localStorage.key(i);
            if (all_keys.match("_chat_")) {
                var no = all_keys.split("_");
                var num = Number(no[0]);
                if (large < num) {
                    large = num;
                }
            }
        }
        var max = large + 1;

        var d = new Date();
        var hour = d.getHours();
        var min = d.getMinutes();
        var time = [];
        time[0] = hour;
        time[1] = min;
        var data = {
            chat: chat,
            time: time
        }
        var main_data = JSON.stringify(data);
        localStorage.setItem(max + "_chat_B", main_data);
        if (localStorage.getItem(max + "_chat_B") != null) {
            var data2 = localStorage.getItem(max + "_chat_B");
            var main = JSON.parse(data2);
            // alert(main.chat + "    " + main.time);
            window.location = location.href;

        }
    }
    else {
        alert("chat field is empty");
        chat.focus();
    }
}

send_from_B();



// show msg

function show_form_A() {
    var nth_chat = 1, i;
    for (nth_chat; nth_chat <= localStorage.length; nth_chat++) {
        var key, person;
        for (i = 0; i < localStorage.length; i++) {
            var all_keys = localStorage.key(i);
            if (all_keys.match("_chat_")) {
                var no = all_keys.split("_");
                var num = Number(no[0]);
                if (num == nth_chat) {
                    key = i;
                    person = no[2];
                }
            }
        }

        if (person == "A") {
            var box = document.getElementById("A_box");
            var row = document.createElement("DIV");
            var col_12 = document.createElement("DIV");
            var span1 = document.createElement("SPAN");
            var p = document.createElement("P");
            var span2 = document.createElement("SPAN");
            var p2 = document.createElement("P");


            box.append(row);
            row.append(col_12);
            col_12.append(span1);
            span1.append(span2);
            span1.append(p);
            span2.append(p2);

            row.className = "row";
            col_12.className = "col-12";
            span1.className = "you first";
            span2.className = "time";


            var main_key = localStorage.key(key);
            var data = localStorage.getItem(main_key);
            var chat = JSON.parse(data);
            p.innerHTML = chat.chat;
            p2.innerHTML = chat.time[0] + " : " + chat.time[1];

        }

        else if (person == "B") {

            var box = document.getElementById("A_box");
            var row = document.createElement("DIV");
            var col_12 = document.createElement("DIV");
            var span1 = document.createElement("SPAN");
            var span2 = document.createElement("SPAN");
            var p = document.createElement("P");
            var p2 = document.createElement("P");

            box.append(row);
            row.append(col_12);
            col_12.append(span1);
            span1.append(span2);
            span1.append(p);
            span2.append(p2);

            row.className = "row";
            col_12.className = "col-12";
            span1.className = "friend last";
            span2.className = "time";



            var main_key = localStorage.key(key);
            var data = localStorage.getItem(main_key);
            var chat = JSON.parse(data);
            p.innerHTML = chat.chat;
            p2.innerHTML = chat.time[0] + " : " + chat.time[1];

        }
    }

}

show_form_A();



function show_form_B() {
    var nth_chat = 1, i;
    for (nth_chat; nth_chat <= localStorage.length; nth_chat++) {
        var key, person;
        for (i = 0; i < localStorage.length; i++) {
            var all_keys = localStorage.key(i);
            if (all_keys.match("_chat_")) {
                var no = all_keys.split("_");
                var num = Number(no[0]);
                if (num == nth_chat) {
                    key = i;
                    person = no[2];
                }
            }
        }

        if (person == "B") {
            var box = document.getElementById("B_box");
            var row = document.createElement("DIV");
            var col_12 = document.createElement("DIV");
            var span1 = document.createElement("SPAN");
            var p = document.createElement("P");
            var span2 = document.createElement("SPAN");
            var p2 = document.createElement("P");


            box.append(row);
            row.append(col_12);
            col_12.append(span1);
            span1.append(span2);
            span1.append(p);
            span2.append(p2);

            row.className = "row";
            col_12.className = "col-12";
            span1.className = "you first";
            span2.className = "time";


            var main_key = localStorage.key(key);
            var data = localStorage.getItem(main_key);
            var chat = JSON.parse(data);
            p.innerHTML = chat.chat;
            p2.innerHTML = chat.time[0] + " : " + chat.time[1];

        }

        else if (person == "A") {

            var box = document.getElementById("B_box");
            var row = document.createElement("DIV");
            var col_12 = document.createElement("DIV");
            var span1 = document.createElement("SPAN");
            var span2 = document.createElement("SPAN");
            var p = document.createElement("P");
        
            var p2 = document.createElement("P");

            box.append(row);
            row.append(col_12);
            col_12.append(span1);
            span1.append(span2);
            span1.append(p);
            span2.append(p2);

            row.className = "row";
            col_12.className = "col-12";
            span1.className = "friend last";
            span2.className = "time";



            var main_key = localStorage.key(key);
            var data = localStorage.getItem(main_key);
            var chat = JSON.parse(data);
            p.innerHTML = chat.chat;
            p2.innerHTML = chat.time[0] + " : " + chat.time[1];

        }
    }

}

show_form_B();
