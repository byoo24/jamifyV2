class Api::AlbumsController < ApplicationController

    def index
        @albums = Album.all

        if @albums
            render :index
        else
            render json: "Something went wrong. Couldn't query Albums", status: 422
        end
    end

    def create
        @album = Album.new(album_params)

        if @album.save
            render :show
        else
            render json: ["Couldn't create Album. Something went wrong."], status: 422
        end
    end


    def update
        @album = Album.new(album_params)

        if @album.save
            render :show
        else
            render json: ["Couldn't update Album. Something went wrong."], status: 422
        end
    end


    private

    def album_params
        params.permit(:name, :artist_id, :track_ids)
    end
end