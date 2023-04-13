Rails.application.routes.draw do

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
 
  

  # resources :users, only: [:index, :show, :create, :update, :destroy]

  # Resorts routes
  resources :resorts, only: [:index, :show, :create, :update, :destroy] do
    resources :trails, only: [:index, :create]
  end

  # Trails routes
  resources :trails, only: [:show, :update, :destroy]

  # UserTrails routes
  resources :user_trails, only: [:index, :show, :create, :update, :destroy]

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
