var started = function(){
    console.log("Started Download");
}

var updated = function(i){
    console.log(i+"% of download");
}

var completed = function(){
    console.log("Complete");
}


function download(start, update, completed){
    started();
    for (i=0;i<=100;i++){
        updated(i)
    }
    completed();
};

download(started, updated, completed);