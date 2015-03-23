function createNewFile() {
    var fileName = $(".new-file-name").val();
    var fileType = $(".new-file-type").val();

    if(!fileName || fileName.trim().length == 0) {
        alert("Empty file name is not supported!");
        return;
    }

    if(editorManager.isEditorOpenForFile(fileName)) {
        alert("File with name '" + fileName + "' is already open!\n\n" +
        "Opening two files with a same name is not currently supported.");
        return;
    }

    var editor = new EditorBuilder(fileName, fileType);
    editor.init();

    editorManager.addEditor(editor);
}
