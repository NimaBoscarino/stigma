class Artist < User
  has_many  :interactions
  has_many  :photos
  has_many  :events
  has_many  :clients, through: :interactions
  has_one   :artist_information

  def booked_clients
    interactions.booked.joins(:client)
      .pluck(:name, :email, :text)
      .map { |name, email, text| {
        name: name, email: email, text: text
      }}
  end

  def inquired_clients
    interactions.inquired.joins(:client)
      .pluck(:name, :email, :text)
      .map { |name, email, text| {
        name: name, email: email, text: text
      }}
  end

  def applied_clients
    interactions.applied.joins(:client)
      .pluck(:name, :email, :text)
      .map { |name, email, text| {
        name: name, email: email, text: text
      }}
  end

  def books_open?
    artist_information.books_open?
  end

  def open_books
    artist_information.books_open = true
    artist_information.save
  end

  def close_books
    artist_information.books_open = false
    artist_information.save
  end
end
