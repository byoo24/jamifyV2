# == Schema Information
#
# Table name: albums
#
#  id         :uuid             not null, primary key
#  name       :string
#  artist_id  :uuid
#  track_ids  :uuid             is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord

    has_one :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artist

    has_many :tracks,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Track

end
