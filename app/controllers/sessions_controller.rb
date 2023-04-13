class SessionsController < ApplicationController

  def create
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok
      else
          render json: { errors: ["Invalid Username or Password"] }, status: :unauthorized
      end
  end

  def destroy
      if session[:user_id] != nil
          session.delete :user_id
          head :no_content
      else
          render json: { errors: ["Not Authorized"] }, status: :unauthorized
      end
  end

end


# class SessionsController < ApplicationController
#   def create
#     user = User.find_by(email: params[:email])
#     if user && user.authenticate(params[:password])
#       session[:user_id] = user.id
#       render json: user, status: :ok
#     else
#       render json: { error: "Invalid email or password" }, status: :unauthorized
#     end
#   end

#   def destroy
#     session[:user_id] = nil
#     head :no_content
#   end
# end