// Get elements
const copyButton = document.getElementById("copy-button");
const saveButton = document.getElementById("save-button");
const lockButton = document.getElementById("lock-button");
const codeInput = document.getElementById("code-input");

let isLocked = false;

copyButton.addEventListener("click", () => {
    if (!isLocked) {
        codeInput.select();
        document.execCommand("copy");
    }
});

saveButton.addEventListener("click", () => {
    alert("Code saved!");
});

lockButton.addEventListener("click", () => {
    isLocked = !isLocked;
    lockButton.textContent = isLocked ? "Unlock" : "Lock";
    codeInput.disabled = isLocked;
    copyButton.disabled = isLocked;
    saveButton.disabled = isLocked;
});

lockButton.textContent = "Lock";
codeInput.value = `// Your code here...\nfunction helloWorld() {\n  console.log("Hello, World!");\n}`;
