document.write(menuwrite_HOME()  +" | "+  menuwrite_PORTPHOLIO() );



    



function menuwrite(text, destination_page)
{
//     current_page = window.location.href;
//     if (current_page.includes(destination_page))    
//         return text;
//     else
//     console.log(window.location.origin)
//     console.log(location.host)
//     console.log(window.location.href)
    
    mainAddress = location.protocol + '//' + location.host;
    destAddress = mainAddress + '/' + destination_page;
    
    console.log(destAddress);
    
    if (destAddress == window.location.href)
        return "<b>"+text+"</b>";
    else
        return "<a href='/"+destination_page+"'>"+text+"</a>";

}
        
        
        
function menuwrite_SOCIALMEDIA()
{
    return menuwrite('Redes Sociais', 'redessociais.html')
}


function menuwrite_HOME()
{
    return menuwrite('Home', '');
}

function menuwrite_PORTPHOLIO()
{
    return menuwrite('Produção Acadêmica', 'portpholio/index.html');
}
    

/*
<div id="header">
Home | <a href="portpholio/index.html">Produção Acadêmica</a> | <a href="redessociais.html">Redes sociais</a><br><br>
<a href="index_en.html">in English</a>*/


document.write("\
<!-- Global site tag (gtag.js) - Google Analytics -->\
<script async src='https://www.googletagmanager.com/gtag/js?id=UA-85911435-2'></script>\
<script>\
  window.dataLayer = window.dataLayer || [];\
  function gtag(){dataLayer.push(arguments);}\
  gtag('js', new Date());\
\
  gtag('config', 'UA-85911435-2');\
</script>")