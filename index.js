//  scuberGreetingForFeet()


          function scuberGreetingForFeet (feet){

          if(feet <= 400){
              
              return'This one is on me!';

            }
            else if(feet > 400 && feet <= 2000){
              return'That will be twenty bucks.';
            }
            
              else if (feet > 2000 && feet <=2500){

                return'I will gladly take your thirty bucks.';
              }
              
            else if(feet > 2500){
              return'No can do.';
            }
}
   
                 scuberGreetingForFeet(1700);




    // ternaryCheckCity()

                          function ternaryCheckCity(city){
                          if (city === "NYC")
                            {return'Ok, sounds good.'}
                          else {
                            return'No go.';
                          }
                        }
                  console.log(ternaryCheckCity("NYC"));
                  console.log(ternaryCheckCity("DC"));


     //switchOnCharmFromTip()
                 
                        function switchOnCharmFromTip(feedback){
                              if (feedback === 'generous')
                              {return "Thank you so much."}

                              else if(feedback ==='not as generous')
                                {return "Thank you."}
                              else{
                                return "Bye."
                              }

                              }
                              console.log(switchOnCharmFromTip('generous'));
                              console.log(switchOnCharmFromTip('not as generous'));
                              console.log(switchOnCharmFromTip('pathetic'));







            
                        

























