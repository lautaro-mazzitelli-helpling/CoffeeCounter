class AddIndexToBuyers < ActiveRecord::Migration
  def change
    add_index :buyers, :name, unique: true
  end
end
