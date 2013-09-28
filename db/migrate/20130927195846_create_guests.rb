class CreateGuests < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.string :last_name
      t.string :first_name
      t.string :email
      t.integer :num_attending

      t.timestamps
    end
  end
end
