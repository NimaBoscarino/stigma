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
      referencePhotos = params['referencePhotos']

      # Assuming there was no prior Interaction...
      application = Application.create client: current_user, artist: artist

      job = TattooInformation.create subject: subject,
                                    description: description,
                                    placement: placement,
                                    consultation: consultation,
                                    coverUp: coverUp,
                                    interaction: application

      referencePhotos.each do |photo|
        job.reference_images.create url: photo
      end

      render :json => {
        message: 'Application created!'
      }

    else
      render :json => {
        message: 'You cannot do that... yet!'
      }
    end
  end

  def show
    interaction = Interaction.find(params['id'])

    if interaction.type == 'Application'
      render :json => {
        client: interaction.client,
        interaction: interaction,
        information: interaction.tattoo_information,
        type: 'Application',
        images: interaction.tattoo_information.reference_images
      }
    # Maybe I should always return the same stuff, but let the front end deal with it?
    elsif interaction.type == 'Booking' # this isn't any different yet...
      render :json => {
        client: interaction.client,
        interaction: interaction,
        information: interaction.tattoo_information,
        type: 'Booking',
        images: interaction.tattoo_information.reference_images
      }
    else
      render :json => {
        message: 'You cannot do that... yet!'
      }
    end
  end

  def get_presigned_url
    presigned_url = S3_BUCKET.presigned_post(
      key: "#{Rails.env}/#{SecureRandom.uuid}/${filename}",
      success_action_status: '201',
      signature_expiration: (Time.now.utc + 15.minutes)
    )
  
    data = { url: presigned_url.url, url_fields: presigned_url.fields }
  
    render json: data, status: :ok  
  end

  def acceptApplication
    application = Application.find(params[:id])
    application.application_accepted = true
    application.type = 'Booking'
    application.save

    render :json => {
      message: 'accepted'
    }
  end

  def declineApplication
    render :json => {
      message: 'declined'
    }
  end
end