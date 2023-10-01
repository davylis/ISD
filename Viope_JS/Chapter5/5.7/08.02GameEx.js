function calculateProfit() {
    // Read value of rounds from the input field
    const rounds=document.getElementById("rounds").value;
    const bet=1.0;
    let win=0;
    // Let win counter cumulating during every round of the loop. 
    // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
    // Make a loop which is executed as many times as was set through the input field. 
    for(i=1; i<=rounds; i++){
        let pips1 = Math.round( (Math.random( ) * 5) + 1 );
        let localwin=0;
        if(pips1 == 2 || pips1 == 4){
            localwin = bet * 1.25
        }
         // If the randomized pips is 1, 3 or 5,  no pay
         // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
          // Otherwise the pips 6 returns the inserted bet 150%	
        else if (pips1 ==6){
            localwin = bet * 1.5;
        }
        win += localwin;

    }
    // rounds variable is not a decimal so we have to multiply it with 1.0
    result_bets = "Bets were altogether " + (rounds*1.0).toFixed(2) + " euros<br>"
    result_win = "Wins were " + win.toFixed(0) + " euros<br>"
    result_profit = "Profit was " + (rounds-win).toFixed(2)+ " euros"
    document.getElementById("answer").innerHTML= result_bets + result_win + result_profit

}


    
        
        
     

        

       
        
        
         
       
      
            
        
       
    
            
        

    //Calculate the profit (euros) of the company by subtracting the win counter (euros) from the bets (euros)
   

    // Write the answer on the page, to the answer div, as content of the div
   

