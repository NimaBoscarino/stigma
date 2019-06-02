class Api::ArtistsController < ApplicationController
  before_action :authenticate_user!

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