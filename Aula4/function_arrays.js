var array=[];
array.push(
    function(){
        console.log("Hello world 1")
    },
    function(){
        console.log("Hello world 2")
    },
    function(){
        console.log("Hello world 3")
    }
);
for(var i=0; i<array.length; i++){
    array[i]();
}
array.forEach(function(item){
    item();
});