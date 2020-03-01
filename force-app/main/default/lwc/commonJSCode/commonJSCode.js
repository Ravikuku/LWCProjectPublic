const getBMI = function(weightinKg,heightinMtr){

        try{
            return  weightinKg/(heightinMtr*heightinMtr);
        }
       catch(error){
           return undefined;
       }
    }

 export{getBMI};