class CreateUserTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :user_trails do |t|
      t.references :user, null: false, foreign_key: true
      t.references :trail, null: false, foreign_key: true
      t.string :status
      t.boolean :favorite
      t.text :note
      t.date :date

      t.timestamps
    end
  end
end
