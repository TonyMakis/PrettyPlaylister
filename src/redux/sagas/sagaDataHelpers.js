export function organizePlaylistsPayload(res) {
    let payload = {}, playlist = {};
    // If Spotify retrieves less playlists than the limit allowed, use that
    // as total # of playlists to load; else, use the max limit instead
    const total = res.total, limit = res.limit;
    (total < limit) ? payload.total = total : payload.total = limit;

    payload.playlists = [];

    for(let i in res.items) {
        playlist = {};
        playlist.id = res.items[i].id;
        playlist.name = res.items[i].name;
        playlist.description = res.items[i].description;
        playlist.publicType = res.items[i].public
        playlist.collabType = res.items[i].collaborative;
        playlist.imageUrl = res.items[i].images[0].url;
        payload.playlists.push(playlist);
    }

    return payload;
}
