# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :messages
  has_many :conversations

  def as_json(options={})
    super(options).merge({
      type: type,
      books_open: type === 'Artist' ? books_open? : false
    })
  end

end
