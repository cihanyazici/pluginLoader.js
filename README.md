# pluginLoader.js
Basit ama etkili bir Jquery plugin yükleme paketi.


Herhangi bir Jquery pluginini HTML kaynak kodunda yer alan bir tetikleyici ile projenize dahil edebilirsiniz. 

<b>Nasıl kullanılır?</b>

pluginLoader.js projenize eklemeniz ve aşağıda anlatılan yönergeleri takip etmeniz yeterlidir.

<pre>
$.pluginLoader('add', {
    trigger: "data-sample", // tetikleyici tag. 
    path: "js/sample.js", //yüklenecek plugin.
    loadFn: function() {
        alert("plugin yüklendi") // plugin yüklendikten sonra çalıştırılmak istenen kod parçası buraya yazılır.
    },
    loadCss: ["css/a.css", "css/b.css"] //pluginle beraber yüklenmesi istenen css dosyaları burada tanımlanır.
});
</pre>
