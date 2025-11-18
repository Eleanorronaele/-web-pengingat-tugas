function addTask() {
    let task = document.getElementById("task").value;

    if (task === "") {
        alert("Tulis tugas dulu!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task;

    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";
}
