class Inquiry < Interaction
  has_one :inquiry_information, dependent: :destroy
end