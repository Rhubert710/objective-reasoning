// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

//isAdmin
function isAdmin(user)
{
    if (user.userRole == 'ADMIN')
    {
        return true;
    }
    return false
}

//getEmail
function getEmail(user)
{
    console
    return `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@codeimmersives.com`;
}

//getPlaylistLength
function getPlaylistLength(playlist)
{
    return playlist.songs.length;
}

//getHardestHomework
function getHardestHomework(arr)
{
    //base case for passing test
    if (arr.length ==0)
    {
        return ("");
    }
    //start
    let lowestAvg = arr[0];
    for (let hw of arr)
    {
        if (hw.averageScore < lowestAvg.averageScore)
        {
            lowestAvg = hw;
        }
    }

    return lowestAvg.name;
}

//createPhonebook
function createPhonebook(names, numbers)
{
    let phoneBook = {};
    for(let i = 0; i <names.length; i++)
    {
        phoneBook[names[i]] = numbers[i];
    }
    return phoneBook;
}
// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};