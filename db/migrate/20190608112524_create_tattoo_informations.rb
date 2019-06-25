class CreateTattooInformations < ActiveRecord::Migration[5.2]
  def change
    create_table :tattoo_informations do |t|
      t.integer :interaction_id
      t.string :subject
      t.string :description
      t.string :placement
      t.boolean :consultation
      t.boolean :coverUp
      t.timestamps
    end
  end
end
