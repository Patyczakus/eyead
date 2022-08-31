var body = document.body
var hash = location.hash
var random, acctualType

var rootTable = [ 
    {
        // To można ominąć, to moja strona ~patYczakus
        isImport: false,
        index: {
            behavior: {
                title: "Patryktopek",
                href: "https://patryktopek.tk",
                blockedhostes: [
                    "patryktopek.tk",
                    "patyczakus.github.io"
                ]
            },
            constant: {
                prop1: [ "id0/prop1/pngFile", 200, 200 ], /* kwadrat */
                prop2: [ "id0/prop2/pngFile", 444, 200 ], /* ala banner */
                prop3: [ "id0/prop3/pngFile", 200, 444 ], /* odwrócony banner */
            }
        }
    },
    {
        isImport: true,
        index: {
            importID: 0
        }
    },
    {
        isImport: true,
        index: {
            importID: 0
        }
    },
]

function ad_network (newAd = Boolean()) {
    setTimeout(() => {
    if (newAd) random = Math.floor(Math.random() * rootTable["length"])

    if (window.innerWidth > 650 && hash != "#prop3") var type = 2
    else if (window.innerWidth <= 650 && hash != "#prop3") var type = 1
    else var type = 3
 
    if (rootTable[random].isImport) {
        try {
            var location;
            eval (`location = rootTable[rootTable[random].index.importID].index.constant.prop${type}`)
        } catch (err) {
            return console.error("Znaleziono błąd!", err, "\n\nZatrzymuję skrypt...")
        }

        var root = rootTable[rootTable[random].index.importID].index
    } else {
        try {
            var location;
            eval (`location = rootTable[random].index.constant.prop${type}`)
        } catch (err) {
            return console.error("Znaleziono błąd!", err, "\n\nZatrzymuję skrypt...")
        }

        var root = rootTable[random].index
    }

    if (location == null || ~root.behavior.blockedhostes.indexOf(location.hostname)) return ad_network()

    location[0] = location[0]
        .replace("pngFile", "main.png")
        .replace("jpgFile", "main.jpg")
        .replace("gifFile", "main.gif")

    if (newAd) console.log({ loc: location, type: type, random: random, imported: rootTable[random].isImport })

    if (!newAd) {
        if (type != acctualType) {
            body.innerHTML = `<a href="${root.behavior.href}" target="_blank"><div id="root" class="${hash.replace("#", "")}"><img src="${location[0]}" alt="null" style="width: ${location[1]}px; height: ${location[2]}px" /></div></a>`
            acctualType = type
        }
    } else { 
        body.innerHTML = `<a href="${root.behavior.href}" target="_blank"><div id="root" class="${hash.replace("#", "")}"><img src="${location[0]}" alt="null" style="width: ${location[1]}px; height: ${location[2]}px" /></div></a>`
        acctualType = type
    }


    ad_network(false)
    }, 100)
}

window.onload = () => {
    if (hash === "#prop3") body.style.height = "820px"

    ad_network(true)
}