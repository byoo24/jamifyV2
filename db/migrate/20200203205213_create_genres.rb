class CreateGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :genres, id: :uuid do |t|
      t.string :name
      t.uuid :artist_ids, array: true
      t.uuid :album_ids, array: true
      t.uuid :track_ids, array: true

      t.timestamps
    end
  end
end
