/* global Infinity, fileerror */

// document.getElementById("checkbox-primary").onclick = function() {
// 	if(this.checked == true) {
// 		document.getElementById("yes").style.display = "block";
// 		localStorage.setItem("newWords", 1);
// 	} else if (this.checked == false) {
// 		document.getElementById("yes").style.display = "none";
// 		localStorage.setItem("newWords", "");
// 	}
// }

function newWords(a) {
    if (a.id == 1) {
        document.getElementById("1_st_word").style.display = "block";
        document.getElementById("2_nd_word").style.display = "none";
        document.getElementById("3_nd_word").style.display = "none";
        document.getElementById("4_nd_word").style.display = "none";
        document.getElementById("5_nd_word").style.display = "none";
        document.getElementById("6_nd_word").style.display = "none";
        document.getElementById("7_nd_word").style.display = "none";
        document.getElementById("8_nd_word").style.display = "none";
        document.getElementById("9_nd_word").style.display = "none";
        document.getElementById("10_nd_word").style.display = "none";
        localStorage.setItem("newWords", a.id);
    } else if (a.id == 2) {
        document.getElementById("1_st_word").style.display = "block";
        document.getElementById("2_nd_word").style.display = "block";
        document.getElementById("3_nd_word").style.display = "none";
        document.getElementById("4_nd_word").style.display = "none";
        document.getElementById("5_nd_word").style.display = "none";
        document.getElementById("6_nd_word").style.display = "none";
        document.getElementById("7_nd_word").style.display = "none";
        document.getElementById("8_nd_word").style.display = "none";
        document.getElementById("9_nd_word").style.display = "none";
        document.getElementById("10_nd_word").style.display = "none";
        localStorage.setItem("newWords", a.id);
    } else if (a.id == 3) {
        document.getElementById("1_st_word").style.display = "block";
        document.getElementById("2_nd_word").style.display = "block";
        document.getElementById("3_nd_word").style.display = "block";
        document.getElementById("4_nd_word").style.display = "none";
        document.getElementById("5_nd_word").style.display = "none";
        document.getElementById("6_nd_word").style.display = "none";
        document.getElementById("7_nd_word").style.display = "none";
        document.getElementById("8_nd_word").style.display = "none";
        document.getElementById("9_nd_word").style.display = "none";
        document.getElementById("10_nd_word").style.display = "none";
        localStorage.setItem("newWords", a.id);
    } else if (a.id === 4) {
        document.getElementById("1_st_word").style.display = "block";
        document.getElementById("2_nd_word").style.display = "block";
        document.getElementById("3_nd_word").style.display = "block";
        document.getElementById("4_nd_word").style.display = "block";
        document.getElementById("5_nd_word").style.display = "none";
        document.getElementById("6_nd_word").style.display = "none";
        document.getElementById("7_nd_word").style.display = "none";
        document.getElementById("8_nd_word").style.display = "none";
        document.getElementById("9_nd_word").style.display = "none";
        document.getElementById("10_nd_word").style.display = "none";
        localStorage.setItem("newWords", a.id);
    } else if (a.id === 5) {
        document.getElementById("1_st_word").style.display = "block";
        document.getElementById("2_nd_word").style.display = "block";
        document.getElementById("3_nd_word").style.display = "block";
        document.getElementById("4_nd_word").style.display = "block";
        document.getElementById("5_nd_word").style.display = "block";
        document.getElementById("6_nd_word").style.display = "none";
        document.getElementById("7_nd_word").style.display = "none";
        document.getElementById("8_nd_word").style.display = "none";
        document.getElementById("9_nd_word").style.display = "none";
        document.getElementById("10_nd_word").style.display = "none";
        localStorage.setItem("newWords", a.id);
    } else if (a.id === 6) {
        document.getElementById("1_st_word").style.display = "block";
        document.getElementById("2_nd_word").style.display = "block";
        document.getElementById("3_nd_word").style.display = "block";
        document.getElementById("4_nd_word").style.display = "block";
        document.getElementById("5_nd_word").style.display = "block";
        document.getElementById("6_nd_word").style.display = "block";
        document.getElementById("7_nd_word").style.display = "none";
        document.getElementById("8_nd_word").style.display = "none";
        document.getElementById("9_nd_word").style.display = "none";
        document.getElementById("10_nd_word").style.display = "none";
        localStorage.setItem("newWords", a.id);
    } else if (a.id === 7) {
        document.getElementById("1_st_word").style.display = "block";
        document.getElementById("2_nd_word").style.display = "block";
        document.getElementById("3_nd_word").style.display = "block";
        document.getElementById("4_nd_word").style.display = "block";
        document.getElementById("5_nd_word").style.display = "block";
        document.getElementById("6_nd_word").style.display = "block";
        document.getElementById("7_nd_word").style.display = "block";
        document.getElementById("8_nd_word").style.display = "none";
        document.getElementById("9_nd_word").style.display = "none";
        document.getElementById("10_nd_word").style.display = "none";
        localStorage.setItem("newWords", a.id);
    } else if (a.id === 8) {
        document.getElementById("1_st_word").style.display = "block";
        document.getElementById("2_nd_word").style.display = "block";
        document.getElementById("3_nd_word").style.display = "block";
        document.getElementById("4_nd_word").style.display = "block";
        document.getElementById("5_nd_word").style.display = "block";
        document.getElementById("6_nd_word").style.display = "block";
        document.getElementById("7_nd_word").style.display = "block";
        document.getElementById("8_nd_word").style.display = "block";
        document.getElementById("9_nd_word").style.display = "none";
        document.getElementById("10_nd_word").style.display = "none";
        localStorage.setItem("newWords", a.id);
    } else if (a.id === 9) {
        document.getElementById("1_st_word").style.display = "block";
        document.getElementById("2_nd_word").style.display = "block";
        document.getElementById("3_nd_word").style.display = "block";
        document.getElementById("4_nd_word").style.display = "block";
        document.getElementById("5_nd_word").style.display = "block";
        document.getElementById("6_nd_word").style.display = "block";
        document.getElementById("7_nd_word").style.display = "block";
        document.getElementById("8_nd_word").style.display = "block";
        document.getElementById("9_nd_word").style.display = "block";
        document.getElementById("10_nd_word").style.display = "none";
        localStorage.setItem("newWords", a.id);
    } else if (a.id === 10) {
        document.getElementById("1_st_word").style.display = "block";
        document.getElementById("2_nd_word").style.display = "block";
        document.getElementById("3_nd_word").style.display = "block";
        document.getElementById("4_nd_word").style.display = "block";
        document.getElementById("5_nd_word").style.display = "block";
        document.getElementById("6_nd_word").style.display = "block";
        document.getElementById("7_nd_word").style.display = "block";
        document.getElementById("8_nd_word").style.display = "block";
        document.getElementById("9_nd_word").style.display = "block";
        document.getElementById("10_nd_word").style.display = "block";
        localStorage.setItem("newWords", a.id);
    } else if (a.id == 11) {
        document.getElementById("1_st_word").style.display = "none";
        document.getElementById("2_nd_word").style.display = "none";
        document.getElementById("3_nd_word").style.display = "none";
        document.getElementById("4_nd_word").style.display = "none";
        document.getElementById("5_nd_word").style.display = "none";
        document.getElementById("6_nd_word").style.display = "none";
        document.getElementById("7_nd_word").style.display = "none";
        document.getElementById("8_nd_word").style.display = "none";
        document.getElementById("9_nd_word").style.display = "none";
        document.getElementById("10_nd_word").style.display = "none";
        localStorage.setItem("newWords", "");
    }

}
function saveFile() {
    var name = document.getElementById("fileName").value;
    if (name !== "") {
        var settings = localStorage.getItem("options");
        if (settings !== "") {
            var a = document.createElement('a');
            a.style = "display: none";
            var saveText = settings;
            var blob = new Blob([saveText], {type: "text/plain"});
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            var fileName = name;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 100);

            var fileError = document.getElementById("fileerror");
            while (fileError.hasChildNodes()) {
                fileError.removeChild(fileError.firstChild);
            }
            fileError.style.display = "none";
            var fileOk = document.getElementById("fileOk");
            while (fileOk.hasChildNodes()) {
                fileOk.removeChild(fileOk.firstChild);
            }
            var icon = document.createElement("i");
            icon.className = "fa fa-check";
            fileError.appendChild(icon);
            var okText = document.createTextNode(" Settings are successfuly saved");
            fileOk.appendChild(okText);
            var fileOk = document.getElementById("fileOk");
            fileOk.style.display = "block";
        } else {
            var fileError = document.getElementById("fileerror");
            while (fileError.hasChildNodes()) {
                fileError.removeChild(fileError.firstChild);
            }
            var icon = document.createElement("i");
            icon.className = "fa fa-times";
            fileError.appendChild(icon);
            var errText = document.createTextNode(" Ohh! Set up the Settings and submitt");
            fileError.appendChild(errText);
            var fileOk = document.getElementById("fileOk");
            fileOk.style.display = "none";
            fileError.style.display = "block";
        }
    } else {
        var fileError = document.getElementById("fileerror");
        while (fileError.hasChildNodes()) {
            fileError.removeChild(fileError.firstChild);
        }
        var icon = document.createElement("i");
        icon.className = "fa fa-times";
        fileError.appendChild(icon);
        var errText = document.createTextNode(" Ohh! Enter name for file");
        fileError.appendChild(errText);
        var fileOk = document.getElementById("fileOk");
        fileOk.style.display = "none";
        fileError.style.display = "block";
    }

}
function saveArticleSettings() {
    var articleName = document.getElementById("articleName").value;
    if (articleName !== "") {
        var settings = {};
        settings.text1 = document.getElementById("introduction").value;
        settings.text2 = document.getElementById("middle").value;
        settings.text3 = document.getElementById("summary").value;

        settings = JSON.stringify(settings);

        var a = document.createElement('a');
        a.style = "display: none";
        var saveText = settings;
        var blob = new Blob([saveText], {type: "text/plain"});
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        var fileName = articleName;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 100);

        var fileError = document.getElementById("articleWrong");
        while (fileError.hasChildNodes()) {
            fileError.removeChild(fileError.firstChild);
        }
        fileError.style.display = "none";
        var fileOk = document.getElementById("articleSaved");
        while (fileOk.hasChildNodes()) {
            fileOk.removeChild(fileOk.firstChild);
        }
        var icon = document.createElement("i");
        icon.className = "fa fa-check";
        fileError.appendChild(icon);
        var okText = document.createTextNode(" Settings are successfuly saved");
        fileOk.appendChild(okText);
        var fileOk = document.getElementById("articleSaved");
        fileOk.style.display = "block";
    } else {
        var articleWrong = document.getElementById("articleWrong");
        while (articleWrong.hasChildNodes()) {
            articleWrong.removeChild(articleWrong.firstChild);
        }
        var icon = document.createElement("i");
        icon.className = "fa fa-times";
        articleWrong.appendChild(icon);
        var errText = document.createTextNode(" Ohh! Enter name for file");
        articleWrong.appendChild(errText);
        var fileOk = document.getElementById("articleSaved");
        fileOk.style.display = "none";
        articleWrong.style.display = "block";
    }
}

function destroy(e) {
    document.body.removeChild(e.target);
}

function showSubmit() {
    var errorWindow = document.getElementById("errorWindow");
    errorWindow.style.display = "none";
    var submitWindow = document.getElementById("successWindow");
    submitWindow.style.display = "block";
}
function showError(text) {
    var successWindow = document.getElementById("successWindow");
    successWindow.style.display = "none";
    var errorWindow = document.getElementById("errorWindow");
    errorWindow.style.display = "block";
    var errorRow = document.createElement("p");
    errorRow.className = "text-danger";
    var icon = document.createElement("i");
    icon.className = "fa fa-exclamation-circle";
    errorRow.appendChild(icon);
    var content = document.createTextNode(text);
    errorRow.appendChild(content);
    var errorList = document.getElementById("forError");
    errorList.appendChild(errorRow);
}
function clearErrorList(listId) {
    var errorList = document.getElementById(listId);
    while (errorList.hasChildNodes()) {
        errorList.removeChild(errorList.firstChild);
    }
}

function fireEvent(node, eventName) {
    // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
    var doc;
    if (node.ownerDocument) {
        doc = node.ownerDocument;
    } else if (node.nodeType === 9) {
        // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
        doc = node;
    } else {
        throw new Error("Invalid node passed to fireEvent: " + node.id);
    }

    if (node.dispatchEvent) {
        // Gecko-style approach (now the standard) takes more work
        var eventClass = "";

        // Different events have different event classes.
        // If this switch statement can't map an eventName to an eventClass,
        // the event firing is going to fail.
        switch (eventName) {
            case "click": // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
            case "mousedown":
            case "mouseup":
                eventClass = "MouseEvents";
                break;

            case "focus":
            case "change":
            case "blur":
            case "select":
                eventClass = "HTMLEvents";
                break;

            case "keyup":
            case "keydown":
            case "keypress":
                eventClass = "KeyboardEvent";
                break;

            default:
                throw "fireEvent: Couldn't find an event class for event '" + eventName + "'.";
                break;
        }
        var event = doc.createEvent(eventClass);

        var bubbles = eventName === "change" ? false : true;
        event.initEvent(eventName, bubbles, true); // All events created as bubbling and cancelable.

        event.synthetic = true; // allow detection of synthetic events
        // The second parameter says go ahead with the default action
        node.dispatchEvent(event, true);
    } else if (node.fireEvent) {
        // IE-old school style
        var event = doc.createEventObject();
        event.synthetic = true; // allow detection of synthetic events
        node.fireEvent("on" + eventName, event);
    }
}
;

function showForArticle(id1, id2, text, num) {
    if (num) {
        element = document.getElementById(id1);
        text = document.createTextNode(text);
        icon = document.createElement("i");
        icon.className = "fa fa-check";
        while (element.hasChildNodes()) {
            element.removeChild(element.firstChild);
        }


        element.appendChild(icon);
        element.appendChild(text);
        element.style.display = "block";
        document.getElementById(id2).style.display = "none";
    } else {
        element = document.getElementById(id2);
        text = document.createTextNode(text);
        icon = document.createElement("i");
        icon.className = "fa fa-exclamation-triangle";
        while (element.hasChildNodes()) {
            element.removeChild(element.firstChild);
        }
        element.appendChild(icon);
        element.appendChild(text);
        element.style.display = "block";
        document.getElementById(id1).style.display = "none";
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function myJoin(array) {
    var str = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== "" && array[i] !== " " && typeof array[i] !== "undefined") {
            str += array[i] + ".";
        }
    }
    return str;
}

function resetElements()
{
    var inputs = document.querySelectorAll('input[type=text]');
    //you get the idea.....you can retrieve all inputs by tag name input
    for (var i = 0; i < inputs.length; i++) {
        document.getElementsByTagName('input')[i].value = "";
    }
    var textareas = document.getElementsByTagName('textarea');
    for (var i = 0; i < textareas.length; i++) {
        document.getElementsByTagName('textarea')[i].value = "";
    }
}

// Geting settings values
var introSent = document.getElementById("introSent");
var middleSent_1 = document.getElementById("middleSent1");
var middleSent_2 = document.getElementById("middleSent2");
var summSent = document.getElementById("summarySent");

var introP = document.getElementById("introP");
var middleP = document.getElementById("middleP");
var summP = document.getElementById("summaryP");

var introWord = document.getElementById("introWord");
var introWordCount = document.getElementById("introWordCount");
var middleWord = document.getElementById("middleWord");
var middleWordCount = document.getElementById("middleWordCount");
var summaryWord = document.getElementById("summaryWord");
var summaryWordCount = document.getElementById("summaryWordCount");

var numberP = document.getElementById("numberP");
// Clear true/false window function
function clearHelper(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}
// Show OK window function
function showHelper(element, text) {
    element.className = "help-block text-warrning";
    var helpIcon = document.createElement("i");
    helpIcon.className = "fa fa-exclamation-triangle";
    element.appendChild(helpIcon);
    var helpText = document.createTextNode(text);
    element.appendChild(helpText);
}
// 
introSent.onchange = function () {
    var IntroSentVal = this.value;
    var help = document.getElementById("forIntroSent");
    clearHelper(help);

    if ((IntroSentVal === "") || (IntroSentVal <= 0)) {
        showHelper(help, " Introduction Senteces must be filled and be more then 0");
    }
};

middleSent_1.onchange = function () {
    var middleSent_1Val = this.value;
    var help = document.getElementById("forMiddleSent");
    clearHelper(help);

    if ((middleSent_1Val === "") || (middleSent_1Val <= 0)) {
        showHelper(help, " Middle Senteces must be filled and be more then 0");
    }
};

middleSent_2.onchange = function () {
    var middleSent_2Val = this.value;
    var middleSent_1Val = document.getElementById("middleSent1").value;
    var help = document.getElementById("forMiddleSent");
    clearHelper(help);

    if ((Number(middleSent_2Val) === "") || (Number(middleSent_2Val) <= 0)) {
        showHelper(help, " Middle Senteces must be filled and be more then 0");
    } else if (Number(middleSent_2Val) <= Number(middleSent_1Val)) {
        showHelper(help, " Middle Senteces 2-nd fill must be more then 1-st");
    }

};

summSent.onchange = function () {
    var summSentVal = this.value;
    var help = document.getElementById("forSummSent");
    clearHelper(help);

    if ((summSentVal === "") || (summSentVal <= 0)) {
        showHelper(help, " Summary Senteces must be filled and be more then 0");
    }
};

introP.onchange = function () {
    var introPVal = this.value;
    var help = document.getElementById("forIntroP");
    clearHelper(help);

    if ((introPVal === "") || (introPVal <= 0)) {
        showHelper(help, " Introduction Senteces Paragraph must be filled and be more then 0");
    }
};

middleP.onchange = function () {
    var middlePVal = this.value;
    var help = document.getElementById("formiddleP");
    clearHelper(help);

    if ((middlePVal === "") || (middlePVal <= 0)) {
        showHelper(help, " Middle Senteces Paragraph must be filled and be more then 0");
    }
};

summP.onchange = function () {
    var summPVal = this.value;
    var help = document.getElementById("forsummP");
    clearHelper(help);

    if ((summPVal === "") || (summPVal <= 0)) {
        showHelper(help, " Summary Senteces Paragraph must be filled and be more then 0");
    }
};

document.getElementById("word_1").onkeyup = function () {
    var word_1 = this.value;
    var help = document.getElementById("forWord_1");
    clearHelper(help);

    if (word_1 === "") {
        showHelper(help, "Word filled required");
    }
};

document.getElementById("word_1Count").onchange = function () {
    var word_1Count = this.value;
    var help = document.getElementById("forWord_1Count");
    clearHelper(help);

    if ((word_1Count === "") || (word_1Count < 0)) {
        showHelper(help, " Word ammount filled required and can be 0 or more");
    }
};

document.getElementById("word_2").onkeyup = function () {
    var word_2 = this.value;
    var help = document.getElementById("forWord_2");
    clearHelper(help);

    if (word_2 === "") {
        showHelper(help, " Word filled required");
    }
};

document.getElementById("word_2Count").onchange = function () {
    var word_2Count = this.value;
    var help = document.getElementById("forWord_2Count");
    clearHelper(help);

    if ((word_2Count === "") || (word_2Count < 0)) {
        showHelper(help, " Word filled ammount required and can be 0 or more");
    }
};

document.getElementById("word_3").onkeyup = function () {
    var word_3 = this.value;
    var help = document.getElementById("forWord_3");
    clearHelper(help);

    if (word_3 === "") {
        showHelper(help, " Word filled required");
    }
};

document.getElementById("word_3Count").onchange = function () {
    var word_3Count = this.value;
    var help = document.getElementById("forWord_3Count");
    clearHelper(help);

    if ((word_3Count === "") || (word_3Count < 0)) {
        showHelper(help, " Word ammount filled required and can be 0 or more");
    }
};

document.getElementById("word_4").onkeyup = function () {
    var word_4 = this.value;
    var help = document.getElementById("forWord_4");
    clearHelper(help);

    if (word_4 === "") {
        showHelper(help, " Word filled required");
    }
};

document.getElementById("word_4Count").onchange = function () {
    var word_4Count = this.value;
    var help = document.getElementById("forWord_4Count");
    clearHelper(help);

    if ((word_4Count === "") || (word_4Count < 0)) {
        showHelper(help, " Word ammount filled required and can be 0 or more");
    }
};

document.getElementById("word_5").onkeyup = function () {
    var word_5 = this.value;
    var help = document.getElementById("forWord_5");
    clearHelper(help);

    if (word_5 === "") {
        showHelper(help, " Word filled required");
    }
};

document.getElementById("word_5Count").onchange = function () {
    var word_5Count = this.value;
    var help = document.getElementById("forWord_5Count");
    clearHelper(help);

    if ((word_5Count === "") || (word_5Count < 0)) {
        showHelper(help, " Word ammount filled required and can be 0 or more");
    }
};

document.getElementById("word_6").onkeyup = function () {
    var word_6 = this.value;
    var help = document.getElementById("forWord_6");
    clearHelper(help);

    if (word_6 === "") {
        showHelper(help, " Word filled required");
    }
};

document.getElementById("word_6Count").onchange = function () {
    var word_6Count = this.value;
    var help = document.getElementById("forWord_6Count");
    clearHelper(help);

    if ((word_6Count === "") || (word_6Count < 0)) {
        showHelper(help, " Word ammount filled required and can be 0 or more");
    }
};

document.getElementById("word_7").onkeyup = function () {
    var word_7 = this.value;
    var help = document.getElementById("forWord_7");
    clearHelper(help);

    if (word_7 === "") {
        showHelper(help, " Word filled required");
    }
};

document.getElementById("word_7Count").onchange = function () {
    var word_7Count = this.value;
    var help = document.getElementById("forWord_7Count");
    clearHelper(help);

    if ((word_7Count === "") || (word_7Count < 0)) {
        showHelper(help, " Word ammount filled required and can be 0 or more");
    }
};

document.getElementById("word_8").onkeyup = function () {
    var word_8 = this.value;
    var help = document.getElementById("forWord_8");
    clearHelper(help);

    if (word_8 === "") {
        showHelper(help, " Word filled required");
    }
};

document.getElementById("word_8Count").onchange = function () {
    var word_8Count = this.value;
    var help = document.getElementById("forWord_8Count");
    clearHelper(help);

    if ((word_8Count === "") || (word_8Count < 0)) {
        showHelper(help, " Word ammount filled required and can be 0 or more");
    }
};

document.getElementById("word_9").onkeyup = function () {
    var word_9 = this.value;
    var help = document.getElementById("forWord_9");
    clearHelper(help);

    if (word_9 === "") {
        showHelper(help, " Word filled required");
    }
};

document.getElementById("word_9Count").onchange = function () {
    var word_9Count = this.value;
    var help = document.getElementById("forWord_9Count");
    clearHelper(help);

    if ((word_9Count === "") || (word_9Count < 0)) {
        showHelper(help, " Word ammount filled required and can be 0 or more");
    }
};

document.getElementById("word_10").onkeyup = function () {
    var word_10 = this.value;
    var help = document.getElementById("forWord_10");
    clearHelper(help);

    if (word_10 === "") {
        showHelper(help, " Word filled required");
    }
};

document.getElementById("word_10Count").onchange = function () {
    var word_10Count = this.value;
    var help = document.getElementById("forWord_10Count");
    clearHelper(help);

    if ((word_10Count === "") || (word_10Count < 0)) {
        showHelper(help, " Word ammount filled required and can be 0 or more");
    }
};

numberP.onchange = function () {
    var numberPVal = this.value;
    numberPVal = Number(numberPVal);

    var help = document.getElementById("forTotalP");
    clearHelper(help);

    if (numberPVal === "" || (numberPVal <= 0)) {
        showHelper(help, " Number of Articles that need to be generated must be more then 0");
    }
};

var submit = document.getElementById("submit");

submit.onclick = function () {
    var introSent = document.getElementById("introSent");
    var middleSent_1 = document.getElementById("middleSent1");
    var middleSent_2 = document.getElementById("middleSent2");
    var summSent = document.getElementById("summarySent");

    var introP = document.getElementById("introP");
    var middleP = document.getElementById("middleP");
    var summP = document.getElementById("summaryP");

    var word_1 = document.getElementById("word_1");
    var word_1Count = document.getElementById("word_1Count");
    var word_2 = document.getElementById("word_2");
    var word_2Count = document.getElementById("word_2Count");
    var word_3 = document.getElementById("word_3");
    var word_3Count = document.getElementById("word_3Count");

    var word_4 = document.getElementById("word_4");
    var word_4Count = document.getElementById("word_4Count");
    var word_5 = document.getElementById("word_5");
    var word_5Count = document.getElementById("word_5Count");
    var word_6 = document.getElementById("word_6");
    var word_6Count = document.getElementById("word_6Count");
    var word_7 = document.getElementById("word_7");
    var word_7Count = document.getElementById("word_7Count");

    var word_8 = document.getElementById("word_8");
    var word_8Count = document.getElementById("word_8Count");
    var word_9 = document.getElementById("word_9");
    var word_9Count = document.getElementById("word_9Count");
    var word_10 = document.getElementById("word_10");
    var word_10Count = document.getElementById("word_10Count");

    var numberP = document.getElementById("numberP");

    var options = {};
    var errors = [];

    if (introSent.value !== "" && introSent.value > 0) {
        options.introSent = introSent.value;
    } else {
        errors.push(1);

    }

    if (middleSent_1.value !== "" && middleSent_1.value > 0) {
        options.middleSent1 = middleSent_1.value;
    } else {
        errors.push(2);

    }

    if (middleSent_2.value !== "" && middleSent_2.value > 0) {
        options.middleSent2 = middleSent_2.value;
    } else {
        errors.push(3);

    }
    if (middleSent_2.value <= middleSent_1.value) {
        errors.push(5);

    }

    if (summSent.value !== "" && summSent.value > 0) {
        options.summSent = summSent.value;
    } else {
        errors.push(4);

    }

    if (introP.value !== "" && introP.value > 0) {
        options.introParagraph = introP.value;
    } else {
        errors.push(6);

    }

    if (middleP.value !== "" && middleP.value > 0) {
        options.middleParagraph = middleP.value;
    } else {
        errors.push(7);

    }

    if (summP.value !== "" && summP.value > 0) {
        options.summParagraph = summP.value;
    } else {
        errors.push(8);

    }

    if (numberP.value !== "" && numberP.value >= 0) {
        options.totalParag = numberP.value;
    } else {
        errors.push(9);
    }
    if (Number(localStorage.getItem("newWords")) === 1) {
        if (word_1.value !== "") {
            options.word_1 = word_1.value;
        } else {
            errors.push(10);
        }

        if (word_1Count.value !== "" && word_1Count.value >= 0) {
            options.word_1Count = word_1Count.value;
        } else {
            errors.push(11);
        }
    }

    if (Number(localStorage.getItem("newWords")) === 2) {
        if (word_1.value !== "") {
            options.word_1 = word_1.value;
        } else {
            errors.push(12);
        }

        if (word_1Count.value !== "" && word_1Count.value >= 0) {
            options.word_1Count = word_1Count.value;
        } else {
            errors.push(13);
        }

        if (word_2.value !== "") {
            options.word_2 = word_2.value;
        } else {
            errors.push(14);
        }

        if (word_2Count.value !== "" && word_2Count.value >= 0) {
            options.word_2Count = word_2Count.value;
        } else {
            errors.push(15);
        }
    }

    if (Number(localStorage.getItem("newWords")) === 3) {
        if (word_1.value !== "") {
            options.word_1 = word_1.value;
        } else {
            errors.push(16);
        }

        if (word_1Count.value !== "" && word_1Count.value >= 0) {
            options.word_1Count = word_1Count.value;
        } else {
            errors.push(17);
        }

        if (word_2.value !== "") {
            options.word_2 = word_2.value;
        } else {
            errors.push(18);
        }

        if (word_2Count.value !== "" && word_2Count.value >= 0) {
            options.word_2Count = word_2Count.value;
        } else {
            errors.push(19);
        }
        if (word_3.value !== "") {
            options.word_3 = word_3.value;
        } else {
            errors.push(20);
        }

        if (word_3Count.value !== "" && word_3Count.value >= 0) {
            options.word_3Count = word_3Count.value;
        } else {
            errors.push(21);
        }
    }

    if (Number(localStorage.getItem("newWords")) === 4) {
        if (word_1.value !== "") {
            options.word_1 = word_1.value;
        } else {
            errors.push(16);
        }

        if (word_1Count.value !== "" && word_1Count.value >= 0) {
            options.word_1Count = word_1Count.value;
        } else {
            errors.push(17);
        }

        if (word_2.value !== "") {
            options.word_2 = word_2.value;
        } else {
            errors.push(18);
        }

        if (word_2Count.value !== "" && word_2Count.value >= 0) {
            options.word_2Count = word_2Count.value;
        } else {
            errors.push(19);
        }
        if (word_3.value !== "") {
            options.word_3 = word_3.value;
        } else {
            errors.push(20);
        }

        if (word_3Count.value !== "" && word_3Count.value >= 0) {
            options.word_3Count = word_3Count.value;
        } else {
            errors.push(21);
        }

        if (word_4.value !== "") {
            options.word_4 = word_4.value;
        } else {
            errors.push(22);
        }

        if (word_4Count.value !== "" && word_4Count.value >= 0) {
            options.word_4Count = word_4Count.value;
        } else {
            errors.push(23);
        }
    }

    if (Number(localStorage.getItem("newWords")) === 5) {
        if (word_1.value !== "") {
            options.word_1 = word_1.value;
        } else {
            errors.push(16);
        }

        if (word_1Count.value !== "" && word_1Count.value >= 0) {
            options.word_1Count = word_1Count.value;
        } else {
            errors.push(17);
        }

        if (word_2.value !== "") {
            options.word_2 = word_2.value;
        } else {
            errors.push(18);
        }

        if (word_2Count.value !== "" && word_2Count.value >= 0) {
            options.word_2Count = word_2Count.value;
        } else {
            errors.push(19);
        }
        if (word_3.value !== "") {
            options.word_3 = word_3.value;
        } else {
            errors.push(20);
        }

        if (word_3Count.value !== "" && word_3Count.value >= 0) {
            options.word_3Count = word_3Count.value;
        } else {
            errors.push(21);
        }

        if (word_4.value !== "") {
            options.word_4 = word_4.value;
        } else {
            errors.push(22);
        }

        if (word_4Count.value !== "" && word_4Count.value >= 0) {
            options.word_4Count = word_4Count.value;
        } else {
            errors.push(23);
        }

        if (word_5.value !== "") {
            options.word_5 = word_5.value;
        } else {
            errors.push(24);
        }

        if (word_5Count.value !== "" && word_5Count.value >= 0) {
            options.word_5Count = word_5Count.value;
        } else {
            errors.push(25);
        }
    }

    if (Number(localStorage.getItem("newWords")) === 6) {
        if (word_1.value !== "") {
            options.word_1 = word_1.value;
        } else {
            errors.push(16);
        }

        if (word_1Count.value !== "" && word_1Count.value >= 0) {
            options.word_1Count = word_1Count.value;
        } else {
            errors.push(17);
        }

        if (word_2.value !== "") {
            options.word_2 = word_2.value;
        } else {
            errors.push(18);
        }

        if (word_2Count.value !== "" && word_2Count.value >= 0) {
            options.word_2Count = word_2Count.value;
        } else {
            errors.push(19);
        }
        if (word_3.value !== "") {
            options.word_3 = word_3.value;
        } else {
            errors.push(20);
        }

        if (word_3Count.value !== "" && word_3Count.value >= 0) {
            options.word_3Count = word_3Count.value;
        } else {
            errors.push(21);
        }

        if (word_4.value !== "") {
            options.word_4 = word_4.value;
        } else {
            errors.push(22);
        }

        if (word_4Count.value !== "" && word_4Count.value >= 0) {
            options.word_4Count = word_4Count.value;
        } else {
            errors.push(23);
        }

        if (word_5.value !== "") {
            options.word_5 = word_5.value;
        } else {
            errors.push(24);
        }

        if (word_5Count.value !== "" && word_5Count.value >= 0) {
            options.word_5Count = word_5Count.value;
        } else {
            errors.push(25);
        }

        if (word_6.value !== "") {
            options.word_6 = word_6.value;
        } else {
            errors.push(26);
        }

        if (word_6Count.value !== "" && word_6Count.value >= 0) {
            options.word_6Count = word_6Count.value;
        } else {
            errors.push(27);
        }
    }

    if (Number(localStorage.getItem("newWords")) === 7) {
        if (word_1.value !== "") {
            options.word_1 = word_1.value;
        } else {
            errors.push(16);
        }

        if (word_1Count.value !== "" && word_1Count.value >= 0) {
            options.word_1Count = word_1Count.value;
        } else {
            errors.push(17);
        }

        if (word_2.value !== "") {
            options.word_2 = word_2.value;
        } else {
            errors.push(18);
        }

        if (word_2Count.value !== "" && word_2Count.value >= 0) {
            options.word_2Count = word_2Count.value;
        } else {
            errors.push(19);
        }
        if (word_3.value !== "") {
            options.word_3 = word_3.value;
        } else {
            errors.push(20);
        }

        if (word_3Count.value !== "" && word_3Count.value >= 0) {
            options.word_3Count = word_3Count.value;
        } else {
            errors.push(21);
        }

        if (word_4.value !== "") {
            options.word_4 = word_4.value;
        } else {
            errors.push(22);
        }

        if (word_4Count.value !== "" && word_4Count.value >= 0) {
            options.word_4Count = word_4Count.value;
        } else {
            errors.push(23);
        }

        if (word_5.value !== "") {
            options.word_5 = word_5.value;
        } else {
            errors.push(24);
        }

        if (word_5Count.value !== "" && word_5Count.value >= 0) {
            options.word_5Count = word_5Count.value;
        } else {
            errors.push(25);
        }

        if (word_6.value !== "") {
            options.word_6 = word_6.value;
        } else {
            errors.push(26);
        }

        if (word_6Count.value !== "" && word_6Count.value >= 0) {
            options.word_6Count = word_6Count.value;
        } else {
            errors.push(27);
        }

        if (word_7.value !== "") {
            options.word_7 = word_7.value;
        } else {
            errors.push(28);
        }

        if (word_7Count.value !== "" && word_7Count.value >= 0) {
            options.word_7Count = word_7Count.value;
        } else {
            errors.push(29);
        }
    }
    if (Number(localStorage.getItem("newWords")) === 8) {
        if (word_1.value !== "") {
            options.word_1 = word_1.value;
        } else {
            errors.push(16);
        }

        if (word_1Count.value !== "" && word_1Count.value >= 0) {
            options.word_1Count = word_1Count.value;
        } else {
            errors.push(17);
        }

        if (word_2.value !== "") {
            options.word_2 = word_2.value;
        } else {
            errors.push(18);
        }

        if (word_2Count.value !== "" && word_2Count.value >= 0) {
            options.word_2Count = word_2Count.value;
        } else {
            errors.push(19);
        }
        if (word_3.value !== "") {
            options.word_3 = word_3.value;
        } else {
            errors.push(20);
        }

        if (word_3Count.value !== "" && word_3Count.value >= 0) {
            options.word_3Count = word_3Count.value;
        } else {
            errors.push(21);
        }

        if (word_4.value !== "") {
            options.word_4 = word_4.value;
        } else {
            errors.push(22);
        }

        if (word_4Count.value !== "" && word_4Count.value >= 0) {
            options.word_4Count = word_4Count.value;
        } else {
            errors.push(23);
        }

        if (word_5.value !== "") {
            options.word_5 = word_5.value;
        } else {
            errors.push(24);
        }

        if (word_5Count.value !== "" && word_5Count.value >= 0) {
            options.word_5Count = word_5Count.value;
        } else {
            errors.push(25);
        }

        if (word_6.value !== "") {
            options.word_6 = word_6.value;
        } else {
            errors.push(26);
        }

        if (word_6Count.value !== "" && word_6Count.value >= 0) {
            options.word_6Count = word_6Count.value;
        } else {
            errors.push(27);
        }

        if (word_7.value !== "") {
            options.word_7 = word_7.value;
        } else {
            errors.push(28);
        }

        if (word_7Count.value !== "" && word_7Count.value >= 0) {
            options.word_7Count = word_7Count.value;
        } else {
            errors.push(29);
        }

        if (word_8.value !== "") {
            options.word_8 = word_8.value;
        } else {
            errors.push(30);
        }

        if (word_8Count.value !== "" && word_8Count.value >= 0) {
            options.word_8Count = word_8Count.value;
        } else {
            errors.push(31);
        }
    }
    if (Number(localStorage.getItem("newWords")) === 9) {
        if (word_1.value !== "") {
            options.word_1 = word_1.value;
        } else {
            errors.push(16);
        }

        if (word_1Count.value !== "" && word_1Count.value >= 0) {
            options.word_1Count = word_1Count.value;
        } else {
            errors.push(17);
        }

        if (word_2.value !== "") {
            options.word_2 = word_2.value;
        } else {
            errors.push(18);
        }

        if (word_2Count.value !== "" && word_2Count.value >= 0) {
            options.word_2Count = word_2Count.value;
        } else {
            errors.push(19);
        }
        if (word_3.value !== "") {
            options.word_3 = word_3.value;
        } else {
            errors.push(20);
        }

        if (word_3Count.value !== "" && word_3Count.value >= 0) {
            options.word_3Count = word_3Count.value;
        } else {
            errors.push(21);
        }

        if (word_4.value !== "") {
            options.word_4 = word_4.value;
        } else {
            errors.push(22);
        }

        if (word_4Count.value !== "" && word_4Count.value >= 0) {
            options.word_4Count = word_4Count.value;
        } else {
            errors.push(23);
        }

        if (word_5.value !== "") {
            options.word_5 = word_5.value;
        } else {
            errors.push(24);
        }

        if (word_5Count.value !== "" && word_5Count.value >= 0) {
            options.word_5Count = word_5Count.value;
        } else {
            errors.push(25);
        }

        if (word_6.value !== "") {
            options.word_6 = word_6.value;
        } else {
            errors.push(26);
        }

        if (word_6Count.value !== "" && word_6Count.value >= 0) {
            options.word_6Count = word_6Count.value;
        } else {
            errors.push(27);
        }

        if (word_7.value !== "") {
            options.word_7 = word_7.value;
        } else {
            errors.push(28);
        }

        if (word_7Count.value !== "" && word_7Count.value >= 0) {
            options.word_7Count = word_7Count.value;
        } else {
            errors.push(29);
        }

        if (word_8.value !== "") {
            options.word_8 = word_8.value;
        } else {
            errors.push(30);
        }

        if (word_8Count.value !== "" && word_8Count.value >= 0) {
            options.word_8Count = word_8Count.value;
        } else {
            errors.push(31);
        }

        if (word_9.value !== "") {
            options.word_9 = word_9.value;
        } else {
            errors.push(32);
        }

        if (word_9Count.value !== "" && word_9Count.value >= 0) {
            options.word_9Count = word_9Count.value;
        } else {
            errors.push(33);
        }
    }

    if (Number(localStorage.getItem("newWords")) === 10) {
        if (word_1.value !== "") {
            options.word_1 = word_1.value;
        } else {
            errors.push(16);
        }

        if (word_1Count.value !== "" && word_1Count.value >= 0) {
            options.word_1Count = word_1Count.value;
        } else {
            errors.push(17);
        }

        if (word_2.value !== "") {
            options.word_2 = word_2.value;
        } else {
            errors.push(18);
        }

        if (word_2Count.value !== "" && word_2Count.value >= 0) {
            options.word_2Count = word_2Count.value;
        } else {
            errors.push(19);
        }
        if (word_3.value !== "") {
            options.word_3 = word_3.value;
        } else {
            errors.push(20);
        }

        if (word_3Count.value !== "" && word_3Count.value >= 0) {
            options.word_3Count = word_3Count.value;
        } else {
            errors.push(21);
        }

        if (word_4.value !== "") {
            options.word_4 = word_4.value;
        } else {
            errors.push(22);
        }

        if (word_4Count.value !== "" && word_4Count.value >= 0) {
            options.word_4Count = word_4Count.value;
        } else {
            errors.push(23);
        }

        if (word_5.value !== "") {
            options.word_5 = word_5.value;
        } else {
            errors.push(24);
        }

        if (word_5Count.value !== "" && word_5Count.value >= 0) {
            options.word_5Count = word_5Count.value;
        } else {
            errors.push(25);
        }

        if (word_6.value !== "") {
            options.word_6 = word_6.value;
        } else {
            errors.push(26);
        }

        if (word_6Count.value !== "" && word_6Count.value >= 0) {
            options.word_6Count = word_6Count.value;
        } else {
            errors.push(27);
        }

        if (word_7.value !== "") {
            options.word_7 = word_7.value;
        } else {
            errors.push(28);
        }

        if (word_7Count.value !== "" && word_7Count.value >= 0) {
            options.word_7Count = word_7Count.value;
        } else {
            errors.push(29);
        }

        if (word_8.value !== "") {
            options.word_8 = word_8.value;
        } else {
            errors.push(30);
        }

        if (word_8Count.value !== "" && word_8Count.value >= 0) {
            options.word_8Count = word_8Count.value;
        } else {
            errors.push(31);
        }

        if (word_9.value !== "") {
            options.word_9 = word_9.value;
        } else {
            errors.push(32);
        }

        if (word_9Count.value !== "" && word_9Count.value >= 0) {
            options.word_9Count = word_9Count.value;
        } else {
            errors.push(33);
        }

        if (word_10.value !== "") {
            options.word_10 = word_10.value;
        } else {
            errors.push(34);
        }

        if (word_10Count.value !== "" && word_10Count.value >= 0) {
            options.word_10Count = word_10Count.value;
        } else {
            errors.push(35);
        }
    }

    if (errors.length === 0) {
        clearErrorList("forError");
        showSubmit();
        localStorage.setItem("options", JSON.stringify(options));
        fireEvent(document.getElementById("introduction"), "keyup");
        fireEvent(document.getElementById("middle"), "keyup");
        fireEvent(document.getElementById("summary"), "keyup");
    } else {
        clearErrorList("forError");

        for (var i = 0; i < errors.length; i++) {
            if (errors[i] === 1) {
                var error1 = " Introduction Senteces must be filled and be more then 0";
                showError(error1);
            } else if (errors[i] === 2) {
                var error2 = " Middle Senteces must be filled and be more then 0";
                showError(error2);
            } else if (errors[i] === 3) {
                var error3 = " Middle Senteces must be filled and be more then 0";
                showError(error3);
            } else if (errors[i] === 5) {
                var error5 = " Middle Senteces 2-nd fill must be more then 1-st";
                showError(error5);
            } else if (errors[i] === 4) {
                var error4 = " Summary Senteces must be filled and be more then 0";
                showError(error4);
            } else if (errors[i] === 6) {
                var error6 = " Introduction Senteces Paragraph must be filled and be more then 0";
                showError(error6);
            } else if (errors[i] === 7) {
                var error7 = " Middle Senteces Paragraph must be filled and be more then 0";
                showError(error7);
            } else if (errors[i] === 8) {
                var error8 = " Summary Senteces Paragraph must be filled and be more then 0";
                showError(error8);
            } else if (errors[i] === 9) {
                var error9 = " Number of Articles required";
                showError(error9);
            } else if (errors[i] === 10) {
                var error10 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error10);
            } else if (errors[i] === 11) {
                var error11 = " Word filled required";
                showError(error11);
            } else if (errors[i] === 12) {
                var error12 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error12);
            } else if (errors[i] === 13) {
                var error13 = " Word filled required";
                showError(error13);
            } else if (errors[i] === 14) {
                var error14 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error14);
            } else if (errors[i] === 15) {
                var error15 = " Total article paragraph must be equal all paragraphs section";
                showError(error15);
            } else if (errors[i] === 16) {
                var error16 = " Word filled required";
                showError(error16);
            } else if (errors[i] === 17) {
                var error17 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error17);
            } else if (errors[i] === 18) {
                var error18 = " Word filled required";
                showError(error18);
            } else if (errors[i] === 19) {
                var error19 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error19);
            } else if (errors[i] === 20) {
                var error20 = " Word filled required";
                showError(error20);
            } else if (errors[i] === 21) {
                var error21 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error21);
            } else if (errors[i] === 22) {
                var error22 = " Word filled required";
                showError(error20);
            } else if (errors[i] === 23) {
                var error23 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error21);
            } else if (errors[i] === 24) {
                var error24 = " Word filled required";
                showError(error20);
            } else if (errors[i] === 25) {
                var error25 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error21);
            } else if (errors[i] === 26) {
                var error26 = " Word filled required";
                showError(error20);
            } else if (errors[i] === 27) {
                var error27 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error21);
            } else if (errors[i] === 28) {
                var error28 = " Word filled required";
                showError(error20);
            } else if (errors[i] === 29) {
                var error29 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error21);
            } else if (errors[i] === 30) {
                var error28 = " Word filled required";
                showError(error20);
            } else if (errors[i] === 31) {
                var error29 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error21);
            } else if (errors[i] === 32) {
                var error28 = " Word filled required";
                showError(error20);
            } else if (errors[i] === 33) {
                var error29 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error21);
            } else if (errors[i] === 34) {
                var error28 = " Word filled required";
                showError(error20);
            } else if (errors[i] === 35) {
                var error29 = " Word ammount filled required and must be more then 0Word filled required";
                showError(error21);
            }

        }
        localStorage.setItem("options", "");
    }
};

document.getElementById("fileLoader").onchange = function () {
    var file = document.getElementById("fileLoader").files[0];

    if (file.type === "text/plain") {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {

            var options = e.target.result;
            options = JSON.parse(options);

            var size = Object.keys(options).length;
            if ((typeof options === "object") && ((Number(size) >= 8) && (Number(size) <= 28))) {

                document.getElementById("introSent").value = Number(options.introSent);
                document.getElementById("middleSent1").value = Number(options.middleSent1);
                document.getElementById("middleSent2").value = Number(options.middleSent2);
                document.getElementById("summarySent").value = Number(options.summSent);

                document.getElementById("introP").value = Number(options.introParagraph);
                document.getElementById("middleP").value = Number(options.middleParagraph);
                document.getElementById("summaryP").value = Number(options.summParagraph);

                document.getElementById("numberP").value = Number(options.totalParag);
                localStorage.setItem("newWords", "");
                if (Number(size) === 28) {
                    document.getElementById("word_1").value = options.word_1;
                    document.getElementById("word_1Count").value = options.word_1Count;

                    document.getElementById("word_2").value = options.word_2;
                    document.getElementById("word_2Count").value = options.word_2Count;

                    document.getElementById("word_3").value = options.word_3;
                    document.getElementById("word_3Count").value = options.word_3Count;

                    document.getElementById("word_4").value = options.word_4;
                    document.getElementById("word_4Count").value = options.word_4Count;

                    document.getElementById("word_5").value = options.word_5;
                    document.getElementById("word_5Count").value = options.word_5Count;

                    document.getElementById("word_6").value = options.word_6;
                    document.getElementById("word_6Count").value = options.word_6Count;

                    document.getElementById("word_7").value = options.word_7;
                    document.getElementById("word_7Count").value = options.word_7Count;

                    document.getElementById("word_8").value = options.word_8;
                    document.getElementById("word_8Count").value = options.word_8Count;

                    document.getElementById("word_9").value = options.word_9;
                    document.getElementById("word_9Count").value = options.word_9Count;

                    document.getElementById("word_10").value = options.word_10;
                    document.getElementById("word_10Count").value = options.word_10Count;

                    document.getElementById("1_st_word").style.display = "block";
                    document.getElementById("2_nd_word").style.display = "block";
                    document.getElementById("3_nd_word").style.display = "block";
                    document.getElementById("4_nd_word").style.display = "block";
                    document.getElementById("5_nd_word").style.display = "block";
                    document.getElementById("6_nd_word").style.display = "block";
                    document.getElementById("7_nd_word").style.display = "block";
                    document.getElementById("8_nd_word").style.display = "block";
                    document.getElementById("9_nd_word").style.display = "block";
                    document.getElementById("10_nd_word").style.display = "block";
                    localStorage.setItem("newWords", 10);
                }

                if (Number(size) === 26) {
                    document.getElementById("word_1").value = options.word_1;
                    document.getElementById("word_1Count").value = options.word_1Count;

                    document.getElementById("word_2").value = options.word_2;
                    document.getElementById("word_2Count").value = options.word_2Count;

                    document.getElementById("word_3").value = options.word_3;
                    document.getElementById("word_3Count").value = options.word_3Count;

                    document.getElementById("word_4").value = options.word_4;
                    document.getElementById("word_4Count").value = options.word_4Count;

                    document.getElementById("word_5").value = options.word_5;
                    document.getElementById("word_5Count").value = options.word_5Count;

                    document.getElementById("word_6").value = options.word_6;
                    document.getElementById("word_6Count").value = options.word_6Count;

                    document.getElementById("word_7").value = options.word_7;
                    document.getElementById("word_7Count").value = options.word_7Count;

                    document.getElementById("word_8").value = options.word_8;
                    document.getElementById("word_8Count").value = options.word_8Count;

                    document.getElementById("word_9").value = options.word_9;
                    document.getElementById("word_9Count").value = options.word_9Count;

                    document.getElementById("word_10").value = "";
                    document.getElementById("word_10Count").value = "";

                    document.getElementById("1_st_word").style.display = "block";
                    document.getElementById("2_nd_word").style.display = "block";
                    document.getElementById("3_nd_word").style.display = "block";
                    document.getElementById("4_nd_word").style.display = "block";
                    document.getElementById("5_nd_word").style.display = "block";
                    document.getElementById("6_nd_word").style.display = "block";
                    document.getElementById("7_nd_word").style.display = "block";
                    document.getElementById("8_nd_word").style.display = "block";
                    document.getElementById("9_nd_word").style.display = "block";
                    document.getElementById("10_nd_word").style.display = "none";
                    localStorage.setItem("newWords", 9);
                }

                if (Number(size) === 24) {
                    document.getElementById("word_1").value = options.word_1;
                    document.getElementById("word_1Count").value = options.word_1Count;

                    document.getElementById("word_2").value = options.word_2;
                    document.getElementById("word_2Count").value = options.word_2Count;

                    document.getElementById("word_3").value = options.word_3;
                    document.getElementById("word_3Count").value = options.word_3Count;

                    document.getElementById("word_4").value = options.word_4;
                    document.getElementById("word_4Count").value = options.word_4Count;

                    document.getElementById("word_5").value = options.word_5;
                    document.getElementById("word_5Count").value = options.word_5Count;

                    document.getElementById("word_6").value = options.word_6;
                    document.getElementById("word_6Count").value = options.word_6Count;

                    document.getElementById("word_7").value = options.word_7;
                    document.getElementById("word_7Count").value = options.word_7Count;

                    document.getElementById("word_8").value = options.word_8;
                    document.getElementById("word_8Count").value = options.word_8Count;

                    document.getElementById("word_9").value = "";
                    document.getElementById("word_9Count").value = "";

                    document.getElementById("word_10").value = "";
                    document.getElementById("word_10Count").value = "";

                    document.getElementById("1_st_word").style.display = "block";
                    document.getElementById("2_nd_word").style.display = "block";
                    document.getElementById("3_nd_word").style.display = "block";
                    document.getElementById("4_nd_word").style.display = "block";
                    document.getElementById("5_nd_word").style.display = "block";
                    document.getElementById("6_nd_word").style.display = "block";
                    document.getElementById("7_nd_word").style.display = "block";
                    document.getElementById("8_nd_word").style.display = "block";
                    document.getElementById("9_nd_word").style.display = "none";
                    document.getElementById("10_nd_word").style.display = "none";
                    localStorage.setItem("newWords", 8);
                }

                if (Number(size) === 22) {
                    document.getElementById("word_1").value = options.word_1;
                    document.getElementById("word_1Count").value = options.word_1Count;

                    document.getElementById("word_2").value = options.word_2;
                    document.getElementById("word_2Count").value = options.word_2Count;

                    document.getElementById("word_3").value = options.word_3;
                    document.getElementById("word_3Count").value = options.word_3Count;

                    document.getElementById("word_4").value = options.word_4;
                    document.getElementById("word_4Count").value = options.word_4Count;

                    document.getElementById("word_5").value = options.word_5;
                    document.getElementById("word_5Count").value = options.word_5Count;

                    document.getElementById("word_6").value = options.word_6;
                    document.getElementById("word_6Count").value = options.word_6Count;

                    document.getElementById("word_7").value = options.word_7;
                    document.getElementById("word_7Count").value = options.word_7Count;

                    document.getElementById("word_8").value = "";
                    document.getElementById("word_8Count").value = "";

                    document.getElementById("word_9").value = "";
                    document.getElementById("word_9Count").value = "";

                    document.getElementById("word_10").value = "";
                    document.getElementById("word_10Count").value = "";

                    document.getElementById("1_st_word").style.display = "block";
                    document.getElementById("2_nd_word").style.display = "block";
                    document.getElementById("3_nd_word").style.display = "block";
                    document.getElementById("4_nd_word").style.display = "block";
                    document.getElementById("5_nd_word").style.display = "block";
                    document.getElementById("6_nd_word").style.display = "block";
                    document.getElementById("7_nd_word").style.display = "block";
                    document.getElementById("8_nd_word").style.display = "none";
                    document.getElementById("9_nd_word").style.display = "none";
                    document.getElementById("10_nd_word").style.display = "none";
                    localStorage.setItem("newWords", 7);
                }

                if (Number(size) === 20) {
                    document.getElementById("word_1").value = options.word_1;
                    document.getElementById("word_1Count").value = options.word_1Count;

                    document.getElementById("word_2").value = options.word_2;
                    document.getElementById("word_2Count").value = options.word_2Count;

                    document.getElementById("word_3").value = options.word_3;
                    document.getElementById("word_3Count").value = options.word_3Count;

                    document.getElementById("word_4").value = options.word_4;
                    document.getElementById("word_4Count").value = options.word_4Count;

                    document.getElementById("word_5").value = options.word_5;
                    document.getElementById("word_5Count").value = options.word_5Count;

                    document.getElementById("word_6").value = options.word_6;
                    document.getElementById("word_6Count").value = options.word_6Count;

                    document.getElementById("word_7").value = "";
                    document.getElementById("word_7Count").value = "";

                    document.getElementById("word_8").value = "";
                    document.getElementById("word_8Count").value = "";

                    document.getElementById("word_9").value = "";
                    document.getElementById("word_9Count").value = "";

                    document.getElementById("word_10").value = "";
                    document.getElementById("word_10Count").value = "";

                    document.getElementById("1_st_word").style.display = "block";
                    document.getElementById("2_nd_word").style.display = "block";
                    document.getElementById("3_nd_word").style.display = "block";
                    document.getElementById("4_nd_word").style.display = "block";
                    document.getElementById("5_nd_word").style.display = "block";
                    document.getElementById("6_nd_word").style.display = "block";
                    document.getElementById("7_nd_word").style.display = "none";
                    document.getElementById("8_nd_word").style.display = "none";
                    document.getElementById("9_nd_word").style.display = "none";
                    document.getElementById("10_nd_word").style.display = "none";
                    localStorage.setItem("newWords", 6);
                }

                if (Number(size) === 18) {
                    document.getElementById("word_1").value = options.word_1;
                    document.getElementById("word_1Count").value = options.word_1Count;

                    document.getElementById("word_2").value = options.word_2;
                    document.getElementById("word_2Count").value = options.word_2Count;

                    document.getElementById("word_3").value = options.word_3;
                    document.getElementById("word_3Count").value = options.word_3Count;

                    document.getElementById("word_4").value = options.word_4;
                    document.getElementById("word_4Count").value = options.word_4Count;

                    document.getElementById("word_5").value = options.word_5;
                    document.getElementById("word_5Count").value = options.word_5Count;

                    document.getElementById("word_6").value = "";
                    document.getElementById("word_6Count").value = "";

                    document.getElementById("word_7").value = "";
                    document.getElementById("word_7Count").value = "";

                    document.getElementById("word_8").value = "";
                    document.getElementById("word_8Count").value = "";

                    document.getElementById("word_9").value = "";
                    document.getElementById("word_9Count").value = "";

                    document.getElementById("word_10").value = "";
                    document.getElementById("word_10Count").value = "";

                    document.getElementById("1_st_word").style.display = "block";
                    document.getElementById("2_nd_word").style.display = "block";
                    document.getElementById("3_nd_word").style.display = "block";
                    document.getElementById("4_nd_word").style.display = "block";
                    document.getElementById("5_nd_word").style.display = "block";
                    document.getElementById("6_nd_word").style.display = "none";
                    document.getElementById("7_nd_word").style.display = "none";
                    document.getElementById("8_nd_word").style.display = "none";
                    document.getElementById("9_nd_word").style.display = "none";
                    document.getElementById("10_nd_word").style.display = "none";
                    localStorage.setItem("newWords", 5);
                }

                if (Number(size) === 16) {
                    document.getElementById("word_1").value = options.word_1;
                    document.getElementById("word_1Count").value = options.word_1Count;

                    document.getElementById("word_2").value = options.word_2;
                    document.getElementById("word_2Count").value = options.word_2Count;

                    document.getElementById("word_3").value = options.word_3;
                    document.getElementById("word_3Count").value = options.word_3Count;

                    document.getElementById("word_4").value = options.word_4;
                    document.getElementById("word_4Count").value = options.word_4Count;

                    document.getElementById("word_5").value = "";
                    document.getElementById("word_5Count").value = "";

                    document.getElementById("word_6").value = "";
                    document.getElementById("word_6Count").value = "";

                    document.getElementById("word_7").value = "";
                    document.getElementById("word_7Count").value = "";

                    document.getElementById("word_8").value = "";
                    document.getElementById("word_8Count").value = "";

                    document.getElementById("word_9").value = "";
                    document.getElementById("word_9Count").value = "";

                    document.getElementById("word_10").value = "";
                    document.getElementById("word_10Count").value = "";

                    document.getElementById("1_st_word").style.display = "block";
                    document.getElementById("2_nd_word").style.display = "block";
                    document.getElementById("3_nd_word").style.display = "block";
                    document.getElementById("4_nd_word").style.display = "block";
                    document.getElementById("5_nd_word").style.display = "none";
                    document.getElementById("6_nd_word").style.display = "none";
                    document.getElementById("7_nd_word").style.display = "none";
                    document.getElementById("8_nd_word").style.display = "none";
                    document.getElementById("9_nd_word").style.display = "none";
                    document.getElementById("10_nd_word").style.display = "none";
                    localStorage.setItem("newWords", 4);
                }

                if (Number(size) === 14) {
                    document.getElementById("word_1").value = options.word_1;
                    document.getElementById("word_1Count").value = options.word_1Count;

                    document.getElementById("word_2").value = options.word_2;
                    document.getElementById("word_2Count").value = options.word_2Count;

                    document.getElementById("word_3").value = options.word_3;
                    document.getElementById("word_3Count").value = options.word_3Count;

                    document.getElementById("word_4").value = "";
                    document.getElementById("word_4Count").value = "";

                    document.getElementById("word_5").value = "";
                    document.getElementById("word_5Count").value = "";

                    document.getElementById("word_6").value = "";
                    document.getElementById("word_6Count").value = "";

                    document.getElementById("word_7").value = "";
                    document.getElementById("word_7Count").value = "";

                    document.getElementById("word_8").value = "";
                    document.getElementById("word_8Count").value = "";

                    document.getElementById("word_9").value = "";
                    document.getElementById("word_9Count").value = "";

                    document.getElementById("word_10").value = "";
                    document.getElementById("word_10Count").value = "";

                    document.getElementById("1_st_word").style.display = "block";
                    document.getElementById("2_nd_word").style.display = "block";
                    document.getElementById("3_nd_word").style.display = "block";
                    document.getElementById("4_nd_word").style.display = "none";
                    document.getElementById("5_nd_word").style.display = "none";
                    document.getElementById("6_nd_word").style.display = "none";
                    document.getElementById("7_nd_word").style.display = "none";
                    document.getElementById("8_nd_word").style.display = "none";
                    document.getElementById("9_nd_word").style.display = "none";
                    document.getElementById("10_nd_word").style.display = "none";
                    localStorage.setItem("newWords", 3);
                }

                if (Number(size) === 12) {
                    document.getElementById("word_1").value = options.word_1;
                    document.getElementById("word_1Count").value = options.word_1Count;

                    document.getElementById("word_2").value = options.word_2;
                    document.getElementById("word_2Count").value = options.word_2Count;

                    document.getElementById("word_3").value = "";
                    document.getElementById("word_3Count").value = "";

                    document.getElementById("word_4").value = "";
                    document.getElementById("word_4Count").value = "";

                    document.getElementById("word_5").value = "";
                    document.getElementById("word_5Count").value = "";

                    document.getElementById("word_6").value = "";
                    document.getElementById("word_6Count").value = "";

                    document.getElementById("word_7").value = "";
                    document.getElementById("word_7Count").value = "";

                    document.getElementById("word_8").value = "";
                    document.getElementById("word_8Count").value = "";

                    document.getElementById("word_9").value = "";
                    document.getElementById("word_9Count").value = "";

                    document.getElementById("word_10").value = "";
                    document.getElementById("word_10Count").value = "";

                    document.getElementById("1_st_word").style.display = "block";
                    document.getElementById("2_nd_word").style.display = "block";
                    document.getElementById("3_nd_word").style.display = "none";
                    document.getElementById("4_nd_word").style.display = "none";
                    document.getElementById("5_nd_word").style.display = "none";
                    document.getElementById("6_nd_word").style.display = "none";
                    document.getElementById("7_nd_word").style.display = "none";
                    document.getElementById("8_nd_word").style.display = "none";
                    document.getElementById("9_nd_word").style.display = "none";
                    document.getElementById("10_nd_word").style.display = "none";
                    localStorage.setItem("newWords", 2);
                }

                if (Number(size) === 10) {
                    document.getElementById("word_1").value = options.word_1;
                    document.getElementById("word_1Count").value = options.word_1Count;

                    document.getElementById("word_2").value = "";
                    document.getElementById("word_2Count").value = "";

                    document.getElementById("word_3").value = "";
                    document.getElementById("word_3Count").value = "";

                    document.getElementById("word_4").value = "";
                    document.getElementById("word_4Count").value = "";

                    document.getElementById("word_5").value = "";
                    document.getElementById("word_5Count").value = "";

                    document.getElementById("word_6").value = "";
                    document.getElementById("word_6Count").value = "";

                    document.getElementById("word_7").value = "";
                    document.getElementById("word_7Count").value = "";

                    document.getElementById("word_8").value = "";
                    document.getElementById("word_8Count").value = "";

                    document.getElementById("word_9").value = "";
                    document.getElementById("word_9Count").value = "";

                    document.getElementById("word_10").value = "";
                    document.getElementById("word_10Count").value = "";

                    document.getElementById("1_st_word").style.display = "block";
                    document.getElementById("2_nd_word").style.display = "none";
                    document.getElementById("3_nd_word").style.display = "none";
                    document.getElementById("4_nd_word").style.display = "none";
                    document.getElementById("5_nd_word").style.display = "none";
                    document.getElementById("6_nd_word").style.display = "none";
                    document.getElementById("7_nd_word").style.display = "none";
                    document.getElementById("8_nd_word").style.display = "none";
                    document.getElementById("9_nd_word").style.display = "none";
                    document.getElementById("10_nd_word").style.display = "none";
                    localStorage.setItem("newWords", 1);
                }

                if (Number(size) === 8) {
                    document.getElementById("word_1").value = "";
                    document.getElementById("word_1Count").value = "";

                    document.getElementById("word_2").value = "";
                    document.getElementById("word_2Count").value = "";

                    document.getElementById("word_3").value = "";
                    document.getElementById("word_3Count").value = "";

                    document.getElementById("word_4").value = "";
                    document.getElementById("word_4Count").value = "";

                    document.getElementById("word_5").value = "";
                    document.getElementById("word_5Count").value = "";

                    document.getElementById("word_6").value = "";
                    document.getElementById("word_6Count").value = "";

                    document.getElementById("word_7").value = "";
                    document.getElementById("word_7Count").value = "";

                    document.getElementById("word_8").value = "";
                    document.getElementById("word_8Count").value = "";

                    document.getElementById("word_9").value = "";
                    document.getElementById("word_9Count").value = "";

                    document.getElementById("word_10").value = "";
                    document.getElementById("word_10Count").value = "";

                    document.getElementById("1_st_word").style.display = "none";
                    document.getElementById("2_nd_word").style.display = "none";
                    document.getElementById("3_nd_word").style.display = "none";
                    document.getElementById("4_nd_word").style.display = "none";
                    document.getElementById("5_nd_word").style.display = "none";
                    document.getElementById("6_nd_word").style.display = "none";
                    document.getElementById("7_nd_word").style.display = "none";
                    document.getElementById("8_nd_word").style.display = "none";
                    document.getElementById("9_nd_word").style.display = "none";
                    document.getElementById("10_nd_word").style.display = "none";
                    localStorage.setItem("newWords", "");
                }

                var fileError = document.getElementById("fileerror");
                fileError.style.display = "none";
                var fileOk = document.getElementById("fileOk");
                fileOk.style.display = "block";
                localStorage.setItem("options", JSON.stringify(options));

                fireEvent(document.getElementById("introduction"), "keyup");
                fireEvent(document.getElementById("middle"), "keyup");
                fireEvent(document.getElementById("summary"), "keyup");

            } else {
                var fileError = document.getElementById("fileerror");
                while (fileError.hasChildNodes()) {
                    fileError.removeChild(fileError.firstChild);
                }
                var icon = document.createElement("i");
                icon.className = "fa fa-times";
                fileError.appendChild(icon);
                var errText = document.createTextNode(" Ohh! Wrong file uploaded");
                fileError.appendChild(errText);
                var fileOk = document.getElementById("fileOk");
                fileOk.style.display = "none";
                fileError.style.display = "block";
            }
        };
        fileReader.readAsText(file, "UTF-8");
    } else {
        var fileError = document.getElementById("fileerror");
        fileerror.style.display = "block";
    }
};

document.getElementById("projectLoader").onchange = function () {
    var file = document.getElementById("projectLoader").files[0];


    if (file.type === "text/plain") {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {

            var options = e.target.result;
            options = JSON.parse(options);

            var size = Object.keys(options).length;


            if ((typeof options === "object") && (Number(size) === 3)) {
                document.getElementById("introduction").value = "";
                document.getElementById("middle").value = "";
                document.getElementById("summary").value = "";

                document.getElementById("introduction").value = options.text1;
                document.getElementById("middle").value = options.text2;
                document.getElementById("summary").value = options.text3;



                var fileError = document.getElementById("articleWrong");
                fileError.style.display = "none";
                var fileOk = document.getElementById("articleSaved");
                fileOk.style.display = "block";

                localStorage.setItem("intArea", options.text1);
                localStorage.setItem("middleArea", options.text2);
                localStorage.setItem("summaryArea", options.text3);

                fireEvent(document.getElementById("introduction"), "keyup");
                fireEvent(document.getElementById("middle"), "keyup");
                fireEvent(document.getElementById("summary"), "keyup");

            } else {
                var fileError = document.getElementById("articleWrong");
                while (fileError.hasChildNodes()) {
                    fileError.removeChild(fileError.firstChild);
                }
                var icon = document.createElement("i");
                icon.className = "fa fa-times";
                fileError.appendChild(icon);
                var errText = document.createTextNode(" Ohh! Wrong file uploaded");
                fileError.appendChild(errText);
                var fileOk = document.getElementById("articleSaved");
                fileOk.style.display = "none";
                fileError.style.display = "block";
            }

        };
        fileReader.readAsText(file, "UTF-8");
    } else {
        var fileError = document.getElementById("articleWrong");
        fileerror.style.display = "block";
    }
};

window.onunload = function () {
    localStorage.setItem("intArea", "");
    localStorage.setItem("middleArea", "");
    localStorage.setItem("summaryArea", "");
    localStorage.setItem("options", "");
    localStorage.setItem("newWords", "");
    resetElements();
};

window.onload = function () {
    localStorage.setItem("intArea", "");
    localStorage.setItem("middleArea", "");
    localStorage.setItem("summaryArea", "");
    localStorage.setItem("options", "");
    localStorage.setItem("newWords", "");
    resetElements();
};

document.getElementById("introduction").onkeyup = function () {

    var text = this.value;
    if (localStorage.getItem("options") !== "") {

        var options = JSON.parse(localStorage.getItem("options"));

        if (options !== "") {
            document.getElementById("noOptions").style.display = "none";
            var enter = text.match(/\n/gi);
            if (enter !== null) {
                text = text.split(/\n/);
                var workText = "";
                for (var i = 0; i < text.length; i++) {
                    var workText = workText.concat(text[i]);
                }
                var workOnText = workText.replace(/\s[.|?|!]|[.|?|!]\s|\s[.|?|!]\s|[.|?|!]\s\s/gi, ".");

            } else {
                var workText = text.replace(/\s[.|?|!]|[.|?|!]\s|\s[.|?|!]\s|[.|?|!]\s\s/gi, ".");
                var workOnText = workText;
            }
            var sentences = workOnText.split(/[.|?|!]/gi);
            document.getElementById("intSentCount").innerHTML = "<em><ins>Senteces</ins></em> : " + "<strong>" + (sentences.length - 1) + "</strong>";

            var area_sent = sentences, sorted_area_sent = area_sent.slice().sort();

            var area_sent_result = [], notCopied = "";

            for (var j = 0; j < area_sent.length; j++) {
                if (sorted_area_sent[j + 1] === sorted_area_sent[j]) {
                    area_sent_result.push(sorted_area_sent[i]);
                }
            }

            if (area_sent_result.length !== 0) {

                var area_sent_arr = [];
                for (var j = 0; j < area_sent.length; j++) {
                    if (sorted_area_sent[j + 1] !== sorted_area_sent[j]) {
                        area_sent_arr.push(sorted_area_sent[j]);
                    }
                }

                area_sent_arr = area_sent_arr.reverse();

                for (var j = 0; j < area_sent_arr.length - 1; j++) {
                    notCopied += area_sent_arr[j] + ".\n";
                }

                this.value = notCopied;
            }

            if ((sentences.length - 1) >= (options.introSent * options.introParagraph)) {
                document.getElementById("wrongIntP").style.display = "none";
                var sorted_arr = sentences.slice().sort();

                var results = [];
                for (var i = 0; i < sentences.length - 1; i++) {
                    if (sorted_arr[i + 1] === sorted_arr[i]) {
                        results.push(sorted_arr[i]);
                    }
                }
                if (results.length === 0) {
                    // 4 WORD'S RULE //
                    var sent = workOnText.split(".");
                    var new_sent = "", counter = 0, new_str_arr = [];
                    for (var i = 0; i < sent.length - 1; i++) {
                        for (var j = counter; j < 2 + counter; j++) {
                            if (sent[j] !== "") {
                                new_sent += sent[j] + ".";
                            }

                        }
                        counter++;
                        new_sent += "-";
                    }

                    var new_sent_arr = new_sent.split("-");
                    var new_sent_str = new_sent_arr.join("");

                    var mutch_RegExp = new RegExp("(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+[']+[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+[']+[a-z]+\\s[a-z]+\\s)", "gi");

                    var word4Matches = new_sent.match(mutch_RegExp);
                    var result_arr = [];
                    var sorted_arr = word4Matches.slice().sort();
                    for (var i = 0; i < word4Matches.length; i++) {
                        if (sorted_arr[i] === "") {
                            continue;
                        } else if (sorted_arr[i + 1] === sorted_arr[i]) {
                            result_arr.push(sorted_arr[i].trim());
                        }
                    }
                    var count = {};
                    result_arr.forEach(function (i) {
                        count[i] = (count[i] || 0) + 1;
                    });

                    if (result_arr.length !== 0) {
                        var propValue;
                        for (var propName in count) {
                            propValue = count[propName];
                            var word_4SentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + propName + "(?=[\\s.?!,])[^.?!]*[.?!]", "gi");
                            var sents4Words = workOnText.match(word_4SentReg);
                            var first4words = propName.split(".");
                            if ((propValue + 1) % 2 === 0) {
                                var x = getRndInteger(0, sents4Words.length);
                                for (var i = 0; i < sents4Words.length; i++) {

                                    workOnText = workOnText.replace(sents4Words[i], "");

                                }
                                var last4wordsSentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + first4words[0] + "(?=[\\s.?!,])[^.?!]*[.?!]", "gi");
                                workOnText = workOnText.replace(last4wordsSentReg, sents4Words[x]);
                            } else {
                                var x = getRndInteger(0, sents4Words.length);
                                for (var i = 0; i < sents4Words.length; i++) {
                                    if (i !== x) {
                                        workOnText = workOnText.replace(sents4Words[i], "");
                                    }

                                }
                            }
                        }
                    }
                    var countOfSents = workOnText.split(".");
                    workOnText = workOnText.trim();
                    if (countOfSents.length - 1 >= options.introSent * options.introParagraph) {
                        document.getElementById("difintsent").style.display = "none";
                        localStorage.setItem("intArea", workOnText);
                        if ((localStorage.getItem("intArea") !== "") && (localStorage.getItem("middleArea") !== "") && (localStorage.getItem("summaryArea") !== "")) {
                            document.getElementById("gen_btn").className = "btn btn-primary btn-lg btn-block";
                        } else {
                            document.getElementById("gen_btn").className = "btn btn-primary btn-lg btn-block disabled";
                        }
                    } else {
                        localStorage.setItem("intArea", "");
                        document.getElementById("difintsent").style.display = "block";
                    }

                } else {
                    sentances = delete sentences[sentences.length - 1];
                    var sorted_array = sentences.slice().sort();

                    var notSame_arr = [];
                    for (var i = 0; i < sentences.length; i++) {
                        if (sorted_array[i + 1] !== sorted_array[i]) {
                            notSame_arr.push(sorted_array[i]);
                        }
                    }

                    var notSame = "";
                    for (var i = 0; i < sentences.length; i++) {
                        if (sorted_array[i + 1] !== sorted_array[i]) {
                            notSame += sorted_array[i] + ".";
                        }
                    }

                    if (notSame_arr.length >= options.introSent * options.introParagraph) {
                        // 4 WORD'S RULE //
                        var sent = notSame.split(".");
                        var new_sent = "", counter = 0, new_str_arr = [];
                        for (var i = 0; i < sent.length - 1; i++) {
                            for (var j = counter; j < 2 + counter; j++) {
                                if (sent[j] !== "") {
                                    new_sent += sent[j] + ".";
                                }

                            }
                            counter++;
                            new_sent += "-";
                        }

                        var new_sent_arr = new_sent.split("-");
                        var new_sent_str = new_sent_arr.join("");

                        var mutch_RegExp = new RegExp("(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+[']+[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+[']+[a-z]+\\s[a-z]+\\s)", "gi");

                        var word4Matches = new_sent.match(mutch_RegExp);
                        var result_arr = [];
                        var sorted_arr = word4Matches.slice().sort();
                        for (var i = 0; i < word4Matches.length; i++) {
                            if (sorted_arr[i] === "") {
                                continue;
                            } else if (sorted_arr[i + 1] === sorted_arr[i]) {
                                result_arr.push(sorted_arr[i].trim());
                            }
                        }
                        var count = {};
                        result_arr.forEach(function (i) {
                            count[i] = (count[i] || 0) + 1;
                        });

                        if (result_arr.length !== 0) {
                            var propValue;
                            for (var propName in count) {
                                propValue = count[propName];
                                var word_4SentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + propName + "(?=[\\s.?!,])[^.?!]*[.?!]", "gi");
                                var sents4Words = notSame.match(word_4SentReg);
                                var first4words = propName.split(".");
                                if ((propValue + 1) % 2 === 0) {
                                    var x = getRndInteger(0, sents4Words.length);
                                    for (var i = 0; i < sents4Words.length; i++) {

                                        notSame = notSame.replace(sents4Words[i], "");

                                    }
                                    var last4wordsSentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + first4words[0] + "(?=[\\s.?!,])[^.?!]*[.?!]", "gi");
                                    notSame = notSame.replace(last4wordsSentReg, sents4Words[x]);
                                    console.log(i);
                                } else {
                                    var x = getRndInteger(0, sents4Words.length);
                                    for (var i = 0; i < sents4Words.length - 1; i++) {
                                        if (i !== x) {
                                            notSame = notSame.replace(sents4Words[i], "");
                                        }
                                    }
                                }
                            }
                        }
                        var countOfSents = notSame.split(".");
                        notSame = notSame.trim();
                        if (countOfSents.length - 1 >= options.introSent * options.introParagraph) {
                            document.getElementById("difintsent").style.display = "none";
                            localStorage.setItem("intArea", notSame);
                            if ((localStorage.getItem("intArea") !== "") && (localStorage.getItem("middleArea") !== "") && (localStorage.getItem("summaryArea") !== "")) {
                                document.getElementById("gen_btn").className = "btn btn-primary btn-lg btn-block";
                            } else {
                                document.getElementById("gen_btn").className = "btn btn-primary btn-lg btn-block disabled";
                            }
                        } else {
                            localStorage.setItem("intArea", "");
                            document.getElementById("difintsent").style.display = "block";
                        }

                    } else {
                        localStorage.setItem("intArea", "");
                        document.getElementById("difintsent").style.display = "block";
                    }

                    var sameSent = document.getElementById("sameSentaces");
                    var counter = 0, text = "", newLine = document.createElement("br");

                    for (var i = 0; i < results.length; i++) {
                        if (results[i + 1] !== results[i]) {
                            counter++;
                            text += counter + ". " + results[i] + ".\n";

                        }
                    }
                    while (sameSent.hasChildNodes()) {
                        sameSent.removeChild(sameSent.lastChild);
                    }
                    warningText = "<i class='fa fa-times'></i> <strong><ins>Introduction Senteces</ins></strong> You have same sentance several times !<br />";
                    text = text.replace(/\r?\n/g, '<br />');
                    sameSent.innerHTML = warningText + text;

                    sameSent.style.display = "block";

                }
            } else {
                localStorage.setItem("intArea", "");
                document.getElementById("wrongIntP").style.display = "block";
            }
        } else {
            localStorage.setItem("intArea", "");
            document.getElementById("noOptions").style.display = "block";
        }

    } else {
        localStorage.setItem("intArea", "");
        document.getElementById("noOptions").style.display = "block";
    }
};

document.getElementById("middle").onkeyup = function () {
    var text = this.value;
    // text = text.replace(/\r?\n/g, '<br />');

    if (localStorage.getItem("options") !== "") {

        var options = JSON.parse(localStorage.getItem("options"));

        if (options !== "") {
            document.getElementById("noOptionsM").style.display = "none";
            var enter = text.match(/\n/gi);
            if (enter !== null) {
                text = text.split(/\n/);
                var workText = "";
                for (var i = 0; i < text.length; i++) {
                    var workText = workText.concat(text[i]);
                }
                var workOnText = workText.replace(/\s[.|?|!]|[.|?|!]\s|\s[.|?|!]\s|[.|?|!]\s\s/gi, ".");
            } else {
                var workText = text.replace(/\s[.|?|!]|[.|?|!]\s|\s[.|?|!]\s|[.|?|!]\s\s/gi, ".");
                var workOnText = workText;
            }
            var sentences = workOnText.split(/[.|?|!]/gi);
            document.getElementById("midSentCount").innerHTML = "<em><ins>Senteces</ins></em> : " + "<strong>" + (sentences.length - 1) + "</strong>";

            var area_sent = sentences, sorted_area_sent = area_sent.slice().sort();

            var area_sent_result = [], notCopied = "";

            for (var j = 0; j < area_sent.length; j++) {
                if (sorted_area_sent[j + 1] === sorted_area_sent[j]) {
                    area_sent_result.push(sorted_area_sent[i]);
                }
            }

            if (area_sent_result.length !== 0) {

                var area_sent_arr = [];
                for (var j = 0; j < area_sent.length; j++) {
                    if (sorted_area_sent[j + 1] !== sorted_area_sent[j]) {
                        area_sent_arr.push(sorted_area_sent[j]);
                    }
                }

                area_sent_arr = area_sent_arr.reverse();

                for (var j = 0; j < area_sent_arr.length - 1; j++) {
                    notCopied += area_sent_arr[j] + ".\n";
                }

                this.value = notCopied;
            }

            if ((sentences.length - 1) >= (options.middleSent2 * options.middleParagraph)) {
                document.getElementById("wrongMidP").style.display = "none";

                var sorted_arr = sentences.slice().sort();

                var results = [];
                for (var i = 0; i < sentences.length - 1; i++) {
                    if (sorted_arr[i + 1] === sorted_arr[i]) {
                        results.push(sorted_arr[i]);
                    }
                }

                if (results.length === 0) {
                    document.getElementById("sameSentacesM").style.display = "none";

                    // 4 WORD'S RULE //
                    var sent = workOnText.split(".");
                    var new_sent = "", counter = 0, new_str_arr = [];
                    for (var i = 0; i < sent.length - 1; i++) {
                        for (var j = counter; j < 2 + counter; j++) {
                            if (sent[j] !== "") {
                                new_sent += sent[j] + ".";
                            }
                        }
                        counter++;
                        new_sent += "-";
                    }

                    var new_sent_arr = new_sent.split("-");
                    var new_sent_str = new_sent_arr.join("");

                    var mutch_RegExp = new RegExp("(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+[']+[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+[']+[a-z]+\\s[a-z]+\\s)", "gi");

                    var word4Matches = new_sent.match(mutch_RegExp);
                    var result_arr = [];
                    var sorted_arr = word4Matches.slice().sort();
                    for (var i = 0; i < word4Matches.length; i++) {
                        if (sorted_arr[i] === "") {
                            continue;
                        } else if (sorted_arr[i + 1] === sorted_arr[i]) {
                            result_arr.push(sorted_arr[i].trim());
                        }
                    }
                    var count = {};
                    result_arr.forEach(function (i) {
                        count[i] = (count[i] || 0) + 1;
                    });

                    if (result_arr.length !== 0) {
                        var propValue;
                        for (var propName in count) {
                            propValue = count[propName];
                            var word_4SentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + propName + "(?=[\\s.?!,])[^.?!]*[.?!]", "gi");
                            var sents4Words = workOnText.match(word_4SentReg);
                            var first4words = propName.split(".");
                            if ((propValue + 1) % 2 === 0) {
                                var x = getRndInteger(0, sents4Words.length);
                                for (var i = 0; i < sents4Words.length; i++) {

                                    workOnText = workOnText.replace(sents4Words[i], "");

                                }
                                var last4wordsSentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + first4words[0] + "(?=[\\s.?!,])[^.?!]*[.?!]", "gi");
                                workOnText = workOnText.replace(last4wordsSentReg, sents4Words[x]);
                            } else {
                                var x = getRndInteger(0, sents4Words.length);
                                for (var i = 0; i < sents4Words.length; i++) {
                                    if (i !== x) {
                                        workOnText = workOnText.replace(sents4Words[i], "");
                                    }

                                }
                            }
                        }
                    }
                    var countOfSents = workOnText.split(".");
                    workOnText = workOnText.trim();
                    if (countOfSents.length - 1 >= options.middleSent2 * options.middleParagraph) {
                        document.getElementById("difmidsent").style.display = "none";
                        localStorage.setItem("middleArea", workOnText);
                        if ((localStorage.getItem("intArea") !== "") && (localStorage.getItem("middleArea") !== "") && (localStorage.getItem("summaryArea") !== "")) {
                            document.getElementById("gen_btn").className = "btn btn-primary btn-lg btn-block";
                        } else {
                            document.getElementById("gen_btn").className = "btn btn-primary btn-lg btn-block disabled";
                        }
                    } else {
                        localStorage.setItem("middleArea", "");
                        document.getElementById("difmidsent").style.display = "block";
                    }
                } else {
                    sentances = delete sentences[sentences.length - 1];
                    var sorted_array = sentences.slice().sort();

                    var notSame_arr = [];
                    for (var i = 0; i < sentences.length; i++) {
                        if (sorted_array[i + 1] !== sorted_array[i]) {
                            notSame_arr.push(sorted_array[i]);
                        }
                    }

                    var notSame = "";
                    for (var i = 0; i < sentences.length; i++) {
                        if (sorted_array[i + 1] !== sorted_array[i]) {
                            notSame += sorted_array[i] + ".";
                        }
                    }
                    if (notSame_arr.length >= options.middleSent2 * options.middleParagraph) {

                        // 4 WORD'S RULE //
                        var sent = notSame.split(".");
                        var new_sent = "", counter = 0, new_str_arr = [];
                        for (var i = 0; i < sent.length - 1; i++) {
                            for (var j = counter; j < 2 + counter; j++) {
                                if (sent[j] !== "") {
                                    new_sent += sent[j] + ".";
                                }

                            }
                            counter++;
                            new_sent += "-";
                        }

                        var new_sent_arr = new_sent.split("-");
                        var new_sent_str = new_sent_arr.join("");

                        var mutch_RegExp = new RegExp("(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+[']+[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+[']+[a-z]+\\s[a-z]+\\s)", "gi");

                        var word4Matches = new_sent.match(mutch_RegExp);
                        var result_arr = [];
                        var sorted_arr = word4Matches.slice().sort();
                        for (var i = 0; i < word4Matches.length; i++) {
                            if (sorted_arr[i] === "") {
                                continue;
                            } else if (sorted_arr[i + 1] === sorted_arr[i]) {
                                result_arr.push(sorted_arr[i].trim());
                            }
                        }
                        var count = {};
                        result_arr.forEach(function (i) {
                            count[i] = (count[i] || 0) + 1;
                        });

                        if (result_arr.length !== 0) {
                            var propValue;
                            for (var propName in count) {
                                propValue = count[propName];
                                var word_4SentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + propName + "(?=[\\s.?!,])[^.?!]*[.?!]", "gi");
                                var sents4Words = notSame.match(word_4SentReg);
                                var first4words = propName.split(".");
                                if ((propValue + 1) % 2 === 0) {
                                    var x = getRndInteger(0, sents4Words.length);
                                    for (var i = 0; i < sents4Words.length; i++) {

                                        notSame = notSame.replace(sents4Words[i], "");

                                    }
                                    var last4wordsSentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + first4words[0] + "(?=[\\s.?!,])[^.?!]*[.?!]", "gi");
                                    notSame = notSame.replace(last4wordsSentReg, sents4Words[x]);
                                } else {
                                    var x = getRndInteger(0, sents4Words.length);
                                    for (var i = 0; i < sents4Words.length - 1; i++) {
                                        if (i !== x) {
                                            notSame = notSame.replace(sents4Words[i], "");
                                        }
                                    }
                                }
                            }
                        }
                        var countOfSents = notSame.split(".");
                        notSame = notSame.trim();
                        if (countOfSents.length - 1 >= options.middleSent2 * options.middleParagraph) {
                            document.getElementById("difmidsent").style.display = "none";
                            localStorage.setItem("middleArea", notSame);
                            if ((localStorage.getItem("intArea") !== "") && (localStorage.getItem("middleArea") !== "") && (localStorage.getItem("summaryArea") !== "")) {
                                document.getElementById("gen_btn").className = "btn btn-primary btn-lg btn-block";
                            } else {
                                document.getElementById("gen_btn").className = "btn btn-primary btn-lg btn-block disabled";
                            }
                        } else {
                            localStorage.setItem("middleArea", "");
                            document.getElementById("difmidsent").style.display = "block";
                        }

                    } else {
                        localStorage.setItem("middleArea", "");
                        document.getElementById("difmidsent").style.display = "block";
                    }


                    var sameSent = document.getElementById("sameSentacesM");
                    var counter = 0, text = "", newLine = document.createElement("br");

                    for (var i = 0; i < results.length; i++) {
                        if (results[i + 1] !== results[i]) {
                            counter++;
                            text += counter + ". " + results[i] + ".\n";

                        }
                    }
                    while (sameSent.hasChildNodes()) {
                        sameSent.removeChild(sameSent.lastChild);
                    }
                    warningText = "<i class='fa fa-times'></i> <strong><ins>Middle Senteces</ins></strong> You have same sentance several times !<br />";
                    text = text.replace(/\r?\n/g, '<br />');
                    sameSent.innerHTML = warningText + text;

                    sameSent.style.display = "block";
                }
            } else {
                localStorage.setItem("middleArea", "");
                document.getElementById("wrongMidP").style.display = "block";
            }
        } else {
            localStorage.setItem("middleArea", "");
            document.getElementById("noOptionsM").style.display = "block";
        }

    } else {
        localStorage.setItem("middleArea", "");
        document.getElementById("noOptionsM").style.display = "block";
    }

};

document.getElementById("summary").onkeyup = function () {
    var text = this.value;

    if (localStorage.getItem("options") !== "") {
        var options = JSON.parse(localStorage.getItem("options"));
        if (options !== "") {
            document.getElementById("noOptionsS").style.display = "none";
            var enter = text.match(/\n/gi);
            if (enter !== null) {
                text = text.split(/\n/);
                var workText = "";
                for (var i = 0; i < text.length; i++) {
                    var workText = workText.concat(text[i]);
                }
                var workOnText = workText.replace(/\s[.|?|!]|[.|?|!]\s|\s[.|?|!]\s|[.|?|!]\s\s/gi, ".");
            } else {
                var workText = text.replace(/\s[.|?|!]|[.|?|!]\s|\s[.|?|!]\s|[.|?|!]\s\s/gi, ".");
                var workOnText = workText;
            }
            var sentences = workOnText.split(/[.|?|!]/gi);
            document.getElementById("sumSentCount").innerHTML = "<em><ins>Senteces</ins></em> : " + "<strong>" + (sentences.length - 1) + "</strong>";


            var area_sent = sentences, sorted_area_sent = area_sent.slice().sort();

            var area_sent_result = [], notCopied = "";

            for (var j = 0; j < area_sent.length; j++) {
                if (sorted_area_sent[j + 1] === sorted_area_sent[j]) {
                    area_sent_result.push(sorted_area_sent[i]);
                }
            }

            if (area_sent_result.length !== 0) {

                var area_sent_arr = [];
                for (var j = 0; j < area_sent.length; j++) {
                    if (sorted_area_sent[j + 1] !== sorted_area_sent[j]) {
                        area_sent_arr.push(sorted_area_sent[j]);
                    }
                }

                area_sent_arr = area_sent_arr.reverse();

                for (var j = 0; j < area_sent_arr.length - 1; j++) {
                    notCopied += area_sent_arr[j] + ".\n";
                }

                this.value = notCopied;
            }

            if ((sentences.length - 1) >= (options.summSent * options.summParagraph)) {
                document.getElementById("wrongSumP").style.display = "none";
                var sorted_arr = sentences.slice().sort();

                var results = [];
                for (var i = 0; i < sentences.length - 1; i++) {
                    if (sorted_arr[i + 1] === sorted_arr[i]) {
                        results.push(sorted_arr[i]);
                    }
                }
                if (results.length === 0) {
                    document.getElementById("sameSentacesS").style.display = "none";

                    // 4 WORD'S RULE //
                    var sent = workOnText.split(".");
                    var new_sent = "", counter = 0, new_str_arr = [];
                    for (var i = 0; i < sent.length - 1; i++) {
                        for (var j = counter; j < 2 + counter; j++) {
                            if (sent[j] !== "") {
                                new_sent += sent[j] + ".";
                            }
                        }
                        counter++;
                        new_sent += "-";
                    }
                    
                    var new_sent_arr = new_sent.split("-");
                    var new_sent_str = new_sent_arr.join("");

                    var mutch_RegExp = new RegExp("(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+[']+[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+[']+[a-z]+\\s[a-z]+\\s)", "gi");

                    var word4Matches = new_sent.match(mutch_RegExp);
                    var result_arr = [];
                    var sorted_arr = word4Matches.slice().sort();
                    for (var i = 0; i < word4Matches.length; i++) {
                        if (sorted_arr[i] === "") {
                            continue;
                        } else if (sorted_arr[i + 1] === sorted_arr[i]) {
                            result_arr.push(sorted_arr[i].trim());
                        }
                    }
                    var count = {};
                    result_arr.forEach(function (i) {
                        count[i] = (count[i] || 0) + 1;
                    });

                    if (result_arr.length !== 0) {
                        var propValue;
                        for (var propName in count) {
                            propValue = count[propName];
                            var word_4SentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + propName + "(?=[\\s.?!,])[^.?!]*[.?!]", "gi");
                            var sents4Words = workOnText.match(word_4SentReg);
                            var first4words = propName.split(".");
                            if ((propValue + 1) % 2 === 0) {
                                var x = getRndInteger(0, sents4Words.length);
                                for (var i = 0; i < sents4Words.length; i++) {

                                    workOnText = workOnText.replace(sents4Words[i], "");

                                }
                                var last4wordsSentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + first4words[0] + "(?=[\\s.?!,])[^.?!]*[.?!]", "gi");
                                workOnText = workOnText.replace(last4wordsSentReg, sents4Words[x]);
                            } else {
                                var x = getRndInteger(0, sents4Words.length);
                                for (var i = 0; i < sents4Words.length; i++) {
                                    if (i !== x) {
                                        workOnText = workOnText.replace(sents4Words[i], "");
                                    }
                                }
                            }
                        }
                    }
                    var countOfSents = workOnText.split(".");
                    workOnText = workOnText.trim();
                    if (countOfSents.length - 1 >= options.summSent * options.summParagraph) {
                        document.getElementById("difsumsent").style.display = "none";
                        localStorage.setItem("summaryArea", workOnText);
                        if ((localStorage.getItem("intArea") !== "") && (localStorage.getItem("middleArea") !== "") && (localStorage.getItem("summaryArea") !== "")) {
                            document.getElementById("gen_btn").className = "btn btn-primary btn-lg btn-block";
                        } else {
                            document.getElementById("gen_btn").className = "btn btn-primary btn-lg btn-block disabled";
                        }
                    } else {
                        localStorage.setItem("summaryArea", "");
                        document.getElementById("difsumsent").style.display = "block";
                    }
                } else {
                    sentances = delete sentences[sentences.length - 1];
                    var sorted_array = sentences.slice().sort();

                    var notSame_arr = [];
                    for (var i = 0; i < sentences.length; i++) {
                        if (sorted_array[i + 1] !== sorted_array[i]) {
                            notSame_arr.push(sorted_array[i]);
                        }
                    }

                    var notSame = "";
                    for (var i = 0; i < sentences.length; i++) {
                        if (sorted_array[i + 1] !== sorted_array[i]) {
                            notSame += sorted_array[i] + ".";
                        }
                    }

                    if (notSame_arr.length >= options.summSent * options.summParagraph) {
                        document.getElementById("difsumsent").style.display = "none";

                        // 4 WORD'S RULE //
                        var sent = notSame.split(".");
                        var new_sent = "", counter = 0, new_str_arr = [];
                        for (var i = 0; i < sent.length - 1; i++) {
                            for (var j = counter; j < 2 + counter; j++) {
                                if (sent[j] !== "") {
                                    new_sent += sent[j] + ".";
                                }

                            }
                            counter++;
                            new_sent += "-";
                        }

                        var new_sent_arr = new_sent.split("-");
                        var new_sent_str = new_sent_arr.join("");

                        var mutch_RegExp = new RegExp("(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+[']+[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+[']+[a-z]+\\s[a-z]+\\s)", "gi");

                        var word4Matches = new_sent.match(mutch_RegExp);
                        var result_arr = [];
                        var sorted_arr = word4Matches.slice().sort();
                        for (var i = 0; i < word4Matches.length; i++) {
                            if (sorted_arr[i] === "") {
                                continue;
                            } else if (sorted_arr[i + 1] === sorted_arr[i]) {
                                result_arr.push(sorted_arr[i].trim());
                            }
                        }
                        var count = {};
                        result_arr.forEach(function (i) {
                            count[i] = (count[i] || 0) + 1;
                        });

                        if (result_arr.length !== 0) {
                            var propValue;
                            for (var propName in count) {
                                propValue = count[propName];
                                var word_4SentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + propName + "(?=[\\s.?!,])[^.?!]*[.?!]", "gi");
                                var sents4Words = notSame.match(word_4SentReg);
                                var first4words = propName.split(".");
                                if ((propValue + 1) % 2 === 0) {
                                    var x = getRndInteger(0, sents4Words.length);
                                    for (var i = 0; i < sents4Words.length; i++) {

                                        notSame = notSame.replace(sents4Words[i], "");

                                    }
                                    var last4wordsSentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + first4words[0] + "(?=[\\s.?!,])[^.?!]*[.?!]", "gi");
                                    notSame = notSame.replace(last4wordsSentReg, sents4Words[x]);
                                } else {
                                    var x = getRndInteger(0, sents4Words.length);
                                    for (var i = 0; i < sents4Words.length; i++) {
                                        if (i !== x) {
                                            notSame = notSame.replace(sents4Words[i], "");
                                        }
                                    }
                                }
                            }
                        }
                        var countOfSents = notSame.split(".");
                        notSame = notSame.trim();
                        if (countOfSents.length - 1 >= options.summSent * options.summParagraph) {
                            document.getElementById("difsumsent").style.display = "none";
                            localStorage.setItem("summaryArea", notSame);
                            if ((localStorage.getItem("intArea") !== "") && (localStorage.getItem("middleArea") !== "") && (localStorage.getItem("summaryArea") !== "")) {
                                document.getElementById("gen_btn").className = "btn btn-primary btn-lg btn-block";
                            } else {
                                document.getElementById("gen_btn").className = "btn btn-primary btn-lg btn-block disabled";
                            }
                        } else {
                            localStorage.setItem("summaryArea", "");
                            document.getElementById("difsumsent").style.display = "block";
                        }

                    } else {
                        localStorage.setItem("summaryArea", "");
                        document.getElementById("difsumsent").style.display = "block";
                    }



                    var sameSent = document.getElementById("sameSentacesS");
                    var counter = 0, text = "", newLine = document.createElement("br");

                    for (var i = 0; i < results.length; i++) {
                        if (results[i + 1] !== results[i]) {
                            counter++;
                            text += counter + ". " + results[i] + ".\n";

                        }
                    }
                    while (sameSent.hasChildNodes()) {
                        sameSent.removeChild(sameSent.lastChild);
                    }
                    warningText = "<i class='fa fa-times'></i> <strong><ins>Summary Senteces</ins></strong> You have same sentance several times !<br />";
                    text = text.replace(/\r?\n/g, '<br />');
                    sameSent.innerHTML = warningText + text;

                    sameSent.style.display = "block";
                }
            } else {
                localStorage.setItem("summaryArea", "");
                document.getElementById("wrongSumP").style.display = "block";
            }
        } else {
            localStorage.setItem("summaryArea", "");
            document.getElementById("noOptionsS").style.display = "block";
        }
    } else {
        localStorage.setItem("summaryArea", "");
        document.getElementById("noOptionsS").style.display = "block";
    }

};

document.getElementById("gen_btn").onclick = function () {

    var intArea = localStorage.getItem("intArea"),
            middleArea = localStorage.getItem("middleArea"),
            summaryArea = localStorage.getItem("summaryArea"),
            options = JSON.parse(localStorage.getItem("options"));

    if ((intArea !== "") && (middleArea !== "") && (summaryArea !== "")) {

        var text1_arr = intArea.split(".");
        text1_arr.pop();
        var errors = [];
        var text2_arr = middleArea.split(".");
        text2_arr.pop();
        var text3_arr = summaryArea.split(".");
        text3_arr.pop();

        easyShuffle(text1_arr);
        easyShuffle(text2_arr);
        easyShuffle(text3_arr);

        if (Number(localStorage.getItem("newWords")) === 1) {
            var settingsObject = {
                intarea: Number(options.introParagraph) * Number(options.introSent),
                midarea: Number(options.middleParagraph) * Number(options.middleSent2),
                sumarea: Number(options.summParagraph) * Number(options.summSent) 
            };
            
            var totalCount = (Number(options.introParagraph) * Number(options.introSent)) * Math.round(Number(options.totalParag) / 2);
            var totalCount2 = (Number(options.middleParagraph) * Number(options.middleSent2)) * Math.round(Number(options.totalParag) / 2);
            var totalCount3 = (Number(options.summParagraph) * Number(options.summSent)) * Math.round(Number(options.totalParag) / 2);
            var num = Number(options.word_1Count);
            
            var total = settingsObject.intarea + settingsObject.midarea + settingsObject.sumarea;
            
            var result = getEachNUmber(settingsObject, settingsObject.intarea, settingsObject.midarea, settingsObject.sumarea, num, total);
            
            if(result) {
                var numbers = resultProcess(settingsObject, result);
                
                text1_arr = exceptRepeat(text1_arr, options.word_1);
                text2_arr = exceptRepeat(text2_arr, options.word_1);
                text3_arr = exceptRepeat(text3_arr, options.word_1);

                var arrs1 = segregate(text1_arr, options.word_1),
                    arrs2 = segregate(text2_arr, options.word_1),
                    arrs3 = segregate(text3_arr, options.word_1);
            
                var needToAdd1 = numbers.int * Math.round(Number(options.totalParag) / 2),
                    needToAdd2 = numbers.mid * Math.round(Number(options.totalParag) / 2),
                    needToAdd3 = numbers.sum * Math.round(Number(options.totalParag) / 2);
                
                var word_errors = [];
                
                // Word_1 checking Inint Area
                var word_arr1 = arrs1[1];
                if (word_arr1.length < needToAdd1) {
                    word_errors.push(1);
                    errors.push(4);
                    document.getElementById("moreIntSentNonWord").style.display = "block";
                    document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                            "Add " + (needToAdd1 - word_arr1.length) + " sentences " +
                            "Which will contain <ins>" + options.word_1 + "</ins> word";
                    console.log(needToAdd1 + ' - ' + word_arr1.length);
                } else if (word_arr1.length > needToAdd1) {
                    for (var k = 0; k < word_arr1.length - needToAdd1; k++) {
                        word_arr1.pop();
                        k--;
                    }
                } else {
                    document.getElementById("moreIntSentNonWord").style.display = "none";
                }
                // Word_1 checking Middle Area
                var word_arr2 = arrs2[1];
                if (word_arr2.length < needToAdd2) {
                    word_errors.push(1);
                    errors.push(4);
                    document.getElementById("moreMiddleSentNonWord").style.display = "block";
                    document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                            "Add " + (needToAdd2 - word_arr2.length) + " sentences " +
                            "Which will contain <ins>" + options.word_1 + "</ins> word";
                } else if (word_arr2.length > needToAdd2) {
                    for (var k = 0; k < word_arr2.length - needToAdd2; k++) {
                        word_arr2.pop();
                        k--;
                    }
                } else {
                    document.getElementById("moreMiddleSentNonWord").style.display = "none";
                }
                // Word_1 checking Summary Area
                var word_arr3 = arrs3[1];
                if (word_arr3.length < needToAdd3) {
                    word_errors.push(1);
                    errors.push(4);
                    document.getElementById("moreSummarySentNonWord").style.display = "block";
                    document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                            "Add " + (needToAdd3 - word_arr3.length) + " sentences " +
                            "Which will contain <ins>" + options.word_1 + "</ins> word";
                } else if (word_arr3.length > needToAdd3) {
                    for (var k = 0; k < word_arr3.length - needToAdd3; k++) {
                        word_arr3.pop();
                        k--;
                    }
                } else {
                    document.getElementById("moreSummarySentNonWord").style.display = "none";
                }
                
                if (needToAdd1 > 0) {
                    var s = 0, l = 0;
                    for (var i = 0; i < Math.ceil(Number(options.totalParag) / 2); i++) {
                        for (var j = s; j < s + (word_arr1.length / Math.ceil(Number(options.totalParag) / 2)); j++) {
                            arrs1[0].splice(l, 0, word_arr1[j]);
                        }
                        s += word_arr1.length / Math.ceil(Number(options.totalParag) / 2);
                        l += Number(options.introParagraph) * Number(options.introSent);
                    }

                    text1_arr = arrs1[0];
                    console.log(text1_arr);
                    console.log(totalCount);
                    if (text1_arr.length < totalCount) {
                        errors.push(4);
                        document.getElementById("moreIntSentWord").style.display = "block";
                        document.getElementById("moreIntSentWord").innerHTML = "<i class='fa fa-times'></i> <strong><ins>Introduction</ins> : </strong>" +
                                " Add  " + (totalCount - text1_arr.length) +
                                " Sentence(s) Which will not contain <ins>" + options.word_1 + "</ins>";
                    } else {
                        document.getElementById("moreIntSentWord").style.display = "none";
                    }

                }
                
                if (needToAdd2 > 0) {
                    var q = 0, y = 0;
                    for (var i = 0; i < Math.ceil(Number(options.totalParag) / 2); i++) {
                        for (var j = q; j < q + (word_arr2.length / Math.ceil(Number(options.totalParag) / 2)); j++) {
                            arrs2[0].splice(y, 0, word_arr2[j])
                        }
                        q += word_arr2.length / Math.ceil(Number(options.totalParag) / 2);
                        y += Number(options.middleParagraph) * Number(options.middleSent2);
                    }
                    text2_arr = arrs2[0];

                    if (text2_arr.length < totalCount2) {
                        errors.push(4);
                        document.getElementById("moreMiddleSentWord").style.display = "block";
                        document.getElementById("moreMiddleSentWord").innerHTML = "<i class='fa fa-times'></i> <strong><ins>Middle</ins> : </strong>" +
                                " Add  " + (totalCount2 - text2_arr.length) +
                                " Sentence(s) Which will not contain <ins>" + options.word_1 + "</ins>";
                    } else {
                        document.getElementById("moreMiddleSentWord").style.display = "none";
                    }

                }
                
                if (needToAdd3 > 0) {
                    var p = 0, m = 0;
                    for (var i = 0; i < Math.ceil(Number(options.totalParag) / 2); i++) {
                        for (var j = p; j < p + (word_arr3.length / Math.ceil(Number(options.totalParag) / 2)); j++) {
                            arrs3[0].splice(m, 0, word_arr3[j])
                        }
                        p += word_arr3.length / Math.ceil(Number(options.totalParag) / 2);
                        m += Number(options.summParagraph) * Number(options.summSent);
                    }
                    text3_arr = arrs3[0];
                    if (text3_arr.length < totalCount3) {
                        errors.push(4);
                        document.getElementById("moreSummarySentWord").style.display = "block";
                        document.getElementById("moreSummarySentWord").innerHTML = "<i class='fa fa-times'></i> <strong><ins>Summary</ins> : </strong>" +
                                " Add  " + (totalCount3 - text3_arr.length) +
                                " Sentence(s) Which will not contain <ins>" + options.word_1 + "</ins>";
                    } else {
                        document.getElementById("moreSummarySentWord").style.display = "none";
                    }
                }
                
                console.log(numbers);
            } else {
                throw 'You can\'t require' + options.word_1Count + 'max is : ' + total;
            }                                   
        }        





        if (text1_arr.length >= totalCount) {
            document.getElementById("moreIntSent").style.display = "none";
            var needCount = Number(options.introSent) * Number(options.introParagraph);

            var my_arr = [], total_arr = [], k = 0;
            for (var i = 0; i < totalCount / needCount; i++) {
                for (var j = k; j < needCount + k; j++) {
                    my_arr.push(text1_arr[j]);
                }
                var comp_arr = totalResult(my_arr, Number(options.introParagraph), Number(options.introSent));
                total_arr.push(comp_arr);
                my_arr = [];
                k += needCount;
            }
        } else {
            var needCount = Number(options.introSent) * Number(options.introParagraph);
            document.getElementById("moreIntSent").style.display = "block";
            document.getElementById("moreIntSent").innerHTML = "<i class='fa fa-times'></i> <strong><ins>Introduction</ins> : </strong>" +
                    " System can generate " + (Math.floor((text1_arr.length / needCount) * 2)) +
                    " Articles";
            errors.push(1);
        }

        if (text2_arr.length >= totalCount2) {
            document.getElementById("moreMiddleSent").style.display = "none";
            var needCount2 = Number(options.middleSent2) * Number(options.middleParagraph);

            var my_arr2 = [], total_arr2 = [], z = 0;
            for (var i = 0; i < totalCount2 / needCount2; i++) {
                for (var j = z; j < needCount2 + z; j++) {
                    my_arr2.push(text2_arr[j]);
                }
                var comp2_arr = totalResult(my_arr2, Number(options.middleParagraph), Number(options.middleSent2));
                total_arr2.push(comp2_arr);
                my_arr2 = [];
                z += needCount2;
            }
        } else {
            var needCount2 = Number(options.middleSent2) * Number(options.middleParagraph);
            document.getElementById("moreMiddleSent").style.display = "block";
            document.getElementById("moreMiddleSent").innerHTML = "<i class='fa fa-times'></i> <strong><ins>Middle</ins> : </strong>" +
                    " System can generate " + (Math.floor((text2_arr.length / needCount2) * 2)) +
                    " Articles";
            errors.push(2);
        }

        if (text3_arr.length >= totalCount3) {
            document.getElementById("moreSummarySent").style.display = "none";
            var needCount3 = Number(options.summSent) * Number(options.summParagraph);

            var my_arr3 = [], total_arr3 = [], x = 0;
            for (var i = 0; i < totalCount3 / needCount3; i++) {
                for (var j = x; j < needCount3 + x; j++) {
                    my_arr3.push(text3_arr[j]);
                }
                var comp3_arr = totalResult(my_arr3, Number(options.summParagraph), Number(options.summSent));
                total_arr3.push(comp3_arr);
                my_arr3 = [];
                x += needCount3;
            }
        } else {
            var needCount3 = Number(options.summSent) * Number(options.summParagraph);
            document.getElementById("moreSummarySent").style.display = "block";
            document.getElementById("moreSummarySent").innerHTML = "<i class='fa fa-times'></i> <strong><ins>Summary</ins> : </strong>" +
                    " System can generate " + (Math.floor((text3_arr.length / needCount3) * 2)) +
                    " Articles";
            errors.push(3);
        }

        if (errors.length === 0) {

            total_arr = cross(total_arr);
            total_arr2 = cross(total_arr2);
            total_arr3 = cross(total_arr3);

            total_arr = divide(total_arr, Number(options.totalParag), Number(options.introParagraph));
            total_arr2 = divide(total_arr2, Number(options.totalParag), Number(options.middleParagraph));
            total_arr3 = divide(total_arr3, Number(options.totalParag), Number(options.summParagraph));

            total_arr = concatParagraph(total_arr, Number(options.totalParag));
            total_arr2 = concatParagraph(total_arr2, Number(options.totalParag));
            total_arr3 = concatParagraph(total_arr3, Number(options.totalParag));

            var article = "", final_article = "";
            for (var i = 0; i < Number(options.totalParag); i++) {
                article = total_arr[i] + total_arr2[i] + total_arr3[i] + "-----\n\n";
                final_article += article;
            }
            fireEvent(document.getElementById("introduction"), "keyup");
            fireEvent(document.getElementById("middle"), "keyup");
            fireEvent(document.getElementById("summary"), "keyup");

            var a = document.createElement('a');
            a.style = "display: none";
            name = "gen-file";
            var blob = new Blob([final_article], {type: "text/plain"});
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            var fileName = name;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 100);
        }
    }
};

function factorial(num) {
    if (num === 0 || num === 1)
    {
        return 1;
    } else
    {
        return num * factorial(num - 1);
    }
}

function concat(list) {
    return this.concat(list);
}

function shuffle(arr) {
    var output = [];
    var n = arr.length;
    var ways = [];
    for (var i = 0, j = 1; i < n; ways.push(j *= ++i))
        ;

    var totalWays = ways.pop();

    for (var i = 0; i < totalWays; i++) {
        var copy = arr.slice();
        output[i] = [];
        for (var k = ways.length - 1; k >= 0; k--) {
            var c = Math.floor(i / ways[k]) % (k + 2);
            output[i].push(copy.splice(c, 1)[0]);
        }
        output[i].push(copy[0]);
    }
    return output;
}

function easyShuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function compare(array) {
    var i = 0, j, k, l;
    while (i < array.length) {
        j = 0;
        while (j + 1 < array[i].length) {
            k = i + 1;
            test: while (k < array.length) {
                l = 0;
                while (l + 1 < array[k].length) {
                    if (array[i][j] === array[k][l] && array[i][j + 1] === array[k][l + 1]) {
                        array.splice(k, 1);
                        continue test;
                    }
                    l++;
                }
                k++;
            }
            j++;
        }
        i++;
    }
    return array;
}

function totalResult(array, p, s) {
    var arr = [], total_arr = [], k = 0;

    for (var i = 0; i < p; i++) {
        for (var j = k; j < s + k; j++) {
            arr.push(array[j]);
        }
        Rarr = shuffle(arr);
        Rarr = compare(Rarr);
        total_arr.push(Rarr[0], Rarr[1]);
        k += s;
        arr = [];
    }
    return total_arr;
}

function cross(array) {
    var parag_arr = [];
    for (var k = 0; k < array.length; k++) {
        for (var i = 0; i < array[k].length; i++) {
            if (i % 2 === 0) {
                parag_arr.push(array[k][i]);
            } else {
                continue;
            }
        }

        for (var j = 0; j < array[k].length; j++) {
            if (j % 2 !== 0) {
                parag_arr.push(array[k][j]);
            } else {
                continue;
            }
        }
    }

    return parag_arr;
}

function divide(array, a, p) {
    var div_arr = [], total_div = [], c = 0, parag = "",
            int_arr = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            parag += array[i][j] + ". ";
        }
        total_div.push(parag);
        parag = "";
    }

    for (var k = 0; k < a; k++) {
        for (var z = c; z < p + c; z++) {
            int_arr.push(total_div[z]);
        }
        div_arr.push(int_arr);
        int_arr = [];
        c += p;
    }
    return div_arr;
}

function concatParagraph(array, a) {
    var article = "", art_arr = [];
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < array[i].length; j++) {
            article += array[i][j] + "\n\n";
        }
        art_arr.push(article);
        article = "";
    }
    return art_arr;
}

function countWords(array, word) {
    var word_reg = new RegExp(word, "i"), count = 0;
    for (var i = 0; i < array.length; i++) {
        var patt = word_reg.test(array[i]);
        if (patt) {
            count++;
        } else {
            continue;
        }
    }
    return count;
}

function segregate(array, word) {
    var wordExp = new RegExp(word, "i"), new_array = [], totalArr = [];
    for (var i = 0; i < array.length; i++) {
        if (wordExp.test(array[i])) {
            new_array.push(array[i]);
            array.splice(i, 1);
            i--;
        }
    }

    totalArr.push(array, new_array);
    return totalArr;
}

function segregateTwoWords(array, word1, word2) {
    var word1Exp = new RegExp(word1, "i"), word2Exp = new RegExp(word2, "i"),
            new_arr1 = [], new_arr2 = [], result = [];
    for (var i = 0; i < array.length; i++) {
        if (word1Exp.test(array[i])) {
            new_arr1.push(array[i]);
            array.splice(i, 1);
            i--;
        } else if (word2Exp.test(array[i])) {
            new_arr2.push(array[i]);
            array.splice(i, 1);
            i--;
        }
    }

    result.push(array, new_arr1, new_arr2);
    return result;
}

function segregateThreeWords(array, word1, word2, word3) {
    var word1Exp = new RegExp(word1, "i"), word2Exp = new RegExp(word2, "i"),
            word3Exp = new RegExp(word3, "i"), new_arr1 = [], new_arr2 = [], new_arr3 = [], result = [];
    for (var i = 0; i < array.length; i++) {
        if (word1Exp.test(array[i])) {
            new_arr1.push(array[i]);
            array.splice(i, 1);
            i--;
        } else if (word2Exp.test(array[i])) {
            new_arr2.push(array[i]);
            array.splice(i, 1);
            i--;
        } else if (word3Exp.test(array[i])) {
            new_arr3.push(array[i]);
            array.splice(i, 1);
            i--;
        }
    }
    result.push(array, new_arr1, new_arr2, new_arr3);
    return result;
}

function exceptRepeat(array, word) {
    var reg = new RegExp(word, "gi"), match;
    for (var i = 0; i < array.length; i++) {
        match = array[i].match(reg);
        if (match !== null && match.length > 1) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

function exceptTwoWords(array, word1, word2) {
    var reg1 = new RegExp(word1, "i");
    var reg2 = new RegExp(word2, "i");
    for (var i = 0; i < array.length; i++) {
        if ((reg1.test(array[i])) && (reg2.test(array[i]))) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

function exceptThreeWords(array, word1, word2, word3) {
    var reg1 = new RegExp(word1, "i");
    var reg2 = new RegExp(word2, "i");
    var reg3 = new RegExp(word3, "i");

    for (var i = 0; i < array.length; i++) {
        if ((reg1.test(array[i])) && (reg3.test(array[i]))) {
            array.splice(i, 1);
            i--;
        } else if ((reg2.test(array[i])) && (reg3.test(array[i]))) {
            array.splice(i, 1);
            i--;
        }
    }
    return  array;
}

function marge(array) {
    var merged = [].concat.apply([], array);
    return merged;
}

Object.defineProperty(Array.prototype, 'chunk_inefficient', {
    value: function (chunkSize) {
        var array = this;
        return [].concat.apply([],
        array.map(function (elem, i) {
            return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
        })
        );
    }
});

//var my_obj = {
//    int : "Whether there will have been a “biotech Chernobyl” is an open question,answerable only in the speculative tense of the future anterior.",
//    mid : "This technology, which was considered but never implemented byMonsanto, would make it impossible for genetically modified plants toproduce viable seed, an innovation intended to guard surrounding plantsfrom crossbreeding and to provide a kind of biological patent protection, as 104 Risk CRitiCismRevised Pagesfarmers would not be able to save or share seed from the crop.",
//    sum : "Monsanto’s attempts to insure against the weather, its seeming confidencein its ability to predict and engineer for the future, offer a tellingcontrast to the more precautionary spirit of Ruth Ozeki’s novel.In the service of such peeling, one might juxtapose DeLillo’s novel toHelena María Viramontes’s Under the Feet of Jesus, a novel explicitly dedicatedto César Chávez that highlights the experiences of farmworkers andtheir families.This technology, which was considered but never implemented byMonsanto, would make it impossible for genetically modified plants toproduce viable seed, an innovation intended to guard surrounding plantsfrom crossbreeding and to provide a kind of biological patent protection, as 104 Risk CRitiCismRevised Pagesfarmers would not be able to save or share seed from the crop.Whether there will have been a “biotech Chernobyl” is an open question,answerable only in the speculative tense of the future anterior."
//}
//var max = 5 * 1024, count = 4;
//var amount = (my_obj.sum.length * 2) / 1024 ;
//if
//console.log("Size :" + amount.toFixed(2) + " KB");

function mergeSort(arr) {
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

function deleteElement(array, value) {
    var i = array.indexOf(value);
    if (i !== -1) {
        array.splice(i, 1);
    }
    return array;
}

function objMin(obj) {
    var min = Infinity,
            minKey = '';
    if (Object.keys(obj).length > 1) {
        Object.keys(obj).map(function (key, value) {
            var value = areaObj[key];
            if (value < min) {
                min = value;
                minKey = key;
            }
        });
    } else {
        minKey = Object.keys(obj)[0];
    }

    return minKey;
}

function arrayMin(arr) {
    var len = arr.length,
            min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
};

function getEachNUmber(obj, num1, num2, num3, num, total) {
    if (num <= total) {
        if (num % 3 === 0) {
            var num1 = num / 3,
                    num2 = num1,
                    num3 = num1;
        } else {
            var num1 = Math.floor(num / 3),
                    num2 = num1,
                    num3 = num1 + (num % 3);
        }

        var min = Math.min(num1, num2, num3),
                areaMin = Math.min(obj.intarea, obj.midarea, obj.sumarea);
        if (min > areaMin) {
            num1 = areaMin;

            if ((num - num1) % 2 === 0) {
                num2 = (num - num1) / 2;
                num3 = num2;
            } else {
                num2 = Math.floor((num - num1) / 2);
                num3 = num2 + (num - num1) % 2;
            }
            var areaArr = [obj.intarea, obj.midarea, obj.sumarea];
            areaArr = deleteElement(areaArr, areaMin);
            if (Math.min(num2, num3) > Math.min(areaArr[0], areaArr[1])) {
                num2 = Math.min(areaArr[0], areaArr[1]);
                num3 = num - num1 - num2;
            }
        }
        var result = [num1, num2, num3];
        return result;
    } else {
        return false;
    }
}

function resultProcess(obj, arr) {
    var needObj = {};
    for (var i = 0; i < 3; i++) {
        var min = objMin(obj);
        console.log(arr);
        if (min === 'intarea') {
            needObj.int = arrayMin(arr);
            delete obj.intarea;
            arr = deleteElement(arr, needObj.int);
        } else if (min === 'midarea') {
            needObj.mid = arrayMin(arr);
            delete obj.midarea;
            arr = deleteElement(arr, needObj.mid);
        } else if (min === 'sumarea') {
            needObj.sum = arrayMin(arr);
            delete obj.sumarea;
            arr = deleteElement(arr, needObj.sum);
        }
    }
    return needObj;
}

var num = 7;

var areaObj = {
    intarea: 2,
    midarea: 3,
    sumarea: 1
};

//var total = areaObj.intarea + areaObj.midarea + areaObj.sumarea;
//var result = getEachNUmber(areaObj, areaObj.intarea, areaObj.midarea, areaObj.sumarea, num, total);
//var numbers = resultProcess(areaObj, result);