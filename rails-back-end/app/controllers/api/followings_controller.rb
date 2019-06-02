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

  def create
    if current_user.type === 'Artist'
      render :json => {
        message: 'Artists cannot follow users --- yet!'
      }  
    else 
      artist = Artist.find(params['artist_id'])
      puts artist
      puts current_user
      current_user.followings.create artist: artist

      render :json => {
        message: 'success!'
      }
    end
  end

  def destroy
    if current_user.type === 'Artist'
      render :json => {
        message: 'Artists cannot follow users --- yet!'
      }  
    else 
      current_user.followings.find_by(artist_id: params['id']).destroy
      render :json => {
        message: 'success!'
      }
    end
  end

end