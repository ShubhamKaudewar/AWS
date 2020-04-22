var s=0;
    var Scroll = 'Scroll Down';
        function mainScroll() {
          if (s < Scroll.length) {
              if (Scroll.charAt(s)=='*') {
                document.getElementsByClassName('scrollSpan')[0].innerHTML += '<br>';
              } else {
                document.getElementsByClassName('scrollSpan')[0].innerHTML += Scroll.charAt(s);
              }
            s++;
            setTimeout(mainScroll, 300);
          }
        }
        function iconScroll(){
            document.getElementsByClassName('scrollDown')[0].innerHTML += '<i class="fa fa-angle-double-down"></i>';
        }
        setTimeout(iconScroll, 19500);
    setTimeout(mainScroll, 16000);