class CreateInquiryInformations < ActiveRecord::Migration[5.2]
  def change
    create_table :inquiry_informations do |t|
      t.string :subject
      t.string :text
      t.integer :inquiry_id

      t.timestamps
    end
  end
end
