class Api::InteractionsController < ApplicationController
  before_action :authenticate_user!

  def index
    artist = Artist.find_by(username: params['artist_id'])
    interactions = artist.interactions

    render :json => {
      interactions: interactions
    }
  end

  def create
    type = params['type']
    artist = Artist.find(params['artist_id'])

    if type == 'inquiry'
      subject = params['subject']
      text = params['text']
      inquiry = Inquiry.create client: current_user, artist: artist
      InquiryInformation.create subject: subject, text: text, inquiry: inquiry
      
      render :json => {
        message: 'Inquiry created!'
      }
    elsif type == 'application'
      subject = params['subject']
      description = params['description']
      placement = params['placement']
      consultation = params['consultation']
      coverUp = params['coverUp']

      # Assuming there was no prior Interaction...
      application = Application.create client: current_user, artist: artist
      ApplicationInformation.create subject: subject,
                                    description: description,
                                    placement: placement,
                                    consultation: consultation,
                                    coverUp: coverUp,
                                    application: application

      render :json => {
        message: 'Application created!'
      }

    else
      render :json => {
        message: 'You cannot do that... yet!'
      }
    end
  end  

end