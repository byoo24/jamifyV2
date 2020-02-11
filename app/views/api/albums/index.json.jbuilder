json.albums do 
    @albums.map do |album|
        json.partial! "api/albums/album", album: album
    end
end

