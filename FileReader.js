
// Image Preview
document.getElementById("file-input").addEventListener("change", previewImage);
function previewImage(event) {
    const reader = new Filereader();
    const file = event.target.files[0];

    reader.onload = function (e) {
        const image = new Image();
        image.src = e.target.result;
        document.body.appendChild(image);
    }
    reader.readAsDataUrl(file);
}
// Text File Parsing
function previewText(event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = function (e) {
        document.getElementById("File-content").textContent = e.target.result;
    }
    reader.readAsText(file);
}
// CSV File Processing
function processCSV(event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = function (e) {
        const rows = e.target.result.split('\n');
        const table = document.getElementById("csv-table");

        rows.forEach((row) => {
            const columns = row.split(',');
            const tr = document.createElement('tr');

            columns.forEach((column) => {
                const td = document.createElement("td");
                td.textContent = column;
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
    }
    reader.readAsText(file);
}
// binary file interpretation
function readBinary(event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = function (e) {
        const binaryString = e.target.result;
        document.getElementById('binary-file-conetnt').textContent = binaryString;
    }
    reader.readAsBinaryString(file);
}
// Process Large Text File
function processLargeFile(event) {
    const file = event.target.files[0];
    const chunkSize = 1024 * 1024;//1MB
    let start = 0;

    while (start < file.size) {
        const chunk = file.slice(start, start + chunkSize);
        await readChunk(chunk);
        start += chunkSize;
    }
}
async function readChunk(chunk) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('large-file-content').textContent += e.target.result;
            resolve();
        }
        reader.onerror = function (e) {
            reject(new Error('Error reading chunk'));
        }
        reader.readAsText(chunk);
    });
}
// Reading and Modifying Zip File
document.getElementById('zip-file-input'.addEventListener('change', processZipFile));
document.getElementById('add-file-button').addEventListener('click', addFileToZip);
let jszip = new JSZip();
async function processZipFile(event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = async function (e) {
        jszip = await JSZip.loadAsync(e.target.result);
    }
    reader.readAsArrayBuffer(file);
}
function addFileToZip() {
    jszip.file("Hello.txt", "Hello World\n");
}
// Parsing and Visualizing JSON Files
function processJSONFile(event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = function (e) {
        const data = JSON.parse(e.target.result);
        document.getElementById(json - ile - content).textContent = JSON.stringify(data, null, 2);
    }
    reader.readAsText(file);
}
