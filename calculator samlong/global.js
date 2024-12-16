function globalStartup() {
  if (
    window.location.origin.includes("://fleter.my.id") ||
    window.location.origin.includes("://local.fleter.my.id") ||
    window.location.origin.includes("://local.fleter.my.id") ||
    window.location.origin.includes("://localhost") ||
    window.location.origin.includes("://192.168.") ||
    window.location.origin.includes("://10.") ||
    window.location.origin.includes("://172.16.") ||
    window.location.origin.includes("://172.17.") ||
    window.location.origin.includes("://172.18.") ||
    window.location.origin.includes("://172.19.") ||
    window.location.origin.includes("://172.20.") ||
    window.location.origin.includes("://172.21.") ||
    window.location.origin.includes("://172.22.") ||
    window.location.origin.includes("://172.23.") ||
    window.location.origin.includes("://172.24.") ||
    window.location.origin.includes("://172.25.") ||
    window.location.origin.includes("://172.26.") ||
    window.location.origin.includes("://172.27.") ||
    window.location.origin.includes("://172.28.") ||
    window.location.origin.includes("://172.29.") ||
    window.location.origin.includes("://172.30.") ||
    window.location.origin.includes("://172.31.") ||
    window.location.origin.includes("://172.32.")
  ) {
    return true;
  } else {
    window.location.href = `https://fleter.my.id${window.location.pathname}`;
    return false;
  }
}
globalStartup();

// var paragraph = document.createElement("p");
// var textNode = document.createTextNode("test");
// paragraph.appendChild(textNode);
// var body = document.body;
// body.appendChild(paragraph);






