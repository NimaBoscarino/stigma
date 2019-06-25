class TattooInformation < ApplicationRecord
  belongs_to :interaction
  has_many :reference_images
end
