class CreateFollowings < ActiveRecord::Migration[5.2]
  def change
    create_table :followings do |t|
      t.integer :client_id
      t.integer :artist_id
      
      t.timestamps
    end
  end
end
