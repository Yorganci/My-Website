window.onload = searchEngine();
var defaultbrowser = 'https://duckduckgo.com/?q='
var commands = ['!g','!d','!y','!b','!w','!a','!s','!r','!so']
function searchEngine() {
	document.addEventListener('keydown', (event) => {
  var name = event.key;
  var code = event.code;
  if (name == 'Enter'){
	  var input1 = document.getElementById('search').value
	  if (input1 != '' && commands.includes(input1) == false){
		window.open(defaultbrowser + input1)
		document.getElementById('search').value = ''
	  }
	  if (input1 == '!d'){
		  defaultbrowser = 'https://duckduckgo.com/?q='
		  document.getElementById('search').value = ''
		  document.getElementById('search').setAttribute("placeholder","DuckDuckGo")
	  }
	  if (input1 == '!g'){
		  defaultbrowser = 'https://www.google.com/search?q='
		  document.getElementById('search').value = ''
		  document.getElementById('search').setAttribute("placeholder","Google")
	  }
	  if (input1 == '!y'){
		  defaultbrowser = 'https://www.youtube.com/results?search_query='
		  document.getElementById('search').value = ''
		  document.getElementById('search').setAttribute("placeholder","Youtube")
	  }
	  if (input1 == '!b'){
		  defaultbrowser = 'https://search.brave.com/search?q='
		  document.getElementById('search').value = ''
		  document.getElementById('search').setAttribute("placeholder","Brave")
	  }
	  if (input1 == '!w'){
		  defaultbrowser = 'https://www.wolframalpha.com/input/?i='
		  document.getElementById('search').value = ''
		  document.getElementById('search').setAttribute("placeholder","WolframAlpha")
	  }
	  if (input1 == '!a'){
		  defaultbrowser = 'https://alternativeto.net/browse/search/?q='
		  document.getElementById('search').value = ''
		  document.getElementById('search').setAttribute("placeholder","Alternative")
	  }
	  if (input1 == '!s'){
		  defaultbrowser = 'https://www.urlvoid.com/scan/'
		  document.getElementById('search').value = ''
		  document.getElementById('search').setAttribute("placeholder","Url Void")
	  }
	  if (input1 == '!r'){
		  defaultbrowser = 'https://www.reddit.com/search/?q='
		  document.getElementById('search').value = ''
		  document.getElementById('search').setAttribute("placeholder","Reddit")
	  }
	  if (input1 == '!so'){
		  defaultbrowser = 'https://stackoverflow.com/search?q='
		  document.getElementById('search').value = ''
		  document.getElementById('search').setAttribute("placeholder","StackOverflow")
	  }
  }
}, false);
	
}
