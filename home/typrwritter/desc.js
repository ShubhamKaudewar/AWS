var m=0;
    var desc = 'Our aim is to improve access to high quality education to every student using technology to bridge the quality gaps.';
        function mainDesc() {
          if (m < desc.length) {
              if (desc.charAt(m)=='*') {
                document.getElementsByClassName('desc')[0].innerHTML += '<br>';
              } else {
                document.getElementsByClassName('desc')[0].innerHTML += desc.charAt(m);
              }
            m++;
            setTimeout(mainDesc, 80);
          }
        }
    setTimeout(mainDesc, 4000);