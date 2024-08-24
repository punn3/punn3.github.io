    var num = (prompt("Enter a positive integer"));
        k = parseInt(num);
        while (k <= 0 || isNaN(k)){
            var k = prompt("Enter a positive integer");  
        }
        
        showPrimes(num);
        
        function showPrimes(num){
            let prime =[];
            if ( k == 2){
                alert("for n = 2 prime number are 2");
            }else{
                for (let i = 2; i<num; i++){
                if(!isPrime(i)) continue;
                prime.push(i);
            }
            alert("for n = "+ k + " prime number are " + prime.join(","));
            }
        }
        function isPrime(num){
              for (let i = 2; i<num; i++){
                if(num % i == 0) return false;
            }
            return true;  
            
            
        }