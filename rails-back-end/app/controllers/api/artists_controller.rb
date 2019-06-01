class Api::ArtistsController < ApplicationController
  def index
    artists = Artist.all

    render :json => {
      artists: artists
    }
  end

  def show
    artist = Artist.find_by(username: params['id'])

    render :json => {
      artist: artist
    }
  end
end