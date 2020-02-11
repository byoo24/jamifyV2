# == Schema Information
#
# Table name: tracks
#
#  id         :uuid             not null, primary key
#  name       :string
#  album_id   :uuid
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord

    has_one :album,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :Album
end
