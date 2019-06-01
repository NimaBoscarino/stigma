class Api::InteractionsController < ApplicationController
  def index
    artist = Artist.find_by(username: params['artist_id'])
    interactions = artist.interactions

    render :json => {
      interactions: interactions
    }
  end

end