class Client < User
  has_many :interactions
  has_many :inquiries
  has_many :followings
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
end
