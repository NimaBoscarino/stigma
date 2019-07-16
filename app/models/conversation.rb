class Conversation < ApplicationRecord
  belongs_to :interaction
  belongs_to :artist
  belongs_to :client

  has_many :messages, dependent: :destroy
end
