class CreateArtistInformations < ActiveRecord::Migration[5.2]
  def change
    create_table :artist_informations do |t|
      t.integer :artist_id
      t.boolean :books_open
      t.timestamps
    end
  end
end
