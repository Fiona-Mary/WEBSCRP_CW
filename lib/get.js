var products = [];

function nav_grabber(response)
  { document.getElementById('navigation').innerHTML = response; }

function header_grabber(response)
  { document.getElementById('HeadBar').innerHTML = response; }
  
function content_grabber(response)
  { document.getElementById('content').innerHTML = response; }

JSONget('api/db.php', function(data){
    for (var i =0; i < data.length; i++){
      var product = data[i];
      products.push(product);
    }
  console.log(products);
  }
  );
  
  AjaxGet('api/nav_bar.txt', function(data){
    nav_grabber(data);
    document.getElementById("Products").addEventListener('click', function(){
        AjaxGet('api/Products.php',content_grabber);
        create_table('ProductTarget', products);
    });
    document.getElementById("Index").addEventListener('click', function(){
       AjaxGet('api/IndexContent.txt', content_grabber);
    });
    document.getElementById("AboutUs").addEventListener('click', function(){
       AjaxGet('api/AboutUs.txt', content_grabber);
    });
    document.getElementById("ContactUs").addEventListener('click', function(){
       AjaxGet('api/ContactUs.txt', content_grabber);
    });
});

AjaxGet('api/header.php',header_grabber);
AjaxGet('lib/content.txt',content_grabber);a
