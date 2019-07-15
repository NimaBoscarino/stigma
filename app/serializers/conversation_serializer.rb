class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :messages
  # belongs_to :client
  # belongs_to :artist
end
