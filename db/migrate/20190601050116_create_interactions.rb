class CreateInteractions < ActiveRecord::Migration[5.2]
  def change
    create_table :interactions do |t|
      t.integer :artist_id
      t.integer :client_id
      t.string :text
      t.timestamps
    end
  end
end
