window.onload = function()
{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "menu.json");
    xhr.send();
    xhr.onload = function()
    {
        if (xhr.status != 200)
        {
            alert('Error ${xhr.status}: ${xhr.statusText}');
        }
        else
        {
            let parsedObj = JSON.parse(xhr.responseText);
            parseToDivStarter(parsedObj);
            parseToDivMain(parsedObj);
            parseToDivDessert(parsedObj);
        }
        
        function parseToDivStarter(parsedObj)
        {
            let h2 = document.createElement("h2");
            h2.id = "Starter";
            h2.textContent = "Starters";
            div = document.getElementById('menu-list');
            div.appendChild(h2);

            console.log(parsedObj.Starters.length);
            var i = 0;
            while (i < parsedObj.Starters.length)
            {
                let block = document.createElement("div");
                div.appendChild(block);

                console.log(parsedObj.Starters[i].name);

                let name = document.createElement("p");
                name.className += "food-name";

                let price = document.createElement("p");
                price.className += "food-price";

                let description = document.createElement("p");
                description.className += "food-description";

                name.textContent = parsedObj.Starters[i].name;
                price.textContent = "Euro " + parsedObj.Starters[i].price;
                description.textContent = parsedObj.Starters[i].description;

                block.appendChild(name);
                block.appendChild(price);
                block.appendChild(description);

                i = i + 1;
            }
        }
        function parseToDivMain(parsedObj)
        {
            let h2 = document.createElement("h2");
            h2.id = "Main";
            h2.textContent = "Main";
            div = document.getElementById('menu-list');
            div.appendChild(h2);

            console.log(parsedObj.Main.length);
            var i = 0;
            while (i < parsedObj.Main.length)
            {
                let block = document.createElement("div");
                div.appendChild(block);

                console.log(parsedObj.Main[i].name);

                let name = document.createElement("p");
                name.className += "food-name";

                let price = document.createElement("p");
                price.className += "food-price";

                let description = document.createElement("p");
                description.className += "food-description";

                name.textContent = parsedObj.Main[i].name;
                price.textContent = "Euro " + parsedObj.Main[i].price;
                description.textContent = parsedObj.Main[i].description;

                block.appendChild(name);
                block.appendChild(price);
                block.appendChild(description);

                i = i + 1;
            }
        }
        function parseToDivDessert(parsedObj)
        {
            let h2 = document.createElement("h2");
            h2.id = "Dessert";
            h2.textContent = "Desserts";
            div = document.getElementById('menu-list');
            div.appendChild(h2);

            console.log(parsedObj.Desserts.length);
            var i = 0;
            while (i < parsedObj.Desserts.length)
            {
                let block = document.createElement("div");
                div.appendChild(block);

                console.log(parsedObj.Desserts[i].name);

                let name = document.createElement("p");
                name.className += "food-name";

                let price = document.createElement("p");
                price.className += "food-price";

                let description = document.createElement("p");
                description.className += "food-description";

                name.textContent = parsedObj.Desserts[i].name;
                price.textContent = "Euro " + parsedObj.Desserts[i].price;
                description.textContent = parsedObj.Desserts[i].description;

                block.appendChild(name);
                block.appendChild(price);
                block.appendChild(description);

                i = i + 1;
            }
        }
    }

    if (window.matchMedia("(max-width: 620px)").matches)
    {
    var x = document.getElementsByClassName("menu-icon")[0];
    var y = document.getElementById("navbar");
    x.addEventListener("mouseover", func1);
    y.addEventListener("mouseover", func1);

    function func1() {
        document.getElementById("navbar").style.display = "flex";
    }

    x.addEventListener("mouseout", func2);
    y.addEventListener("mouseout", func2);

    function func2() {
        document.getElementById("navbar").style.display = "none";
    }
    }


    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    
    if (dd < 10) {
        dd = '0'+ dd.toString();
    }
    else {
        dd = dd.toString();
    }
    if (mm < 10) {
        mm = '0' + mm.toString();
    }
    else {
        mm = mm.toString();
    }
    yyyy = yyyy.toString();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("book-date").setAttribute("min", today);

}

