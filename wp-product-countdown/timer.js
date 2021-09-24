(function() {
    
    let date = new Date();
  
    const days   = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    date.setHours(15, 0, 0);

    function pad(num) {
        return ("0" + parseInt(num)).substr(-2);
    }

    function countdown() {
        
        let now = new Date();
        
        if (now > date) {
            date.setDate(date.getDate() + 1);
        }
        
        let remain = ((date - now) / 1000);
        let hh = pad((remain / 60 / 60) % 60);
        let mm = pad((remain / 60) % 60);
        let ss = pad(remain % 60);
        
        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }
        
        let dateUpdate = new Date();
        let newDate = '';
        
        let currentDay = '';
        let incremnt   = 0;
        let remaining  = '';
        
        if(days[date.getDay()] == "Saturday" && now.getHours() > 14)
        {
            newDate = dateUpdate.addDays(2);
            currentDay = "Sunday";
            incremnt   = 4;
        }
        else if(days[date.getDay()] == "Sunday" && now.getHours() > 14)
        {
            newDate = dateUpdate.addDays(2);
            currentDay = "Sunday";
            incremnt   = 3;
        }
        else if(days[date.getDay()] == "Monday" && now.getHours() > 14)
        {
            newDate = dateUpdate.addDays(2);
            currentDay = "Tuesday";
        }
        else if(days[date.getDay()] == "Tuesday" && now.getHours() > 14)
        {
            newDate = dateUpdate.addDays(2);
            currentDay = "Wednesday";
        }
        else if(days[date.getDay()] == "Wednesday" && now.getHours() > 14)
        {
            newDate = dateUpdate.addDays(2);
            currentDay = "Thursday";
        }
        else if(days[date.getDay()] == "Thursday" && now.getHours() > 14)
        {
            newDate = dateUpdate.addDays(2);
            currentDay = "Friday";
        }
        else if(days[date.getDay()] == "Friday" && now.getHours() > 14)
        {
            newDate = dateUpdate.addDays(2);
            currentDay = "Saturday";
            incremnt   = 4;
        }
        else
        {
            newDate = dateUpdate.addDays(1);
            
            if(days[date.getDay()] == "Saturday")
            {
                currentDay = "Sunday";
                incremnt   = 3;
                remaining  = "3 days, ";
            }
            else if(days[date.getDay()] == "Sunday")
            {
                currentDay = "Sunday";
                incremnt   = 2;
            }
            else
            {
                currentDay = days[date.getDay() + 1];
            }
            
            if(currentDay == "Saturday")
            {
                incremnt = 3;
            }
        }
        
        if(currentDay == "Saturday")
        {
            let newDate = dateUpdate.addDays(incremnt);
            document.getElementById('sb-day').innerHTML   = "Monday " + newDate.getDate() + " " + months[date.getMonth()];
            document.getElementById('sb-timer').innerHTML = remaining + hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        else if (currentDay == "Sunday")
        {
            let newDate = dateUpdate.addDays(incremnt);
            document.getElementById('sb-day').innerHTML   = "Tuesday " + newDate.getDate() + " " + months[date.getMonth()];
            document.getElementById('sb-timer').innerHTML = incremnt - 1 + " days, " + hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        else if (currentDay == "Monday")
        {
            document.getElementById('sb-day').innerHTML   = "Monday " + newDate.getDate() + " " + months[date.getMonth()];
            document.getElementById('sb-timer').innerHTML = hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        else if (currentDay == "Tuesday")
        {
            document.getElementById('sb-day').innerHTML   = "Tuesday " + newDate.getDate() + " " + months[date.getMonth()];
            document.getElementById('sb-timer').innerHTML = hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        else if (currentDay == "Wednesday")
        {
            document.getElementById('sb-day').innerHTML   = "Wednesday " + newDate.getDate() + " " + months[date.getMonth()];
            document.getElementById('sb-timer').innerHTML = hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        else if (currentDay == "Thursday")
        {
            document.getElementById('sb-day').innerHTML   = "Thursday " + newDate.getDate() + " " + months[date.getMonth()];
            document.getElementById('sb-timer').innerHTML = hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        else if (currentDay == "Friday")
        {
            document.getElementById('sb-day').innerHTML   = "Friday " + newDate.getDate() + " " + months[date.getMonth()];
            document.getElementById('sb-timer').innerHTML = hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        
        setTimeout(countdown, 1000);
        
    }

    document.addEventListener('DOMContentLoaded', countdown);
  
})();