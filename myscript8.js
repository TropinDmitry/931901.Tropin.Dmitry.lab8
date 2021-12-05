function add()
{
    document.getElementById('elem').insertAdjacentHTML('beforeend',' <div>\n' +
        '    <input type="text">\n' +
        '    <input type="text">\n' +
        '    <button onclick="up(this)">&#8593;</button>\n' +
        '    <button onclick="down(this)">&#8595;</button>\n' +
        '    <button onclick="remove(this)">x</button>\n' +
        '    </div>')
}

function up(line)
{
    const upperElement = line.parentElement.previousElementSibling;
    if(upperElement)
        line.parentElement.after(upperElement);
}

function down(line)
{
    const bottomElement = line.parentElement.nextElementSibling;
    if(bottomElement)
        line.parentElement.before(bottomElement);
}

function remove(line)
{
    line.parentElement.remove();
}

function save()
{
    const div = document.getElementById('result');
    const parent = document.querySelectorAll("#elem> div> input");
    let string = "{";
    for (let i = 0; i < parent.length; i = i + 2) {
        const a = parent[i].value;
        const b = parent[i + 1].value;
        string += '"' + a + '":"' + b + '"';
        if (i !== parent.length - 2) {
            string += ',';
        }
    }
    string += "}";
    div.innerHTML = string;
}