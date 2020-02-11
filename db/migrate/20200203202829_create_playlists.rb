class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists, id: :uuid do |t|
      t.uuid :user_id
      t.uuid :track_ids, array: true

      t.timestamps
    end
  end
end
