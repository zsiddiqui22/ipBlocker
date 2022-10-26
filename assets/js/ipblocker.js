var IPBlocker = (function(){

    return {
        init: function(){
            $.get('https://www.cloudflare.com/cdn-cgi/trace', async function(data) {
                _userDetails = data.trim().split('\n').reduce(function(obj, pair) {
                    pair = pair.split('=');
                    return obj[pair[0]] = pair[1], obj;
                }, {});
                console.log(data);
                let newData = data
                              .replace('www.cloudflare.com','www.zsiddiqui.me')
                              .replaceAll("="," : ");

                $('#list').html(`<h2><pre><code>${newData}</code><pre></h2>`);
                // return data;
            });
            
        }
    }
})();


$(document).ready(function(){
    
    
    const html = `<link rel="stylesheet" href="assets/css/style.css"><main class="wrapper">
            <h1>What is info?</h1>
            <div id="list"></div>
        </main>
        <script src="assets/js/jquery.min.js"></script>
        <script id="ipscript" src="assets/js/ipblocker.js"></script>`;


    const userDetails = IPBlocker.init();
    var doc = document.getElementById('iframe').contentWindow.document;
    doc.open();
    doc.write(html);
    doc.close();
    
    setTimeout(()=>{ $('#ipscript').remove(); },400);
});