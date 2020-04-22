var n=0;
    var Title = 'ORBIIT';
        function mainTitle() {
          if (n < Title.length) {
              if (Title.charAt(n)=='*') {
                document.getElementsByClassName('title')[0].innerHTML += '<br>';
              } else {
                document.getElementsByClassName('title')[0].innerHTML += Title.charAt(n);
              }
            n++;
            setTimeout(mainTitle, 300);
          }
        }
    setTimeout(mainTitle, 500);