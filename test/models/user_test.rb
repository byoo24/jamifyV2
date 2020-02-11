# == Schema Information
#
# Table name: users
#
#  id              :uuid             not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  super_user      :boolean          default(FALSE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
