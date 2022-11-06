var body = document.body
var hash = location.hash
var random, acctualType

var rootTable = [
    {
        // To można ominąć, to moja strona ~patYczakus
        // id: 1
        isImport: false,
        index: {
            behavior: {
                title: "Patryktopek",
                href: "https://patryktopek.tk",
                blockedhostes: [
                    "patryktopek.tk",
                    "127.0.0.1"
                ]
            },
            constant: {
                prop1: [ "id0/prop1/pngFile", 200, 200 ],
                prop2: [ "id0/prop2/pngFile", 444, 200 ],
                prop3: [ "id0/prop3/pngFile", 200, 444 ],
            }
        }
    },
    {
        // nadane od admina
        isImport: true,
        index: {
            importID: 0
        }
    },
    {
        // nadane od admina
        isImport: true,
        index: {
            importID: 0
        }
    },
    {
        // od Eliciarski-chan#1499
        // id: 3
        isImport: false,
        index: {
            behavior: {
                title: "🦊Lisy Elity🦊",
                href: "https://discord.gg/uHY4wbE83y",
                blockedhostes: [
                    "discord.gg"
                ]
            },
            constant: {
                prop1: [ "id3/prop1/pngFile", 200, 200 ], 
                prop2: [ "id3/prop1/pngFile", 200, 200 ], // pobrane od rodzica
                prop3: [ "id3/prop1/pngFile", 200, 200 ], // pobrane od rodzica
            }
        }
    },
    {
        // promocja reklamowa
        isImport: true,
        index: {
            importID: 3
        }
    },
    {
        // promocja reklamowa
        isImport: true,
        index: {
            importID: 3
        }
    },
    {
        // promocja reklamowa
        isImport: true,
        index: {
            importID: 3
        }
    },
    {
        // promocja reklamowa
        isImport: true,
        index: {
            importID: 3
        }
    },
    {
        // promocja reklamowa
        isImport: true,
        index: {
            importID: 3
        }
    },
    {
        // EyeAd
        // id: 9
        isImport: false,
        index: {
            behavior: {
                title: "EyeAd",
                href: "https://eyead.tk",
                blockedhostes: [
                    "www.eyead.tk"
                ]
            },
            constant: {
                prop1: [ "eyead/prop1/pngFile", 200, 200 ], 
                prop2: [ "eyead/prop2/pngFile", 560, 200 ], 
                prop3: [ "eyead/prop3/pngFile", 200, 500 ], 
            }
        }
    },
    {
        // nadane od admina
        isImport: true,
        index: {
            importID: 9
        }
    },
    {
        // nadane od admina
        isImport: true,
        index: {
            importID: 9
        }
    },
    {
        // nadane od admina
        isImport: true,
        index: {
            importID: 9
        }
    },
    {
        // nadane od admina
        isImport: true,
        index: {
            importID: 9
        }
    },
    {
        // nadane od admina
        isImport: true,
        index: {
            importID: 0
        }
    },
    {
        // nadane od admina
        isImport: true,
        index: {
            importID: 0
        }
    },
    {
        // od: Saimon Delta#1200
        // id: 16
        isImport: false,
        index: {
            behavior: {
                title: "Strike Unit",
                href: "https://discord.gg/zyxN5ghw9G",
                blockedhostes: [
                    "discord.gg"
                ]
            },
            constant: {
                prop1: [ "id16/prop1/pngFile", 200, 200 ],
                prop2: [ "id16/prop2/pngFile", 200*(16/9), 200 ],
                prop3: [ "id16/prop3/pngFile", 200, 200*(800/444)],
            }
        }
    },
    {
        // promocja reklamowa
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // promocja reklamowa
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // promocja reklamowa
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // promocja reklamowa
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // promocja reklamowa
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // nadane od admina
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // nadane od admina
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // dzień chłopaka 2022
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // dzień chłopaka 2022
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // dzień chłopaka 2022
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // dzień chłopaka 2022
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // dzień chłopaka 2022
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // dzień chłopaka 2022
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // dzień chłopaka 2022
        isImport: true,
        index: {
            importID: 16
        }
    },
    {
        // paczka urodzinowa
        isImport: true,
        index: {
            importID: 3
        }
    },
    {
        // paczka urodzinowa
        isImport: true,
        index: {
            importID: 3
        }
    },
    {
        // paczka urodzinowa
        isImport: true,
        index: {
            importID: 3
        }
    },
    {
        // paczka urodzinowa
        isImport: true,
        index: {
            importID: 3
        }
    },
    {
        // paczka urodzinowa
        isImport: true,
        index: {
            importID: 3
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
            var rootParent = rootTable[rootTable[random].index.importID].index;
        } catch (err) {
            return console.error("Znaleziono błąd!", err, "\n\nZatrzymuję skrypt...")
        }

        var root = rootTable[rootTable[random].index.importID].index
    } else {
        try {
            var rootParent = rootTable[random].index;
        } catch (err) {
            return console.error("Znaleziono błąd!", err, "\n\nZatrzymuję skrypt...")
        }
        
        var location;
        eval (`location = rootParent.constant.prop${type}`)

        var root = rootTable[random].index
    }


    if (location == null/* || rootParent.behavior.blockedhostes.indexOf(window.parent.location.hostname) > -1*/) return ad_network(true)

    location[0] = location[0]
        .replace("pngFile", "main.png")
        .replace("jpgFile", "main.jpg")
        .replace("gifFile", "main.gif")

    if (newAd) console.log({ loc: location, typeID: type, random: random, imported: rootTable[random].isImport, devInfo: [ /*rootParent.behavior.blockedhostes.indexOf(window.parent.location.hostname) == -1,*/ rootParent ] })

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
    if (hash === "#prop3") body.classList.add("prop3")

    ad_network(true)
}
