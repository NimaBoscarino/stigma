class Artist < User
  has_many :interactions
  has_many :photos
  has_many :events
  has_many :clients, through: :interactions

end
