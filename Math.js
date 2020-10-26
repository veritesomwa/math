const QuadFunction = function (a, b, c) {
    let array = ['-','+']
    
    array.forEach(element => {
        
        let top = 0;
        let denominator = 0;

        if(element == "-"){
            top = -b - (((a ** 2) - (4 * a * c)) ** (1 / 2));
            denominator = 2 * a;        
        }else{
            top = -b + (((a ** 2) - (4 * a * c)) ** (1 / 2));
            denominator = 2 * a;
        }
        console.log(top / denominator);
    });
    

  
};

QuadFunction(1, 1, -6);
