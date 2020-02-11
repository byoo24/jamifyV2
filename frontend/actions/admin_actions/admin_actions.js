export const OPEN_ARTISTS_PANEL = "OPEN_ARTISTS_PANEL";
export const OPEN_ALBUMS_PANEL = "OPEN_ALBUMS_PANEL";
export const OPEN_TRACKS_PANEL = "OPEN_TRACKS_PANEL";
export const CLOSE_ARTISTS_PANEL = "CLOSE_ARTISTS_PANEL";
export const CLOSE_ALBUMS_PANEL = "CLOSE_ALBUMS_PANEL";
export const CLOSE_TRACKS_PANEL = "CLOSE_TRACKS_PANEL";
export const CLOSE_ALL_PANELS = "CLOSE_ALL_PANELS";



export const openArtistsPanel = () => ({
    type: OPEN_ARTISTS_PANEL
});

export const openAlbumsPanel = (selectedArtistID) => ({
    type: OPEN_ALBUMS_PANEL,
    selectedArtistID
});

export const openTracksPanel = (selectedAlbumID) => ({
    type: OPEN_TRACKS_PANEL,
    selectedAlbumID
});

export const closeArtistsPanel = () => ({
    type: CLOSE_ARTISTS_PANEL
});

export const closeAlbumsPanel = () => ({
    type: CLOSE_ALBUMS_PANEL
});

export const closeTracksPanel = () => ({
    type: CLOSE_TRACKS_PANEL
});

export const closeAllPanels = () => ({
    type: CLOSE_ALL_PANELS
})