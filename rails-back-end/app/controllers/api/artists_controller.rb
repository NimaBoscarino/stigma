class Api::ArtistsController < ApplicationController
  before_action :authenticate_user!

  def index
    artists = Artist.all

    if current_user.type === 'Artist'
      # artists cannot follow other artists... yet!
      artists = artists.map do |a|
        artist = {
          details: a,
          followed: false
        }
      end
    else
      followed = current_user.followed_artists
      artists = artists.map do |a|
        artist = {
          details: a,
          followed: followed.include?(a),
          books_open: a.books_open?
        }
      end
      
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