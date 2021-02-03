function myFunction() {
  var ui = DocumentApp.getUi();
  ui.createAddonMenu()
  .addItem("Type", "type")
  .addItem("Clear", "clear")
  .addItem("Convert", "split")
  .addItem("Backwards", "backwards")
  .addItem("Why","why")
  .addItem("BFC", "split")
  .addToUi();
}

function why(){
  var doc = DocumentApp.getActiveDocument();
  var textString;
  var textString2;
  var textArray = [{}];
  var textArray2 = [{}];
  var i = 0;
  var i2;
  var i3;
  textString = doc.getBody().getText();
  i2 = textString.length;
  doc.getBody().clear();
  while(i<i2){
    textArray[i] = textString.charCodeAt(i);
    i++;
  }
  i=0;
  i2 = textArray.length;
  textString2 = textArray.join("");
  while(i<i2){
    //textArray[i] = textString2.fromCharCode(textString.charCodeAt(i));
  }
    
  doc.getBody().appendParagraph(textArray.join(""));
}

function backwards(){
  var body = DocumentApp.getActiveDocument().getBody();
   var paragraphs = body.getParagraphs();
  
  for(var i4 = 0; i4 < paragraphs.length; i4++){
    
    var position = body.getChild(0);
    var arrayF = [{}];
    var i = 0;
    var i2 = 0;
    var i3 = 0;
    var arrayB = [{}];
    var stringB = "";
    
    arrayF = paragraphs[i4].getText().split("");
    i2 = arrayF.length;
    i3 = i2;
  
    paragraphs[i4].clear();
  
    while(i <= i2){
      arrayB[i] = arrayF[i3];
      i3--;
      i++;
    }
    stringB = arrayB;
    if(stringB != ""){
      paragraphs[i4].appendText(stringB.join(""));
    }
  }
}

  
function type(){
  var ui = DocumentApp.getUi();
  var doc = DocumentApp.getActiveDocument();
  var position = doc.getBody().getChild(0);
  var response = ui.prompt("").getResponseText();
  position.asParagraph().insertText(0, response);
}

function clear(){
  var doc = DocumentApp.getActiveDocument();
  var ui = DocumentApp.getUi();
  var results = ui.alert("Clear Doc?", ui.ButtonSet.YES_NO);
  if(results == ui.Button.YES){
    doc.getBody().clear();
  }
  if(results== ui.Button.NO){
    ui.alert("Oh");
  }
  
}

function split() {
  var doc = DocumentApp.getActiveDocument();
  doc.getBody().clear();
  var string2 = "";
  var string3 = "";
  var first = [{}];
  var i = 0;
  var array1 = [{}];
  var array2 = [{}];
  var times = 0;    
  var prev = 0;
  
  var ui = DocumentApp.getUi()
  var response = ui.prompt("Enter The Text You Would Like Converted");
  var string1 = response.getResponseText();
  
  var i2 = string1.length;
  
  first = string1.split("");
  
  while (i<i2){
    prev = string1.charCodeAt(i);
    i++
    array1[i] = string1.charCodeAt(i)-prev;
  }
  i = 1;
  var i3 = array1.length;
  i2 = 0;
  while(i<(i3-1)){
    times = array1[i];
    if(array1[i]>0){
      while(times>=1){
        var position = doc.getBody().getChild(0);
        position.asParagraph().insertText(i2,"+");
        times--;
        i2++;
      }
    }
    if(array1[i]<0){
      while(times<=-1){
        var position = doc.getBody().getChild(0);
        position.asParagraph().insertText(i2,"-");
        times++;
        i2++;
      }
    }
    position = doc.getBody().getChild(0);
    position.asParagraph().insertText(i2,".");
    i2++;
    i++;                                     
} 
  position = doc.getBody().getChild(0);
  position.asParagraph().insertText(i2," "+first[0])
  position.asParagraph().insertText(0,";;brainfuck ,.");
}
/*
function split() {
  var doc = DocumentApp.getActiveDocument();
  doc.getBody().clear();
  var string2 = "";
  var string3 = "";
  var first = [{}];
  var i = 0;
  var array1 = [{}];
  var array2 = [{}];
  var times = 0;    
  var prev = 0;
  
  var ui = DocumentApp.getUi()
  var response = ui.prompt("Enter The Text You Would Like Converted");
  var string1 = response.getResponseText();
  
  var i2 = string1.length;
  
  first = string1.split("");
  
  while (i<i2){
    prev = string1.charCodeAt(i);
    i++
    array1[i] = string1.charCodeAt(i)-prev;
  }
  i = 1;
  var i3 = array1.length;
  i2 = 0;
  doc.saveAndClose();
  DocumentApp.openById("12LLaypTeQMi0Cw1IlLB4XjC8YhVdHKhW7c6zrvzOL64");
  while(i<(i3-1)){
    times = array1[i];
    if(array1[i]>0){
      while(times>=1){
        var position = doc.getBody().getChild(0);
        position.asParagraph().insertText(i2,"+");
        times--;
        i2++;
      }
    }
    doc.saveAndClose();
    DocumentApp.openById("12LLaypTeQMi0Cw1IlLB4XjC8YhVdHKhW7c6zrvzOL64");
    if(array1[i]<0){
      while(times<=-1){
        var position = doc.getBody().getChild(0);
        position.asParagraph().insertText(i2,"-");
        times++;
        i2++;
      }
    }
    doc.saveAndClose();
    DocumentApp.openById("12LLaypTeQMi0Cw1IlLB4XjC8YhVdHKhW7c6zrvzOL64");
    var position = doc.getBody().getChild(0);
    position.asParagraph().insertText(i2,".");
    i2++;
    i++;                                     
} 
  position = doc.getBody().getChild(0);
  position.asParagraph().insertText(i2," "+first[0])
  position.asParagraph().insertText(0,";;brainfuck ,.");
}
*/
