var sent = str.split(".");
var matches = str.match(/\s[a-z]+\s[a-z]+\s[a-z]+[.][a-z]+\s[a-z]+\s[a-z]+\s/gi);
console.log(sent);
var new_sent = "", counter = 0, new_str_arr = [];
for (var i = 0; i < sent.length - 1; i++) {
	for (var j = counter; j < 2 + counter ; j++) {
		if (sent[j] != "") {
			new_sent += sent[j] + ".";	
		}
		
	}
	counter ++;
	new_sent += "-";
}
console.log(new_sent);
var new_str_arr = new_sent.split(".-");
console.log(new_str_arr);

var sorted_arr = new_str_arr.slice().sort();

var results = [];
var mutch_RegExp = new RegExp("\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+\\s", "i");
for (var i = 0; i < new_str_arr.length - 1; i++) {
	if( (sorted_arr[i + 1].match(mutch_RegExp)) != (sorted_arr[i].match(mutch_RegExp)) )
	{
		results.push(sorted_arr[i]);
	}
}

results = results.reverse();
results = results.join(".");
console.log(results);

// var str = "Verify offer process is operational after this is reinstated.The list of tasks Im needing help with include.Verify offer process after this is reinstated.The list of tasks with include.Setup Advanced Custom Fields plugin to add two new fields to Woocommerce category.";
// var sent = str.split(".");
// var matches = str.match(/\s[a-z]+\s[a-z]+\s[a-z]+[.][a-z]+\s[a-z]+\s[a-z]+\s/gi);

// var new_sent = "", counter = 0, new_str_arr = [];
// for (var i = 0; i < sent.length - 1; i++) {
// 	for (var j = counter; j < 2 + counter ; j++) {
// 		if (sent[j] != "") {
// 			new_sent += sent[j] + ".";	
// 		}
		
// 	}
// 	counter ++;
// 	new_sent += "-";
// }

// var new_str_arr = new_sent.split("-");

// var mutch_RegExp = new RegExp("\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s", "i");
// var result = [], wresult = [];
// new_str_arr.forEach(function(sentence) {
//   var keywordRegex = new RegExp("\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s", "i");
//   var keywordFound = keywordRegex.test(sentence);
//   if (keywordFound) {
//     result.push(sentence);
//   } else {
//     wresult.push(sentence);
//   }
// });

//var str = "Observe these steps to really ensure on the right path to finding a great contractor.Observe these steps to really ensure on the right path to finding a great contractor.It's learned by almost everyone that at some point in their lifetime that a licensed contractor will need to be hired.The majority of men and women realize that they'll need to contract out a project that they want done.The majority of men and women realize that they'll need to contract out a project that they want done.The majority of men and women realize that they'll need to contract out a project that they want done.The majority of men and women realize that they'll need to contract out a project that they want done.The majority of men and women realize that they'll need to contract out a project that they want done.";
//str = "Observe these steps to really ensure you are on the right path to finding a great contractor.Observe these steps to finding a great contractor.Observe these steps to really ensure on the right path to finding a great contractor.Observe these steps to really ensure on the left path to finding a great contractor.It's learned by almost everyone that at some point in their lifetime that a licensed contractor will need to be hired.";
//str = "It's learned by almost everyone that at some point in their lifetime that a licensed contractor will need to be hired.It's learned by almost everyone that at some point in their lifetime that a licensed contractor will need to be hired.It's learned by almost everyone that at some point in their lifetime that a licensed contractor will need to be hired.Observe these steps to really ensure you are on the right path to finding a great contractor.";



// var str = "It's learned by almost everyone that at some point in their barev lifetime that a licensed contractor will need to be hired.It's learned by almost everyone that at some hajox point in their lifetime that a licensed contractor will need to be hired.It's learned by almost everyone that at some poka point in their lifetime that a licensed contractor will need to be hired.It's learned by almost everyone that at some point in garo their lifetime that a licensed contractor will need to be hired.It's learned by almost everyone that at some point in vacho their lifetime that a licensed contractor will need to be hired.Observe these steps to really ensure on the right path to finding a great contractor.Observe these steps to really ensure on barev the right path to finding a great contractor.Observe these steps to really ensure on the right path to finding a great contractor.Observe these steps to really ensure on the hajox right path to finding a great contractor.Observe these steps to really ensure on the right path to finding a great contractor.Observe these steps to really ensure on the privet right path to finding a great contractor.Observe these steps to really ensure on the right path to finding a great contractor.Observe these steps to really ensure on the right paka path to finding a great contractor.";
//var str = "Our experts have pulled together a fine group of suggestions for you to use to find the perfect contractor.Our experts have pulled together a fine group of suggestions for you to use to find the perfect contractor.Our experts have pulled together a fine group of suggestions for you to use to find the perfect contractor.Our experts have pulled together a fine group of suggestions for you to use to find the perfect contractor.Prior to your service provider begins to work on your project, ask him for an accurate estimate.Prior to your service reseller begins to work on your project, ask him for an accurate estimate.Prior to your service specialist begins to work on your project, ask him for an accurate estimate.Prior to your service people begins to work on your project, ask him for an accurate estimate.A local contractor who may have been provided with a detailed description of the job ought to be in a position to create an accurate estimate.A local contractor who may have been provided with an exact description of the job ought to be in a position to create an accurate estimate.A local contractor who may have been provided with a specific description of the job ought to be in a position to create an accurate estimate.A local contractor who may have been provided with a real description of the job ought to be in a position to create an accurate estimate.Do not accept it if your service provider says he can't provide you with an estimate for the project, as long as you have given him all the info he needs.Do not accept it if your service provider says he can't give you with an estimate for the project, as long as you have given him all the info he needs.Do not accept it if your service provider says he can't bestow you with an estimate for the project, as long as you have given him all the info he needs.Do not accept it if your service provider says he can't offer you with an estimate for the project, as long as you have given him all the info he needs."
//
//console.log(str);
//var sent = str.split(".");
//
//var new_sent = "", counter = 0, new_str_arr = [];
//for (var i = 0; i < sent.length - 1; i++) {
//	for (var j = counter; j < 2 + counter ; j++) {
//		if (sent[j] != "") {
//			new_sent += sent[j] + ".";	
//		}
//		
//	}
//	counter ++;	
//	new_sent += "-";
//}
//
//var new_sent_arr = new_sent.split("-");
//var new_sent_str = new_sent_arr.join("");
//
//
//var mutch_RegExp = new RegExp("\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s", "gi");
//// var mutch_RegExp = new RegExp("(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)|(\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+[.][a-z]+[']+[a-z]+\\s[a-z]+\\s[a-z]+\\s[a-z]+\\s)", "gi");
//
//var word4Matches = new_sent.match(mutch_RegExp);
//console.log(word4Matches);
//var result_arr = [];
//var sorted_arr = word4Matches.slice().sort();
//for (var i = 0; i < word4Matches.length; i++) {
//	if (sorted_arr[i] == "") {
//		continue;
//	} else if (sorted_arr[i + 1] == sorted_arr[i]) {
//		result_arr.push(sorted_arr[i].trim());
//	}
//}
//
//var count = {};
//result_arr.forEach(function(i) { count[i] = (count[i]||0)+1;  });
//
//if (result_arr.length != 0) {
//	var propValue;
//	for(var propName in count) {
//	    propValue = count[propName];
//	    var word_4SentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + propName + "(?=[\\s.?!,])[^.?!]*[.?!]","gi");
//		var sents4Words = str.match(word_4SentReg);
//		console.log(sents4Words);
//		var first4words = propName.split(".");		
//		
//		if((propValue + 1) % 2 == 0) {	
//		console.log("privet")	;
//			var x = getRndInteger(0, sents4Words.length);
//			for (var i = 0; i < sents4Words.length + 1; i++) {
//				if (i != x) {
//					str = str.replace(sents4Words[i], "");	
//				}								
//				// console.log(changed);
//			}
//			var last4wordsSentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + first4words[0] + "(?=[\\s.?!,])[^.?!]*[.?!]","gi");
//			str = str.replace(last4wordsSentReg, sents4Words[x]);
//			console.log(i);
//		} else {
//			console.log("else");
//			var x = getRndInteger(0, sents4Words.length);
//			console.log(x);
//			for (var i = 0; i < sents4Words.length; i++) {
//				if (i != x) {
//					str = str.replace(sents4Words[i], "");		
//				}								
//				
//				// console.log(changed);
//			}
//		}
//	    //console.log(propName,propValue);
//	}		
//}
//console.log(str);
// console.log(count);



// for (var j = 0; j < objSize; j++) {
// 		var word_4SentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + result_arr[0] + "(?=[\\s.?!,])[^.?!]*[.?!]","gi");
// 		var sents4Words = str.match(word_4SentReg);
// 		console.log(sents4Words.length);
// 		console.log(sents4Words);
// 		console.log(count[result_arr[j]] + 1);
// 		if ((count[result_arr[j]] + 1) % 2 == 0) {
// 			var cout = sents4Words.length;
// 		} else {
// 			var cout = sents4Words.length - 1;
// 		}
// 		if (sents4Words.length > 1) {
// 			for (var i = 0; i < cout; i++) {

// 				str = str.replace(sents4Words[i], "");		
// 				// console.log(changed);
// 			}	
// 		}
			
// 	}
// for (var key in count) {
//    if (count.hasOwnProperty(key)) {
//       var obj = count.key;
//       for (var prop in obj) {
//          if (obj.hasOwnProperty(prop)) {
//             console.log(prop + " = " + obj[prop]);
//          } else {
//          	console.log("barev");
//          }
//       }
//    } else {
//    	console.log("hajox");
//    }
// }
//console.log(changed);
// var res = [2,2,2,3,3,3,3,4,4];
// var res_arr = [2,3,4];
// console.log(res_arr[0]);
// var counter = {};
// res.forEach(function(i) {
// 	counter[i] = (counter[i]||0) + 1;
// });
// console.log(counter[2]);
// for(var i = 0; i < res_arr.length; i++) {
// 	console.log(counter[res_arr[i]] + "+");
// }

// var New_word_4SentReg = new RegExp("[^.?!]*(?:[.?,\\s!])" + result_arr[0] + "(?=[\\s.?!,])[^.?!]*[.?!]","gmi");
// var New_sents4Words = str.match(word_4SentReg);
// console.log(New_sents4Words);

// console.log(sents4Words);
// console.log(word4Matches);
// console.log("result array");
// console.log(result_arr);


// var sorted_arr = result.slice().sort(), final = [];
// for (var i = 0; i < result.length; i++) {
// 	var found1 = mutch_RegExp.test(sorted_arr[i]);
// 	if (found1) {
// 		match1 = sorted_arr[i].match(mutch_RegExp);
// 	}
// 	var found2 = mutch_RegExp.test(sorted_arr[i + 1]);
// 	if (found2) {
// 		match2 = sorted_arr[i + 1].match(mutch_RegExp);
// 	}

// 	if (match1[0] != match2[0]) {
// 		final.push(sorted_arr[i]);

// 	} else {
// 		final.push(sorted_arr[i+1]);
// 	}
// }


// var lastFinal = final.join(""), final_result = [];
// lastFinal = lastFinal.split(".");
// var lastFinal_sorted = lastFinal.slice().sort();
// for (var i = 0; i < lastFinal.length - 1; i++) {
// 	if (lastFinal_sorted[i+1] != lastFinal_sorted[i]) {
// 		final_result.push(lastFinal_sorted[i]);
// 	}
// }
// final_result = final_result.reverse();
// final_result = final_result.join(". ");

// console.log(final_result);

//var matches = str.match(/[.][a-z]+\s[a-z]+\s/gi);

//var matches = str.match(/([\S]+)\s([\S]+)\s([\S]+)[.]([\S]+)\s([\S]+)\s([\S]+)/gi);

// console.log(matches);

// var result = [];
// var sorted_arr = matches.slice().sort();

// for (var i = 0; i < matches.length; i++) {
// 	if (sorted_arr[i+1] == sorted_arr[i]) {
// 		result.push(sorted_arr[i]);
// 	}
// }

// console.log(result);

// word_4reg = new RegExp("[.]\w*" + result[0] + "\.+","i");

// console.log(word_4reg);
// var match2 = str.match(word_4reg);
// console.log(match2);


// var textToSearch = "I like cats. I really like cats. I also like dogs. Cats are great.  Catsup is tasty. Dogs and cats are pets. Approx. half of pets are cats. Approx. half of pets are dogs. Some cats are v. expensive.";
// var keyword = "cats";


// var sentences = {
//   all           : [],
//   withKeyword   : [],
//   withNoKeyword : []
// }

// var sentenceRegex = new RegExp("([.]) +([A-Z])", "g");
// var sentenceSeparator = "__SENTENCE SEPARATOR__";
// var modifiedText = textToSearch.replace(sentenceRegex, "$1" + sentenceSeparator + "$2");
// sentences.all = modifiedText.split(sentenceSeparator);

// sentences.all.forEach(function(sentence) {
//   var keywordRegex = new RegExp("(^| +)" + keyword + "( +|[.])", "i");
//   var keywordFound = keywordRegex.test(sentence);
//   if (keywordFound) {
//     sentences.withKeyword.push(sentence);
//   } else {
//     sentences.withNoKeyword.push(sentence);
//   }
// });

// console.log(sentences);


// generalon
// var arr = ["axper", "barev", "jan", "axper", "axper", "barev"];

// var sorted_arr = arr.slice().sort();

// var results = "";
// for (var i = 0; i < arr.length; i++) {
//     if (sorted_arr[i + 1] != sorted_arr[i]) {
//         results += sorted_arr[i] + ".";				
//     }
// }
// console.log(results);
// var counter = 0, text = "";
// for (var i = 0; i < results.length; i++) {
// 	if (results[i+1] != results[i]) {
// 		counter++; 
// 		text += (counter + ". " + results[i] + "\n");
// 	}
// }
// console.log(text);

// var str = "WordPressHi, Im looking for an experienced WordPress developer. Content WordPress Management must be intuitive. Website includes several  galleries WordPress. There are WordPress 20-25 pages all up, though most have minimal content. I will be happy to provide a link to the existing website in private messages if you wish to have a look."
// var search = /\swordpress\s|\swordpress\W|wordpress\s/gi;
// word1 = new RegExp('\\s' + word1 + '\\s|\\s' + word1 + '\\W|' + word1 + '\\s|' + word1 + '\\W', "gi");
// var searchWord = "wordpress";
// var search = new RegExp(searchWord,"gi");
// var matches = str.match(search);
// console.log(matches);
// var sent = "Hi, Im looking for an experienced WordPress developer. Content Management must be intuitive. Website includes several photo galleries. There are approximately 20-25 pages all up, though most have minimal content. I will be happy to provide a link to the existing website in private messages if you wish to have a look."

// sent_arr = sent.split(/[.|?|!]/gi);
// var parag = [], psent = "";
// sent_arr.splice([sent_arr.length - 1], 1);
// console.log(sent_arr.length);
// var x = 0;
// for (var y = 0, j = y; j < 3 + y; j++) {
// 	psent = psent + sent_arr[j] + ". ";
// 	y += 2;	
// }

// console.log(psent);

// for (var i = 0; i < 2; i++) {
// 	for (var j = x; j < 3 + x; j++) {
// 		psent[j + y] = sent_arr[j] + ". ";
// 		y++;
// 	}
// 	parag[i] = psent + "----";
// 	x = x + 3;
// }

// console.log(parag);

// var arr =  ["barev", "axper", "jan", "vonc es", "cavt", "tanem"];
// var parag = "", new_elem = [], my_str = "";
// for (var x = 0, i = 0; i < 2; i++) {
// 	new_elem[i] = "";
// 	for (var j = x; j < x + 4; j++) {
// 		if (typeof arr[j] != "undefined") {
// 			new_elem[i] = new_elem[i] + " " + arr[j] + ". ";	
// 		}
		
// 		// my_str += arr[j] + " " ; 
// 		//console.log(new_elem[i]);		
// 	}
// 	x += 4;
// 	//console.log(new_elem[i]);	
// 	parag = parag + new_elem[i] + "\n\n";
// 	console.log(x);

// }
// console.log(parag);
//console.log(new_elem[0]);
//console.log(new_arr);
// options = JSON.parse(localStorage.getItem("options"));
// var str = "hello world hello hello";

// var matches = str.match(/hello/gi);
// console.log(matches.length - options.introWordCount);
// var str = "Before hiring your chosen. be certain to hello. get a solid hello estimate in writing. because not all s are honest and upfront in their quoting of costs. Most builders won't be as competent as they say they're when it involves getting the job done.";
// var word = "hello", str1 = "", count = word.length;
// var word_exp = new RegExp('\\s[a-z]{' + count + '}\\s', "i");
// var str_arr = str.split(" ");
// var c = Math.floor(str_arr.length / 10);
// console.log(c);
// for (var i = 0; i < 3; i++) {

// 		str_arr.splice(i + c, 0, word);	
	
// 	c += c;
	
// }

// console.log(str_arr);
// console.log(str);
// console.log(word.length);
// console.log(str.length);
// newstr = str.replace(/[.|?|!]\s|\s[.|?|!]\s|[.|?|!]\s\s/gi, ".");
// console.log(newstr); 
// for (var i = 0; i < 2; i++) {
// 	var str1 = str1 + str.replace(/\s[a-z]{5,7}\s/i, word);	
// }
// var matches = str1.match(word);
// for (var i = 0; i < 1; i++) {
// 	str = str.replace(word, "");
// }

// console.log(str);
// var arr = [1,3,4,5,6,7,8,9];

// var help_block = document.getElementById("sumSentCount");
// help_block.innerHTML = "sentences : " + (arr.length - 1);

var total = 0;
for(var x in localStorage) {
  var amount = (localStorage[x].length * 2) / 1024 / 1024;
  total += amount;
  console.log( x + " = " + amount.toFixed(2) + " MB");
}
console.log( "Total: " + total.toFixed(2) + " MB");

var _lsTotal=0, _xLen, _x;
for(_x in localStorage) {
    _xLen = ((localStorage[_x].length + _x.length)* 2);
    _lsTotal+=_xLen; 
    console.log(_x.substr(0,50)+" = "+ (_xLen/1024).toFixed(2)+" KB");
}
console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");

    if(Number(localStorage.getItem("newWords")) === 1) {            
            if (Number(options.word_1Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count = countWords(text1_arr, options.word_1) + countWords(text2_arr, options.word_1) + countWords(text3_arr, options.word_1);
                if (count > Number(options.word_1Count)) {
                    var needCount = count - Number(options.word_1Count), chotch = 0;                    
                    var word1_reg = new RegExp(options.word_1, "i");
                    
                    if(needCount != chotch) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word1_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }

                        if (text1_arr.length < totalCount) {
                            errors.push(4);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word1_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(4);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word1_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                }                
            } else {
                errors.push(4);
            }
        }                
        
    if(Number(localStorage.getItem("newWords")) === 2) {
            if (Number(options.word_1Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count = countWords(text1_arr, options.word_1) + countWords(text2_arr, options.word_1) + countWords(text3_arr, options.word_1);
                if (count > Number(options.word_1Count)) {
                    var needCount = count - Number(options.word_1Count), chotch = 0;
                    console.log(needCount);
                    var word1_reg = new RegExp(options.word_1, "i");
                    if(needCount != chotch) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word1_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }

                        if (text1_arr.length < totalCount) {
                            errors.push(4);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word1_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(4);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word1_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                }                
            } else {
                errors.push(4);
            }
            
            if(Number(options.word_2Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count2 = countWords(text1_arr, options.word_2) + countWords(text2_arr, options.word_2) + countWords(text3_arr, options.word_2);
                if (count2 > Number(options.word_2Count)) {
                    var needCount2 = count2 - Number(options.word_2Count), chotch2 = 0;
                    var word2_reg = new RegExp(options.word_2, "i");
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word2_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(5);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word2_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(5);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word2_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(5);
            }
        }
        
    if(Number(localStorage.getItem("newWords")) === 3) {
            if (Number(options.word_1Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count = countWords(text1_arr, options.word_1) + countWords(text2_arr, options.word_1) + countWords(text3_arr, options.word_1);
                if (count > Number(options.word_1Count)) {
                    var needCount = count - Number(options.word_1Count), chotch = 0;
                    console.log(needCount);
                    var word1_reg = new RegExp(options.word_1, "i");
                    if(needCount != chotch) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word1_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }

                        if (text1_arr.length < totalCount) {
                            errors.push(4);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word1_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(4);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word1_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                }                
            } else {
                errors.push(4);
            }
            
            if(Number(options.word_2Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count2 = countWords(text1_arr, options.word_2) + countWords(text2_arr, options.word_2) + countWords(text3_arr, options.word_2);
                if (count2 > Number(options.word_2Count)) {
                    var needCount2 = count2 - Number(options.word_2Count), chotch2 = 0;
                    var word2_reg = new RegExp(options.word_2, "i");
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word2_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(5);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word2_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(5);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word2_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(5);
            }
            
            if(Number(options.word_3Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count3 = countWords(text1_arr, options.word_3) + countWords(text2_arr, options.word_3) + countWords(text3_arr, options.word_3);
                if (count3 > Number(options.word_3Count)) {
                    var needCount3 = count3 - Number(options.word_3Count), chotch3 = 0;
                    var word3_reg = new RegExp(options.word_3, "i");
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word3_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(6);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word3_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(6);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word3_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(6);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(6);
            }
        }
        
    if(Number(localStorage.getItem("newWords")) === 4) {
            if (Number(options.word_1Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count = countWords(text1_arr, options.word_1) + countWords(text2_arr, options.word_1) + countWords(text3_arr, options.word_1);
                if (count > Number(options.word_1Count)) {
                    var needCount = count - Number(options.word_1Count), chotch = 0;
                    console.log(needCount);
                    var word1_reg = new RegExp(options.word_1, "i");
                    if(needCount != chotch) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word1_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }

                        if (text1_arr.length < totalCount) {
                            errors.push(4);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word1_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(4);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word1_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                }                
            } else {
                errors.push(6);
            }
            
            if(Number(options.word_2Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count2 = countWords(text1_arr, options.word_2) + countWords(text2_arr, options.word_2) + countWords(text3_arr, options.word_2);
                if (count2 > Number(options.word_2Count)) {
                    var needCount2 = count2 - Number(options.word_2Count), chotch2 = 0;
                    var word2_reg = new RegExp(options.word_2, "i");
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word2_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(5);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word2_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(5);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word2_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(5);
            }
            
            if(Number(options.word_3Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count3 = countWords(text1_arr, options.word_3) + countWords(text2_arr, options.word_3) + countWords(text3_arr, options.word_3);
                if (count3 > Number(options.word_3Count)) {
                    var needCount3 = count3 - Number(options.word_3Count), chotch3 = 0;
                    var word3_reg = new RegExp(options.word_3, "i");
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word3_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(6);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word3_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(6);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word3_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(6);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(6);
            }
            
            if(Number(options.word_4Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count4 = countWords(text1_arr, options.word_4) + countWords(text2_arr, options.word_4) + countWords(text3_arr, options.word_4);
                if (count4 > Number(options.word_4Count)) {
                    var needCount4 = count4 - Number(options.word_4Count), chotch4 = 0;
                    var word4_reg = new RegExp(options.word_4, "i");
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word4_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(7);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word4_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(7);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word4_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(7);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(7);
            }
        }
        
    if(Number(localStorage.getItem("newWords")) === 5) {
            if (Number(options.word_1Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count = countWords(text1_arr, options.word_1) + countWords(text2_arr, options.word_1) + countWords(text3_arr, options.word_1);
                if (count > Number(options.word_1Count)) {
                    var needCount = count - Number(options.word_1Count), chotch = 0;
                    console.log(needCount);
                    var word1_reg = new RegExp(options.word_1, "i");
                    if(needCount != chotch) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word1_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }

                        if (text1_arr.length < totalCount) {
                            errors.push(4);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word1_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(4);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word1_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                }                
            } else {
                errors.push(6);
            }
            
            if(Number(options.word_2Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count2 = countWords(text1_arr, options.word_2) + countWords(text2_arr, options.word_2) + countWords(text3_arr, options.word_2);
                if (count2 > Number(options.word_2Count)) {
                    var needCount2 = count2 - Number(options.word_2Count), chotch2 = 0;
                    var word2_reg = new RegExp(options.word_2, "i");
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word2_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(5);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word2_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(5);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word2_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(5);
            }
            
            if(Number(options.word_3Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count3 = countWords(text1_arr, options.word_3) + countWords(text2_arr, options.word_3) + countWords(text3_arr, options.word_3);
                if (count3 > Number(options.word_3Count)) {
                    var needCount3 = count3 - Number(options.word_3Count), chotch3 = 0;
                    var word3_reg = new RegExp(options.word_3, "i");
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word3_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(6);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word3_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(6);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word3_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(6);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(6);
            }
            
            if(Number(options.word_4Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count4 = countWords(text1_arr, options.word_4) + countWords(text2_arr, options.word_4) + countWords(text3_arr, options.word_4);
                if (count4 > Number(options.word_4Count)) {
                    var needCount4 = count4 - Number(options.word_4Count), chotch4 = 0;
                    var word4_reg = new RegExp(options.word_4, "i");
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word4_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(7);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word4_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(7);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word4_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(7);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(7);
            }
            
            if(Number(options.word_5Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count5 = countWords(text1_arr, options.word_5) + countWords(text2_arr, options.word_5) + countWords(text3_arr, options.word_5);
                if (count5 > Number(options.word_5Count)) {
                    var needCount5 = count5 - Number(options.word_5Count), chotch5 = 0;
                    var word5_reg = new RegExp(options.word_5, "i");
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word5_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(8);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word5_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(8);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word5_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(8);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(8);
            }
        }
        
    if(Number(localStorage.getItem("newWords")) === 6) {
            if (Number(options.word_1Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count = countWords(text1_arr, options.word_1) + countWords(text2_arr, options.word_1) + countWords(text3_arr, options.word_1);
                if (count > Number(options.word_1Count)) {
                    var needCount = count - Number(options.word_1Count), chotch = 0;
                    console.log(needCount);
                    var word1_reg = new RegExp(options.word_1, "i");
                    if(needCount != chotch) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word1_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }

                        if (text1_arr.length < totalCount) {
                            errors.push(4);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word1_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(4);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word1_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                }                
            } else {
                errors.push(6);
            }
            
            if(Number(options.word_2Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count2 = countWords(text1_arr, options.word_2) + countWords(text2_arr, options.word_2) + countWords(text3_arr, options.word_2);
                if (count2 > Number(options.word_2Count)) {
                    var needCount2 = count2 - Number(options.word_2Count), chotch2 = 0;
                    var word2_reg = new RegExp(options.word_2, "i");
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word2_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(5);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word2_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(5);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word2_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(5);
            }
            
            if(Number(options.word_3Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count3 = countWords(text1_arr, options.word_3) + countWords(text2_arr, options.word_3) + countWords(text3_arr, options.word_3);
                if (count3 > Number(options.word_3Count)) {
                    var needCount3 = count3 - Number(options.word_3Count), chotch3 = 0;
                    var word3_reg = new RegExp(options.word_3, "i");
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word3_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(6);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word3_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(6);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word3_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(6);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(6);
            }
            
            if(Number(options.word_4Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count4 = countWords(text1_arr, options.word_4) + countWords(text2_arr, options.word_4) + countWords(text3_arr, options.word_4);
                if (count4 > Number(options.word_4Count)) {
                    var needCount4 = count4 - Number(options.word_4Count), chotch4 = 0;
                    var word4_reg = new RegExp(options.word_4, "i");
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word4_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(7);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word4_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(7);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word4_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(7);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(7);
            }
            
            if(Number(options.word_5Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count5 = countWords(text1_arr, options.word_5) + countWords(text2_arr, options.word_5) + countWords(text3_arr, options.word_5);
                if (count5 > Number(options.word_5Count)) {
                    var needCount5 = count5 - Number(options.word_5Count), chotch5 = 0;
                    var word5_reg = new RegExp(options.word_5, "i");
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word5_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(8);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word5_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(8);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word5_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(8);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(8);
            }
            
            if(Number(options.word_6Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count6 = countWords(text1_arr, options.word_6) + countWords(text2_arr, options.word_6) + countWords(text3_arr, options.word_6);
                if (count6 > Number(options.word_6Count)) {
                    var needCount6 = count6 - Number(options.word_6Count), chotch6 = 0;
                    var word6_reg = new RegExp(options.word_6, "i");
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word6_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(9);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word6_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(9);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word6_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(9);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(8);
            }
        }
        
    if(Number(localStorage.getItem("newWords")) === 7) {
            if (Number(options.word_1Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count = countWords(text1_arr, options.word_1) + countWords(text2_arr, options.word_1) + countWords(text3_arr, options.word_1);
                if (count > Number(options.word_1Count)) {
                    var needCount = count - Number(options.word_1Count), chotch = 0;
                    console.log(needCount);
                    var word1_reg = new RegExp(options.word_1, "i");
                    if(needCount != chotch) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word1_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }

                        if (text1_arr.length < totalCount) {
                            errors.push(4);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word1_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(4);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word1_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                }                
            } else {
                errors.push(4);
            }
            
            if(Number(options.word_2Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count2 = countWords(text1_arr, options.word_2) + countWords(text2_arr, options.word_2) + countWords(text3_arr, options.word_2);
                if (count2 > Number(options.word_2Count)) {
                    var needCount2 = count2 - Number(options.word_2Count), chotch2 = 0;
                    var word2_reg = new RegExp(options.word_2, "i");
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word2_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(5);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word2_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(5);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word2_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(5);
            }
            
            if(Number(options.word_3Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count3 = countWords(text1_arr, options.word_3) + countWords(text2_arr, options.word_3) + countWords(text3_arr, options.word_3);
                if (count3 > Number(options.word_3Count)) {
                    var needCount3 = count3 - Number(options.word_3Count), chotch3 = 0;
                    var word3_reg = new RegExp(options.word_3, "i");
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word3_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(6);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word3_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(6);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word3_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(6);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(6);
            }
            
            if(Number(options.word_4Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count4 = countWords(text1_arr, options.word_4) + countWords(text2_arr, options.word_4) + countWords(text3_arr, options.word_4);
                if (count4 > Number(options.word_4Count)) {
                    var needCount4 = count4 - Number(options.word_4Count), chotch4 = 0;
                    var word4_reg = new RegExp(options.word_4, "i");
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word4_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(7);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word4_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(7);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word4_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(7);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(7);
            }
            
            if(Number(options.word_5Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count5 = countWords(text1_arr, options.word_5) + countWords(text2_arr, options.word_5) + countWords(text3_arr, options.word_5);
                if (count5 > Number(options.word_5Count)) {
                    var needCount5 = count5 - Number(options.word_5Count), chotch5 = 0;
                    var word5_reg = new RegExp(options.word_5, "i");
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word5_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(8);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word5_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(8);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word5_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(8);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(8);
            }
            
            if(Number(options.word_6Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count6 = countWords(text1_arr, options.word_6) + countWords(text2_arr, options.word_6) + countWords(text3_arr, options.word_6);
                if (count6 > Number(options.word_6Count)) {
                    var needCount6 = count6 - Number(options.word_6Count), chotch6 = 0;
                    var word6_reg = new RegExp(options.word_6, "i");
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word6_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(9);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word6_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(9);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word6_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(9);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(9);
            }
            if(Number(options.word_7Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count7 = countWords(text1_arr, options.word_7) + countWords(text2_arr, options.word_7) + countWords(text3_arr, options.word_7);
                if (count7 > Number(options.word_7Count)) {
                    var needCount7 = count7 - Number(options.word_7Count), chotch7 = 0;
                    var word7_reg = new RegExp(options.word_7, "i");
                    
                    if (needCount7 != chotch7) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word7_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch7++;
                                i--;
                                if(needCount7 === chotch7) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(10);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_7 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount7 != chotch7) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word7_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch7++;
                                i--;
                                if(needCount7 === chotch7) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(10);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_7 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount7 != chotch7) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word7_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch7++;
                                i--;
                                if(needCount7 === chotch7) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(10);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_7 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(10);
            }
        }
        
    if(Number(localStorage.getItem("newWords")) === 8) {
            if (Number(options.word_1Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count = countWords(text1_arr, options.word_1) + countWords(text2_arr, options.word_1) + countWords(text3_arr, options.word_1);
                if (count > Number(options.word_1Count)) {
                    var needCount = count - Number(options.word_1Count), chotch = 0;
                    console.log(needCount);
                    var word1_reg = new RegExp(options.word_1, "i");
                    if(needCount != chotch) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word1_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }

                        if (text1_arr.length < totalCount) {
                            errors.push(4);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word1_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(4);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word1_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                }                
            } else {
                errors.push(4);
            }
            
            if(Number(options.word_2Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count2 = countWords(text1_arr, options.word_2) + countWords(text2_arr, options.word_2) + countWords(text3_arr, options.word_2);
                if (count2 > Number(options.word_2Count)) {
                    var needCount2 = count2 - Number(options.word_2Count), chotch2 = 0;
                    var word2_reg = new RegExp(options.word_2, "i");
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word2_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(5);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word2_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(5);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word2_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(5);
            }
            
            if(Number(options.word_3Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count3 = countWords(text1_arr, options.word_3) + countWords(text2_arr, options.word_3) + countWords(text3_arr, options.word_3);
                if (count3 > Number(options.word_3Count)) {
                    var needCount3 = count3 - Number(options.word_3Count), chotch3 = 0;
                    var word3_reg = new RegExp(options.word_3, "i");
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word3_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(6);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word3_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(6);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word3_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(6);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(6);
            }
            
            if(Number(options.word_4Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count4 = countWords(text1_arr, options.word_4) + countWords(text2_arr, options.word_4) + countWords(text3_arr, options.word_4);
                if (count4 > Number(options.word_4Count)) {
                    var needCount4 = count4 - Number(options.word_4Count), chotch4 = 0;
                    var word4_reg = new RegExp(options.word_4, "i");
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word4_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(7);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word4_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(7);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word4_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(7);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(7);
            }
            
            if(Number(options.word_5Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count5 = countWords(text1_arr, options.word_5) + countWords(text2_arr, options.word_5) + countWords(text3_arr, options.word_5);
                if (count5 > Number(options.word_5Count)) {
                    var needCount5 = count5 - Number(options.word_5Count), chotch5 = 0;
                    var word5_reg = new RegExp(options.word_5, "i");
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word5_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(8);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word5_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(8);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word5_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(8);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(8);
            }
            
            if(Number(options.word_6Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count6 = countWords(text1_arr, options.word_6) + countWords(text2_arr, options.word_6) + countWords(text3_arr, options.word_6);
                if (count6 > Number(options.word_6Count)) {
                    var needCount6 = count6 - Number(options.word_6Count), chotch6 = 0;
                    var word6_reg = new RegExp(options.word_6, "i");
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word6_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(9);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word6_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(9);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word6_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(9);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(9);
            }
            if(Number(options.word_7Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count7 = countWords(text1_arr, options.word_7) + countWords(text2_arr, options.word_7) + countWords(text3_arr, options.word_7);
                if (count7 > Number(options.word_7Count)) {
                    var needCount7 = count7 - Number(options.word_7Count), chotch7 = 0;
                    var word7_reg = new RegExp(options.word_7, "i");
                    
                    if (needCount7 != chotch7) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word7_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch7++;
                                i--;
                                if(needCount7 === chotch7) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(10);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_7 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount7 != chotch7) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word7_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch7++;
                                i--;
                                if(needCount7 === chotch7) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(10);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_7 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount7 != chotch7) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word7_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch7++;
                                i--;
                                if(needCount7 === chotch7) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(10);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_7 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(10);
            }
            if(Number(options.word_8Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count8 = countWords(text1_arr, options.word_8) + countWords(text2_arr, options.word_8) + countWords(text3_arr, options.word_8);
                if (count8 > Number(options.word_8Count)) {
                    var needCount8 = count8 - Number(options.word_8Count), chotch8 = 0;
                    var word8_reg = new RegExp(options.word_8, "i");
                    
                    if (needCount8 != chotch8) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word8_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch8++;
                                i--;
                                if(needCount8 === chotch8) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(11);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_8 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount8 != chotch8) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word8_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch8++;
                                i--;
                                if(needCount8 === chotch8) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(11);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_8 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount8 != chotch8) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word8_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch8++;
                                i--;
                                if(needCount8 === chotch8) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(11);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_8 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(11);
            }
        }
        
    if(Number(localStorage.getItem("newWords")) === 9) {
            if (Number(options.word_1Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count = countWords(text1_arr, options.word_1) + countWords(text2_arr, options.word_1) + countWords(text3_arr, options.word_1);
                if (count > Number(options.word_1Count)) {
                    var needCount = count - Number(options.word_1Count), chotch = 0;
                    console.log(needCount);
                    var word1_reg = new RegExp(options.word_1, "i");
                    if(needCount != chotch) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word1_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }

                        if (text1_arr.length < totalCount) {
                            errors.push(4);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word1_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(4);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word1_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                }                
            } else {
                errors.push(4);
            }
            
            if(Number(options.word_2Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count2 = countWords(text1_arr, options.word_2) + countWords(text2_arr, options.word_2) + countWords(text3_arr, options.word_2);
                if (count2 > Number(options.word_2Count)) {
                    var needCount2 = count2 - Number(options.word_2Count), chotch2 = 0;
                    var word2_reg = new RegExp(options.word_2, "i");
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word2_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(5);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word2_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(5);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word2_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(5);
            }
            
            if(Number(options.word_3Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count3 = countWords(text1_arr, options.word_3) + countWords(text2_arr, options.word_3) + countWords(text3_arr, options.word_3);
                if (count3 > Number(options.word_3Count)) {
                    var needCount3 = count3 - Number(options.word_3Count), chotch3 = 0;
                    var word3_reg = new RegExp(options.word_3, "i");
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word3_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(6);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word3_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(6);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word3_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(6);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(6);
            }
            
            if(Number(options.word_4Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count4 = countWords(text1_arr, options.word_4) + countWords(text2_arr, options.word_4) + countWords(text3_arr, options.word_4);
                if (count4 > Number(options.word_4Count)) {
                    var needCount4 = count4 - Number(options.word_4Count), chotch4 = 0;
                    var word4_reg = new RegExp(options.word_4, "i");
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word4_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(7);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word4_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(7);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word4_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(7);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(7);
            }
            
            if(Number(options.word_5Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count5 = countWords(text1_arr, options.word_5) + countWords(text2_arr, options.word_5) + countWords(text3_arr, options.word_5);
                if (count5 > Number(options.word_5Count)) {
                    var needCount5 = count5 - Number(options.word_5Count), chotch5 = 0;
                    var word5_reg = new RegExp(options.word_5, "i");
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word5_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(8);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word5_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(8);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word5_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(8);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(8);
            }
            
            if(Number(options.word_6Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count6 = countWords(text1_arr, options.word_6) + countWords(text2_arr, options.word_6) + countWords(text3_arr, options.word_6);
                if (count6 > Number(options.word_6Count)) {
                    var needCount6 = count6 - Number(options.word_6Count), chotch6 = 0;
                    var word6_reg = new RegExp(options.word_6, "i");
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word6_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(9);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word6_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(9);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word6_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(9);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(9);
            }
            if(Number(options.word_7Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count7 = countWords(text1_arr, options.word_7) + countWords(text2_arr, options.word_7) + countWords(text3_arr, options.word_7);
                if (count7 > Number(options.word_7Count)) {
                    var needCount7 = count7 - Number(options.word_7Count), chotch7 = 0;
                    var word7_reg = new RegExp(options.word_7, "i");
                    
                    if (needCount7 != chotch7) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word7_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch7++;
                                i--;
                                if(needCount7 === chotch7) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(10);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_7 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount7 != chotch7) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word7_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch7++;
                                i--;
                                if(needCount7 === chotch7) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(10);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_7 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount7 != chotch7) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word7_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch7++;
                                i--;
                                if(needCount7 === chotch7) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(10);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_7 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(10);
            }
            if(Number(options.word_8Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count8 = countWords(text1_arr, options.word_8) + countWords(text2_arr, options.word_8) + countWords(text3_arr, options.word_8);
                if (count8 > Number(options.word_8Count)) {
                    var needCount8 = count8 - Number(options.word_8Count), chotch8 = 0;
                    var word8_reg = new RegExp(options.word_8, "i");
                    
                    if (needCount8 != chotch8) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word8_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch8++;
                                i--;
                                if(needCount8 === chotch8) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(11);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_8 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount8 != chotch8) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word8_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch8++;
                                i--;
                                if(needCount8 === chotch8) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(11);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_8 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount8 != chotch8) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word8_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch8++;
                                i--;
                                if(needCount8 === chotch8) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(11);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_8 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(11);
            }
            
            if(Number(options.word_9Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count9 = countWords(text1_arr, options.word_9) + countWords(text2_arr, options.word_9) + countWords(text3_arr, options.word_9);
                if (count9 > Number(options.word_9Count)) {
                    var needCount9 = count9 - Number(options.word_9Count), chotch9 = 0;
                    var word9_reg = new RegExp(options.word_9, "i");
                    
                    if (needCount9 != chotch9) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word9_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch9++;
                                i--;
                                if(needCount9 === chotch9) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(12);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_9 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount9 != chotch9) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word9_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch9++;
                                i--;
                                if(needCount9 === chotch9) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(12);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_9 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount9 != chotch9) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word9_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch9++;
                                i--;
                                if(needCount9 === chotch9) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(12);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_9 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(11);
            }
        }
        
    if(Number(localStorage.getItem("newWords")) === 10) {
            if (Number(options.word_1Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count = countWords(text1_arr, options.word_1) + countWords(text2_arr, options.word_1) + countWords(text3_arr, options.word_1);
                if (count > Number(options.word_1Count)) {
                    var needCount = count - Number(options.word_1Count), chotch = 0;
                    console.log(needCount);
                    var word1_reg = new RegExp(options.word_1, "i");
                    if(needCount != chotch) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word1_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }

                        if (text1_arr.length < totalCount) {
                            errors.push(4);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word1_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(4);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount != chotch) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word1_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch++;
                                i--;
                                if(needCount === chotch) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_1 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                }                
            } else {
                errors.push(4);
            }
            
            if(Number(options.word_2Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count2 = countWords(text1_arr, options.word_2) + countWords(text2_arr, options.word_2) + countWords(text3_arr, options.word_2);
                if (count2 > Number(options.word_2Count)) {
                    var needCount2 = count2 - Number(options.word_2Count), chotch2 = 0;
                    var word2_reg = new RegExp(options.word_2, "i");
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word2_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(5);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word2_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(5);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount2 != chotch2) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word2_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch2++;
                                i--;
                                if(needCount2 === chotch2) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(4);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_2 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(5);
            }
            
            if(Number(options.word_3Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count3 = countWords(text1_arr, options.word_3) + countWords(text2_arr, options.word_3) + countWords(text3_arr, options.word_3);
                if (count3 > Number(options.word_3Count)) {
                    var needCount3 = count3 - Number(options.word_3Count), chotch3 = 0;
                    var word3_reg = new RegExp(options.word_3, "i");
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word3_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(6);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word3_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(6);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount3 != chotch3) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word3_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch3++;
                                i--;
                                if(needCount3 === chotch3) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(6);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_3 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(6);
            }
            
            if(Number(options.word_4Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count4 = countWords(text1_arr, options.word_4) + countWords(text2_arr, options.word_4) + countWords(text3_arr, options.word_4);
                if (count4 > Number(options.word_4Count)) {
                    var needCount4 = count4 - Number(options.word_4Count), chotch4 = 0;
                    var word4_reg = new RegExp(options.word_4, "i");
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word4_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(7);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word4_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(7);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount4 != chotch4) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word4_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch4++;
                                i--;
                                if(needCount4 === chotch4) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(7);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_4 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(7);
            }
            
            if(Number(options.word_5Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count5 = countWords(text1_arr, options.word_5) + countWords(text2_arr, options.word_5) + countWords(text3_arr, options.word_5);
                if (count5 > Number(options.word_5Count)) {
                    var needCount5 = count5 - Number(options.word_5Count), chotch5 = 0;
                    var word5_reg = new RegExp(options.word_5, "i");
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word5_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(8);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word5_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(8);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount5 != chotch5) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word5_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch5++;
                                i--;
                                if(needCount5 === chotch5) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(8);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_5 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(8);
            }
            
            if(Number(options.word_6Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count6 = countWords(text1_arr, options.word_6) + countWords(text2_arr, options.word_6) + countWords(text3_arr, options.word_6);
                if (count6 > Number(options.word_6Count)) {
                    var needCount6 = count6 - Number(options.word_6Count), chotch6 = 0;
                    var word6_reg = new RegExp(options.word_6, "i");
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word6_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(9);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word6_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(9);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount6 != chotch6) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word6_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch6++;
                                i--;
                                if(needCount6 === chotch6) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(9);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_6 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(9);
            }
            if(Number(options.word_7Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count7 = countWords(text1_arr, options.word_7) + countWords(text2_arr, options.word_7) + countWords(text3_arr, options.word_7);
                if (count7 > Number(options.word_7Count)) {
                    var needCount7 = count7 - Number(options.word_7Count), chotch7 = 0;
                    var word7_reg = new RegExp(options.word_7, "i");
                    
                    if (needCount7 != chotch7) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word7_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch7++;
                                i--;
                                if(needCount7 === chotch7) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(10);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_7 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount7 != chotch7) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word7_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch7++;
                                i--;
                                if(needCount7 === chotch7) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(10);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_7 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount7 != chotch7) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word7_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch7++;
                                i--;
                                if(needCount7 === chotch7) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(10);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_7 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(10);
            }
            if(Number(options.word_8Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count8 = countWords(text1_arr, options.word_8) + countWords(text2_arr, options.word_8) + countWords(text3_arr, options.word_8);
                if (count8 > Number(options.word_8Count)) {
                    var needCount8 = count8 - Number(options.word_8Count), chotch8 = 0;
                    var word8_reg = new RegExp(options.word_8, "i");
                    
                    if (needCount8 != chotch8) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word8_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch8++;
                                i--;
                                if(needCount8 === chotch8) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(11);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_8 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount8 != chotch8) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word8_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch8++;
                                i--;
                                if(needCount8 === chotch8) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(11);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_8 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount8 != chotch8) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word8_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch8++;
                                i--;
                                if(needCount8 === chotch8) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(11);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_8 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(11);
            }
            
            if(Number(options.word_9Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count9 = countWords(text1_arr, options.word_9) + countWords(text2_arr, options.word_9) + countWords(text3_arr, options.word_9);
                if (count9 > Number(options.word_9Count)) {
                    var needCount9 = count9 - Number(options.word_9Count), chotch9 = 0;
                    var word9_reg = new RegExp(options.word_9, "i");
                    
                    if (needCount9 != chotch9) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word9_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch9++;
                                i--;
                                if(needCount9 === chotch9) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(12);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_9 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount9 != chotch9) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word9_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch9++;
                                i--;
                                if(needCount9 === chotch9) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(12);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_9 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount9 != chotch9) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word9_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch9++;
                                i--;
                                if(needCount9 === chotch9) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(12);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_9 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(12);
            }
            
            if(Number(options.word_10Count) <= text1_arr.length + text2_arr.length + text3_arr.length) {
                var count10 = countWords(text1_arr, options.word_10) + countWords(text2_arr, options.word_10) + countWords(text3_arr, options.word_10);
                if (count10 > Number(options.word_10Count)) {
                    var needCount10 = count10 - Number(options.word_10Count), chotch10 = 0;
                    var word10_reg = new RegExp(options.word_10, "i");
                    
                    if (needCount10 != chotch10) {
                        for(var i = 0; i < text1_arr.length; i++) {
                            if(word10_reg.test(text1_arr[i])) {
                                text1_arr.splice(i, 1);
                                chotch10++;
                                i--;
                                if(needCount10 === chotch10) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }   
                        if(text1_arr.length < totalCount) {
                            errors.push(13);
                            document.getElementById("moreIntSentNonWord").style.display = "block";
                            document.getElementById("moreIntSentNonWord").innerHTML = "<strong><ins>Introduction</ins> : </strong> " +
                                                                                    "Add " + (totalCount - text1_arr.length) + " sentences" +
                                                                                    "Which will not contain <ins>" + options.word_10 + "</ins> word";
                        } else {
                            document.getElementById("moreIntSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount10 != chotch10) {
                        for(var i = 0; i < text2_arr.length; i++) {
                            var patt = word10_reg.test(text2_arr[i]);
                            if(patt) {
                                text2_arr.splice(i, 1);
                                chotch10++;
                                i--;
                                if(needCount10 === chotch10) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text2_arr.length < totalCount2) {
                            errors.push(13);
                            document.getElementById("moreMiddleSentNonWord").style.display = "block";
                            document.getElementById("moreMiddleSentNonWord").innerHTML = "<strong><ins>Middle</ins> : </strong> " +
                                                                                    "Add " + (totalCount2 - text2_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_10 + "</ins> word";
                        } else {
                            document.getElementById("moreMiddleSentNonWord").style.display = "none";
                        }
                    }
                    
                    if (needCount10 != chotch10) {
                        for(var i = 0; i < text3_arr.length; i++) {
                            var patt = word10_reg.test(text3_arr[i]);
                            if(patt) {
                                text3_arr.splice(i, 1);
                                chotch10++;
                                i--;
                                if(needCount10 === chotch10) {
                                    break;
                                }
                            } else {
                                continue;
                            }
                        }
                        if (text3_arr.length < totalCount3) {
                            errors.push(13);
                            document.getElementById("moreSummarySentNonWord").style.display = "block";
                            document.getElementById("moreSummarySentNonWord").innerHTML = "<strong><ins>Summary</ins> : </strong> " +
                                                                                    "Add " + (totalCount3 - text3_arr.length) + " sentences " +
                                                                                    "Which will not contain <ins>" + options.word_10 + "</ins> word";
                        } else {
                            document.getElementById("moreSummarySentNonWord").style.display = "none";
                        }
                    }
                    
                }
            } else {
                errors.push(13);
            }
        }


if(Number(localStorage.getItem("newWords")) === 1) {                    
                    article = total_arr[i] + total_arr2[i] + total_arr3[i] + "-----\n\n";    
                    var word1_exp = new RegExp(options.word_1, "gi");
                    var word1_matches = article.match(word1_exp);
                    
                    if((word1_matches != null) && (word1_matches.length < Number(options.word_1Count))) {
                        c_1 = Number(options.word_1Count) - word1_matches.length;
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }
                        article = article_arr_1.join(" ");
                    }
                    if (word1_matches == null) {
                        c_1 = Number(options.word_1Count);
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }                        
                        article = article_arr_1.join(" ");                        
                    }
                    final_article += article;
                    
                }
                
if(Number(localStorage.getItem("newWords")) === 2) {
                    article = total_arr[i] + total_arr2[i] + total_arr3[i] + "-----\n\n";    
                    var word1_exp = new RegExp(options.word_1, "gi");
                    var word1_matches = article.match(word1_exp);
                    
                    if((word1_matches != null) && (word1_matches.length < Number(options.word_1Count))) {
                        c_1 = Number(options.word_1Count) - word1_matches.length;
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }
                        article = article_arr_1.join(" ");
                    }
                    if (word1_matches == null) {
                        c_1 = Number(options.word_1Count);
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }                        
                        article = article_arr_1.join(" ");
                    }
                    
                    var word2_exp = new RegExp(options.word_2, "gi");
                    var word2_matches = article.match(word2_exp);

                    if((word2_matches != null) && (word2_matches.length < Number(options.word_2Count))) {                        
                        c_2 = Number(options.word_2Count) - word2_matches.length;
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                    if (word2_matches == null) {
                        c_2 = Number(options.word_2Count);
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                    final_article += article;                    
                }
                
if(Number(localStorage.getItem("newWords")) === 3) {
                    article = total_arr[i] + total_arr2[i] + total_arr3[i] + "-----\n\n";    
                    var word1_exp = new RegExp(options.word_1, "gi");
                    var word1_matches = article.match(word1_exp);
                    
                    if((word1_matches != null) && (word1_matches.length < Number(options.word_1Count))) {
                        c_1 = Number(options.word_1Count) - word1_matches.length;
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }
                        article = article_arr_1.join(" ");
                    }
                    if (word1_matches == null) {
                        c_1 = Number(options.word_1Count);
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }                        
                        article = article_arr_1.join(" ");
                    }
                    
                    var word2_exp = new RegExp(options.word_2, "gi");
                    var word2_matches = article.match(word2_exp);

                    if((word2_matches != null) && (word2_matches.length < Number(options.word_2Count))) {                        
                        c_2 = Number(options.word_2Count) - word2_matches.length;
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                    if (word2_matches == null) {
                        c_2 = Number(options.word_2Count);
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                                        
                    var word3_exp = new RegExp(options.word_3, "gi");
                    var word3_matches = article.match(word3_exp);

                    if((word3_matches != null) && (word3_matches.length < Number(options.word_3Count))) {                        
                        c_3 = Number(options.word_3Count) - word3_matches.length;
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }
                        article = article_arr_3.join(" ");
                    }
                    if (word3_matches == null) {
                        c_3 = Number(options.word_3Count);
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }                        
                        article = article_arr_3.join(" ");                        
                    }
                    final_article += article;                
                }
                
if(Number(localStorage.getItem("newWords")) === 4) {
                    article = total_arr[i] + total_arr2[i] + total_arr3[i] + "-----\n\n";    
                    var word1_exp = new RegExp(options.word_1, "gi");
                    var word1_matches = article.match(word1_exp);
                    
                    if((word1_matches != null) && (word1_matches.length < Number(options.word_1Count))) {
                        c_1 = Number(options.word_1Count) - word1_matches.length;
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }
                        article = article_arr_1.join(" ");
                    }
                    if (word1_matches == null) {
                        c_1 = Number(options.word_1Count);
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }                        
                        article = article_arr_1.join(" ");
                    }
                    
                    var word2_exp = new RegExp(options.word_2, "gi");
                    var word2_matches = article.match(word2_exp);

                    if((word2_matches != null) && (word2_matches.length < Number(options.word_2Count))) {                        
                        c_2 = Number(options.word_2Count) - word2_matches.length;
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                    if (word2_matches == null) {
                        c_2 = Number(options.word_2Count);
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                                        
                    var word3_exp = new RegExp(options.word_3, "gi");
                    var word3_matches = article.match(word3_exp);

                    if((word3_matches != null) && (word3_matches.length < Number(options.word_3Count))) {                        
                        c_3 = Number(options.word_3Count) - word3_matches.length;
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }
                        article = article_arr_3.join(" ");
                    }
                    if (word3_matches == null) {
                        c_3 = Number(options.word_3Count);
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }                        
                        article = article_arr_3.join(" ");                        
                    }                     
                    
                    var word4_exp = new RegExp(options.word_4, "gi");
                    var word4_matches = article.match(word4_exp);

                    if((word4_matches != null) && (word4_matches.length < Number(options.word_4Count))) {                        
                        c_4 = Number(options.word_4Count) - word4_matches.length;
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch_4go += chotch_4;
                        }                     
                        article = article_arr_4.join(" ");                        
                    }
                    if (word4_matches == null) {
                        c_4 = Number(options.word_4Count);
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch4go += chotch_4;
                        }                        
                        article = article_arr_4.join(" ");                        
                    }
                    final_article += article;
                }
                
if(Number(localStorage.getItem("newWords")) === 5) {
                    article = total_arr[i] + total_arr2[i] + total_arr3[i] + "-----\n\n";    
                    var word1_exp = new RegExp(options.word_1, "gi");
                    var word1_matches = article.match(word1_exp);
                    
                    if((word1_matches != null) && (word1_matches.length < Number(options.word_1Count))) {
                        c_1 = Number(options.word_1Count) - word1_matches.length;
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }
                        article = article_arr_1.join(" ");
                    }
                    if (word1_matches == null) {
                        c_1 = Number(options.word_1Count);
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }                        
                        article = article_arr_1.join(" ");
                    }
                    
                    var word2_exp = new RegExp(options.word_2, "gi");
                    var word2_matches = article.match(word2_exp);

                    if((word2_matches != null) && (word2_matches.length < Number(options.word_2Count))) {                        
                        c_2 = Number(options.word_2Count) - word2_matches.length;
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                    if (word2_matches == null) {
                        c_2 = Number(options.word_2Count);
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                                        
                    var word3_exp = new RegExp(options.word_3, "gi");
                    var word3_matches = article.match(word3_exp);

                    if((word3_matches != null) && (word3_matches.length < Number(options.word_3Count))) {                        
                        c_3 = Number(options.word_3Count) - word3_matches.length;
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }
                        article = article_arr_3.join(" ");
                    }
                    if (word3_matches == null) {
                        c_3 = Number(options.word_3Count);
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }                        
                        article = article_arr_3.join(" ");                        
                    }                     
                    
                    var word4_exp = new RegExp(options.word_4, "gi");
                    var word4_matches = article.match(word4_exp);

                    if((word4_matches != null) && (word4_matches.length < Number(options.word_4Count))) {                        
                        c_4 = Number(options.word_4Count) - word4_matches.length;
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch_4go += chotch_4;
                        }                     
                        article = article_arr_4.join(" ");                        
                    }
                    if (word4_matches == null) {
                        c_4 = Number(options.word_4Count);
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch4go += chotch_4;
                        }                        
                        article = article_arr_4.join(" ");                        
                    }
                    
                    
                    var word5_exp = new RegExp(options.word_5, "gi");
                    var word5_matches = article.match(word5_exp);

                    if((word5_matches != null) && (word5_matches.length < Number(options.word_5Count))) {                        
                        c_5 = Number(options.word_5Count) - word5_matches.length;
                        var article_arr_5 = article.split(" ");
                        var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                        var chotch_5go = chotch_5;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_5.splice(chotch_5go, 0, options.word_5);
                            chotch_5go += chotch_5;
                        }                     
                        article = article_arr_5.join(" ");                        
                    }
                    if (word5_matches == null) {
                        c_5 = Number(options.word_5Count);
                        var article_arr_5 = article.split(" ");
                        var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                        var chotch_5go = chotch_5;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_5go, 0, options.word_5);
                            chotch5go += chotch_5;
                        }                        
                        article = article_arr_5.join(" ");                        
                    }
                    final_article += article;
                }
                
if(Number(localStorage.getItem("newWords")) === 6) {
                    article = total_arr[i] + total_arr2[i] + total_arr3[i] + "-----\n\n";    
                    var word1_exp = new RegExp(options.word_1, "gi");
                    var word1_matches = article.match(word1_exp);
                    
                    if((word1_matches != null) && (word1_matches.length < Number(options.word_1Count))) {
                        c_1 = Number(options.word_1Count) - word1_matches.length;
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }
                        article = article_arr_1.join(" ");
                    }
                    if (word1_matches == null) {
                        c_1 = Number(options.word_1Count);
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }                        
                        article = article_arr_1.join(" ");
                    }
                    
                    var word2_exp = new RegExp(options.word_2, "gi");
                    var word2_matches = article.match(word2_exp);

                    if((word2_matches != null) && (word2_matches.length < Number(options.word_2Count))) {                        
                        c_2 = Number(options.word_2Count) - word2_matches.length;
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                    if (word2_matches == null) {
                        c_2 = Number(options.word_2Count);
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                                        
                    var word3_exp = new RegExp(options.word_3, "gi");
                    var word3_matches = article.match(word3_exp);

                    if((word3_matches != null) && (word3_matches.length < Number(options.word_3Count))) {                        
                        c_3 = Number(options.word_3Count) - word3_matches.length;
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }
                        article = article_arr_3.join(" ");
                    }
                    if (word3_matches == null) {
                        c_3 = Number(options.word_3Count);
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }                        
                        article = article_arr_3.join(" ");                        
                    }                     
                    
                    var word4_exp = new RegExp(options.word_4, "gi");
                    var word4_matches = article.match(word4_exp);

                    if((word4_matches != null) && (word4_matches.length < Number(options.word_4Count))) {                        
                        c_4 = Number(options.word_4Count) - word4_matches.length;
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch_4go += chotch_4;
                        }                     
                        article = article_arr_4.join(" ");                        
                    }
                    if (word4_matches == null) {
                        c_4 = Number(options.word_4Count);
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch4go += chotch_4;
                        }                        
                        article = article_arr_4.join(" ");                        
                    }
                    
                    
                    var word5_exp = new RegExp(options.word_5, "gi");
                    var word5_matches = article.match(word5_exp);

                    if((word5_matches != null) && (word5_matches.length < Number(options.word_5Count))) {                        
                        c_5 = Number(options.word_5Count) - word5_matches.length;
                        var article_arr_5 = article.split(" ");
                        var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                        var chotch_5go = chotch_5;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_5.splice(chotch_5go, 0, options.word_5);
                            chotch_5go += chotch_5;
                        }                     
                        article = article_arr_5.join(" ");                        
                    }
                    if (word5_matches == null) {
                        c_5 = Number(options.word_5Count);
                        var article_arr_5 = article.split(" ");
                        var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                        var chotch_5go = chotch_5;
                        for (var j = 0; j < c_5; j++) {
                            article_arr_5.splice(chotch_5go, 0, options.word_5);
                            chotch5go += chotch_5;
                        }                        
                        article = article_arr_5.join(" ");                        
                    }
                    
                    var word6_exp = new RegExp(options.word_6, "gi");
                    var word6_matches = article.match(word6_exp);

                    if((word6_matches != null) && (word6_matches.length < Number(options.word_6Count))) {                        
                        c_6 = Number(options.word_6Count) - word6_matches.length;
                        var article_arr_6 = article.split(" ");
                        var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                        var chotch_6go = chotch_6;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_6.splice(chotch_6go, 0, options.word_6);
                            chotch_6go += chotch_6;
                        }                     
                        article = article_arr_6.join(" ");                        
                    }
                    if (word6_matches == null) {
                        c_6 = Number(options.word_6Count);
                        var article_arr_6 = article.split(" ");
                        var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                        var chotch_6go = chotch_6;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_6.splice(chotch_6go, 0, options.word_6);
                            chotch6go += chotch_6;
                        }                        
                        article = article_arr_6.join(" ");                        
                    }
                    final_article += article;
                }
                
if(Number(localStorage.getItem("newWords")) === 7) {
                    article = total_arr[i] + total_arr2[i] + total_arr3[i] + "-----\n\n";    
                    var word1_exp = new RegExp(options.word_1, "gi");
                    var word1_matches = article.match(word1_exp);
                    
                    if((word1_matches != null) && (word1_matches.length < Number(options.word_1Count))) {
                        c_1 = Number(options.word_1Count) - word1_matches.length;
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }
                        article = article_arr_1.join(" ");
                    }
                    if (word1_matches == null) {
                        c_1 = Number(options.word_1Count);
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }                        
                        article = article_arr_1.join(" ");
                    }
                    
                    var word2_exp = new RegExp(options.word_2, "gi");
                    var word2_matches = article.match(word2_exp);

                    if((word2_matches != null) && (word2_matches.length < Number(options.word_2Count))) {                        
                        c_2 = Number(options.word_2Count) - word2_matches.length;
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                    if (word2_matches == null) {
                        c_2 = Number(options.word_2Count);
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                                        
                    var word3_exp = new RegExp(options.word_3, "gi");
                    var word3_matches = article.match(word3_exp);

                    if((word3_matches != null) && (word3_matches.length < Number(options.word_3Count))) {                        
                        c_3 = Number(options.word_3Count) - word3_matches.length;
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }
                        article = article_arr_3.join(" ");
                    }
                    if (word3_matches == null) {
                        c_3 = Number(options.word_3Count);
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }                        
                        article = article_arr_3.join(" ");                        
                    }                     
                    
                    var word4_exp = new RegExp(options.word_4, "gi");
                    var word4_matches = article.match(word4_exp);

                    if((word4_matches != null) && (word4_matches.length < Number(options.word_4Count))) {                        
                        c_4 = Number(options.word_4Count) - word4_matches.length;
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch_4go += chotch_4;
                        }                     
                        article = article_arr_4.join(" ");                        
                    }
                    if (word4_matches == null) {
                        c_4 = Number(options.word_4Count);
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch4go += chotch_4;
                        }                        
                        article = article_arr_4.join(" ");                        
                    }
                    
                    
                    var word5_exp = new RegExp(options.word_5, "gi");
                    var word5_matches = article.match(word5_exp);

                    if((word5_matches != null) && (word5_matches.length < Number(options.word_5Count))) {                        
                        c_5 = Number(options.word_5Count) - word5_matches.length;
                        var article_arr_5 = article.split(" ");
                        var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                        var chotch_5go = chotch_5;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_5.splice(chotch_5go, 0, options.word_5);
                            chotch_5go += chotch_5;
                        }                     
                        article = article_arr_5.join(" ");                        
                    }
                    if (word5_matches == null) {
                        c_5 = Number(options.word_5Count);
                        var article_arr_5 = article.split(" ");
                        var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                        var chotch_5go = chotch_5;
                        for (var j = 0; j < c_5; j++) {
                            article_arr_5.splice(chotch_5go, 0, options.word_5);
                            chotch5go += chotch_5;
                        }                        
                        article = article_arr_5.join(" ");                        
                    }
                    
                    var word6_exp = new RegExp(options.word_6, "gi");
                    var word6_matches = article.match(word6_exp);

                    if((word6_matches != null) && (word6_matches.length < Number(options.word_6Count))) {                        
                        c_6 = Number(options.word_6Count) - word6_matches.length;
                        var article_arr_6 = article.split(" ");
                        var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                        var chotch_6go = chotch_6;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_6.splice(chotch_6go, 0, options.word_6);
                            chotch_6go += chotch_6;
                        }                     
                        article = article_arr_6.join(" ");                        
                    }
                    if (word6_matches == null) {
                        c_6 = Number(options.word_6Count);
                        var article_arr_6 = article.split(" ");
                        var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                        var chotch_6go = chotch_6;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_6.splice(chotch_6go, 0, options.word_6);
                            chotch6go += chotch_6;
                        }                        
                        article = article_arr_6.join(" ");                        
                    }
                    
                    var word7_exp = new RegExp(options.word_7, "gi");
                    var word7_matches = article.match(word7_exp);

                    if((word7_matches != null) && (word7_matches.length < Number(options.word_7Count))) {                        
                        c_7 = Number(options.word_7Count) - word7_matches.length;
                        var article_arr_7 = article.split(" ");
                        var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                        var chotch_7go = chotch_7;
                        for (var j = 0; j < c_7; j++) {
                            article_arr_7.splice(chotch_7go, 0, options.word_7);
                            chotch_7go += chotch_7;
                        }                     
                        article = article_arr_7.join(" ");                        
                    }
                    if (word7_matches == null) {
                        c_7 = Number(options.word_7Count);
                        var article_arr_7 = article.split(" ");
                        var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                        var chotch_7go = chotch_7;
                        for (var j = 0; j < c_7; j++) {
                            article_arr_7.splice(chotch_7go, 0, options.word_7);
                            chotch7go += chotch_7;
                        }                        
                        article = article_arr_7.join(" ");                        
                    }
                    final_article += article;
                }
                
if(Number(localStorage.getItem("newWords")) === 8) {
                    article = total_arr[i] + total_arr2[i] + total_arr3[i] + "-----\n\n";    
                    var word1_exp = new RegExp(options.word_1, "gi");
                    var word1_matches = article.match(word1_exp);
                    
                    if((word1_matches != null) && (word1_matches.length < Number(options.word_1Count))) {
                        c_1 = Number(options.word_1Count) - word1_matches.length;
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }
                        article = article_arr_1.join(" ");
                    }
                    if (word1_matches == null) {
                        c_1 = Number(options.word_1Count);
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }                        
                        article = article_arr_1.join(" ");
                    }
                    
                    var word2_exp = new RegExp(options.word_2, "gi");
                    var word2_matches = article.match(word2_exp);

                    if((word2_matches != null) && (word2_matches.length < Number(options.word_2Count))) {                        
                        c_2 = Number(options.word_2Count) - word2_matches.length;
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                    if (word2_matches == null) {
                        c_2 = Number(options.word_2Count);
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                                        
                    var word3_exp = new RegExp(options.word_3, "gi");
                    var word3_matches = article.match(word3_exp);

                    if((word3_matches != null) && (word3_matches.length < Number(options.word_3Count))) {                        
                        c_3 = Number(options.word_3Count) - word3_matches.length;
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }
                        article = article_arr_3.join(" ");
                    }
                    if (word3_matches == null) {
                        c_3 = Number(options.word_3Count);
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }                        
                        article = article_arr_3.join(" ");                        
                    }                     
                    
                    var word4_exp = new RegExp(options.word_4, "gi");
                    var word4_matches = article.match(word4_exp);

                    if((word4_matches != null) && (word4_matches.length < Number(options.word_4Count))) {                        
                        c_4 = Number(options.word_4Count) - word4_matches.length;
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch_4go += chotch_4;
                        }                     
                        article = article_arr_4.join(" ");                        
                    }
                    if (word4_matches == null) {
                        c_4 = Number(options.word_4Count);
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch4go += chotch_4;
                        }                        
                        article = article_arr_4.join(" ");                        
                    }
                    
                    
                    var word5_exp = new RegExp(options.word_5, "gi");
                    var word5_matches = article.match(word5_exp);

                    if((word5_matches != null) && (word5_matches.length < Number(options.word_5Count))) {                        
                        c_5 = Number(options.word_5Count) - word5_matches.length;
                        var article_arr_5 = article.split(" ");
                        var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                        var chotch_5go = chotch_5;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_5.splice(chotch_5go, 0, options.word_5);
                            chotch_5go += chotch_5;
                        }                     
                        article = article_arr_5.join(" ");                        
                    }
                    if (word5_matches == null) {
                        c_5 = Number(options.word_5Count);
                        var article_arr_5 = article.split(" ");
                        var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                        var chotch_5go = chotch_5;
                        for (var j = 0; j < c_5; j++) {
                            article_arr_5.splice(chotch_5go, 0, options.word_5);
                            chotch5go += chotch_5;
                        }                        
                        article = article_arr_5.join(" ");                        
                    }
                    
                    var word6_exp = new RegExp(options.word_6, "gi");
                    var word6_matches = article.match(word6_exp);

                    if((word6_matches != null) && (word6_matches.length < Number(options.word_6Count))) {                        
                        c_6 = Number(options.word_6Count) - word6_matches.length;
                        var article_arr_6 = article.split(" ");
                        var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                        var chotch_6go = chotch_6;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_6.splice(chotch_6go, 0, options.word_6);
                            chotch_6go += chotch_6;
                        }                     
                        article = article_arr_6.join(" ");                        
                    }
                    if (word6_matches == null) {
                        c_6 = Number(options.word_6Count);
                        var article_arr_6 = article.split(" ");
                        var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                        var chotch_6go = chotch_6;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_6.splice(chotch_6go, 0, options.word_6);
                            chotch6go += chotch_6;
                        }                        
                        article = article_arr_6.join(" ");                        
                    }
                    
                    var word7_exp = new RegExp(options.word_7, "gi");
                    var word7_matches = article.match(word7_exp);

                    if((word7_matches != null) && (word7_matches.length < Number(options.word_7Count))) {                        
                        c_7 = Number(options.word_7Count) - word7_matches.length;
                        var article_arr_7 = article.split(" ");
                        var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                        var chotch_7go = chotch_7;
                        for (var j = 0; j < c_7; j++) {
                            article_arr_7.splice(chotch_7go, 0, options.word_7);
                            chotch_7go += chotch_7;
                        }                     
                        article = article_arr_7.join(" ");                        
                    }
                    if (word7_matches == null) {
                        c_7 = Number(options.word_7Count);
                        var article_arr_7 = article.split(" ");
                        var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                        var chotch_7go = chotch_7;
                        for (var j = 0; j < c_7; j++) {
                            article_arr_7.splice(chotch_7go, 0, options.word_7);
                            chotch7go += chotch_7;
                        }                        
                        article = article_arr_7.join(" ");                        
                    }
                    
                    var word8_exp = new RegExp(options.word_8, "gi");
                    var word8_matches = article.match(word8_exp);

                    if((word8_matches != null) && (word8_matches.length < Number(options.word_8Count))) {                        
                        c_8 = Number(options.word_8Count) - word8_matches.length;
                        var article_arr_8 = article.split(" ");
                        var chotch_8 = Math.floor((article_arr_8.length - 3) / c_8);
                        var chotch_8go = chotch_8;
                        for (var j = 0; j < c_8; j++) {
                            article_arr_8.splice(chotch_8go, 0, options.word_8);
                            chotch_8go += chotch_8;
                        }                     
                        article = article_arr_8.join(" ");                        
                    }
                    if (word8_matches == null) {
                        c_8 = Number(options.word_8Count);
                        var article_arr_8 = article.split(" ");
                        var chotch_8 = Math.floor((article_arr_8.length - 3) / c_8);
                        var chotch_8go = chotch_8;
                        for (var j = 0; j < c_8; j++) {
                            article_arr_8.splice(chotch_8go, 0, options.word_8);
                            chotc_8go += chotch_8;
                        }                        
                        article = article_arr_8.join(" ");                        
                    }
                    final_article += article;
                }
                
if(Number(localStorage.getItem("newWords")) === 9) {
                    article = total_arr[i] + total_arr2[i] + total_arr3[i] + "-----\n\n";    
                    var word1_exp = new RegExp(options.word_1, "gi");
                    var word1_matches = article.match(word1_exp);
                    
                    if((word1_matches != null) && (word1_matches.length < Number(options.word_1Count))) {
                        c_1 = Number(options.word_1Count) - word1_matches.length;
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }
                        article = article_arr_1.join(" ");
                    }
                    if (word1_matches == null) {
                        c_1 = Number(options.word_1Count);
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }                        
                        article = article_arr_1.join(" ");
                    }
                    
                    var word2_exp = new RegExp(options.word_2, "gi");
                    var word2_matches = article.match(word2_exp);

                    if((word2_matches != null) && (word2_matches.length < Number(options.word_2Count))) {                        
                        c_2 = Number(options.word_2Count) - word2_matches.length;
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                    if (word2_matches == null) {
                        c_2 = Number(options.word_2Count);
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                                        
                    var word3_exp = new RegExp(options.word_3, "gi");
                    var word3_matches = article.match(word3_exp);

                    if((word3_matches != null) && (word3_matches.length < Number(options.word_3Count))) {                        
                        c_3 = Number(options.word_3Count) - word3_matches.length;
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }
                        article = article_arr_3.join(" ");
                    }
                    if (word3_matches == null) {
                        c_3 = Number(options.word_3Count);
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }                        
                        article = article_arr_3.join(" ");                        
                    }                     
                    
                    var word4_exp = new RegExp(options.word_4, "gi");
                    var word4_matches = article.match(word4_exp);

                    if((word4_matches != null) && (word4_matches.length < Number(options.word_4Count))) {                        
                        c_4 = Number(options.word_4Count) - word4_matches.length;
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch_4go += chotch_4;
                        }                     
                        article = article_arr_4.join(" ");                        
                    }
                    if (word4_matches == null) {
                        c_4 = Number(options.word_4Count);
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch4go += chotch_4;
                        }                        
                        article = article_arr_4.join(" ");                        
                    }
                    
                    
                    var word5_exp = new RegExp(options.word_5, "gi");
                    var word5_matches = article.match(word5_exp);

                    if((word5_matches != null) && (word5_matches.length < Number(options.word_5Count))) {                        
                        c_5 = Number(options.word_5Count) - word5_matches.length;
                        var article_arr_5 = article.split(" ");
                        var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                        var chotch_5go = chotch_5;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_5.splice(chotch_5go, 0, options.word_5);
                            chotch_5go += chotch_5;
                        }                     
                        article = article_arr_5.join(" ");                        
                    }
                    if (word5_matches == null) {
                        c_5 = Number(options.word_5Count);
                        var article_arr_5 = article.split(" ");
                        var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                        var chotch_5go = chotch_5;
                        for (var j = 0; j < c_5; j++) {
                            article_arr_5.splice(chotch_5go, 0, options.word_5);
                            chotch5go += chotch_5;
                        }                        
                        article = article_arr_5.join(" ");                        
                    }
                    
                    var word6_exp = new RegExp(options.word_6, "gi");
                    var word6_matches = article.match(word6_exp);

                    if((word6_matches != null) && (word6_matches.length < Number(options.word_6Count))) {                        
                        c_6 = Number(options.word_6Count) - word6_matches.length;
                        var article_arr_6 = article.split(" ");
                        var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                        var chotch_6go = chotch_6;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_6.splice(chotch_6go, 0, options.word_6);
                            chotch_6go += chotch_6;
                        }                     
                        article = article_arr_6.join(" ");                        
                    }
                    if (word6_matches == null) {
                        c_6 = Number(options.word_6Count);
                        var article_arr_6 = article.split(" ");
                        var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                        var chotch_6go = chotch_6;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_6.splice(chotch_6go, 0, options.word_6);
                            chotch6go += chotch_6;
                        }                        
                        article = article_arr_6.join(" ");                        
                    }
                    
                    var word7_exp = new RegExp(options.word_7, "gi");
                    var word7_matches = article.match(word7_exp);

                    if((word7_matches != null) && (word7_matches.length < Number(options.word_7Count))) {                        
                        c_7 = Number(options.word_7Count) - word7_matches.length;
                        var article_arr_7 = article.split(" ");
                        var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                        var chotch_7go = chotch_7;
                        for (var j = 0; j < c_7; j++) {
                            article_arr_7.splice(chotch_7go, 0, options.word_7);
                            chotch_7go += chotch_7;
                        }                     
                        article = article_arr_7.join(" ");                        
                    }
                    if (word7_matches == null) {
                        c_7 = Number(options.word_7Count);
                        var article_arr_7 = article.split(" ");
                        var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                        var chotch_7go = chotch_7;
                        for (var j = 0; j < c_7; j++) {
                            article_arr_7.splice(chotch_7go, 0, options.word_7);
                            chotch_7go += chotch_7;
                        }                        
                        article = article_arr_7.join(" ");                        
                    }
                    
                    var word8_exp = new RegExp(options.word_8, "gi");
                    var word8_matches = article.match(word8_exp);

                    if((word8_matches != null) && (word8_matches.length < Number(options.word_8Count))) {                        
                        c_8 = Number(options.word_8Count) - word8_matches.length;
                        var article_arr_8 = article.split(" ");
                        var chotch_8 = Math.floor((article_arr_8.length - 3) / c_8);
                        var chotch_8go = chotch_8;
                        for (var j = 0; j < c_8; j++) {
                            article_arr_8.splice(chotch_8go, 0, options.word_8);
                            chotch_8go += chotch_8;
                        }                     
                        article = article_arr_8.join(" ");                        
                    }
                    if (word8_matches == null) {
                        c_8 = Number(options.word_8Count);
                        var article_arr_8 = article.split(" ");
                        var chotch_8 = Math.floor((article_arr_8.length - 3) / c_8);
                        var chotch_8go = chotch_8;
                        for (var j = 0; j < c_8; j++) {
                            article_arr_8.splice(chotch_8go, 0, options.word_8);
                            chotch_8go += chotch_8;
                        }                        
                        article = article_arr_8.join(" ");                        
                    }
                    
                    var word9_exp = new RegExp(options.word_9, "gi");
                    var word9_matches = article.match(word9_exp);

                    if((word9_matches != null) && (word9_matches.length < Number(options.word_9Count))) {                        
                        c_9 = Number(options.word_9Count) - word9_matches.length;
                        var article_arr_9 = article.split(" ");
                        var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                        var chotch_9go = chotch_9;
                        for (var j = 0; j < c_9; j++) {
                            article_arr_9.splice(chotch_9go, 0, options.word_9);
                            chotch_9go += chotch_9;
                        }                     
                        article = article_arr_9.join(" ");                        
                    }
                    if (word9_matches == null) {
                        c_9 = Number(options.word_9Count);
                        var article_arr_9 = article.split(" ");
                        var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                        var chotch_9go = chotch_9;
                        for (var j = 0; j < c_9; j++) {
                            article_arr_9.splice(chotch_9go, 0, options.word_9);
                            chotch_9go += chotch_9;
                        }                        
                        article = article_arr_9.join(" ");                        
                    }
                    final_article += article;
                }
                
if(Number(localStorage.getItem("newWords")) === 10) {
                    article = total_arr[i] + total_arr2[i] + total_arr3[i] + "-----\n\n";    
                    var word1_exp = new RegExp(options.word_1, "gi");
                    var word1_matches = article.match(word1_exp);
                    
                    if((word1_matches != null) && (word1_matches.length < Number(options.word_1Count))) {
                        c_1 = Number(options.word_1Count) - word1_matches.length;
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }
                        article = article_arr_1.join(" ");
                    }
                    if (word1_matches == null) {
                        c_1 = Number(options.word_1Count);
                        var article_arr_1 = article.split(" ");
                        var chotch_1 = Math.floor((article_arr_1.length - 3) / c_1);
                        var chotch_1go = chotch_1;
                        for (var j = 0; j < c_1; j++) {
                            article_arr_1.splice(chotch_1go, 0, options.word_1);
                            chotch_1go += chotch_1;
                        }                        
                        article = article_arr_1.join(" ");
                    }
                    
                    var word2_exp = new RegExp(options.word_2, "gi");
                    var word2_matches = article.match(word2_exp);

                    if((word2_matches != null) && (word2_matches.length < Number(options.word_2Count))) {                        
                        c_2 = Number(options.word_2Count) - word2_matches.length;
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                    if (word2_matches == null) {
                        c_2 = Number(options.word_2Count);
                        var article_arr_2 = article.split(" ");
                        var chotch_2 = Math.floor((article_arr_2.length - 3) / c_2);
                        var chotch_2go = chotch_2;
                        for (var j = 0; j < c_2; j++) {
                            article_arr_2.splice(chotch_2go, 0, options.word_2);
                            chotch_2go += chotch_2;
                        }
                        article = article_arr_2.join(" ");
                    }
                                        
                    var word3_exp = new RegExp(options.word_3, "gi");
                    var word3_matches = article.match(word3_exp);

                    if((word3_matches != null) && (word3_matches.length < Number(options.word_3Count))) {                        
                        c_3 = Number(options.word_3Count) - word3_matches.length;
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }
                        article = article_arr_3.join(" ");
                    }
                    if (word3_matches == null) {
                        c_3 = Number(options.word_3Count);
                        var article_arr_3 = article.split(" ");
                        var chotch_3 = Math.floor((article_arr_3.length - 3) / c_3);
                        var chotch_3go = chotch_3;
                        for (var j = 0; j < c_3; j++) {
                            article_arr_3.splice(chotch_3go, 0, options.word_3);
                            chotch_3go += chotch_3;
                        }                        
                        article = article_arr_3.join(" ");                        
                    }                     
                    
                    var word4_exp = new RegExp(options.word_4, "gi");
                    var word4_matches = article.match(word4_exp);

                    if((word4_matches != null) && (word4_matches.length < Number(options.word_4Count))) {                        
                        c_4 = Number(options.word_4Count) - word4_matches.length;
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch_4go += chotch_4;
                        }                     
                        article = article_arr_4.join(" ");                        
                    }
                    if (word4_matches == null) {
                        c_4 = Number(options.word_4Count);
                        var article_arr_4 = article.split(" ");
                        var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                        var chotch_4go = chotch_4;
                        for (var j = 0; j < c_4; j++) {
                            article_arr_4.splice(chotch_4go, 0, options.word_4);
                            chotch4go += chotch_4;
                        }                        
                        article = article_arr_4.join(" ");                        
                    }
                    
                    
                    var word5_exp = new RegExp(options.word_5, "gi");
                    var word5_matches = article.match(word5_exp);

                    if((word5_matches != null) && (word5_matches.length < Number(options.word_5Count))) {                        
                        c_5 = Number(options.word_5Count) - word5_matches.length;
                        var article_arr_5 = article.split(" ");
                        var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                        var chotch_5go = chotch_5;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_5.splice(chotch_5go, 0, options.word_5);
                            chotch_5go += chotch_5;
                        }                     
                        article = article_arr_5.join(" ");                        
                    }
                    if (word5_matches == null) {
                        c_5 = Number(options.word_5Count);
                        var article_arr_5 = article.split(" ");
                        var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                        var chotch_5go = chotch_5;
                        for (var j = 0; j < c_5; j++) {
                            article_arr_5.splice(chotch_5go, 0, options.word_5);
                            chotch5go += chotch_5;
                        }                        
                        article = article_arr_5.join(" ");                        
                    }
                    
                    var word6_exp = new RegExp(options.word_6, "gi");
                    var word6_matches = article.match(word6_exp);

                    if((word6_matches != null) && (word6_matches.length < Number(options.word_6Count))) {                        
                        c_6 = Number(options.word_6Count) - word6_matches.length;
                        var article_arr_6 = article.split(" ");
                        var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                        var chotch_6go = chotch_6;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_6.splice(chotch_6go, 0, options.word_6);
                            chotch_6go += chotch_6;
                        }                     
                        article = article_arr_6.join(" ");                        
                    }
                    if (word6_matches == null) {
                        c_6 = Number(options.word_6Count);
                        var article_arr_6 = article.split(" ");
                        var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                        var chotch_6go = chotch_6;
                        for (var j = 0; j < c_6; j++) {
                            article_arr_6.splice(chotch_6go, 0, options.word_6);
                            chotch6go += chotch_6;
                        }                        
                        article = article_arr_6.join(" ");                        
                    }
                    
                    var word7_exp = new RegExp(options.word_7, "gi");
                    var word7_matches = article.match(word7_exp);

                    if((word7_matches != null) && (word7_matches.length < Number(options.word_7Count))) {                        
                        c_7 = Number(options.word_7Count) - word7_matches.length;
                        var article_arr_7 = article.split(" ");
                        var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                        var chotch_7go = chotch_7;
                        for (var j = 0; j < c_7; j++) {
                            article_arr_7.splice(chotch_7go, 0, options.word_7);
                            chotch_7go += chotch_7;
                        }                     
                        article = article_arr_7.join(" ");                        
                    }
                    if (word7_matches == null) {
                        c_7 = Number(options.word_7Count);
                        var article_arr_7 = article.split(" ");
                        var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                        var chotch_7go = chotch_7;
                        for (var j = 0; j < c_7; j++) {
                            article_arr_7.splice(chotch_7go, 0, options.word_7);
                            chotch_7go += chotch_7;
                        }                        
                        article = article_arr_7.join(" ");                        
                    }
                    
                    var word8_exp = new RegExp(options.word_8, "gi");
                    var word8_matches = article.match(word8_exp);

                    if((word8_matches != null) && (word8_matches.length < Number(options.word_8Count))) {                        
                        c_8 = Number(options.word_8Count) - word8_matches.length;
                        var article_arr_8 = article.split(" ");
                        var chotch_8 = Math.floor((article_arr_8.length - 3) / c_8);
                        var chotch_8go = chotch_8;
                        for (var j = 0; j < c_8; j++) {
                            article_arr_8.splice(chotch_8go, 0, options.word_8);
                            chotch_8go += chotch_8;
                        }                     
                        article = article_arr_8.join(" ");                        
                    }
                    if (word8_matches == null) {
                        c_8 = Number(options.word_8Count);
                        var article_arr_8 = article.split(" ");
                        var chotch_8 = Math.floor((article_arr_8.length - 3) / c_8);
                        var chotch_8go = chotch_8;
                        for (var j = 0; j < c_8; j++) {
                            article_arr_8.splice(chotch_8go, 0, options.word_8);
                            chotch_8go += chotch_8;
                        }                        
                        article = article_arr_8.join(" ");                        
                    }
                    
                    var word9_exp = new RegExp(options.word_9, "gi");
                    var word9_matches = article.match(word9_exp);

                    if((word9_matches != null) && (word9_matches.length < Number(options.word_9Count))) {                        
                        c_9 = Number(options.word_9Count) - word9_matches.length;
                        var article_arr_9 = article.split(" ");
                        var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                        var chotch_9go = chotch_9;
                        for (var j = 0; j < c_9; j++) {
                            article_arr_9.splice(chotch_9go, 0, options.word_9);
                            chotch_9go += chotch_9;
                        }                     
                        article = article_arr_9.join(" ");                        
                    }
                    if (word9_matches == null) {
                        c_9 = Number(options.word_9Count);
                        var article_arr_9 = article.split(" ");
                        var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                        var chotch_9go = chotch_9;
                        for (var j = 0; j < c_9; j++) {
                            article_arr_9.splice(chotch_9go, 0, options.word_9);
                            chotch_9go += chotch_9;
                        }                        
                        article = article_arr_9.join(" ");                        
                    }
                    
                    var word10_exp = new RegExp(options.word_10, "gi");
                    var word10_matches = article.match(word10_exp);

                    if((word10_matches != null) && (word10_matches.length < Number(options.word_10Count))) {                        
                        c_10 = Number(options.word_10Count) - word10_matches.length;
                        var article_arr_10 = article.split(" ");
                        var chotch_10 = Math.floor((article_arr_10.length - 3) / c_10);
                        var chotch_10go = chotch_10;
                        for (var j = 0; j < c_10; j++) {
                            article_arr_10.splice(chotch_10go, 0, options.word_10);
                            chotch_10go += chotch_10;
                        }                     
                        article = article_arr_10.join(" ");                        
                    }
                    if (word10_matches == null) {
                        c_10 = Number(options.word_10Count);
                        var article_arr_10 = article.split(" ");
                        var chotch_10 = Math.floor((article_arr_10.length - 3) / c_10);
                        var chotch_10go = chotch_10;
                        for (var j = 0; j < c_10; j++) {
                            article_arr_10.splice(chotch_10go, 0, options.word_10);
                            chotch_10go += chotch_10;
                        }                        
                        article = article_arr_10.join(" ");                        
                    }
                    final_article += article;
                }

document.getElementById("gen_btnn").onclick = function() {
	if (localStorage.getItem("intArea") != "" && localStorage.getItem("middleArea") && localStorage.getItem("summaryArea")) {
		var options = JSON.parse(localStorage.getItem("options"));		
		var allText = localStorage.getItem("intArea") + localStorage.getItem("middleArea") + localStorage.getItem("summaryArea");

		allText_arr = allText.split(/[.|?|!]/gi);
		delete allText_arr[allText_arr.length - 1];
		var sentencCount = allText_arr.length - 1;
		var wordErrors = [];

		if ( Number( localStorage.getItem("newWords") ) === 1 ) {
			var word1 = options.word_1;
			word1 = new RegExp(word1, "gi");
			word1Matches = allText.match(word1);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_1").style.display = "none";
				if ( sentencCount >= Number(options.word_1Count) ) {
					document.getElementById("wrongWord_1").style.display = "none";
					// if ( word4Matches.length >= Number(options.word_1Count) ) {
					// document.getElementById("wrongWord_1").style.display = "none";
				
					// } else {
					// 	var msg4 = "Article contain "+ word4Matches.length + "-" + options.word_1Count + " you can't require more ";
					// 	showForArticle("checkedWord_1", "wrongWord_1", msg4, 0);
					// 	wordErrors.push(0);
					// }
				} else {
					var msg1 = "Article can't contain require word - " + options.word_1 + " more then " + sentencCount;
					showForArticle("checkedWord_1", "wrongWord_1", msg1, 0);
					wordErrors.push(10);
				}
			}
		}

		if ( Number( localStorage.getItem("newWords") ) == 2 ) {
			var word1 = options.word_1;
			word1 = new RegExp(word1, "gi");
			word1Matches = allText.match(word1);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_1").style.display = "none";
				if ( sentencCount >= Number(options.word_1Count) ) {
					document.getElementById("wrongWord_1").style.display = "none";
				} else {
					var msg1 = "Article can't contain require word - " + options.word_1 + " more then " + sentencCount;
					showForArticle("checkedWord_1", "wrongWord_1", msg1, 0);
					wordErrors.push(10);
				}
			}

			var word2 = options.word_2;
			word2 = new RegExp(word2, "gi");
			word2Matches = allText.match(word2);

			if ( word2Matches != null ) {
				document.getElementById("wrongWord_2").style.display = "none";
				if ( sentencCount >= Number(options.word_2Count) ) {
					document.getElementById("wrongWord_2").style.display = "none";
				} else {
					var msg2 = "Article can't contain require word - " + options.word_2 + " more then " + sentencCount;
					showForArticle("checkedWord_2", "wrongWord_2", msg2, 0);
					wordErrors.push(13);
				}

			}
		}
       
		if ( Number( localStorage.getItem("newWords") ) == 3 ) {
			var word1 = options.word_1;
			word1 = new RegExp(word1, "gi");
			word1Matches = allText.match(word1);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_1").style.display = "none";
				if ( sentencCount >= Number(options.word_1Count) ) {
					document.getElementById("wrongWord_1").style.display = "none";
				} else {
					var msg1 = "Article can't contain require word - " + options.word_1 + " more then " + sentencCount;
					showForArticle("checkedWord_1", "wrongWord_1", msg1, 0);
					wordErrors.push(10);
				}
			}

			var word2 = options.word_2;
			word2 = new RegExp(word2, "gi");
			word2Matches = allText.match(word2);

			if ( word2Matches != null ) {
				document.getElementById("wrongWord_2").style.display = "none";
				if ( sentencCount >= Number(options.word_2Count) ) {
					document.getElementById("wrongWord_2").style.display = "none";
				} else {
					var msg2 = "Article can't contain require word - " + options.word_2 + " more then " + sentencCount;
					showForArticle("checkedWord_2", "wrongWord_2", msg2, 0);
					wordErrors.push(13);
				}

			}

			var word3 = options.word_3;
			word3 = new RegExp(word3, "gi");
			word3Matches = allText.match(word3);

			if ( word3Matches != null ) {
				document.getElementById("wrongWord_3").style.display = "none";
				if ( sentencCount >= Number(options.word_3Count) ) {
					document.getElementById("wrongWord_3").style.display = "none";				
				} else {
					var msg3 = "Article can't contain require word - " + options.word_3 + " more then " + sentencCount;
					showForArticle("checkedWord_3", "wrongWord_3", msg3, 0);
					wordErrors.push(13);
				}

			}

		}

		if ( Number( localStorage.getItem("newWords") ) == 4 ) {
			var word1 = options.word_1;
			word1 = new RegExp(word1, "gi");
			word1Matches = allText.match(word1);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_1").style.display = "none";
				if ( sentencCount >= Number(options.word_1Count) ) {
					document.getElementById("wrongWord_1").style.display = "none";
				} else {
					var msg1 = "Article can't contain require word - " + options.word_1 + " more then " + sentencCount;
					showForArticle("checkedWord_1", "wrongWord_1", msg1, 0);
					wordErrors.push(10);
				}
			}

			var word2 = options.word_2;
			word2 = new RegExp(word2, "gi");
			word2Matches = allText.match(word2);

			if ( word2Matches != null ) {
				document.getElementById("wrongWord_2").style.display = "none";
				if ( sentencCount >= Number(options.word_2Count) ) {
					document.getElementById("wrongWord_2").style.display = "none";
				} else {
					var msg2 = "Article can't contain require word - " + options.word_2 + " more then " + sentencCount;
					showForArticle("checkedWord_2", "wrongWord_2", msg2, 0);
					wordErrors.push(13);
				}

			}

			var word3 = options.word_3;
			word3 = new RegExp(word3, "gi");
			word3Matches = allText.match(word3);

			if ( word3Matches != null ) {
				document.getElementById("wrongWord_3").style.display = "none";
				if ( sentencCount >= Number(options.word_3Count) ) {
					document.getElementById("wrongWord_3").style.display = "none";				
				} else {
					var msg3 = "Article can't contain require word - " + options.word_3 + " more then " + sentencCount;
					showForArticle("checkedWord_3", "wrongWord_3", msg3, 0);
					wordErrors.push(13);
				}

			}

			var word4 = options.word_4;
			word4 = new RegExp(word4, "gi");
			word4Matches = allText.match(word4);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_4").style.display = "none";
				if ( sentencCount >= Number(options.word_4Count) ) {
					document.getElementById("wrongWord_4").style.display = "none";				
				} else {
					var msg4 = "Article can't contain require word - " + options.word_4 + " more then " + sentencCount;
					showForArticle("checkedWord_4", "wrongWord_4", msg4, 0);
					wordErrors.push(13);
				}

			}

		}

		if ( Number( localStorage.getItem("newWords") ) == 5 ) {
			var word1 = options.word_1;
			word1 = new RegExp(word1, "gi");
			word1Matches = allText.match(word1);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_1").style.display = "none";
				if ( sentencCount >= Number(options.word_1Count) ) {
					document.getElementById("wrongWord_1").style.display = "none";
				} else {
					var msg1 = "Article can't contain require word - " + options.word_1 + " more then " + sentencCount;
					showForArticle("checkedWord_1", "wrongWord_1", msg1, 0);
					wordErrors.push(10);
				}
			}

			var word2 = options.word_2;
			word2 = new RegExp(word2, "gi");
			word2Matches = allText.match(word2);

			if ( word2Matches != null ) {
				document.getElementById("wrongWord_2").style.display = "none";
				if ( sentencCount >= Number(options.word_2Count) ) {
					document.getElementById("wrongWord_2").style.display = "none";
				} else {
					var msg2 = "Article can't contain require word - " + options.word_2 + " more then " + sentencCount;
					showForArticle("checkedWord_2", "wrongWord_2", msg2, 0);
					wordErrors.push(13);
				}

			}

			var word3 = options.word_3;
			word3 = new RegExp(word3, "gi");
			word3Matches = allText.match(word3);

			if ( word3Matches != null ) {
				document.getElementById("wrongWord_3").style.display = "none";
				if ( sentencCount >= Number(options.word_3Count) ) {
					document.getElementById("wrongWord_3").style.display = "none";				
				} else {
					var msg3 = "Article can't contain require word - " + options.word_3 + " more then " + sentencCount;
					showForArticle("checkedWord_3", "wrongWord_3", msg3, 0);
					wordErrors.push(13);
				}

			}

			var word4 = options.word_4;
			word4 = new RegExp(word4, "gi");
			word4Matches = allText.match(word4);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_4").style.display = "none";
				if ( sentencCount >= Number(options.word_4Count) ) {
					document.getElementById("wrongWord_4").style.display = "none";				
				} else {
					var msg4 = "Article can't contain require word - " + options.word_4 + " more then " + sentencCount;
					showForArticle("checkedWord_4", "wrongWord_4", msg4, 0);
					wordErrors.push(13);
				}

			}

			var word5 = options.word_5;
			word5 = new RegExp(word5, "gi");
			word5Matches = allText.match(word5);

			if ( word5Matches != null ) {
				document.getElementById("wrongWord_5").style.display = "none";
				if ( sentencCount >= Number(options.word_5Count) ) {
					document.getElementById("wrongWord_5").style.display = "none";				
				} else {
					var msg5 = "Article can't contain require word - " + options.word_5 + " more then " + sentencCount;
					showForArticle("checkedWord_5", "wrongWord_5", msg5, 0);
					wordErrors.push(13);
				}

			}

		}

		if ( Number( localStorage.getItem("newWords") ) == 6 ) {
			var word1 = options.word_1;
			word1 = new RegExp(word1, "gi");
			word1Matches = allText.match(word1);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_1").style.display = "none";
				if ( sentencCount >= Number(options.word_1Count) ) {
					document.getElementById("wrongWord_1").style.display = "none";
				} else {
					var msg1 = "Article can't contain require word - " + options.word_1 + " more then " + sentencCount;
					showForArticle("checkedWord_1", "wrongWord_1", msg1, 0);
					wordErrors.push(10);
				}
			}

			var word2 = options.word_2;
			word2 = new RegExp(word2, "gi");
			word2Matches = allText.match(word2);

			if ( word2Matches != null ) {
				document.getElementById("wrongWord_2").style.display = "none";
				if ( sentencCount >= Number(options.word_2Count) ) {
					document.getElementById("wrongWord_2").style.display = "none";
				} else {
					var msg2 = "Article can't contain require word - " + options.word_2 + " more then " + sentencCount;
					showForArticle("checkedWord_2", "wrongWord_2", msg2, 0);
					wordErrors.push(13);
				}

			}

			var word3 = options.word_3;
			word3 = new RegExp(word3, "gi");
			word3Matches = allText.match(word3);

			if ( word3Matches != null ) {
				document.getElementById("wrongWord_3").style.display = "none";
				if ( sentencCount >= Number(options.word_3Count) ) {
					document.getElementById("wrongWord_3").style.display = "none";				
				} else {
					var msg3 = "Article can't contain require word - " + options.word_3 + " more then " + sentencCount;
					showForArticle("checkedWord_3", "wrongWord_3", msg3, 0);
					wordErrors.push(13);
				}

			}

			var word4 = options.word_4;
			word4 = new RegExp(word4, "gi");
			word4Matches = allText.match(word4);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_4").style.display = "none";
				if ( sentencCount >= Number(options.word_4Count) ) {
					document.getElementById("wrongWord_4").style.display = "none";				
				} else {
					var msg4 = "Article can't contain require word - " + options.word_4 + " more then " + sentencCount;
					showForArticle("checkedWord_4", "wrongWord_4", msg4, 0);
					wordErrors.push(13);
				}

			}

			var word5 = options.word_5;
			word5 = new RegExp(word5, "gi");
			word5Matches = allText.match(word5);

			if ( word5Matches != null ) {
				document.getElementById("wrongWord_5").style.display = "none";
				if ( sentencCount >= Number(options.word_5Count) ) {
					document.getElementById("wrongWord_5").style.display = "none";				
				} else {
					var msg5 = "Article can't contain require word - " + options.word_5 + " more then " + sentencCount;
					showForArticle("checkedWord_5", "wrongWord_5", msg5, 0);
					wordErrors.push(13);
				}

			}

			var word6 = options.word_6;
			word6 = new RegExp(word6, "gi");
			word6Matches = allText.match(word6);

			if ( word6Matches != null ) {
				document.getElementById("wrongWord_6").style.display = "none";
				if ( sentencCount >= Number(options.word_6Count) ) {
					document.getElementById("wrongWord_6").style.display = "none";				
				} else {
					var msg6 = "Article can't contain require word - " + options.word_6 + " more then " + sentencCount;
					showForArticle("checkedWord_6", "wrongWord_6", msg6, 0);
					wordErrors.push(13);
				}

			}

		}

		if ( Number( localStorage.getItem("newWords") ) == 7 ) {
			var word1 = options.word_1;
			word1 = new RegExp(word1, "gi");
			word1Matches = allText.match(word1);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_1").style.display = "none";
				if ( sentencCount >= Number(options.word_1Count) ) {
					document.getElementById("wrongWord_1").style.display = "none";
				} else {
					var msg1 = "Article can't contain require word - " + options.word_1 + " more then " + sentencCount;
					showForArticle("checkedWord_1", "wrongWord_1", msg1, 0);
					wordErrors.push(10);
				}
			}

			var word2 = options.word_2;
			word2 = new RegExp(word2, "gi");
			word2Matches = allText.match(word2);

			if ( word2Matches != null ) {
				document.getElementById("wrongWord_2").style.display = "none";
				if ( sentencCount >= Number(options.word_2Count) ) {
					document.getElementById("wrongWord_2").style.display = "none";
				} else {
					var msg2 = "Article can't contain require word - " + options.word_2 + " more then " + sentencCount;
					showForArticle("checkedWord_2", "wrongWord_2", msg2, 0);
					wordErrors.push(13);
				}

			}

			var word3 = options.word_3;
			word3 = new RegExp(word3, "gi");
			word3Matches = allText.match(word3);

			if ( word3Matches != null ) {
				document.getElementById("wrongWord_3").style.display = "none";
				if ( sentencCount >= Number(options.word_3Count) ) {
					document.getElementById("wrongWord_3").style.display = "none";				
				} else {
					var msg3 = "Article can't contain require word - " + options.word_3 + " more then " + sentencCount;
					showForArticle("checkedWord_3", "wrongWord_3", msg3, 0);
					wordErrors.push(13);
				}

			}

			var word4 = options.word_4;
			word4 = new RegExp(word4, "gi");
			word4Matches = allText.match(word4);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_4").style.display = "none";
				if ( sentencCount >= Number(options.word_4Count) ) {
					document.getElementById("wrongWord_4").style.display = "none";				
				} else {
					var msg4 = "Article can't contain require word - " + options.word_4 + " more then " + sentencCount;
					showForArticle("checkedWord_4", "wrongWord_4", msg4, 0);
					wordErrors.push(13);
				}

			}

			var word5 = options.word_5;
			word5 = new RegExp(word5, "gi");
			word5Matches = allText.match(word5);

			if ( word5Matches != null ) {
				document.getElementById("wrongWord_5").style.display = "none";
				if ( sentencCount >= Number(options.word_5Count) ) {
					document.getElementById("wrongWord_5").style.display = "none";				
				} else {
					var msg5 = "Article can't contain require word - " + options.word_5 + " more then " + sentencCount;
					showForArticle("checkedWord_5", "wrongWord_5", msg5, 0);
					wordErrors.push(13);
				}

			}

			var word6 = options.word_6;
			word6 = new RegExp(word6, "gi");
			word6Matches = allText.match(word6);

			if ( word6Matches != null ) {
				document.getElementById("wrongWord_6").style.display = "none";
				if ( sentencCount >= Number(options.word_6Count) ) {
					document.getElementById("wrongWord_6").style.display = "none";				
				} else {
					var msg6 = "Article can't contain require word - " + options.word_6 + " more then " + sentencCount;
					showForArticle("checkedWord_6", "wrongWord_6", msg6, 0);
					wordErrors.push(13);
				}

			}

			var word7 = options.word_7;
			word7 = new RegExp(word7, "gi");
			word7Matches = allText.match(word7);

			if ( word7Matches != null ) {
				document.getElementById("wrongWord_7").style.display = "none";
				if ( sentencCount >= Number(options.word_7Count) ) {
					document.getElementById("wrongWord_7").style.display = "none";				
				} else {
					var msg7 = "Article can't contain require word - " + options.word_7 + " more then " + sentencCount;
					showForArticle("checkedWord_7", "wrongWord_7", msg7, 0);
					wordErrors.push(13);
				}

			}

		}

		if ( Number( localStorage.getItem("newWords") ) == 8 ) {
			var word1 = options.word_1;
			word1 = new RegExp(word1, "gi");
			word1Matches = allText.match(word1);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_1").style.display = "none";
				if ( sentencCount >= Number(options.word_1Count) ) {
					document.getElementById("wrongWord_1").style.display = "none";
				} else {
					var msg1 = "Article can't contain require word - " + options.word_1 + " more then " + sentencCount;
					showForArticle("checkedWord_1", "wrongWord_1", msg1, 0);
					wordErrors.push(10);
				}
			}

			var word2 = options.word_2;
			word2 = new RegExp(word2, "gi");
			word2Matches = allText.match(word2);

			if ( word2Matches != null ) {
				document.getElementById("wrongWord_2").style.display = "none";
				if ( sentencCount >= Number(options.word_2Count) ) {
					document.getElementById("wrongWord_2").style.display = "none";
				} else {
					var msg2 = "Article can't contain require word - " + options.word_2 + " more then " + sentencCount;
					showForArticle("checkedWord_2", "wrongWord_2", msg2, 0);
					wordErrors.push(13);
				}

			}

			var word3 = options.word_3;
			word3 = new RegExp(word3, "gi");
			word3Matches = allText.match(word3);

			if ( word3Matches != null ) {
				document.getElementById("wrongWord_3").style.display = "none";
				if ( sentencCount >= Number(options.word_3Count) ) {
					document.getElementById("wrongWord_3").style.display = "none";				
				} else {
					var msg3 = "Article can't contain require word - " + options.word_3 + " more then " + sentencCount;
					showForArticle("checkedWord_3", "wrongWord_3", msg3, 0);
					wordErrors.push(13);
				}

			}

			var word4 = options.word_4;
			word4 = new RegExp(word4, "gi");
			word4Matches = allText.match(word4);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_4").style.display = "none";
				if ( sentencCount >= Number(options.word_4Count) ) {
					document.getElementById("wrongWord_4").style.display = "none";				
				} else {
					var msg4 = "Article can't contain require word - " + options.word_4 + " more then " + sentencCount;
					showForArticle("checkedWord_4", "wrongWord_4", msg4, 0);
					wordErrors.push(13);
				}

			}

			var word5 = options.word_5;
			word5 = new RegExp(word5, "gi");
			word5Matches = allText.match(word5);

			if ( word5Matches != null ) {
				document.getElementById("wrongWord_5").style.display = "none";
				if ( sentencCount >= Number(options.word_5Count) ) {
					document.getElementById("wrongWord_5").style.display = "none";				
				} else {
					var msg5 = "Article can't contain require word - " + options.word_5 + " more then " + sentencCount;
					showForArticle("checkedWord_5", "wrongWord_5", msg5, 0);
					wordErrors.push(13);
				}

			}

			var word6 = options.word_6;
			word6 = new RegExp(word6, "gi");
			word6Matches = allText.match(word6);

			if ( word6Matches != null ) {
				document.getElementById("wrongWord_6").style.display = "none";
				if ( sentencCount >= Number(options.word_6Count) ) {
					document.getElementById("wrongWord_6").style.display = "none";				
				} else {
					var msg6 = "Article can't contain require word - " + options.word_6 + " more then " + sentencCount;
					showForArticle("checkedWord_6", "wrongWord_6", msg6, 0);
					wordErrors.push(13);
				}

			}

			var word7 = options.word_7;
			word7 = new RegExp(word7, "gi");
			word7Matches = allText.match(word7);

			if ( word7Matches != null ) {
				document.getElementById("wrongWord_7").style.display = "none";
				if ( sentencCount >= Number(options.word_7Count) ) {
					document.getElementById("wrongWord_7").style.display = "none";				
				} else {
					var msg7 = "Article can't contain require word - " + options.word_7 + " more then " + sentencCount;
					showForArticle("checkedWord_7", "wrongWord_7", msg7, 0);
					wordErrors.push(13);
				}

			}


			var word8 = options.word_8;
			word8 = new RegExp(word8, "gi");
			word8Matches = allText.match(word8);

			if ( word8Matches != null ) {
				document.getElementById("wrongWord_8").style.display = "none";
				if ( sentencCount >= Number(options.word_8Count) ) {
					document.getElementById("wrongWord_8").style.display = "none";				
				} else {
					var msg8 = "Article can't contain require word - " + options.word_8 + " more then " + sentencCount;
					showForArticle("checkedWord_8", "wrongWord_8", msg8, 0);
					wordErrors.push(13);
				}

			}
		}

		if ( Number( localStorage.getItem("newWords") ) == 9 ) {
			var word1 = options.word_1;
			word1 = new RegExp(word1, "gi");
			word1Matches = allText.match(word1);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_1").style.display = "none";
				if ( sentencCount >= Number(options.word_1Count) ) {
					document.getElementById("wrongWord_1").style.display = "none";
				} else {
					var msg1 = "Article can't contain require word - " + options.word_1 + " more then " + sentencCount;
					showForArticle("checkedWord_1", "wrongWord_1", msg1, 0);
					wordErrors.push(10);
				}
			}

			var word2 = options.word_2;
			word2 = new RegExp(word2, "gi");
			word2Matches = allText.match(word2);

			if ( word2Matches != null ) {
				document.getElementById("wrongWord_2").style.display = "none";
				if ( sentencCount >= Number(options.word_2Count) ) {
					document.getElementById("wrongWord_2").style.display = "none";
				} else {
					var msg2 = "Article can't contain require word - " + options.word_2 + " more then " + sentencCount;
					showForArticle("checkedWord_2", "wrongWord_2", msg2, 0);
					wordErrors.push(13);
				}

			}

			var word3 = options.word_3;
			word3 = new RegExp(word3, "gi");
			word3Matches = allText.match(word3);

			if ( word3Matches != null ) {
				document.getElementById("wrongWord_3").style.display = "none";
				if ( sentencCount >= Number(options.word_3Count) ) {
					document.getElementById("wrongWord_3").style.display = "none";				
				} else {
					var msg3 = "Article can't contain require word - " + options.word_3 + " more then " + sentencCount;
					showForArticle("checkedWord_3", "wrongWord_3", msg3, 0);
					wordErrors.push(13);
				}

			}

			var word4 = options.word_4;
			word4 = new RegExp(word4, "gi");
			word4Matches = allText.match(word4);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_4").style.display = "none";
				if ( sentencCount >= Number(options.word_4Count) ) {
					document.getElementById("wrongWord_4").style.display = "none";				
				} else {
					var msg4 = "Article can't contain require word - " + options.word_4 + " more then " + sentencCount;
					showForArticle("checkedWord_4", "wrongWord_4", msg4, 0);
					wordErrors.push(13);
				}

			}

			var word5 = options.word_5;
			word5 = new RegExp(word5, "gi");
			word5Matches = allText.match(word5);

			if ( word5Matches != null ) {
				document.getElementById("wrongWord_5").style.display = "none";
				if ( sentencCount >= Number(options.word_5Count) ) {
					document.getElementById("wrongWord_5").style.display = "none";				
				} else {
					var msg5 = "Article can't contain require word - " + options.word_5 + " more then " + sentencCount;
					showForArticle("checkedWord_5", "wrongWord_5", msg5, 0);
					wordErrors.push(13);
				}

			}

			var word6 = options.word_6;
			word6 = new RegExp(word6, "gi");
			word6Matches = allText.match(word6);

			if ( word6Matches != null ) {
				document.getElementById("wrongWord_6").style.display = "none";
				if ( sentencCount >= Number(options.word_6Count) ) {
					document.getElementById("wrongWord_6").style.display = "none";				
				} else {
					var msg6 = "Article can't contain require word - " + options.word_6 + " more then " + sentencCount;
					showForArticle("checkedWord_6", "wrongWord_6", msg6, 0);
					wordErrors.push(13);
				}

			}

			var word7 = options.word_7;
			word7 = new RegExp(word7, "gi");
			word7Matches = allText.match(word7);

			if ( word7Matches != null ) {
				document.getElementById("wrongWord_7").style.display = "none";
				if ( sentencCount >= Number(options.word_7Count) ) {
					document.getElementById("wrongWord_7").style.display = "none";				
				} else {
					var msg7 = "Article can't contain require word - " + options.word_7 + " more then " + sentencCount;
					showForArticle("checkedWord_7", "wrongWord_7", msg7, 0);
					wordErrors.push(13);
				}

			}


			var word8 = options.word_8;
			word8 = new RegExp(word8, "gi");
			word8Matches = allText.match(word8);

			if ( word8Matches != null ) {
				document.getElementById("wrongWord_8").style.display = "none";
				if ( sentencCount >= Number(options.word_8Count) ) {
					document.getElementById("wrongWord_8").style.display = "none";				
				} else {
					var msg8 = "Article can't contain require word - " + options.word_8 + " more then " + sentencCount;
					showForArticle("checkedWord_8", "wrongWord_8", msg8, 0);
					wordErrors.push(13);
				}

			}

			var word9 = options.word_9;
			word9 = new RegExp(word9, "gi");
			word9Matches = allText.match(word9);

			if ( word9Matches != null ) {
				document.getElementById("wrongWord_9").style.display = "none";
				if ( sentencCount >= Number(options.word_9Count) ) {
					document.getElementById("wrongWord_9").style.display = "none";				
				} else {
					var msg9 = "Article can't contain require word - " + options.word_9 + " more then " + sentencCount;
					showForArticle("checkedWord_9", "wrongWord_9", msg9, 0);
					wordErrors.push(13);
				}

			}
		}

		if ( Number( localStorage.getItem("newWords") ) == 10 ) {
			var word1 = options.word_1;
			word1 = new RegExp(word1, "gi");
			word1Matches = allText.match(word1);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_1").style.display = "none";
				if ( sentencCount >= Number(options.word_1Count) ) {
					document.getElementById("wrongWord_1").style.display = "none";
				} else {
					var msg1 = "Article can't contain require word - " + options.word_1 + " more then " + sentencCount;
					showForArticle("checkedWord_1", "wrongWord_1", msg1, 0);
					wordErrors.push(10);
				}
			}

			var word2 = options.word_2;
			word2 = new RegExp(word2, "gi");
			word2Matches = allText.match(word2);

			if ( word2Matches != null ) {
				document.getElementById("wrongWord_2").style.display = "none";
				if ( sentencCount >= Number(options.word_2Count) ) {
					document.getElementById("wrongWord_2").style.display = "none";
				} else {
					var msg2 = "Article can't contain require word - " + options.word_2 + " more then " + sentencCount;
					showForArticle("checkedWord_2", "wrongWord_2", msg2, 0);
					wordErrors.push(13);
				}

			}

			var word3 = options.word_3;
			word3 = new RegExp(word3, "gi");
			word3Matches = allText.match(word3);

			if ( word3Matches != null ) {
				document.getElementById("wrongWord_3").style.display = "none";
				if ( sentencCount >= Number(options.word_3Count) ) {
					document.getElementById("wrongWord_3").style.display = "none";				
				} else {
					var msg3 = "Article can't contain require word - " + options.word_3 + " more then " + sentencCount;
					showForArticle("checkedWord_3", "wrongWord_3", msg3, 0);
					wordErrors.push(13);
				}

			}

			var word4 = options.word_4;
			word4 = new RegExp(word4, "gi");
			word4Matches = allText.match(word4);

			if ( word4Matches != null ) {
				document.getElementById("wrongWord_4").style.display = "none";
				if ( sentencCount >= Number(options.word_4Count) ) {
					document.getElementById("wrongWord_4").style.display = "none";				
				} else {
					var msg4 = "Article can't contain require word - " + options.word_4 + " more then " + sentencCount;
					showForArticle("checkedWord_4", "wrongWord_4", msg4, 0);
					wordErrors.push(13);
				}

			}

			var word5 = options.word_5;
			word5 = new RegExp(word5, "gi");
			word5Matches = allText.match(word5);

			if ( word5Matches != null ) {
				document.getElementById("wrongWord_5").style.display = "none";
				if ( sentencCount >= Number(options.word_5Count) ) {
					document.getElementById("wrongWord_5").style.display = "none";				
				} else {
					var msg5 = "Article can't contain require word - " + options.word_5 + " more then " + sentencCount;
					showForArticle("checkedWord_5", "wrongWord_5", msg5, 0);
					wordErrors.push(13);
				}

			}

			var word6 = options.word_6;
			word6 = new RegExp(word6, "gi");
			word6Matches = allText.match(word6);

			if ( word6Matches != null ) {
				document.getElementById("wrongWord_6").style.display = "none";
				if ( sentencCount >= Number(options.word_6Count) ) {
					document.getElementById("wrongWord_6").style.display = "none";				
				} else {
					var msg6 = "Article can't contain require word - " + options.word_6 + " more then " + sentencCount;
					showForArticle("checkedWord_6", "wrongWord_6", msg6, 0);
					wordErrors.push(13);
				}

			}

			var word7 = options.word_7;
			word7 = new RegExp(word7, "gi");
			word7Matches = allText.match(word7);

			if ( word7Matches != null ) {
				document.getElementById("wrongWord_7").style.display = "none";
				if ( sentencCount >= Number(options.word_7Count) ) {
					document.getElementById("wrongWord_7").style.display = "none";				
				} else {
					var msg7 = "Article can't contain require word - " + options.word_7 + " more then " + sentencCount;
					showForArticle("checkedWord_7", "wrongWord_7", msg7, 0);
					wordErrors.push(13);
				}

			}


			var word8 = options.word_8;
			word8 = new RegExp(word8, "gi");
			word8Matches = allText.match(word8);

			if ( word8Matches != null ) {
				document.getElementById("wrongWord_8").style.display = "none";
				if ( sentencCount >= Number(options.word_8Count) ) {
					document.getElementById("wrongWord_8").style.display = "none";				
				} else {
					var msg8 = "Article can't contain require word - " + options.word_8 + " more then " + sentencCount;
					showForArticle("checkedWord_8", "wrongWord_8", msg8, 0);
					wordErrors.push(13);
				}

			}

			var word9 = options.word_9;
			word9 = new RegExp(word9, "gi");
			word9Matches = allText.match(word9);

			if ( word9Matches != null ) {
				document.getElementById("wrongWord_9").style.display = "none";
				if ( sentencCount >= Number(options.word_9Count) ) {
					document.getElementById("wrongWord_9").style.display = "none";				
				} else {
					var msg9 = "Article can't contain require word - " + options.word_9 + " more then " + sentencCount;
					showForArticle("checkedWord_9", "wrongWord_9", msg9, 0);
					wordErrors.push(13);
				}

			}

			var word10 = options.word_10;
			word10 = new RegExp(word10, "gi");
			word10Matches = allText.match(word10);

			if ( word10Matches != null ) {
				document.getElementById("wrongWord_10").style.display = "none";
				if ( sentencCount >= Number(options.word_10Count) ) {
					document.getElementById("wrongWord_10").style.display = "none";				
				} else {
					var msg10 = "Article can't contain require word - " + options.word_10 + " more then " + sentencCount;
					showForArticle("checkedWord_10", "wrongWord_10", msg10, 0);
					wordErrors.push(13);
				}

			}
		}

		if (wordErrors.length == 0) {
           var totalIntroSents = Number(options.introParagraph) * Number(options.introSent) * Number(options.totalParag);
           var nowIntroSents = localStorage.getItem("intArea").split(".").length - 1;
           var totalMiddleSents = Number(options.middleParagraph) * Number(options.middleSent2) * Number(options.totalParag);
           var nowMiddleSents = localStorage.getItem("middleArea").split(".").length - 1;
           var totalSummarySents = Number(options.summParagraph) * Number(options.summSent) * Number(options.totalParag);
           var nowSummarySents = localStorage.getItem("summaryArea").split(".").length - 1;
           
           
           var count_errors = [];
           
           if(nowIntroSents < totalIntroSents) {
               count_errors.push(1);
               document.getElementById("moreIntSent").style.display = "block";
               document.getElementById("moreIntSent").innerHTML = "<i class='fa fa-times'></i> <strong><ins>Introduction</ins></strong> " + 
                                                                   "Not enought sentences for making <strong><em>" + options.totalParag + "</em></strong> article's<br>" +
                                                                   "Add <strong><em>" + (totalIntroSents - nowIntroSents) + "</em></strong> or more senteces!!!";
           } else {
               document.getElementById("moreIntSent").style.display = "none";
           }
           
           if(nowMiddleSents < totalMiddleSents) {
               document.getElementById("moreMiddleSent").style.display = "block";
               count_errors.push(2);
               document.getElementById("moreMiddleSent").innerHTML = "<i class='fa fa-times'></i> <strong><ins>Middle</ins></strong> " + 
                                                                   "Not enought sentences for making <strong><em>" + options.totalParag + "</em></strong> article's<br>" +
                                                                   "Add <strong><em>" + (totalMiddleSents - nowMiddleSents) + "</em></strong> or more senteces!!!";
           } else {
               document.getElementById("moreMiddleSent").style.display = "none";
           }
           
           if(nowSummarySents < totalSummarySents) {
               document.getElementById("moreSummarySent").style.display = "block";
               count_errors.push(3);
               document.getElementById("moreSummarySent").innerHTML = "<i class='fa fa-times'></i> <strong><ins>Summary</ins></strong> " + 
                                                                   "Not enought sentences for making <strong><em>" + options.totalParag + "</em></strong> article's<br>" +
                                                                   "Add <strong><em>" + (totalSummarySents - nowSummarySents) + "</em></strong> or more senteces!!!";
           } else {
               document.getElementById("moreSummarySent").style.display = "none";
           }

           if (count_errors.length === 0) {
               var introCounter = 0, middleCounter = 0, summaryCounter = 0;
               var generate = "";
               for(var k = 0; k < Number(options.totalParag); k++) {
                   
                   // Sentences for Introduction area
                   var introText = localStorage.getItem("intArea"), introSent = "";
                   var introWork = introText;
                   introWork = introWork.split(/[.|?|!]/gi);
                   var intro_count = Number(options.introParagraph) * Number(options.introSent);
                   for(var i = 0 + introCounter; i < intro_count + introCounter; i++) {
                       introSent += introWork[i] + ".";
                   }
                   introCounter += intro_count;

                   // Sentences for Middle area
                   var middleText = localStorage.getItem("middleArea"), middleSent = "";
                   var middleWork = middleText;
                   middleWork = middleWork.split(/[.|?|!]/gi);
                   var middle_count = Number(options.middleParagraph) * Number(options.middleSent2);
                   for(var i = 0 + middleCounter; i < middle_count + middleCounter; i++) {
                       middleSent += middleWork[i] + ".";
                   }
                   middleCounter += middle_count;

                   // Sentences for Summary area
                   var summaryText = localStorage.getItem("summaryArea"), summarySent = "";
                   var summaryWork = summaryText;
                   summaryWork = summaryWork.split(/[.|?|!]/gi);
                   var summary_count = Number(options.summParagraph) * Number(options.summSent);
                   for(var i = 0 + summaryCounter; i < summary_count + summaryCounter; i++) {
                       summarySent += summaryWork[i] + ".";
                   }
                   summaryCounter += summary_count;
                                       
                   var article = introSent + middleSent + summarySent;
                   
                   if ( Number(localStorage.getItem("newWords") ) === 1 ) {
                       
                       var Lword4 = options.word_1;
                       Lword4 = new RegExp(Lword4, "gi");
                       var article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword4) != null && article_arr[t].match(Lword4).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_1, "");
                           }
                       }
                       
                       article = article_arr.join(".");
                       
                       var word4Matches = article.match(Lword4);
                       
                       if (word4Matches != null && word4Matches.length > Number(options.word_1Count)) {  
                           //word4 = new RegExp("[^.?!]*(?:[.?,\\s!])" + options.word_1 + "(?=[\\s.?!,;'s])[^.?!]*","i");
                           var q = word4Matches.length - Number(options.word_1Count), b = 0;  
                           
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword4.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word4Matches != null && word4Matches.length < Number(options.word_1Count)) {
                           c_4 = Number(options.word_1Count) - word4Matches.length;
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }
                       if (word4Matches == null) {
                           c_4 = Number(options.word_1Count);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }
                   }
                   
                   if ( Number(localStorage.getItem("newWords") ) === 2 ) {
                       var Lword4 = options.word_1;
                       Lword4 = new RegExp(Lword4, "gi");
                       var article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword4) != null && article_arr[t].match(Lword4).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_1, "");
                           }
                       }
                       
                       article = article_arr.join(".");
                       
                       var word4Matches = article.match(Lword4);
                       
                       if (word4Matches != null && word4Matches.length > Number(options.word_1Count)) {  
                           //word4 = new RegExp("[^.?!]*(?:[.?,\\s!])" + options.word_1 + "(?=[\\s.?!,;'s])[^.?!]*","i");
                           var q = word4Matches.length - Number(options.word_1Count), b = 0;  
                           
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword4.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word4Matches != null && word4Matches.length < Number(options.word_1Count)) {
                           c_4 = Number(options.word_1Count - word4Matches.length);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }
                       if (word4Matches == null) {
                           c_4 = Number(options.word_1Count);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }

                       var Lword5 = options.word_2;
                       Lword5 = new RegExp(Lword5, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword4) != null && article_arr[t].match(Lword4).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_2, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word5atches = article.match(Lword5);

                       if (word5atches != null && word5atches.length > Number(options.word_2Count)) {
                           
                           var q = word5Matches.length - Number(options.word_2Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word5atches != null && word5atches.length < Number(options.word_2Count)) {
                           c_5 = Number(options.word_2Count) - word5atches.length;
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }
                       if (word5atches == null) {
                           c_5 = Number(options.word_2Count);
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }
                   }
                   
                   if ( Number(localStorage.getItem("newWords") ) === 3 ) {
                       var Lword4 = options.word_1;
                       Lword4 = new RegExp(Lword4, "gi");
                       var article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword4) != null && article_arr[t].match(Lword4).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_1, "");
                           }
                       }
                       
                       article = article_arr.join(".");
                       
                       var word4Matches = article.match(Lword4);
                       
                       if (word4Matches != null && word4Matches.length > Number(options.word_1Count)) {  
                           //word4 = new RegExp("[^.?!]*(?:[.?,\\s!])" + options.word_1 + "(?=[\\s.?!,;'s])[^.?!]*","i");
                           var q = word4Matches.length - Number(options.word_1Count), b = 0;  
                           
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword4.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word4Matches != null && word4Matches.length < Number(options.word_1Count)) {
                           c_4 = Number(options.word_1Count - word4Matches.length);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }
                       if (word4Matches == null) {
                           c_4 = Number(options.word_1Count);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }

                       var Lword5 = options.word_2;
                       Lword5 = new RegExp(Lword5, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword5) != null && article_arr[t].match(Lword5).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_2, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word5atches = article.match(Lword5);

                       if (word5atches != null && word5atches.length > Number(options.word_2Count)) {
                           
                           var q = word5Matches.length - Number(options.word_2Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word5atches != null && word5atches.length < Number(options.word_2Count)) {
                           c_5 = Number(options.word_2Count) - word5atches.length;
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }
                       if (word5atches == null) {
                           c_5 = Number(options.word_2Count);
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }

                       var Lword6 = options.word_3;
                       Lword6 = new RegExp(Lword6, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword6) != null && article_arr[t].match(Lword6).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_3, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word6Matches = article.match(Lword6);

                       if (word6Matches != null && word6Matches.length > Number(options.word_3Count)) {
                                                       
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word6Matches != null && word6Matches.length < Number(options.word_3Count)) {
                           c_6 = Number(options.word_3Count) - word6Matches.length;
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }
                       if (word6Matches == null) {
                           c_6 = Number(options.word_3Count);
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }
                   }

                   if ( Number(localStorage.getItem("newWords") ) === 4 ) {
                      var Lword4 = options.word_1;
                       Lword4 = new RegExp(Lword4, "gi");
                       var article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword4) != null && article_arr[t].match(Lword4).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_1, "");
                           }
                       }
                       
                       article = article_arr.join(".");
                       
                       var word4Matches = article.match(Lword4);
                       
                       if (word4Matches != null && word4Matches.length > Number(options.word_1Count)) {  
                           //word4 = new RegExp("[^.?!]*(?:[.?,\\s!])" + options.word_1 + "(?=[\\s.?!,;'s])[^.?!]*","i");
                           var q = word4Matches.length - Number(options.word_1Count), b = 0;  
                           
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword4.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word4Matches != null && word4Matches.length < Number(options.word_1Count)) {
                           c_4 = Number(options.word_1Count - word4Matches.length);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }
                       if (word4Matches == null) {
                           c_4 = Number(options.word_1Count);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }

                       var Lword5 = options.word_2;
                       Lword5 = new RegExp(Lword5, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword5) != null && article_arr[t].match(Lword5).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_2, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word5atches = article.match(Lword5);

                       if (word5atches != null && word5atches.length > Number(options.word_2Count)) {
                           
                           var q = word5Matches.length - Number(options.word_2Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word5atches != null && word5atches.length < Number(options.word_2Count)) {
                           c_5 = Number(options.word_2Count) - word5atches.length;
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }
                       if (word5atches == null) {
                           c_5 = Number(options.word_2Count);
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }

                       var Lword6 = options.word_3;
                       Lword6 = new RegExp(Lword6, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword6) != null && article_arr[t].match(Lword6).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_3, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word6Matches = article.match(Lword6);

                       if (word6Matches != null && word6Matches.length > Number(options.word_3Count)) {
                                                       
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word6Matches != null && word6Matches.length < Number(options.word_3Count)) {
                           c_6 = Number(options.word_3Count) - word6Matches.length;
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }
                       if (word6Matches == null) {
                           c_6 = Number(options.word_3Count);
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }

                       var Lword7 = options.word_4;
                       Lword7 = new RegExp(Lword7, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword7) != null && article_arr[t].match(Lword7).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_4, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word7Matches = article.match(Lword7);

                       if (word7Matches != null && word7Matches.length > Number(options.word_4Count)) {
                           
                           var p = word7Matches.length - Number(options.word_4Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword7.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word7Matches != null && word7Matches.length < Number(options.word_4Count)) {
                           c_7 = Number(options.word_4Count) - word7Matches.length;
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }
                       if (word7Matches == null) {
                           c_7 = Number(options.word_4Count);
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }
                   }

                   if ( Number(localStorage.getItem("newWords") ) === 5 ) {
                       var Lword4 = options.word_1;
                       Lword4 = new RegExp(Lword4, "gi");
                       var article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword4) != null && article_arr[t].match(Lword4).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_1, "");
                           }
                       }
                       
                       article = article_arr.join(".");
                       
                       var word4Matches = article.match(Lword4);
                       
                       if (word4Matches != null && word4Matches.length > Number(options.word_1Count)) {  
                           //word4 = new RegExp("[^.?!]*(?:[.?,\\s!])" + options.word_1 + "(?=[\\s.?!,;'s])[^.?!]*","i");
                           var q = word4Matches.length - Number(options.word_1Count), b = 0;  
                           
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword4.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word4Matches != null && word4Matches.length < Number(options.word_1Count)) {
                           c_4 = Number(options.word_1Count - word4Matches.length);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }
                       if (word4Matches == null) {
                           c_4 = Number(options.word_1Count);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }

                       var Lword5 = options.word_2;
                       Lword5 = new RegExp(Lword5, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword5) != null && article_arr[t].match(Lword5).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_2, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word5atches = article.match(Lword5);

                       if (word5atches != null && word5atches.length > Number(options.word_2Count)) {
                           
                           var q = word5Matches.length - Number(options.word_2Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word5atches != null && word5atches.length < Number(options.word_2Count)) {
                           c_5 = Number(options.word_2Count) - word5atches.length;
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }
                       if (word5atches == null) {
                           c_5 = Number(options.word_2Count);
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }

                       var Lword6 = options.word_3;
                       Lword6 = new RegExp(Lword6, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword6) != null && article_arr[t].match(Lword6).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_3, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word6Matches = article.match(Lword6);

                       if (word6Matches != null && word6Matches.length > Number(options.word_3Count)) {
                                                       
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word6Matches != null && word6Matches.length < Number(options.word_3Count)) {
                           c_6 = Number(options.word_3Count) - word6Matches.length;
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }
                       if (word6Matches == null) {
                           c_6 = Number(options.word_3Count);
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }

                       var Lword7 = options.word_4;
                       Lword7 = new RegExp(Lword7, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword7) != null && article_arr[t].match(Lword7).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_4, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word7Matches = article.match(Lword7);

                       if (word7Matches != null && word7Matches.length > Number(options.word_4Count)) {
                           
                           var p = word7Matches.length - Number(options.word_4Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword7.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word7Matches != null && word7Matches.length < Number(options.word_4Count)) {
                           c_7 = Number(options.word_4Count) - word7Matches.length;
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }
                       if (word7Matches == null) {
                           c_7 = Number(options.word_4Count);
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }

                       var Lword8 = options.word_5;
                       Lword8 = new RegExp(Lword8, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword8) != null && article_arr[t].match(Lword8).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_5, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word8Matches = article.match(Lword8);

                       if (word8Matches != null && word8Matches.length > Number(options.word_5Count)) {
                           
                           var p = word8Matches.length - Number(options.word_5Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword8.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word8Matches != null && word8Matches.length < Number(options.word_5Count)) {
                           c_8 = Number(options.word_5Count) - word8Matches.length;
                           var article_arr_8 = article.split(" ");
                           var chotch_8 = Math.floor((article_arr_6.length - 3) / c_8);
                           var chotch_8go = chotch_8;
                           for (var i = 0; i < c_8; i++) {
                               article_arr_8.splice(chotch_8go, 0, options.word_5);
                               chotch_8go += chotch_8;
                           }
                           article = article_arr_8.join(" ");
                       }
                       if (word8Matches == null) {
                           c_8 = Number(options.word_5Count);
                           var article_arr_8 = article.split(" ");
                           var chotch_8 = Math.floor((article_arr_8.length - 3) / c_8);
                           var chotch_8go = chotch_8;
                           for (var i = 0; i < c_8; i++) {
                               article_arr_8.splice(chotch_8go, 0, options.word_5);
                               chotch_8go += chotch_8;
                           }
                           article = article_arr_8.join(" ");
                       }
                   }

                   if ( Number(localStorage.getItem("newWords") ) === 6 ) {
                       var Lword4 = options.word_1;
                       Lword4 = new RegExp(Lword4, "gi");
                       var article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword4) != null && article_arr[t].match(Lword4).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_1, "");
                           }
                       }
                       
                       article = article_arr.join(".");
                       
                       var word4Matches = article.match(Lword4);
                       
                       if (word4Matches != null && word4Matches.length > Number(options.word_1Count)) {  
                           //word4 = new RegExp("[^.?!]*(?:[.?,\\s!])" + options.word_1 + "(?=[\\s.?!,;'s])[^.?!]*","i");
                           var q = word4Matches.length - Number(options.word_1Count), b = 0;  
                           
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword4.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word4Matches != null && word4Matches.length < Number(options.word_1Count)) {
                           c_4 = Number(options.word_1Count - word4Matches.length);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }
                       if (word4Matches == null) {
                           c_4 = Number(options.word_1Count);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }

                       var Lword5 = options.word_2;
                       Lword5 = new RegExp(Lword5, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword5) != null && article_arr[t].match(Lword5).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_2, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word5atches = article.match(Lword5);

                       if (word5atches != null && word5atches.length > Number(options.word_2Count)) {
                           
                           var q = word5Matches.length - Number(options.word_2Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word5atches != null && word5atches.length < Number(options.word_2Count)) {
                           c_5 = Number(options.word_2Count) - word5atches.length;
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }
                       if (word5atches == null) {
                           c_5 = Number(options.word_2Count);
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }

                       var Lword6 = options.word_3;
                       Lword6 = new RegExp(Lword6, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword6) != null && article_arr[t].match(Lword6).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_3, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word6Matches = article.match(Lword6);

                       if (word6Matches != null && word6Matches.length > Number(options.word_3Count)) {
                                                       
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word6Matches != null && word6Matches.length < Number(options.word_3Count)) {
                           c_6 = Number(options.word_3Count) - word6Matches.length;
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }
                       if (word6Matches == null) {
                           c_6 = Number(options.word_3Count);
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }

                       var Lword7 = options.word_4;
                       Lword7 = new RegExp(Lword7, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword7) != null && article_arr[t].match(Lword7).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_4, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word7Matches = article.match(Lword7);

                       if (word7Matches != null && word7Matches.length > Number(options.word_4Count)) {
                           
                           var p = word7Matches.length - Number(options.word_4Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword7.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word7Matches != null && word7Matches.length < Number(options.word_4Count)) {
                           c_7 = Number(options.word_4Count) - word7Matches.length;
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }
                       if (word7Matches == null) {
                           c_7 = Number(options.word_4Count);
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }

                       var Lword8 = options.word_5;
                       Lword8 = new RegExp(Lword8, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword8) != null && article_arr[t].match(Lword8).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_5, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word8Matches = article.match(Lword8);

                       if (word8Matches != null && word8Matches.length > Number(options.word_5Count)) {
                           
                           var p = word8Matches.length - Number(options.word_5Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword8.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word8Matches != null && word8Matches.length < Number(options.word_5Count)) {
                           c_8 = Number(options.word_5Count) - word8Matches.length;
                           var article_arr_8 = article.split(" ");
                           var chotch_8 = Math.floor((article_arr_6.length - 3) / c_8);
                           var chotch_8go = chotch_8;
                           for (var i = 0; i < c_8; i++) {
                               article_arr_8.splice(chotch_8go, 0, options.word_5);
                               chotch_8go += chotch_8;
                           }
                           article = article_arr_8.join(" ");
                       }
                       if (word8Matches == null) {
                           c_8 = Number(options.word_5Count);
                           var article_arr_8 = article.split(" ");
                           var chotch_8 = Math.floor((article_arr_8.length - 3) / c_8);
                           var chotch_8go = chotch_8;
                           for (var i = 0; i < c_8; i++) {
                               article_arr_8.splice(chotch_8go, 0, options.word_5);
                               chotch_8go += chotch_8;
                           }
                           article = article_arr_8.join(" ");
                       }

                       var Lword9 = options.word_6;
                       Lword9 = new RegExp(Lword9, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword9) != null && article_arr[t].match(Lword9).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_6, "");
                           }
                       }
                       article = article_arr.join(".");
                       var word9Matches = article.match(Lword9);

                       if (word9Matches != null && word9Matches.length > Number(options.word_6Count)) {
                           var p = word9Matches.length - Number(options.word_6Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword9.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word9Matches != null && word9Matches.length < Number(options.word_6Count)) {
                           c_9 = Number(options.word_6Count) - word9Matches.length;
                           var article_arr_9 = article.split(" ");
                           var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                           var chotch_9go = chotch_9;
                           for (var i = 0; i < c_9; i++) {
                               article_arr_9.splice(chotch_9go, 0, options.word_6);
                               chotch_9go += chotch_9;
                           }
                           article = article_arr_9.join(" ");
                       }
                       if (word9Matches == null) {
                           c_9 = Number(options.word_6Count);
                           var article_arr_9 = article.split(" ");
                           var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                           var chotch_9go = chotch_9;
                           for (var i = 0; i < c_9; i++) {
                               article_arr_9.splice(chotch_9go, 0, options.word_6);
                               chotch_9go += chotch_9;
                           }
                           article = article_arr_9.join(" ");
                       }
                   }

                   if ( Number(localStorage.getItem("newWords") ) === 7 ) {
                       var Lword4 = options.word_1;
                       Lword4 = new RegExp(Lword4, "gi");
                       var article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword4) != null && article_arr[t].match(Lword4).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_1, "");
                           }
                       }
                       
                       article = article_arr.join(".");
                       
                       var word4Matches = article.match(Lword4);
                       
                       if (word4Matches != null && word4Matches.length > Number(options.word_1Count)) {  
                           //word4 = new RegExp("[^.?!]*(?:[.?,\\s!])" + options.word_1 + "(?=[\\s.?!,;'s])[^.?!]*","i");
                           var q = word4Matches.length - Number(options.word_1Count), b = 0;  
                           
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword4.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word4Matches != null && word4Matches.length < Number(options.word_1Count)) {
                           c_4 = Number(options.word_1Count - word4Matches.length);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }
                       if (word4Matches == null) {
                           c_4 = Number(options.word_1Count);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }

                       var Lword5 = options.word_2;
                       Lword5 = new RegExp(Lword5, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword5) != null && article_arr[t].match(Lword5).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_2, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word5atches = article.match(Lword5);

                       if (word5atches != null && word5atches.length > Number(options.word_2Count)) {
                           
                           var q = word5Matches.length - Number(options.word_2Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word5atches != null && word5atches.length < Number(options.word_2Count)) {
                           c_5 = Number(options.word_2Count) - word5atches.length;
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }
                       if (word5atches == null) {
                           c_5 = Number(options.word_2Count);
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }

                       var Lword6 = options.word_3;
                       Lword6 = new RegExp(Lword6, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword6) != null && article_arr[t].match(Lword6).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_3, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word6Matches = article.match(Lword6);

                       if (word6Matches != null && word6Matches.length > Number(options.word_3Count)) {
                                                       
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word6Matches != null && word6Matches.length < Number(options.word_3Count)) {
                           c_6 = Number(options.word_3Count) - word6Matches.length;
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }
                       if (word6Matches == null) {
                           c_6 = Number(options.word_3Count);
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }

                       var Lword7 = options.word_4;
                       Lword7 = new RegExp(Lword7, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword7) != null && article_arr[t].match(Lword7).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_4, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word7Matches = article.match(Lword7);

                       if (word7Matches != null && word7Matches.length > Number(options.word_4Count)) {
                           
                           var p = word7Matches.length - Number(options.word_4Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword7.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word7Matches != null && word7Matches.length < Number(options.word_4Count)) {
                           c_7 = Number(options.word_4Count) - word7Matches.length;
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }
                       if (word7Matches == null) {
                           c_7 = Number(options.word_4Count);
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }

                       var Lword8 = options.word_5;
                       Lword8 = new RegExp(Lword8, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword8) != null && article_arr[t].match(Lword8).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_5, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word8Matches = article.match(Lword8);

                       if (word8Matches != null && word8Matches.length > Number(options.word_5Count)) {
                           
                           var p = word8Matches.length - Number(options.word_5Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword8.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word8Matches != null && word8Matches.length < Number(options.word_5Count)) {
                           c_8 = Number(options.word_5Count) - word8Matches.length;
                           var article_arr_8 = article.split(" ");
                           var chotch_8 = Math.floor((article_arr_6.length - 3) / c_8);
                           var chotch_8go = chotch_8;
                           for (var i = 0; i < c_8; i++) {
                               article_arr_8.splice(chotch_8go, 0, options.word_5);
                               chotch_8go += chotch_8;
                           }
                           article = article_arr_8.join(" ");
                       }
                       if (word8Matches == null) {
                           c_8 = Number(options.word_5Count);
                           var article_arr_8 = article.split(" ");
                           var chotch_8 = Math.floor((article_arr_8.length - 3) / c_8);
                           var chotch_8go = chotch_8;
                           for (var i = 0; i < c_8; i++) {
                               article_arr_8.splice(chotch_8go, 0, options.word_5);
                               chotch_8go += chotch_8;
                           }
                           article = article_arr_8.join(" ");
                       }

                       var Lword9 = options.word_6;
                       Lword9 = new RegExp(Lword9, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword9) != null && article_arr[t].match(Lword9).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_6, "");
                           }
                       }
                       article = article_arr.join(".");
                       var word9Matches = article.match(Lword9);

                       if (word9Matches != null && word9Matches.length > Number(options.word_6Count)) {
                           var p = word9Matches.length - Number(options.word_6Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword9.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word9Matches != null && word9Matches.length < Number(options.word_6Count)) {
                           c_9 = Number(options.word_6Count) - word9Matches.length;
                           var article_arr_9 = article.split(" ");
                           var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                           var chotch_9go = chotch_9;
                           for (var i = 0; i < c_9; i++) {
                               article_arr_9.splice(chotch_9go, 0, options.word_6);
                               chotch_9go += chotch_9;
                           }
                           article = article_arr_9.join(" ");
                       }
                       if (word9Matches == null) {
                           c_9 = Number(options.word_6Count);
                           var article_arr_9 = article.split(" ");
                           var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                           var chotch_9go = chotch_9;
                           for (var i = 0; i < c_9; i++) {
                               article_arr_9.splice(chotch_9go, 0, options.word_6);
                               chotch_9go += chotch_9;
                           }
                           article = article_arr_9.join(" ");
                       }

                       var Lword10 = options.word_7;
                       Lword10 = new RegExp(Lword10, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword10) != null && article_arr[t].match(Lword10).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_7, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word10Matches = article.match(Lword10);

                       if (word10Matches != null && word10Matches.length > Number(options.word_7Count)) {
                           
                           var p = word10Matches.length - Number(options.word_7Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword10.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word10Matches != null && word10Matches.length < Number(options.word_7Count)) {
                           c_10 = Number(options.word_7Count) - word10Matches.length;
                           var article_arr_10 = article.split(" ");
                           var chotch_10 = Math.floor((article_arr_10.length - 3) / c_10);
                           var chotch_10go = chotch_10;
                           for (var i = 0; i < c_10; i++) {
                               article_arr_10.splice(chotch_10go, 0, options.word_7);
                               chotch_10go += chotch_10;
                           }
                           article = article_arr_10.join(" ");
                       }
                       if (word10Matches == null) {
                           c_10 = Number(options.word_7Count);
                           var article_arr_10 = article.split(" ");
                           var chotch_10 = Math.floor((article_arr_10.length - 3) / c_10);
                           var chotch_10go = chotch_10;
                           for (var i = 0; i < c_10; i++) {
                               article_arr_10.splice(chotch_10go, 0, options.word_7);
                               chotch_10go += chotch_10;
                           }
                           article = article_arr_10.join(" ");
                       }
                   }

                   if ( Number(localStorage.getItem("newWords") ) === 8 ) {
                       var Lword4 = options.word_1;
                       Lword4 = new RegExp(Lword4, "gi");
                       var article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword4) != null && article_arr[t].match(Lword4).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_1, "");
                           }
                       }
                       
                       article = article_arr.join(".");
                       
                       var word4Matches = article.match(Lword4);
                       
                       if (word4Matches != null && word4Matches.length > Number(options.word_1Count)) {  
                           //word4 = new RegExp("[^.?!]*(?:[.?,\\s!])" + options.word_1 + "(?=[\\s.?!,;'s])[^.?!]*","i");
                           var q = word4Matches.length - Number(options.word_1Count), b = 0;  
                           
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword4.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word4Matches != null && word4Matches.length < Number(options.word_1Count)) {
                           c_4 = Number(options.word_1Count - word4Matches.length);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }
                       if (word4Matches == null) {
                           c_4 = Number(options.word_1Count);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }

                       var Lword5 = options.word_2;
                       Lword5 = new RegExp(Lword5, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword5) != null && article_arr[t].match(Lword5).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_2, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word5atches = article.match(Lword5);

                       if (word5atches != null && word5atches.length > Number(options.word_2Count)) {
                           
                           var q = word5Matches.length - Number(options.word_2Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word5atches != null && word5atches.length < Number(options.word_2Count)) {
                           c_5 = Number(options.word_2Count) - word5atches.length;
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }
                       if (word5atches == null) {
                           c_5 = Number(options.word_2Count);
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }

                       var Lword6 = options.word_3;
                       Lword6 = new RegExp(Lword6, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword6) != null && article_arr[t].match(Lword6).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_3, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word6Matches = article.match(Lword6);

                       if (word6Matches != null && word6Matches.length > Number(options.word_3Count)) {
                                                       
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word6Matches != null && word6Matches.length < Number(options.word_3Count)) {
                           c_6 = Number(options.word_3Count) - word6Matches.length;
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }
                       if (word6Matches == null) {
                           c_6 = Number(options.word_3Count);
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }

                       var Lword7 = options.word_4;
                       Lword7 = new RegExp(Lword7, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword7) != null && article_arr[t].match(Lword7).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_4, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word7Matches = article.match(Lword7);

                       if (word7Matches != null && word7Matches.length > Number(options.word_4Count)) {
                           
                           var p = word7Matches.length - Number(options.word_4Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword7.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word7Matches != null && word7Matches.length < Number(options.word_4Count)) {
                           c_7 = Number(options.word_4Count) - word7Matches.length;
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }
                       if (word7Matches == null) {
                           c_7 = Number(options.word_4Count);
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }

                       var Lword8 = options.word_5;
                       Lword8 = new RegExp(Lword8, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword8) != null && article_arr[t].match(Lword8).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_5, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word8Matches = article.match(Lword8);

                       if (word8Matches != null && word8Matches.length > Number(options.word_5Count)) {
                           
                           var p = word8Matches.length - Number(options.word_5Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword8.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word8Matches != null && word8Matches.length < Number(options.word_5Count)) {
                           c_8 = Number(options.word_5Count) - word8Matches.length;
                           var article_arr_8 = article.split(" ");
                           var chotch_8 = Math.floor((article_arr_6.length - 3) / c_8);
                           var chotch_8go = chotch_8;
                           for (var i = 0; i < c_8; i++) {
                               article_arr_8.splice(chotch_8go, 0, options.word_5);
                               chotch_8go += chotch_8;
                           }
                           article = article_arr_8.join(" ");
                       }
                       if (word8Matches == null) {
                           c_8 = Number(options.word_5Count);
                           var article_arr_8 = article.split(" ");
                           var chotch_8 = Math.floor((article_arr_8.length - 3) / c_8);
                           var chotch_8go = chotch_8;
                           for (var i = 0; i < c_8; i++) {
                               article_arr_8.splice(chotch_8go, 0, options.word_5);
                               chotch_8go += chotch_8;
                           }
                           article = article_arr_8.join(" ");
                       }

                       var Lword9 = options.word_6;
                       Lword9 = new RegExp(Lword9, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword9) != null && article_arr[t].match(Lword9).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_6, "");
                           }
                       }
                       article = article_arr.join(".");
                       var word9Matches = article.match(Lword9);

                       if (word9Matches != null && word9Matches.length > Number(options.word_6Count)) {
                           var p = word9Matches.length - Number(options.word_6Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword9.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word9Matches != null && word9Matches.length < Number(options.word_6Count)) {
                           c_9 = Number(options.word_6Count) - word9Matches.length;
                           var article_arr_9 = article.split(" ");
                           var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                           var chotch_9go = chotch_9;
                           for (var i = 0; i < c_9; i++) {
                               article_arr_9.splice(chotch_9go, 0, options.word_6);
                               chotch_9go += chotch_9;
                           }
                           article = article_arr_9.join(" ");
                       }
                       if (word9Matches == null) {
                           c_9 = Number(options.word_6Count);
                           var article_arr_9 = article.split(" ");
                           var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                           var chotch_9go = chotch_9;
                           for (var i = 0; i < c_9; i++) {
                               article_arr_9.splice(chotch_9go, 0, options.word_6);
                               chotch_9go += chotch_9;
                           }
                           article = article_arr_9.join(" ");
                       }

                       var Lword10 = options.word_7;
                       Lword10 = new RegExp(Lword10, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword10) != null && article_arr[t].match(Lword10).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_7, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word10Matches = article.match(Lword10);

                       if (word10Matches != null && word10Matches.length > Number(options.word_7Count)) {
                           
                           var p = word10Matches.length - Number(options.word_7Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword10.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word10Matches != null && word10Matches.length < Number(options.word_7Count)) {
                           c_10 = Number(options.word_7Count) - word10Matches.length;
                           var article_arr_10 = article.split(" ");
                           var chotch_10 = Math.floor((article_arr_10.length - 3) / c_10);
                           var chotch_10go = chotch_10;
                           for (var i = 0; i < c_10; i++) {
                               article_arr_10.splice(chotch_10go, 0, options.word_7);
                               chotch_10go += chotch_10;
                           }
                           article = article_arr_10.join(" ");
                       }
                       if (word10Matches == null) {
                           c_10 = Number(options.word_7Count);
                           var article_arr_10 = article.split(" ");
                           var chotch_10 = Math.floor((article_arr_10.length - 3) / c_10);
                           var chotch_10go = chotch_10;
                           for (var i = 0; i < c_10; i++) {
                               article_arr_10.splice(chotch_10go, 0, options.word_7);
                               chotch_10go += chotch_10;
                           }
                           article = article_arr_10.join(" ");
                       }

                       var Lword11 = options.word_8;
                       Lword11 = new RegExp(Lword11, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword11) != null && article_arr[t].match(Lword11).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_8, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word11Matches = article.match(Lword11);

                       if (word11Matches.length != null && word11Matches.length > Number(options.word_8Count)) {
                           
                           var p = Lword11 - Number(options.word_8Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword10.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       } 
                       if (word11Matches != null && word11Matches.length < Number(options.word_8Count)) {
                           c_11 = Number(options.word_8Count) - word11Matches.length;
                           var article_arr_11 = article.split(" ");
                           var chotch_11 = Math.floor((article_arr_11.length - 3) / c_11);
                           var chotch_11go = chotch_11;
                           for (var i = 0; i < c_11; i++) {
                               article_arr_11.splice(chotch_11go, 0, options.word_8);
                               chotch_11go += chotch_11;
                           }
                           article = article_arr_11.join(" ");
                       }
                       if (word11Matches == null) {
                           c_11 = Number(options.word_8Count);
                           var article_arr_11 = article.split(" ");
                           var chotch_11 = Math.floor((article_arr_11.length - 3) / c_11);
                           var chotch_11go = chotch_11;
                           for (var i = 0; i < c_11; i++) {
                               article_arr_11.splice(chotch_11go, 0, options.word_8);
                               chotch_11go += chotch_11;
                           }
                           article = article_arr_11.join(" ");
                       }
                   }

                   if ( Number(localStorage.getItem("newWords") ) === 9 ) {
                       var Lword4 = options.word_1;
                       Lword4 = new RegExp(Lword4, "gi");
                       var article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword4) != null && article_arr[t].match(Lword4).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_1, "");
                           }
                       }
                       
                       article = article_arr.join(".");
                       
                       var word4Matches = article.match(Lword4);
                       
                       if (word4Matches != null && word4Matches.length > Number(options.word_1Count)) {  
                           //word4 = new RegExp("[^.?!]*(?:[.?,\\s!])" + options.word_1 + "(?=[\\s.?!,;'s])[^.?!]*","i");
                           var q = word4Matches.length - Number(options.word_1Count), b = 0;  
                           
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword4.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word4Matches != null && word4Matches.length < Number(options.word_1Count)) {
                           c_4 = Number(options.word_1Count - word4Matches.length);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }
                       if (word4Matches == null) {
                           c_4 = Number(options.word_1Count);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }

                       var Lword5 = options.word_2;
                       Lword5 = new RegExp(Lword5, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword5) != null && article_arr[t].match(Lword5).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_2, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word5atches = article.match(Lword5);

                       if (word5atches != null && word5atches.length > Number(options.word_2Count)) {
                           
                           var q = word5Matches.length - Number(options.word_2Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word5atches != null && word5atches.length < Number(options.word_2Count)) {
                           c_5 = Number(options.word_2Count) - word5atches.length;
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }
                       if (word5atches == null) {
                           c_5 = Number(options.word_2Count);
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }

                       var Lword6 = options.word_3;
                       Lword6 = new RegExp(Lword6, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword6) != null && article_arr[t].match(Lword6).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_3, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word6Matches = article.match(Lword6);

                       if (word6Matches != null && word6Matches.length > Number(options.word_3Count)) {
                                                       
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word6Matches != null && word6Matches.length < Number(options.word_3Count)) {
                           c_6 = Number(options.word_3Count) - word6Matches.length;
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }
                       if (word6Matches == null) {
                           c_6 = Number(options.word_3Count);
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }

                       var Lword7 = options.word_4;
                       Lword7 = new RegExp(Lword7, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword7) != null && article_arr[t].match(Lword7).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_4, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word7Matches = article.match(Lword7);

                       if (word7Matches != null && word7Matches.length > Number(options.word_4Count)) {
                           
                           var p = word7Matches.length - Number(options.word_4Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword7.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word7Matches != null && word7Matches.length < Number(options.word_4Count)) {
                           c_7 = Number(options.word_4Count) - word7Matches.length;
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }
                       if (word7Matches == null) {
                           c_7 = Number(options.word_4Count);
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }

                       var Lword8 = options.word_5;
                       Lword8 = new RegExp(Lword8, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword8) != null && article_arr[t].match(Lword8).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_5, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word8Matches = article.match(Lword8);

                       if (word8Matches != null && word8Matches.length > Number(options.word_5Count)) {
                           
                           var p = word8Matches.length - Number(options.word_5Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword8.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word8Matches != null && word8Matches.length < Number(options.word_5Count)) {
                           c_8 = Number(options.word_5Count) - word8Matches.length;
                           var article_arr_8 = article.split(" ");
                           var chotch_8 = Math.floor((article_arr_6.length - 3) / c_8);
                           var chotch_8go = chotch_8;
                           for (var i = 0; i < c_8; i++) {
                               article_arr_8.splice(chotch_8go, 0, options.word_5);
                               chotch_8go += chotch_8;
                           }
                           article = article_arr_8.join(" ");
                       }
                       if (word8Matches == null) {
                           c_8 = Number(options.word_5Count);
                           var article_arr_8 = article.split(" ");
                           var chotch_8 = Math.floor((article_arr_8.length - 3) / c_8);
                           var chotch_8go = chotch_8;
                           for (var i = 0; i < c_8; i++) {
                               article_arr_8.splice(chotch_8go, 0, options.word_5);
                               chotch_8go += chotch_8;
                           }
                           article = article_arr_8.join(" ");
                       }

                       var Lword9 = options.word_6;
                       Lword9 = new RegExp(Lword9, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword9) != null && article_arr[t].match(Lword9).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_6, "");
                           }
                       }
                       article = article_arr.join(".");
                       var word9Matches = article.match(Lword9);

                       if (word9Matches != null && word9Matches.length > Number(options.word_6Count)) {
                           var p = word9Matches.length - Number(options.word_6Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword9.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word9Matches != null && word9Matches.length < Number(options.word_6Count)) {
                           c_9 = Number(options.word_6Count) - word9Matches.length;
                           var article_arr_9 = article.split(" ");
                           var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                           var chotch_9go = chotch_9;
                           for (var i = 0; i < c_9; i++) {
                               article_arr_9.splice(chotch_9go, 0, options.word_6);
                               chotch_9go += chotch_9;
                           }
                           article = article_arr_9.join(" ");
                       }
                       if (word9Matches == null) {
                           c_9 = Number(options.word_6Count);
                           var article_arr_9 = article.split(" ");
                           var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                           var chotch_9go = chotch_9;
                           for (var i = 0; i < c_9; i++) {
                               article_arr_9.splice(chotch_9go, 0, options.word_6);
                               chotch_9go += chotch_9;
                           }
                           article = article_arr_9.join(" ");
                       }

                       var Lword10 = options.word_7;
                       Lword10 = new RegExp(Lword10, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword10) != null && article_arr[t].match(Lword10).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_7, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word10Matches = article.match(Lword10);

                       if (word10Matches != null && word10Matches.length > Number(options.word_7Count)) {
                           
                           var p = word10Matches.length - Number(options.word_7Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword10.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word10Matches != null && word10Matches.length < Number(options.word_7Count)) {
                           c_10 = Number(options.word_7Count) - word10Matches.length;
                           var article_arr_10 = article.split(" ");
                           var chotch_10 = Math.floor((article_arr_10.length - 3) / c_10);
                           var chotch_10go = chotch_10;
                           for (var i = 0; i < c_10; i++) {
                               article_arr_10.splice(chotch_10go, 0, options.word_7);
                               chotch_10go += chotch_10;
                           }
                           article = article_arr_10.join(" ");
                       }
                       if (word10Matches == null) {
                           c_10 = Number(options.word_7Count);
                           var article_arr_10 = article.split(" ");
                           var chotch_10 = Math.floor((article_arr_10.length - 3) / c_10);
                           var chotch_10go = chotch_10;
                           for (var i = 0; i < c_10; i++) {
                               article_arr_10.splice(chotch_10go, 0, options.word_7);
                               chotch_10go += chotch_10;
                           }
                           article = article_arr_10.join(" ");
                       }

                       var Lword11 = options.word_8;
                       Lword11 = new RegExp(Lword11, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword11) != null && article_arr[t].match(Lword11).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_8, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word11Matches = article.match(Lword11);

                       if (word11Matches.length != null && word11Matches.length > Number(options.word_8Count)) {
                           
                           var p = Lword11 - Number(options.word_8Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword10.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       } 
                       if (word11Matches != null && word11Matches.length < Number(options.word_8Count)) {
                           c_11 = Number(options.word_8Count) - word11Matches.length;
                           var article_arr_11 = article.split(" ");
                           var chotch_11 = Math.floor((article_arr_11.length - 3) / c_11);
                           var chotch_11go = chotch_11;
                           for (var i = 0; i < c_11; i++) {
                               article_arr_11.splice(chotch_11go, 0, options.word_8);
                               chotch_11go += chotch_11;
                           }
                           article = article_arr_11.join(" ");
                       }
                       if (word11Matches == null) {
                           c_11 = Number(options.word_8Count);
                           var article_arr_11 = article.split(" ");
                           var chotch_11 = Math.floor((article_arr_11.length - 3) / c_11);
                           var chotch_11go = chotch_11;
                           for (var i = 0; i < c_11; i++) {
                               article_arr_11.splice(chotch_11go, 0, options.word_8);
                               chotch_11go += chotch_11;
                           }
                           article = article_arr_11.join(" ");
                       }

                       var Lword12 = options.word_9;
                       Lword12 = new RegExp(Lword12, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword12) != null && article_arr[t].match(Lword12).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_9, "");
                           }
                       }
                       article = article_arr.join(".");                        
                       
                       var word12Matches = article.match(Lword12);

                       if (word12Matches != null && word12Matches.length > Number(options.word_9Count)) {
                           
                           var p = word12Matches.length - Number(options.word_9Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword12.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word12Matches != null && word12Matches.length < Number(options.word_9Count)) {
                           c_12 = Number(options.word_9Count) - word12Matches.length;
                           var article_arr_12 = article.split(" ");
                           var chotch_12 = Math.floor((article_arr_12.length - 3) / c_12);
                           var chotch_12go = chotch_12;
                           for (var i = 0; i < c_12; i++) {
                               article_arr_12.splice(chotch_12go, 0, options.word_9);
                               chotch_12go += chotch_12;
                           }
                           article = article_arr_12.join(" ");
                       }
                       if (word12Matches == null) {
                           c_12 = Number(options.word_9Count);
                           var article_arr_12 = article.split(" ");
                           var chotch_12 = Math.floor((article_arr_12.length - 3) / c_12);
                           var chotch_12go = chotch_12;
                           for (var i = 0; i < c_12; i++) {
                               article_arr_12.splice(chotch_12go, 0, options.word_9);
                               chotch_12go += chotch_12;
                           }
                           article = article_arr_12.join(" ");
                       }
                   }

                   if ( Number(localStorage.getItem("newWords") ) === 10 ) {                        
                       var Lword4 = options.word_1;
                       Lword4 = new RegExp(Lword4, "gi");
                       var article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword4) != null && article_arr[t].match(Lword4).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_1, "");
                           }
                       }
                       
                       article = article_arr.join(".");
                       
                       var word4Matches = article.match(Lword4);
                       
                       if (word4Matches != null && word4Matches.length > Number(options.word_1Count)) {  
                           //word4 = new RegExp("[^.?!]*(?:[.?,\\s!])" + options.word_1 + "(?=[\\s.?!,;'s])[^.?!]*","i");
                           var q = word4Matches.length - Number(options.word_1Count), b = 0;  
                           
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword4.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word4Matches != null && word4Matches.length < Number(options.word_1Count)) {
                           c_4 = Number(options.word_1Count - word4Matches.length);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }
                       if (word4Matches == null) {
                           c_4 = Number(options.word_1Count);
                           var article_arr_4 = article.split(" ");
                           var chotch_4 = Math.floor((article_arr_4.length - 3) / c_4);
                           var chotch_4go = chotch_4;
                           for (var i = 0; i < c_4; i++) {
                               article_arr_4.splice(chotch_4go, 0, options.word_1);
                               chotch_4go += chotch_4;
                           }
                           article = article_arr_4.join(" ");
                       }

                       var Lword5 = options.word_2;
                       Lword5 = new RegExp(Lword5, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword5) != null && article_arr[t].match(Lword5).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_2, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word5atches = article.match(Lword5);

                       if (word5atches != null && word5atches.length > Number(options.word_2Count)) {
                           
                           var q = word5Matches.length - Number(options.word_2Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(q)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word5atches != null && word5atches.length < Number(options.word_2Count)) {
                           c_5 = Number(options.word_2Count) - word5atches.length;
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }
                       if (word5atches == null) {
                           c_5 = Number(options.word_2Count);
                           var article_arr_5 = article.split(" ");
                           var chotch_5 = Math.floor((article_arr_5.length - 3) / c_5);
                           var chotch_5go = chotch_5;
                           for (var i = 0; i < c_5; i++) {
                               article_arr_5.splice(chotch_5go, 0, options.word_2);
                               chotch_5go += chotch_5;
                           }
                           article = article_arr_5.join(" ");
                       }

                       var Lword6 = options.word_3;
                       Lword6 = new RegExp(Lword6, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword6) != null && article_arr[t].match(Lword6).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_3, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word6Matches = article.match(Lword6);

                       if (word6Matches != null && word6Matches.length > Number(options.word_3Count)) {
                                                       
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword5.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word6Matches != null && word6Matches.length < Number(options.word_3Count)) {
                           c_6 = Number(options.word_3Count) - word6Matches.length;
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }
                       if (word6Matches == null) {
                           c_6 = Number(options.word_3Count);
                           var article_arr_6 = article.split(" ");
                           var chotch_6 = Math.floor((article_arr_6.length - 3) / c_6);
                           var chotch_6go = chotch_6;
                           for (var i = 0; i < c_6; i++) {
                               article_arr_6.splice(chotch_6go, 0, options.word_3);
                               chotch_6go += chotch_6;
                           }
                           article = article_arr_6.join(" ");
                       }

                       var Lword7 = options.word_4;
                       Lword7 = new RegExp(Lword7, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword7) != null && article_arr[t].match(Lword7).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_4, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word7Matches = article.match(Lword7);

                       if (word7Matches != null && word7Matches.length > Number(options.word_4Count)) {
                           
                           var p = word7Matches.length - Number(options.word_4Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword7.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word7Matches != null && word7Matches.length < Number(options.word_4Count)) {
                           c_7 = Number(options.word_4Count) - word7Matches.length;
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }
                       if (word7Matches == null) {
                           c_7 = Number(options.word_4Count);
                           var article_arr_7 = article.split(" ");
                           var chotch_7 = Math.floor((article_arr_7.length - 3) / c_7);
                           var chotch_7go = chotch_7;
                           for (var i = 0; i < c_7; i++) {
                               article_arr_7.splice(chotch_7go, 0, options.word_4);
                               chotch_7go += chotch_7;
                           }
                           article = article_arr_7.join(" ");
                       }

                       var Lword8 = options.word_5;
                       Lword8 = new RegExp(Lword8, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword8) != null && article_arr[t].match(Lword8).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_5, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word8Matches = article.match(Lword8);

                       if (word8Matches != null && word8Matches.length > Number(options.word_5Count)) {
                           
                           var p = word8Matches.length - Number(options.word_5Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword8.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word8Matches != null && word8Matches.length < Number(options.word_5Count)) {
                           c_8 = Number(options.word_5Count) - word8Matches.length;
                           var article_arr_8 = article.split(" ");
                           var chotch_8 = Math.floor((article_arr_6.length - 3) / c_8);
                           var chotch_8go = chotch_8;
                           for (var i = 0; i < c_8; i++) {
                               article_arr_8.splice(chotch_8go, 0, options.word_5);
                               chotch_8go += chotch_8;
                           }
                           article = article_arr_8.join(" ");
                       }
                       if (word8Matches == null) {
                           c_8 = Number(options.word_5Count);
                           var article_arr_8 = article.split(" ");
                           var chotch_8 = Math.floor((article_arr_8.length - 3) / c_8);
                           var chotch_8go = chotch_8;
                           for (var i = 0; i < c_8; i++) {
                               article_arr_8.splice(chotch_8go, 0, options.word_5);
                               chotch_8go += chotch_8;
                           }
                           article = article_arr_8.join(" ");
                       }

                       var Lword9 = options.word_6;
                       Lword9 = new RegExp(Lword9, "gi");
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword9) != null && article_arr[t].match(Lword9).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_6, "");
                           }
                       }
                       article = article_arr.join(".");
                       var word9Matches = article.match(Lword9);

                       if (word9Matches != null && word9Matches.length > Number(options.word_6Count)) {
                           var p = word9Matches.length - Number(options.word_6Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword9.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word9Matches != null && word9Matches.length < Number(options.word_6Count)) {
                           c_9 = Number(options.word_6Count) - word9Matches.length;
                           var article_arr_9 = article.split(" ");
                           var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                           var chotch_9go = chotch_9;
                           for (var i = 0; i < c_9; i++) {
                               article_arr_9.splice(chotch_9go, 0, options.word_6);
                               chotch_9go += chotch_9;
                           }
                           article = article_arr_9.join(" ");
                       }
                       if (word9Matches == null) {
                           c_9 = Number(options.word_6Count);
                           var article_arr_9 = article.split(" ");
                           var chotch_9 = Math.floor((article_arr_9.length - 3) / c_9);
                           var chotch_9go = chotch_9;
                           for (var i = 0; i < c_9; i++) {
                               article_arr_9.splice(chotch_9go, 0, options.word_6);
                               chotch_9go += chotch_9;
                           }
                           article = article_arr_9.join(" ");
                       }

                       var Lword10 = options.word_7;
                       Lword10 = new RegExp(Lword10, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword10) != null && article_arr[t].match(Lword10).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_7, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word10Matches = article.match(Lword10);

                       if (word10Matches != null && word10Matches.length > Number(options.word_7Count)) {
                           
                           var p = word10Matches.length - Number(options.word_7Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword10.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word10Matches != null && word10Matches.length < Number(options.word_7Count)) {
                           c_10 = Number(options.word_7Count) - word10Matches.length;
                           var article_arr_10 = article.split(" ");
                           var chotch_10 = Math.floor((article_arr_10.length - 3) / c_10);
                           var chotch_10go = chotch_10;
                           for (var i = 0; i < c_10; i++) {
                               article_arr_10.splice(chotch_10go, 0, options.word_7);
                               chotch_10go += chotch_10;
                           }
                           article = article_arr_10.join(" ");
                       }
                       if (word10Matches == null) {
                           c_10 = Number(options.word_7Count);
                           var article_arr_10 = article.split(" ");
                           var chotch_10 = Math.floor((article_arr_10.length - 3) / c_10);
                           var chotch_10go = chotch_10;
                           for (var i = 0; i < c_10; i++) {
                               article_arr_10.splice(chotch_10go, 0, options.word_7);
                               chotch_10go += chotch_10;
                           }
                           article = article_arr_10.join(" ");
                       }

                       var Lword11 = options.word_8;
                       Lword11 = new RegExp(Lword11, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword11) != null && article_arr[t].match(Lword11).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_8, "");
                           }
                       }
                       article = article_arr.join(".");
                       
                       var word11Matches = article.match(Lword11);

                       if (word11Matches.length != null && word11Matches.length > Number(options.word_8Count)) {
                           
                           var p = Lword11 - Number(options.word_8Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword10.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       } 
                       if (word11Matches != null && word11Matches.length < Number(options.word_8Count)) {
                           c_11 = Number(options.word_8Count) - word11Matches.length;
                           var article_arr_11 = article.split(" ");
                           var chotch_11 = Math.floor((article_arr_11.length - 3) / c_11);
                           var chotch_11go = chotch_11;
                           for (var i = 0; i < c_11; i++) {
                               article_arr_11.splice(chotch_11go, 0, options.word_8);
                               chotch_11go += chotch_11;
                           }
                           article = article_arr_11.join(" ");
                       }
                       if (word11Matches == null) {
                           c_11 = Number(options.word_8Count);
                           var article_arr_11 = article.split(" ");
                           var chotch_11 = Math.floor((article_arr_11.length - 3) / c_11);
                           var chotch_11go = chotch_11;
                           for (var i = 0; i < c_11; i++) {
                               article_arr_11.splice(chotch_11go, 0, options.word_8);
                               chotch_11go += chotch_11;
                           }
                           article = article_arr_11.join(" ");
                       }

                       var Lword12 = options.word_9;
                       Lword12 = new RegExp(Lword12, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword12) != null && article_arr[t].match(Lword12).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_9, "");
                           }
                       }
                       article = article_arr.join(".");                        
                       
                       var word12Matches = article.match(Lword12);

                       if (word12Matches != null && word12Matches.length > Number(options.word_9Count)) {
                           
                           var p = word12Matches.length - Number(options.word_9Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword12.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word12Matches != null && word12Matches.length < Number(options.word_9Count)) {
                           c_12 = Number(options.word_9Count) - word12Matches.length;
                           var article_arr_12 = article.split(" ");
                           var chotch_12 = Math.floor((article_arr_12.length - 3) / c_12);
                           var chotch_12go = chotch_12;
                           for (var i = 0; i < c_12; i++) {
                               article_arr_12.splice(chotch_12go, 0, options.word_9);
                               chotch_12go += chotch_12;
                           }
                           article = article_arr_12.join(" ");
                       }
                       if (word12Matches == null) {
                           c_12 = Number(options.word_9Count);
                           var article_arr_12 = article.split(" ");
                           var chotch_12 = Math.floor((article_arr_12.length - 3) / c_12);
                           var chotch_12go = chotch_12;
                           for (var i = 0; i < c_12; i++) {
                               article_arr_12.splice(chotch_12go, 0, options.word_9);
                               chotch_12go += chotch_12;
                           }
                           article = article_arr_12.join(" ");
                       }

                       var Lword13 = options.word_10;
                       Lword13 = new RegExp(Lword13, "gi");
                       
                       article_arr = article.split(/[.|?|!]/gi);
                       for(var t = 0; t < article_arr.length; t++) {
                           if(article_arr[t].match(Lword13) != null && article_arr[t].match(Lword13).length == 2) {
                               
                               article_arr[t] = article_arr[t].replace(options.word_10, "");
                           }
                       }
                       article = article_arr.join("."); 
                       
                       var word13Matches = article.match(Lword13);

                       if (word13Matches != null && word13Matches.length > Number(options.word_10Count)) {

                           var p = word13Matches - Number(options.word_10Count);
                           for (var i = 0; i < article_arr.length; i++) {
                               if(Lword13.test(article_arr[i])) {
                                   article_arr[i] = article_arr[i].replace(article_arr[i], "");
                                   b++;
                               }
                               if(b === Number(p)) {
                                   break;
                               }                                
                           }
                           
                           article = myJoin(article_arr);
                       }
                       if (word13Matches != null && word13Matches.length < Number(options.word_10Count)) {
                           c_13 = Number(options.word_10Count) - word13Matches.length;
                           var article_arr_13 = article.split(" ");
                           var chotch_13 = Math.floor((article_arr_13.length - 3) / c_13);
                           var chotch_13go = chotch_13;
                           for (var i = 0; i < c_13; i++) {
                               article_arr_13.splice(chotch_13go, 0, options.word_10);
                               chotch_13go += chotch_13;
                           }
                           article = article_arr_13.join(" ");
                       }
                       if (word13Matches == null) {
                           c_13 = Number(options.word_10Count);
                           var article_arr_13 = article.split(" ");
                           var chotch_13 = Math.floor((article_arr_12.length - 3) / c_12);
                           var chotch_13go = chotch_13;
                           for (var i = 0; i < c_13; i++) {
                               article_arr_13.splice(chotch_13go, 0, options.word_10);
                               chotch_13go += chotch_13;
                           }
                           article = article_arr_13.join(" ");
                       }
                   }

                   var text1 = "", article_arr = article.split(".");
                   var text1_count = Number(options.introSent) * Number(options.introParagraph);
                   for(var i = 0; i < text1_count; i++) {
                       if(article_arr[i] != "") {
                           text1 += article_arr[i] + ".";    
                       }                
                   }

                   var text2 = "";
                   var text2_count = Number(options.middleSent2) * Number(options.middleParagraph);
                   for(var i = text1_count; i < text1_count + text2_count; i++) {
                       if(article_arr[i] != "") {
                           if(article_arr[i] != "" && typeof article_arr[i] != "undefined") {
                               text2 += article_arr[i] + ".";   
                           }
                       }                
                   }

                   var text3 = "";
                   var text23_count = Number(options.summSent) * Number(options.summParagraph);
                   for(var i = text1_count + text2_count; i < text1_count + text2_count + text23_count; i++) {
                       if(article_arr[i] != "" && typeof article_arr[i] != "undefined") {
                           text3 += article_arr[i] + ".";    
                       }                
                   }
                   
                  //Introduction area			
                   var work1 = text1;
                   work1 = work1.split(/[.|?|!]/gi);
                   var intA = "", intP = [];

                   for (var x = 0, i = 0; i < options.introParagraph; i++) {
                       intP[i] = "";
                       for (var j = x; j < x + Number(options.introSent); j++) {
                           if (typeof work1[j] != "undefined") {
                               intP[i] = intP[i] + work1[j] + ". "; 
                           }
                       }
                       x += Number(options.introSent);
                       intA = intA + intP[i] + "\n\n";
                   }

                   //Middle area
                   var work2 = text2;
                   work2 = work2.split(/[.|?|!]/gi);
                   var sentCount = getRndInteger( Number(options.middleSent1) + 1, (Number(options.middleSent2) + 1) );

                   var midA = "", midP = [];

                   for (var y = 0, i = 0; i < options.middleParagraph; i++) {
                       midP[i] = "";
                       for (var j = y; j < y + sentCount; j++) {
                           if (typeof work2[j] != "undefined" && work2[j] != "" && work2[j] != " ") {
                               midP[i] = midP[i] + work2[j] + ". "; 
                           }
                           //sentCount = getRndInteger( Number(options.middleSent1), (Number(options.middleSent2) + 1) );
                       }
                       y += Number(sentCount);
                       midA = midA  + midP[i] + "\n\n";
                   }
                   
                   //Summary area
                   var work3 = text3;
                   if(work3 != "") {
                       work3 = work3.split(/[.|?|!]/gi);
                       var sumA = "", sumP = [];
                       for (var z = 0, i = 0; i < options.summParagraph; i++) {
                           sumP[i] = "";
                           for (var j = z; j < z + Number(options.summSent); j++) {
                               if ( (typeof work3[j] != "undefined") && (work3[j] != "") && (work3[j] != " ") ) {
                                   sumP[i] = sumP[i] + work3[j] + ". ";
                               } else {
                                   continue;
                               }
                           }
                           z += Number(options.summSent);
                           sumA = sumA + sumP[i] + "\n\n";
                       }
                       var reg = new RegExp("\n\n\n\n$", "gi");
                       if(reg.test(sumA)) {
                          console.log("privet");
                          sumA = sumA.replace(/\n\n\n\n$/gi, "\n\n");
                       }
                   } else {
                       sumA = work3;
                   } 
                   
                   var article = intA + midA + sumA;
                   
                   genText = article + "-----" + "\n\n";
                   generate = generate.concat(genText);

                   fireEvent(document.getElementById("introduction"), "keyup");
                   fireEvent(document.getElementById("middle"), "keyup");
                   fireEvent(document.getElementById("summary"), "keyup");
              }    
               
               var a = document.createElement('a');
               a.style = "display: none";
               name = "gen-file";
               var blob = new Blob([generate], {type:"text/plain"});
               var url = window.URL.createObjectURL(blob);
               a.href = url;
               var fileName = name;
               a.download = fileName;
               document.body.appendChild(a);
               a.click();
               setTimeout(function(){
                   document.body.removeChild(a);
                   window.URL.revokeObjectURL(url);  
               }, 100);
           }
		}
	}
};
