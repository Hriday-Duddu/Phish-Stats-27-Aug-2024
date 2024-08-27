  let fbcValue = "";
  let fbpValue = "";
  function checkCookiesAndSetValues() {
    let cookies = document.cookie;
    let cookiesArray = cookies.split(";");
    cookiesArray.forEach(cookie => {
      cookie = cookie.trim();
      if (cookie.startsWith("_fbc")) {
        let parts = cookie.split("=");
        fbcValue = parts[1];
      }
      else if (cookie.startsWith("_fbp")) {
        let parts = cookie.split("=");
        fbpValue = parts[1];
      }
    });
    console.log("_fbc:", fbcValue);
    console.log("_fbp:", fbpValue);
    document.getElementById("fbc").value = fbcValue;
    document.getElementById("fbp").value = fbpValue;
    if (fbcValue !== "" && fbpValue !== "") {
      clearInterval(intervalId);
    }
  }
const intervalId = setInterval(checkCookiesAndSetValues, 50);