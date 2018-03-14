var arrayUtils = {

    isEmpty : function(array){
        if(array.length == 0){
            return true
        }else
            return false
    },
    max : function(array){
        var max = array[0];
        var maxLenght = array.length;
        for( i = 1; i <= maxLenght; i++){
            if (max < array[i]){
                max = array[i];
            };
        };
        return max
    },

    min : function(array){
        var min = array[0];
        var minLenght = array.length;
        for( i = 1; i <= minLenght; i++){
            if (min > array[i]){
                min = array[i];
            };
        };
        return min
    },
    media : function(med){
        var soma = 0;
        for( i = 0; i!=med.length; i++){
            soma+=med[i];
        };
        soma=soma/i;
        return soma;
    },

};
module.exports= arrayUtils;