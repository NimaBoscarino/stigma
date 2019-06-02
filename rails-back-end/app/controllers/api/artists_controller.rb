class Api::ArtistsController < ApplicationController
  before_action :authenticate_user!

  def index
    artists = Artist.all
    followed = current_user.followed_artists

    artists = artists.map do |a|
      artist = {
        details: a,
        followed: followed.include?(a)
      }
    end

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