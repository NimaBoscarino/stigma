class Artist < User
  has_many  :interactions
  has_many  :inquiries
  has_many  :bookings
  has_many  :applications
  has_many  :photos
  has_many  :events
  has_many  :clients, through: :interactions
  has_one   :artist_information

  def booked_clients
    bookings.joins(:client)
      .pluck(:name, :email)
      .map { |name, email| {
        name: name, email: email
      }}

  end

  def booked_clients2
    # This is also a solution... which is more efficient?
    # Looking at the generated SQL leads me to believe v1 is more efficient
    Client.joins(interactions: :artist).where("interactions.artist_id": id, "interactions.type": 'Booking')
      .pluck(:name, :email, :text)
      .map { |name, email, text| {
        name: name, email: email, text: text
      }}

  end

  def inquired_clients
    inquiries.joins(:client, :inquiry_information)
      .pluck(:name, :email, :subject, :text)
      .map { |name, email, subject, text| {
        name: name, email: email, subject: subject, text: text
      }}
  end

  def applied_clients
    applications.joins(:client)
      .pluck(:name, :email)
      .map { |name, email| {
        name: name, email: email
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
