// date
let date = document.getElementById("date");
date.innerHTML = moment().format("llll");

// temp
let temp = document.getElementById("temp"), icon = document.getElementById("icon");

// others 
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");

// search
let place = "Karachi,PK", search = document.getElementsByClassName("form-control")[0], searchBtn = document.getElementById("search-btn"), des = document.getElementById("des");

const getPrintData = () => {
  const getData = () => {
    return new Promise((resolve, reject) => {
      axios(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
          search.value || place
        }?key=9E8RGKEWMD8YSCNMTLQ38NZ25&unitGroup=metric`
      )
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    });
  };

  const printData = async () => {
    try {
      let res = await getData();
      console.log(res);
      let { days } = res;
      let [day] = days;
      temp.innerHTML = day.temp + "°";
      des.innerHTML = day.conditions;
      icon.src = `imgs/weather/${day.icon}.svg`;
      num1.innerHTML = `${day.precipprob}%`;
      num2.innerHTML = `${day.humidity}%`;
      num3.innerHTML = `${day.windspeed}km/hr`;

    } catch (err) {
      console.log(err);
    }
  };

  printData();
};

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    getPrintData();
  }
});

getPrintData();

searchBtn.addEventListener("click", () => {
  getPrintData();
});

// push notifications 
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function () {
//     navigator.serviceWorker
//       .register("/serviceWorker.js")
//       .then((res) => {
//         console.log("service worker registered");
//         Notification.requestPermission().then((res) => {
//           if (Notification.permission == "granted") {
//             console.log("Granted permission");
//             return;
//           }
//           console.log(res);
//         });
//       })
//       .catch((err) => console.log("service worker not registered", err));
//   });
//   navigator.serviceWorker.ready.then((swReg) => {
//     var options = {
//       body: "Hello",
//       icon: "imgs/favicon.jpg",
//     };
//     swReg.showNotification("Greetings", options);
//   });
// }


