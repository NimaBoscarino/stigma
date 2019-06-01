class Artist < ApplicationRecord
  has_many :interactions
  has_many :photos
end
