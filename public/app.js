var app = function(){
    var url = "http://pokeapi.co/api/v2/region/"
    makeRequest(url, requestComplete)
    
}

var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', callback);
    request.send();
};

var requestComplete = function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var beers = JSON.parse(jsonString);
    populateRegionDropDown(regions);
}

var populateRegionDropDown = function (regions) {
    var select = document.getElementById('regionDropDown');
    regions.forEach(function(region, index){
        var option = document.createElement('option');
        option.innerText = region.name;
        option.value = index;
        select.appendChild(option);
    })
    select.addEventListener("change", function(){
        var index = select.value;
        var region = regions[index];
        displayRegionDetails(region);
    });

    // var displayRegionDetails = function(region){
    //     var name = document.
    // }
}


window.addEventListener('load', app);

