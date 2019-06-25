class AddTypeToInteractions < ActiveRecord::Migration[5.2]
  def change
    add_column :interactions, :type, :string
    add_column :interactions, :application_accepted, :boolean
  end
end
