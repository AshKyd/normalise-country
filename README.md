Attempt to normalise country names by returning the relevant country info from
[country-data](https://github.com/OpenBookPrices/country-data).

This is a bit of mangleage that works for me and might work for you. Supports
partial matching "States" => "United States" and has some hard-coded things like
"Burma" => "Myanmar".

In the future I'd like to look at using more fuzzy matching, but for now,
this works well enough for what I need.