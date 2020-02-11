class Api::UsersController < ApplicationController
  def index
    @users = User.all;

    if @users
      render :index
    else
      render json: @users.errors.full_messages, status: 422
    end
  end


  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: ['That username already exists. Please try again.'], status: 422
    end

  end



  private

  def user_params
    params.permit(:username, :password)
  end
end
