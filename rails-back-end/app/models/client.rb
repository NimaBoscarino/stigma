class Client < User
  has_many :interactions
  has_many :followings
  has_many :followed_artists, through: :followings, :source => :artist
  has_many :interacted_artists, through: :interactions, :source => :artist

end
