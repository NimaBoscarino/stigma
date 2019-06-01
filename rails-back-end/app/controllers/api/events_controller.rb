class Api::EventsController < ApplicationController
  def index
    artist = Artist.find_by(username: params['artist_id'])
    events = artist.events

    render :json => {
      events: events
    }
  end

end