var countryData = require('country-data');

/**
 * Override these countries/keywords
 */
var overrides = {
	'BURMA': 'MMR',
	'SOUTH KOREA': 'KOR',
	'NORTH KOREA': 'PRK',
	'VIETNAM': 'VNM',
	'LAOS': 'LAO',
	'MACAU': 'MAC',
	'PALESTIN': 'PSE',
	'HERZEGOVINA': 'BIH',
	'IVORY COAST': 'CIV',
	'BRITISH VIRGIN ISLANDS': 'VGB',
};

var country2code = function(countryName){
	var shortlist = [];
	var i;
	countryName = countryName.toUpperCase();

	// Some overrides
	for(i in overrides){
		var thisCountry = countryData.countries[overrides[i]];
		if(i === countryName){
			return thisCountry;
		}
		if(i.indexOf(countryName) !== -1 || countryName.indexOf(i) !== -1){
			shortlist.push(thisCountry);
		}
	}

	// Go through the list.
	for(i in countryData.countries.all){
		var thisCountry = countryData.countries.all[i];
		if(thisCountry.name.toUpperCase() === countryName){
			return thisCountry;
		}
		if(
			thisCountry.name.toUpperCase().indexOf(countryName) !== -1 ||
			countryName.indexOf(thisCountry.name.toUpperCase()) !== -1
		){
			shortlist.push(thisCountry);
		}
	}
	if(shortlist.length === 1){
		return shortlist[0];
	} else if(shortlist.length) {
		return shortlist;
	} else {
		return false;
	}
};

module.exports = country2code;