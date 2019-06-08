class CreateApplicationInformations < ActiveRecord::Migration[5.2]
  def change
    create_table :application_informations do |t|
      t.integer :application_id
      t.string :subject
      t.string :description
      t.string :placement
      t.boolean :consultation
      t.boolean :coverUp
      t.timestamps
    end
  end
end
