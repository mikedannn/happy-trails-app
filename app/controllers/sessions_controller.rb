class SessionsController < ApplicationController
    
    def create
        @user = User.find_by(username: session_params[:username])
        if @user && @user.authenticate(session_params[:password])
          session[:user_id] = @user.id
          render json: {
            user: UserSerializer.new(@user)
          }
        else
          render json: { 
            status: 401, 
            error: "Could not authenticate your account"
          }
        end
      end
        def is_logged_in?
        @current_user = User.find(session[:user_id]) if session[:user_id]
        if @current_user
          render json: {
            logged_in: true,
            user: UserSerializer.new(@current_user)
          }
        else
          render json: {
            logged_in: false
          }
        end
      end
      def destroy
        session..delete :user_id
        render json: {
          status: 200,
          logged_out: true
        }
      end
private
    def session_params
        params.require(:user).permit(:username, :password)
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