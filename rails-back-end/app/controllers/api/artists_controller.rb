class Api::ArtistsController < ApplicationController
  def index
    artists = Artist.all

    render :json => {
      artists: artists
    }
  end

  def show
    artists = Artist.find_by(username: params['id'])

    render :json => {
      artists: artists
    }
  end
end