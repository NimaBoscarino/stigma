class Client < User
  has_many :interactions
  has_many :artists, through: :interactions
  alias_attribute :interacted_artists, :artists

end
