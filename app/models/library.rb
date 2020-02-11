# == Schema Information
#
# Table name: libraries
#
#  id         :uuid             not null, primary key
#  user_id    :uuid
#  track_ids  :uuid             is an Array
#  album_ids  :uuid             is an Array
#  artist_ids :uuid             is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Library < ApplicationRecord
end
