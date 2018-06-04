sortSchemas = (schemaObject) => {
    let newSchemaObject = {};
    let schemaNames = Object.keys(schemaObject);
    schemaNames.sort();

    //schema level
    schemaNames.forEach(eachSchema => {
        // table level
        let newTableObject = {};        
        let tableNames = Object.keys(schemaObject[eachSchema]);
        tableNames.sort();
        tableNames.forEach(eachTable => {
            // if (schemaObject[eachSchema][eachTable] != undefined)
                console.log(eachTable)
            
        })


    });
    
    return schemaObject;

}

module.exports = sortSchemas;
