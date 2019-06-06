class Api::EventsController < ApplicationController
  before_action :authenticate_user!

  def index
    artist = Artist.find_by(username: params['artist_id'])
    events = artist.events

    render :json => {
      events: events
    }
  end

  def create
    artist = Artist.find(params['artist_id'])

    if current_user.id == artist.id
      name = params['name']
      description = params['description']
      date = params['date']

      event = artist.events.create name: name, date: date

      render :json => {
        event: event
      }
    else
      render :json => {
        message: "You can't create events for someone else!"
      }
    end
      
  end

end