class Api::PhotosController < ApplicationController
  def index
    artist = Artist.find_by(username: params['artist_id'])
    photos = artist.photos

    render :json => {
      photos: photos
    }
  end

end