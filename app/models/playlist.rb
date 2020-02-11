# == Schema Information
#
# Table name: playlists
#
#  id         :uuid             not null, primary key
#  user_id    :uuid
#  track_ids  :uuid             is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord

    belongs_to :users,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
