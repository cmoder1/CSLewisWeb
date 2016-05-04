var phrase = "";
var source = "";

var phrases = ["I'm on Aslan's side even if there isn't any Aslan to lead it",
			   "it seems to me that the made-up things are a good deal better than the real ones",
			   "No soul that seriously and constantly desires joy will ever miss it",
			   "There is no other day. All days are present now. This moment contains all moments.",
			   "No one ever told me that grief felt so like fear",
			   "little flakes of me, my impressions, my selections, are settling down on the image of her",
			   "If my house has collapsed at one blow, that is because it was a house of cards",
			   "The best is perhaps what we understand the least",
			   "the safest road to Hell is the gradual one",
			   "Gratitude looks to the Past and love to the Present; fear, avarice, lust, and ambition look ahead",
			   "the Present is the point at which time touches eternity",
			   "Suspicion often creates what it suspects",
			   "the Past is frozen and no longer flows, and the Present is all lit up with eternal rays",
			   "The love of knowledge is a kind of madness",
			   "A pleasure is full grown only when it is remembered",
			   "you had nothing to say about it and yet made the nothing up into words",
			   "There are a dozen views about everything until you know the answer",
			   "the trouble about trying to make yourself stupider than you really are is that you very often succeed",
			   "how cleverly you defend yourselves against all that might do you good",
			   "All get what they want; they do not always like it",
			   "People shouldn't call for demons unless they really mean what they say",
			   "all find what they truly seek"];
var sources = ["The Silver Chair",
			   "The Silver Chair",
			   "The Great Divorce",
			   "The Great Divorce",
			   "A Grief Observed",
			   "A Grief Observed",
			   "A Grief Observed",
			   "A Grief Observed",
			   "The Screwtape Letters",
			   "The Screwtape Letters",
			   "The Screwtape Letters",
			   "The Screwtape Letters",
			   "The Screwtape Letters",
			   "Out of the Silent Planet",
			   "Out of the Silent Planet",
			   "Perelandra",
			   "That Hideous Strength",
			   "The Magician's Nephew",
			   "The Magician's Nephew",
			   "The Magician's Nephew",
			   "The Last Battle",
			   "The Last Battle"];

window.addEventListener('load', function(){
	console.log('PAGE LOADED');

	newGame();

	$('#guess').on('click', function() {
		var guess = prompt('Guess the Quote:');
		if (guess !== null && guess.toLowerCase() === phrase.toLowerCase()) {
			revealAnswer();
		}
	});
	$('#reveal').on('click', revealAnswer);
	$('#newGame').on('click', function() {newGame(); newGame();});

	$('.score').on('click', function(e) {
		//var pts = $(e.target).val()*1;
		//console.log(pts);
		$(e.target).html(($(e.target).html()*1)+100);
	});

}, false);

function newGame() {
	var idx = Math.floor(Math.random()*phrases.length);
	phrase = phrases[idx];//phrases[phrases.length-2];
	phrase = phrase.toUpperCase();
	source = sources[idx];
	fillPanel();
	
	$('.alpha').on('click', function(e) {
		console.log($(e.target).html());
		$($(e.target).parent()).toggleClass('unguessed');
		$($(e.target).parent()).toggleClass('guessed');
		revealGuess($(e.target).html());
	});

	$('.unguessed').toggleClass('unguessed');
	$('.guessed').toggleClass('guessed');
	$('.alpha').toggleClass('unguessed');
}

function fillPanel() {
	var newHTML = '<h2 class="intro-text text-center">'+source+'</h2>';
	var words = phrase.split(" ");
	for (var w=0; w<words.length; w++) {
		newHTML += '<div id="word'+w+'" class="word">';
		var word = words[w];
		for (var l=0; l<word.length; l++) {
			var c = '_'
			if (word[l].match('[A-Z]') === null) {
				c = word[l];
			}
			newHTML += '<span class="beta letter letter'+l+'"><p>'+c+'</p></span>';
		}
		newHTML += '</div>';
	}

	$('#phraseBox').html(newHTML);

	var dim = 47;
	var font = 31;
	var pad1 = 10;
	var pad2 = 25;
	while($('#phraseBox').height() > 300) {
		dim--;
		font--;
		pad1--;
		pad2--;
		$('.beta').css('height', dim+'px');
		$('.beta').css('width', dim+'px');
		$('.beta p').css('font-size', font+'px');
		$('.word').css('padding', pad1+'px '+pad2+'px');
	}
}

function revealAnswer() {
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (var i=0; i<alphabet.length; i++) {
		revealGuess(alphabet[i].toUpperCase());
	}
}

function revealGuess(guess) {
	var words = phrase.split(" ");
	for (var w=0; w<words.length; w++) {
		var word = words[w];
		for (var l=0; l<word.length; l++) {
			var letter = word[l];
			if (letter === guess) {
				$('#word'+w+' .letter'+l+' p').html(letter);
			}
		}
	}
}