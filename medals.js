/*
Anish Shenoy and Khyber Sen
SoftDev2 pd07
K12 -- Medallions... of Data!
2017-03-19
*/

const colorMap = {
    gold: "gold",
    silver: "silver",
    bronze: "brown",
};

const medalData = {
    Norway: {
        gold: 14,
        silver: 14,
        bronze: 11,
    },
    Sweden: {
        gold: 7,
        silver: 6,
        bronze: 1,
    },
    USA: {
        gold: 9,
        silver: 8,
        bronze: 6,
    },
    "South Korea": {
        gold: 5,
        silver: 8,
        bronze: 4,
    },
    "Olympic Athletes from Russia": {
        gold: 2,
        silver: 6,
        bronze: 9,
    },
};

const countries = Object.keys(medalData);

const div = d3.select("#div");
const svg = d3.select("#svg");
const countryNameText = d3.select("#countryName");

svg.size = {
    width: 150 * 4,
    height: 200,
};
svg.attrs(svg.size);

svg.medals = [];

const generatePage = function(countryName) {
    
    const first = function(selection) {
        return selection._groups[0][0];
    };
    
    console.log(countryName);
    countryNameText.text(countryName);
    const countryData = medalData[countryName];
    const medals = Object.keys(countryData);
    for (let i = svg.medals.length; i < medals.length; i++) {
        svg.medals[i] = {
            circle: first(svg.append("circle")),
            text: first(svg.append("text")),
        };
    }
    svg.medals.splice(medals.length);
    
    d3.selectAll(svg.medals.map(medal => medal.circle))
        .data(medals)
        .attrs((medal, i) => {
            return {
                r: countryData[medal] * 4,
                cx: 150 * (i + 1),
                cy: svg.size.height / 2,
                fill: colorMap[medal],
            };
        });
    
    d3.selectAll(svg.medals.map(medal => medal.text))
        .data(medals)
        .attrs((medal, i) => {
            return {
                x: 150 * (i + 1),
                y: svg.size.height / 2 + 5,
                "text-anchor": "middle",
            };
        })
        .text(medal => countryData[medal].toString());
};

countries.forEach(() => div.append("button"));

d3.selectAll("button")
    .data(countries)
    .text(country => "Show " + country)
    .on("click", generatePage);

d3.select("button").dispatch("click");

