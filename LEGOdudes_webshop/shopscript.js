console.log(products)

//Gå igjennom alle produkter, generere HTML for hvert produkt, skrive dette til index.html

//En variabel som kan holde på HTML for produktene
let productHTML = ""

products.map((product, index) => productHTML += 
            `<article class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL"/>
                <a href="KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>Kr. ${product.price} ,-</p>
                <button>Legg i handlekurv</button>
            </article>`)

//Finn #productlist og fyll den med verdiene i varaibelen productHTML
document.getElementById("productlist").innerHTML = productHTML