class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :difficulty
      t.integer :length
      t.text :description
      t.integer :resort_id

      t.timestamps
    end
  end
end
