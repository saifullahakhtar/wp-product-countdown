(function() {
    
    let date = new Date();
  
    const days   = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    date.setHours(15, 0, 0);

    function pad(num) {
        return ("0" + parseInt(num)).substr(-2);
    }
    
    function nextDay(after) {
        let someDate = new Date();
        someDate.setDate(someDate.getDate() + after);
        let dateFormated = days[someDate.getDay()] + " " + someDate.getDate() + " " + months[someDate.getMonth()];
        return dateFormated;
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
        
        if(days[date.getDay()] == "Saturday")
        {
            document.getElementById('sb-day').innerHTML   = nextDay(3);
            document.getElementById('sb-timer').innerHTML = "2 days, " + hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        else if (days[date.getDay()] == "Sunday")
        {
            document.getElementById('sb-day').innerHTML   = nextDay(2);
            document.getElementById('sb-timer').innerHTML = "1 days, " + hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        else if (days[date.getDay()] == "Monday")
        {
            document.getElementById('sb-day').innerHTML   = nextDay(1);
            document.getElementById('sb-timer').innerHTML = hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        else if (days[date.getDay()] == "Tuesday")
        {
            document.getElementById('sb-day').innerHTML   = nextDay(1);
            document.getElementById('sb-timer').innerHTML = hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        else if (days[date.getDay()] == "Wednesday")
        {
            document.getElementById('sb-day').innerHTML   = nextDay(1);
            document.getElementById('sb-timer').innerHTML = hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        else if (days[date.getDay()] == "Thursday")
        {
            document.getElementById('sb-day').innerHTML   = nextDay(1);
            document.getElementById('sb-timer').innerHTML = hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        else if (days[date.getDay()] == "Friday")
        {
            document.getElementById('sb-day').innerHTML   = nextDay(4);
            document.getElementById('sb-timer').innerHTML = "3 days, " + hh + " hrs, " + mm + " mins, " + ss + " secs";
        }
        
        setTimeout(countdown, 1000);
        
    }

    document.addEventListener('DOMContentLoaded', countdown);
  
})();