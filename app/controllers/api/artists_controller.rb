class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all;

    if @artists
      render :index
    else
      render json: @artists.errors.full_messages, status: 422
    end
  end


  def create
    @artist = Artist.new(artist_params)

    if @artist.save
      render :show
    else
      render json: ["Couldn't create Artist. Something went wrong."], status: 422
    end

  end



  private

  def artist_params
    params.permit(:name)
  end
end
