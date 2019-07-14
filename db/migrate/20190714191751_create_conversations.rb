class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.string :title
      t.integer :artist_id
      t.integer :client_id
      t.timestamps
    end
  end
end
