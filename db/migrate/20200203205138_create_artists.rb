class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists, id: :uuid do |t|
      t.string :name
      t.text :bio

      t.timestamps
    end
  end
end
