class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.datetime :date
      t.string :name
      t.string :description
      t.integer :client_id
      t.integer :artist_id
      t.integer :interaction_id

      t.timestamps
    end
  end
end
