export const copyByDocumentApi = (copyString) => {
    return new Promise((resolve, reject) => {
        var textarea = document.createElement("textarea");
        textarea.textContent = copyString;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        resolve(true)
    })
}