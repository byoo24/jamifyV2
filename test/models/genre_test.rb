# == Schema Information
#
# Table name: genres
#
#  id         :uuid             not null, primary key
#  name       :string
#  artist_ids :uuid             is an Array
#  album_ids  :uuid             is an Array
#  track_ids  :uuid             is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class GenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
