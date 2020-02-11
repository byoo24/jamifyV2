Rails.application.routes.draw do

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :show, :create, :destroy]

    resources :artists, only: [:index, :show, :create, :update, :destroy] do 
      resources :albums, only: [:index, :show, :create, :update, :destroy]
    end

    resources :albums, only: [:index] do
      resources :tracks, only: [:index, :show, :create, :update, :destroy]
    end

    resources :tracks, only: [:index]
    
    
  end # namespace
end
