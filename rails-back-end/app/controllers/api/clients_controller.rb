class Api::ClientsController < ApplicationController
  def index
    artist = Artist.find(params['artist_id'])
    clients = artist.booked_clients
    interactions = artist.interactions

    render :json => {
      clients: clients
    }
  end

end