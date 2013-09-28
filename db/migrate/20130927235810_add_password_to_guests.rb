class AddPasswordToGuests < ActiveRecord::Migration
  def change
    add_column :guests, :password, :string
  end
end
