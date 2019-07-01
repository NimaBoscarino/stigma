class Appointment < ApplicationRecord
  belongs_to :interaction
  belongs_to :artist
  belongs_to :client
end
