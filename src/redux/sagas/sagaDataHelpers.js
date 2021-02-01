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
        playlist.numTracks = res.items[i].tracks.total;
        playlist.description = res.items[i].description;
        playlist.publicType = res.items[i].public
        playlist.collabType = res.items[i].collaborative;
        playlist.imageUrl = res.items[i].images[0].url;
        payload.playlists.push(playlist);
    }

    return payload;
}

export function organizeTracksPayload(res) {
    let payload = {}, track = {}, artist = {};
    payload.items = [];
    
    for(let i in res.items) {
        track = {};
        track.id = res.items[i].track.id;
        track.dateAdded = res.items[i].added_at;
        track.duration = res.items[i].track.duration_ms;
        track.explicit = res.items[i].track.explicit;
        track.name = res.items[i].track.name;
        track.popularity = res.items[i].track.popularity;
        track.type = res.items[i].track.type;
        track.artists = [];
        for(let j in res.items[i].track.artists) {
            artist = {};
            artist.id = res.items[i].track.artists[j].id;
            artist.name = res.items[i].track.artists[j].name;
            artist.type = res.items[i].track.artists[j].type;
            track.artists.push(artist);
        }
        payload.items.push(track);
    }

    return payload;
}


async function fetchPlaylistTracks(token, playlistId, offset) {
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?offset=${offset}&limit=100`;
    const setHeaders = { headers: { Authorization: `Bearer ${token}` } };
    const res = await fetch(url, setHeaders);
    const data = await res.json();
    return data;
}
 
export async function getAllTracks(token, playlistId) {
    var offset = 0;
    const limit = 100;
    var items = [];

    var result = await fetchPlaylistTracks(token, playlistId, offset);
    var total = result.total;
    items.push(...result.items);

    while((offset + limit) < total) {
        offset += limit;
        result = await fetchPlaylistTracks(token, playlistId, offset);
        items.push(...result.items);
    }
    
    return {'items': items};
}
