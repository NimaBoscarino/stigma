class AddTypeToInteractions < ActiveRecord::Migration[5.2]
  def change
    add_column :interactions, :type, :string
  end
end
