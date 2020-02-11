class CreateLibraries < ActiveRecord::Migration[5.2]
  def change
    create_table :libraries, id: :uuid do |t|
      t.uuid :user_id
      t.uuid :track_ids, array: true
      t.uuid :album_ids, array: true
      t.uuid :artist_ids, array: true

      t.timestamps
    end
  end
end
