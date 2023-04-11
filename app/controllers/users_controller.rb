class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def show
      render json: @current_user
    end

    def create
        @user = User.new(user_params)
        if @user.save
          session[:user_id] = @user.id
          render json: {
            status: :created,
            user: @user
          }
        else 
          @user.save
          render json: {
            status: 500,
            error: @user.errors.full_messages
          }
        end
      end
      
    private 

    def user_params
        params.permit(:username, :email, :password, :password_confirmation, :role)
    end

end
