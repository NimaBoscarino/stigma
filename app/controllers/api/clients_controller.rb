class Api::ClientsController < ApplicationController
  def clients artist, type
    if type == 'booking'
      artist.booked_clients
    elsif type == 'inquiry'
      artist.inquired_clients
    elsif type == 'application'
      artist.applied_clients
    end
  end

  def index
    artist = Artist.find(params['artist_id'])

    render :json => {
      clients: clients(artist, params['status'])
    }
  end

end