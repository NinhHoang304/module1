    // var intro = "Hello World";
    // document.getElementById("intro").innerHTML = intro;

    // Bắt sự kiện với thuộc tính onchange
    function do_something() {
        var selectValue = document.getElementById("mySelect").value;
        alert(selectValue);
    }

    // Bắt sự kiện với thuộc tính addEvenListener()
    var selectElement = document.getElementById("mySelect");
    selectElement.addEventListener("change",changeFuntion);
    function changeFuntion() {
        var selectValue = document.getElementById("mySelect").value;
        alert(selectValue);
    }