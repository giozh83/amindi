let Monday    = document.querySelector('.Monday')
let Tuesday   = document.querySelector('.Tuesday')
let Wednesday = document.querySelector('.Wednesday')
let Thursday  = document.querySelector('.Thursday')
let Friday    = document.querySelector('.Friday')
let Saturday  = document.querySelector('.Saturday')
let Sunday    = document.querySelector('.Sunday')
let set_qalaki=document.getElementById('qalaqebi')

function timer() {
    document.querySelector('.li_2bloki').textContent = document.getElementById('qalaqebi').value

}
setInterval(timer, 100)



set_qalaki.addEventListener('click', function () {
  
   fetch(`http://api.openweathermap.org/data/2.5/forecast?q=` + set_qalaki.value + `&appid=f08f1352da0d5c1678488841a27cd635`)
   .then(Response => Response.json())
    .then(data =>{
        
        
            
         
         
        let i=0;

            

         while (i<7) {

             let city_temperature=data['list'][i]['main']['temp']
             let test_city_name= data['city']['name']
             city_temperature=Math.round(city_temperature-273.15)

             if (i==0) {
                 document.querySelector('.Monday').innerHTML='Monday';
                document.querySelector('.Monday_temp').innerHTML=city_temperature+'°C'
             }
              if (i==1) {
                document.querySelector('.Tuesday').innerHTML='Tuesday';
                document.querySelector('.Tuesday_temp').innerHTML=city_temperature+'°C';
             }
               if (i==2) {
                document.querySelector('.Wednesday').innerHTML='Wednesday';
                document.querySelector('.Wednesday_temp').innerHTML=city_temperature+'°C';
             }
             
               if (i==3) {
                document.querySelector('.Thursday').innerHTML='Thursday';
                 document.querySelector('.Thursday_temp').innerHTML=city_temperature+'°C';
             }
              if (i==4) {
                document.querySelector('.Friday').innerHTML='Friday';
                 document.querySelector('.Friday_temp').innerHTML=city_temperature+'°C';
             }
               if (i==5) {
                document.querySelector('.Saturday').innerHTML='Saturday';
                 document.querySelector('.Saturday_temp').innerHTML=city_temperature+'°C';
             }
               if (i==6) {
                 document.querySelector('.Sunday').innerHTML='Sunday';
                 document.querySelector('.Sunday_temp').innerHTML=city_temperature+'°C';
             }
             console.log(city_temperature)
             console.log(test_city_name)
             i++
         }

        
    })
         
})