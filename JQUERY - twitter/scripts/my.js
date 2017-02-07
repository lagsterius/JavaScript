(function() {
	var Twitter = {
		init: function(config) {
			this.url = 'https://search.twitter.com/search.json?q=' + config.query + '&callback=?';
			this.template = config.template;
			this.container = config.container;
			this.fetch();
		},

		fetch: function() {
			var self = this;
			$.getJSON (self.url, function(data) {
				self.tweets = $.map(data.results, function(tweet) {
					return {
						author: tweet.from_user,
						text: tweet.text,
						img: tweet.profile_image_url, 
						url: 'http://twitter.com/' + tweet.from_user + '/status/' + tweet.id_str,
						from:'http://twitter.com/' + tweet.from_user
					};
				});
				self.container.append(Handlebars.compile(self.template)(self.tweets));
			});
		}
	};

	$('input[type=text]').keydown(function(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			console.log('enter');
			Twitter.init({
				template: $('#tweets-template').html(),
				container: $('ul.tweets'),
				query: $(this).attr('value')
			});
		};
	});

})();

