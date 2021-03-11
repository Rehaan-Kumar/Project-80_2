function getParagraph1() {
    var inputs = [];
    for(var i = 1 ; i<=6 ; i++) {
        inputs.push(document.getElementById("para_1_input_box_" + i).value);
    }
    document.getElementById("show_para_1").innerHTML=inputs.join(". ");
}

function getParagraph2() {
    var inputs_2 = [];
    for(var i = 1 ; i<=6 ; i++) {
        inputs_2.push(document.getElementById("para_2_input_box_" + i).value);
    }
    document.getElementById("show_para_2").innerHTML=inputs_2.join(". ");
}