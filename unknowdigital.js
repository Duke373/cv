function solveExpression(exp){ 
let number1 , op, number2, number3, result = -1;
number3 = exp.slice(exp.indexOf('=')+1);
op = (exp.includes('+'))? (op = '+'):(exp.includes('*'))? (op = '*'):(op = '-');
number1 = exp.slice(0,exp.indexOf(op, 1));
number2 = exp.slice(exp.indexOf(op, 1)+1,exp.indexOf('='));
//console.log(number1, number2, number3, op);
if (op == '+'){
    for (i = 0; i<=9; i++){
        if ((Number(number1.replace(/\?/g, i))+Number(number2.replace(/\?/g, i)) == Number(number3.replace(/\?/g, i)))&&(number1.length==1 || number1.replace(/\?/g, i)[0]!=='0')&&number1.replace(/\?/g, i).slice(0,2)!=='-0'&&number2.replace(/\?/g, i).slice(0,2)!=='-0'&&number3.replace(/\?/g, i).slice(0,2)!=='-0'&&(number2.length==1 || number2.replace(/\?/g, i)[0]!=='0')&&(number3.length==1 || number3.replace(/\?/g, i)[0]!=='0')&&(!exp.includes(i))) {
            result = i
            break
        }
    }
    return result
    };
if (op == '-'){
    for (i = 0; i<=9; i++){
        if ((Number(number1.replace(/\?/g, i))-Number(number2.replace(/\?/g, i)) == Number(number3.replace(/\?/g, i)))&&(number1.length==1 || number1.replace(/\?/g, i)[0]!=='0')&&number1.replace(/\?/g, i).slice(0,2)!=='-0'&&number2.replace(/\?/g, i).slice(0,2)!=='-0'&&number3.replace(/\?/g, i).slice(0,2)!=='-0'&&(number2.length==1 || number2.replace(/\?/g, i)[0]!=='0')&&(number3.length==1 || number3.replace(/\?/g, i)[0]!=='0')&&(!exp.includes(i)))  {
            result = i
            break
        }
    }
    return result
    };
if (op == '*'){
        for (i = 0; i<=9; i++){
            if ((Number(number1.replace(/\?/g, i))*Number(number2.replace(/\?/g, i)) == Number(number3.replace(/\?/g, i)))&&(number1.length==1 || number1.replace(/\?/g, i)[0]!=='0')&&number1.replace(/\?/g, i).slice(0,2)!=='-0'&&number2.replace(/\?/g, i).slice(0,2)!=='-0'&&number3.replace(/\?/g, i).slice(0,2)!=='-0'&&(number2.length==1 || number2.replace(/\?/g, i)[0]!=='0')&&(number3.length==1 || number3.replace(/\?/g, i)[0]!=='0')&&(!exp.includes(i)))  {
                result = i
                break
            }
        }
        return result
        };

}