class ResortsController < ApplicationController
    def index
      resorts = Resort.all
      render json: resorts
    end
  
    def show
        resort = Resort.includes(:trails).find(params[:id])
        render json: resort.to_json(include: :trails), status: :ok
    end
  
    def create
      resort = Resort.new(resort_params)
      if resort.save
        render json: resort
      else
        render json: { error: resort.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def update
      resort = Resort.find(params[:id])
      if resort.update(resort_params)
        render json: resort
      else
        render json: { error: resort.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def destroy
      resort = Resort.find(params[:id])
      resort.destroy
      head :no_content
    end
  
    private
  
    def resort_params
      params.require(:resort).permit(:name, :location, :description, :image_url)
    end
  end