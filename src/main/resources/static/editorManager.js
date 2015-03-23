var EditorManager = function () {
    this.editors = [];
}

EditorManager.prototype.addEditor = function(editor) {
    this.editors.push(editor);
}

EditorManager.prototype.isEditorOpenForFile = function(filename) {
    for(var i = 0; i < this.editors.length; i++) {
        if(this.editors[i].getEditorName() == filename) {
            return true;
        }
    }

    return false;
}

var editorManager = new EditorManager();
