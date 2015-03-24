function nav_grabber(response)
  { document.getElementById('navigation').innerHTML = response; }

function header_grabber(response)
  { document.getElementById('HeadBar').innerHTML = response; }
  
  
function content_grabber(response)
  { document.getElementById('content').innerHTML = response; }
  
AjaxGet('api/nav_bar.php',nav_grabber);
AjaxGet('api/header.php',header_grabber);
AjaxGet('lib/content.txt',content_grabber);a
