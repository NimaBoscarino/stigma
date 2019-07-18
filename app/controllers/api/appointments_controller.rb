class Api::AppointmentsController < ApplicationController
  before_action :authenticate_user!

  def index
    interaction = Interaction.find(params[:interaction_id])
    appointments = interaction.appointments

    render :json => {
      appointments: appointments
    }
  end

  def create
    interaction = Interaction.find(params[:interaction_id])
    
    if current_user.id == interaction.artist_id   
      appointment = interaction.appointments.create(
        date: params['date'],
        name: params['name'],
        description: params['description'],
        client: interaction.client,
        artist: interaction.artist,
        # accepted: false
      )
  
      render :json => {
        appointment: appointment
      }
    else
      render :json => {
        message: "You can't create appointments for someone else!"
      }
    end
  end

  def acceptAppointmentInvite
    # appointment = Appointment.find(params[:appointment_id])
  end

  def declineAppointmentInvite
  end
end