 function updateClock() {
      const now = new Date();
      let h = String(now.getHours()).padStart(2, "0");
      let m = String(now.getMinutes()).padStart(2, "0");
      let s = String(now.getSeconds()).padStart(2, "0");

      document.getElementById("time-front").textContent = `${h}:${m}`;
      document.getElementById("time-back").textContent  = `${h}:${m}`;
      document.getElementById("time-right").textContent = `${h}:${m}`;
      document.getElementById("time-left").textContent  = `${m}:${s}`;
      document.getElementById("time-top").textContent   =`${h}:${m}`;
      document.getElementById("time-bottom").textContent=`${h}:${m}`;
    }

    setInterval(updateClock, 1000);
    updateClock();