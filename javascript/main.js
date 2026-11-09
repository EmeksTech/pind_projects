const STORAGE_KEY = "genius_hub_vanilla_students";
function loadStudents() {
    try {
        const value = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "[]");
        return Array.isArray(value) ? value : [];
    } catch {
        return [];
    }
}
let students = loadStudents();
//dom elements
const form = document.querySelector("#studentForm");
const nameInput = document.querySelector("#name");
const scoreInput = document.querySelector("#score");
const searchInput = document.querySelector("#search");
const filterInput = document.querySelector("#filter");
const list = document.querySelector("#students");
const stats = document.querySelector("#stats");
const message = document.querySelector("#message");

//save record to local storage
function save() {
    localStorage.setItem(STORAGE_KEY, 
        JSON.stringify(students));
}
//render function
function render() {
    const query = searchInput.value.trim().toLowerCase();
    const filter = filterInput.value;
    const visible = students.filter(
        s => s.name.toLowerCase().includes(
            query) && (filter === "all"
                || (filter === "pass" ? s.score >= 50 : s.score < 50)));
    list.replaceChildren(); //replace children
    for (const student of visible) {
        const item = document.createElement("li");
        const label = document.createElement("span");
        label.textContent = `${student.name} - ${student.score}/100 
        (${student.score >= 50 ? "Pass" : "Fail"})`;
        const remove = document.createElement("button");
        remove.textContent = "Delete";
        remove.addEventListener("click", () => {
            students = students.filter(s => s.id !== student.id);
            save();
            render();
        });
        item.append(label, remove);
        list.append(item);

    }
    const total = students.reduce( (sum, s) => 
        sum + s.score, 0);
    stats.textContent = `Students: ${students.length} | Average: 
    ${students.length ? (total / students.length)
        .toFixed(1) : "0.0" } | showing: ${visible.length}`;
    if (!visible.length){
        const empty = document.createElement("li");
        empty.textContent = "No matching students";
        list.append(empty);
    }
}
form.addEventListener("submit", 
    event => { 
        event.preventDefault();
    const name = nameInput.value.trim();
    const rawScore = scoreInput.value.trim();
    const score = Number(rawScore);
    if (!name || !rawScore || !Number.isFinite(score) 
        || score < 0 || score > 100){
            message.textContent = "Enter a valid name and score from 0 to 100.";
            return;
        }
    students.push({
        id: crypto.randomUUID(), 
        name,
        score
    })
    save();
    form.reset();
    message.textContent = `${name} added.`;
    render();
});
searchInput.addEventListener("input", 
    render
);
filterInput.addEventListener("change",
    render
);
render();