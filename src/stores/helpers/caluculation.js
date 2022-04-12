


export const calculatePrices=(payload,typeComponent)=>{

switch (typeComponent) {
    case "singers":
        return priceSongsSingers(payload)
    case "albums":
        return priceSongsAlbums(payload)
    case "songs":
        return payload.price
    default:
        return 0;
}
}


const priceSongsSingers=(payload)=>{
    let init = 0;

payload.albums.forEach(album=> {

  init+=priceSongsAlbums(album)
})

return init;
};

const priceSongsAlbums=(album)=>{
let init = 0;
    album.songs.reduce((preSong,currentSong)=>{
        init+=currentSong.price;
        },init)

        return init
};

