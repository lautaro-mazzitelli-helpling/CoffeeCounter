class CreateCoffeeBoxes < ActiveRecord::Migration
  def change
    create_table :coffee_boxes do |t|
      t.date :date
      t.references :buyer, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
