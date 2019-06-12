class Interaction < ApplicationRecord
  belongs_to :client
  belongs_to :artist
  has_many :reference_images

  scope :booked, -> { where(type: 'Booking') }
  scope :inquired, -> { where(type: 'Inquiry') }
  scope :applied, -> { where(type: 'Application') }
end
