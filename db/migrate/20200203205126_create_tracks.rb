class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks, id: :uuid do |t|
      t.string :name
      t.uuid :album_id

      t.timestamps
    end
  end
end
