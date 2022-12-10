function findMatching(array, query){
    return array.filter(function(name){return name.toLowerCase() === query.toLowerCase()})
}

function fuzzyMatch(array, query){
    return array.filter(function(name){return name.startsWith(query)})
}

function matchName(array, query){
    return array.filter(function(name){return } )
}

// we want to see if if query = name value in the object,