class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :email
      t.text :message
      t.integer :guest_id

      t.timestamps
    end
  end
end
