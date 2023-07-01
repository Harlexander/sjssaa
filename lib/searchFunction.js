export function searchByTitle(query, dataArray=[]) {
    // Convert the query to lowercase for case-insensitive search
    const lowerQuery = query.toLowerCase();
    
    // Filter the dataArray based on the title matching the query
    const searchResults = dataArray.filter(item =>
        item.title.toLowerCase().includes(lowerQuery)
    );
    
    return searchResults;
}

export function searchByName(query, dataArray=[]) {
    // Convert the query to lowercase for case-insensitive search
    const lowerQuery = query.toLowerCase();
    
    // Filter the dataArray based on the title matching the query
    const searchResults = dataArray.filter(item =>
        (item.firstName+item.lastName).toLowerCase().includes(lowerQuery)
    );
    
    return searchResults;
}
export function filterBySet(query, dataArray=[]) {
    // Convert the query to lowercase for case-insensitive search
    const lowerQuery = query.toLowerCase();
    
    // Filter the dataArray based on the title matching the query
    const searchResults = dataArray.filter(item =>
        item.set == query
    );
    
    return searchResults;
}