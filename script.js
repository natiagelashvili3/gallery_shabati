var gallery_item = document.getElementsByClassName("gallery-item")
var gallery_main = document.getElementById('gallery-main');

for (let i = 0; i < gallery_item.length; i++) {
    gallery_item[i].addEventListener('click', function() {
        // უნდა წამოვიღო Image-ის src 
        var img_src = this.querySelector("img").getAttribute("src")
        
        //main-gallery-ის img-ში ჩავსვა ეს სორსი
        gallery_main.querySelector("img").setAttribute("src", img_src)
    });
}