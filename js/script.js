  function rot13(str) {
    var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var index     = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
  }

  var link = window.location.href;
  // Lấy vị trí của ?redirect_link=
  var layvitritruoc = link.indexOf('?redirect_link=');
  if(layvitritruoc == -1){
    document.getElementById("create-redirect-link").style.display = "";
  }
  else{
  // Cộng thêm 15 là độ dài của ?redirect_link=
  var layvitri = layvitritruoc + 15;
  var cutlink = link.slice(layvitri);
  var reallink = rot13(cutlink);

  if(cutlink.length != 0){
    document.getElementById("redirect-link").style.display = "";

    var seconds = 11;
    function countdown() {
        seconds = seconds - 1;
        if (seconds < 0) {
            window.location = reallink;
        } else {
            document.getElementById("countdown").innerHTML = seconds;
            window.setTimeout("countdown()", 1100);
        }
    }
    countdown();
  }
  else{
    document.getElementById("create-redirect-link").style.display = "";
  }
  }
  function taolink() {
    var laylink = document.getElementById("get-link").value;
    document.getElementById("get-link").value = "http://your_domain.com/chuyenhuong.html?redirect_link=" + rot13(laylink);
  }
