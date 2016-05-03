var phrase = "";
var phrases = ["The world is a dance",
			   "I'm on Aslan's side even if there isn't any Aslan to lead it",
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
			   ""];

window.addEventListener('load', function(){
	console.log('PAGE LOADED');

	phrase = phrases[Math.floor(Math.random()*phrases.length)];//phrases[phrases.length-2];
	phrase = phrase.toUpperCase();
	fillPanel();
	
	$('.alpha').on('click', function(e) {
		console.log($(e.target).html());
		$($(e.target).parent()).toggleClass('unguessed');
		$($(e.target).parent()).toggleClass('guessed');
		revealGuess($(e.target).html());
	});

	$('.alpha').toggleClass('unguessed');

}, false);

function fillPanel() {
	var newHTML = "";
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