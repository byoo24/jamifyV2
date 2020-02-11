json.artists do 
    @artists.map do |artist|
        json.partial! "api/artists/artist", artist: artist
    end
end

