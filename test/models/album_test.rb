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

require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
