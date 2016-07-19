(function () {

	angular
	 .module('loc8rApp')
	 .controller('aboutCtrl', aboutCtrl);

	function aboutCtrl() {
		var vm = this;

		vm.pageHeader = {
			title: "About Loc8r",
		};
		vm.main = {
			content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nYOLO migas organic etsy, leggings four loko keffiyeh viral butcher trust fund XOXO pitchfork intelligentsia fashion axe. Occupy offal raw denim listicle dreamcatcher, kombucha readymade bitters microdosing. Chia typewriter forage, freegan heirloom bushwick keffiyeh everyday carry +1 sustainable you probably haven&#39;t heard of them artisan. Locavore VHS literally chillwave, flexitarian kale chips gastropub brooklyn migas. Gentrify tousled four dollar toast freegan normcore franzen, irony PBR&B crucifix offal keytar viral. Sriracha tilde meh, vinyl selfies pitchfork chambray photo booth. Brunch scenester synth poutine, knausgaard green juice fashion axe organic portland cold-pressed sartorial food truck vice blue bottle.'
        }; 
    }

})();