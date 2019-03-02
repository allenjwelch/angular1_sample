const fs = require('fs'); 
const XMLparser = require('fast-xml-parser');

toJSON('sample');

let data; 

function toJSON(fileIn) {
    let jsonObj; 
    let jsonStr;
    let options = {
        attributeNamePrefix : "@_",
        attrNodeName: "attr", //default is 'false'
        textNodeName : "#text",
        ignoreAttributes : true,
        ignoreNameSpace : false,
        allowBooleanAttributes : false,
        parseNodeValue : true,
        parseAttributeValue : false,
        trimValues: true,
        cdataTagName: "__cdata", //default is 'false'
        cdataPositionChar: "\\c",
        localeRange: "", //To support non english character in tag/attribute values.
        parseTrueNumberOnly: false,
    };

    fs.readFile(`${fileIn}.xml`, "utf8", function(error, xmlData) {
        if (error) { return console.log(error); }
        let tObj = XMLparser.getTraversalObj(xmlData,options);
        jsonObj = XMLparser.convertToJson(tObj,options);
        jsonStr = JSON.stringify(jsonObj); 
        return jsonObj;
    })

    // console.log(jsonStr);
    // console.log('data', jsonStr);
}

module.exports = jsonObj; 