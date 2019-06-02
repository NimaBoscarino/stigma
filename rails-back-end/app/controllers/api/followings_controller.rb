class Api::FollowingsController < ApplicationController
  before_action :authenticate_user!

  def index

    if current_user.type === 'Artist'
      render :json => {
        message: 'Artists cannot follow users --- yet!'
      }  
    else 
      followed_artists = current_user.followed_artists

      render :json => {
        followings: followed_artists
      }
    end
  end

end