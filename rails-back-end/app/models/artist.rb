class Artist < User
  has_many  :interactions
  has_many  :photos
  has_many  :events
  has_many  :clients, through: :interactions
  has_one   :artist_information

  def books_open?
    artist_information.books_open?
  end
end
