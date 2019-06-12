class CreateReferenceImages < ActiveRecord::Migration[5.2]
  def change
    create_table :reference_images do |t|
      t.integer :interaction_id
      t.string :url
      t.timestamps
    end
  end
end
