# == Schema Information
#
# Table name: artists
#
#  id         :uuid             not null, primary key
#  name       :string
#  bio        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord

    has_many :albums,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Album
end
