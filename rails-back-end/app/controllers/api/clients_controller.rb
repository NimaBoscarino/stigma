class Api::ClientsController < ApplicationController
  def index
    artist = Artist.find(params['artist_id'])
    clients = artist.clients
    interactions = artist.interactions

    clients = clients.map do |client|
      client = {
        details: client,
        interaction: interactions.find_by(client: client)
      }
    end

    render :json => {
      clients: clients
    }
  end

end