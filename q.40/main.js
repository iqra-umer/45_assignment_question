/*Write a function called make_album() that builds an Object describing a music album. The
function should take in an artist name and an album title, and it should return a Object containing
these two pieces of information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make
at least one new function call that includes the number of tracks on an album.
 */
//describe function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Atif aslam", "saad song", 22);
let album2 = make_album("Ali Zafar", "moosam", 14);
let album3 = make_album("Rahat Fateh Ali", "Mash up");
console.log(album1);
console.log(album2);
console.log(album3);
export {};
