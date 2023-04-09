class TrailsController < ApplicationController
    before_action :set_resort, only: [:create]
  
    def show
      trail = Trail.find(params[:id])
      render json: trail
    end
  
    def create
      trail = @resort.trails.new(trail_params)
      if trail.save
        render json: trail
      else
        render json: { error: trail.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      trail = Trail.find(params[:id])
      if trail.update(trail_params)
        render json: trail
      else
        render json: { error: trail.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def destroy
      trail = Trail.find(params[:id])
      trail.destroy
      head :no_content
    end
  
    private
  
    def set_resort
      @resort = Resort.find(params[:resort_id])
    end
  
    def trail_params
      params.require(:trail).permit(:name, :difficulty, :length, :description, :resort_id)
    end
  end