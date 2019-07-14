class Client < User
  has_many :interactions
  has_many :appointments
  has_many :inquiries
  has_many :followings, dependent: :destroy
  has_many :followed_artists, through: :followings, :source => :artist
  has_many :interacted_artists, through: :interactions, :source => :artist

  def upcoming_events
    followed_artists.joins(:events)
      .order(:date)
      .pluck("events.name", "events.date", "events.id", :name)
      .map { |eventName, date, id, artistName| {
        name: eventName, date: date, id: id, artist: artistName
      }}
  end

  def interactions_with_details
    interactions.joins(:artist)
    .pluck("name", "type", "id")
    .map { |name, type, id| {
      artist: name, type: type, id: id
    }}
  end
end
