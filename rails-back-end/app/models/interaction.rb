class Interaction < ApplicationRecord
  belongs_to :client
  belongs_to :artist

  scope :booked, -> { where(type: 'Booking') }
  scope :inquired, -> { where(type: 'Inquiry') }
  scope :applied, -> { where(type: 'Application') }
end
