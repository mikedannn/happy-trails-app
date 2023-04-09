class UserTrailsController < ApplicationController
    before_action :set_user_trail, only: [:show, :update, :destroy]
  
    def index
      user_trails = UserTrail.all
      render json: user_trails
    end
  
    def show
      render json: @user_trail
    end
  
    def create
      user_trail = UserTrail.new(user_trail_params)
      if user_trail.save
        render json: user_trail
      else
        render json: { error: user_trail.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      if @user_trail.update(user_trail_params)
        render json: @user_trail
      else
        render json: { error: @user_trail.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def destroy
      @user_trail.destroy
      head :no_content
    end
  
    private
  
    def set_user_trail
      @user_trail = UserTrail.find(params[:id])
    end
  
    def user_trail_params
      params.require(:user_trail).permit(:user_id, :trail_id, :status, :favorite, :note, :date)
    end
  end
  