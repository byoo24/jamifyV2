class Api::TracksController < ApplicationController

    def create
        @track = Album.new(track_params)

        if @track.save
            render :show
        else
            render json: ["Couldn't update Album. Something went wrong."], status: 422
        end
    end

    private

    def track_params
        params.permit(:name, :album_id)
    end
end