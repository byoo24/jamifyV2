class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums, id: :uuid do |t|
      t.string :name
      t.uuid :artist_id
      t.uuid :track_ids, array: true, default: []

      t.timestamps
    end
  end
end
