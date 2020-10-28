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


const GetABC  = function(e){
    console.log(e.split('x'))
    let arr = e.split('x')
    let a = 1; let b = 1; let c = 0;
    a = parseInt(arr[0])
    
    barr = arr[1]
    if(barr.includes('+')){
        if (barr.split('+')[1] != ''){
            b = parseFloat(barr.split('+')[1])
        }else {
            b = 1;
        }
    }else if(barr.includes('-')){
        if (barr.split('-')[1] != ''){
            b = parseFloat(barr.split('-')[1]) * -1
        }else {
            b = -1;
        }
    }

    c = parseFloat(arr[arr.length - 1])

    if(arr[0] == ''){
        a = 1    
    }else if(arr[0] == '-'){
        a = -1
    }
    if (arr[arr.length - 1] == ''){
        c = 0;
    }

    return {a, b, c}
    
}

``

module.exports = {
    QuadFunction,
    GetABC,
}
