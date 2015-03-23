var EditorBuilder = function (fileName, fileType) {
    this.editorId = fileName.replace("\.", "-");
    this.fileName = fileName;
    this.fileType = fileType;
}

EditorBuilder.prototype.getEditorName = function() {
    return this.fileName;
}

EditorBuilder.prototype.createNewTab = function() {
    $("#open-files").prepend("<li role='presentation'>" +
                             "<a href='#" + this.editorId + "' aria-controls='" + this.editorId +
                             "' role='tab' data-toggle='tab'>" + this.fileName +
                             "</a></li>");
    $("#active-editor").prepend("<div role='tabpanel' class='tab-pane' id='" + this.editorId + "'>" +
                                "<div id='e-" + this.editorId + "'></div></div>");
}

EditorBuilder.prototype.createEditor = function() {
    this.editor = ace.edit("e-" + this.editorId);
    this.editor.setOptions({
        enableBasicAutocompletion: true,
        minLines: 50,
        maxLines: 50
    });
    this.editor.setTheme("ace/theme/monokai");
}

EditorBuilder.prototype.init = function() {
    this.createNewTab();
    this.createEditor();

    this.editor.getSession().setMode("ace/mode/" + this.fileType);
}
