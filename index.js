    // current day
    function currentDay(){
            const currentDate = new Date();
            const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const currentDayIndex = currentDate.getDay();
            const currentDayElement = document.getElementById('currentDay');
            currentDayElement.textContent = daysOfWeek[currentDayIndex];
        }

        // current utc time
        function getCurrentUTCTime() {
            const utctime = new Date();
            const currentUTCTime = utctime.toISOString().substr(11, 8);
            const currentUTCMs = utctime.getTime();
            document.getElementById("currentUTCTime").innerHTML = currentUTCMs;
        }
        setInterval(getCurrentUTCTime, 1);
        currentDay()
        getCurrentUTCTime()