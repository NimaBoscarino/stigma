class Interaction < ApplicationRecord
  belongs_to :client
  belongs_to :artist

  has_one :tattoo_information, dependent: :destroy
  has_one :conversation, dependent: :destroy
  has_many :appointments, dependent: :destroy

  scope :booked, -> { where(type: 'Booking') }
  scope :inquired, -> { where(type: 'Inquiry') }
  scope :applied, -> { where(type: 'Application') }
end
