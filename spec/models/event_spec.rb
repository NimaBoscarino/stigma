require 'rails_helper'

RSpec.describe Event, type: :model do  
  before(:each) do
    @artist = Artist.create name: 'Jess Chen', username: '__jesschen__', avatar: 'https://scontent-sea1-1.cdninstagram.com/vp/da7139f3d6b1981c03e5190edf6c9f5d/5D92D655/t51.2885-19/s150x150/34982397_218816662231559_7841887027183222784_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com', email: 'jess@test.com', password: 'artist'
  end

  describe 'validations' do
    it 'should let you create a test with good params' do
      event = Event.create artist: @artist, name: 'cool event', date: 1.day.from_now
      expect(event).to be_valid  
    end

    it 'should not let you create nameless events' do
      event = Event.create artist: @artist, date: 1.day.from_now
      expect(event).to_not be_valid
    end

    it 'should not let you create artist-less events' do
      event = Event.create name: 'cool event', date: 1.day.from_now
      expect(event).to_not be_valid
    end
  end
end
