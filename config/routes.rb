Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :artists do
      resources :interactions
      resources :photos
      resources :events

      resources :clients
      post '/openBooks', to: 'artists#openBooks'
      post '/closeBooks', to: 'artists#closeBooks'
      get '/booksStatus', to: 'artists#booksStatus'
    end

    resources :clients do
      resources :interactions, only: [:index]
    end

    resources :interactions, only: [:show] do
      resources :appointments
    end

    get '/presignedURL', to: 'interactions#get_presigned_url'
    post '/interactions/:id/accept', to: 'interactions#acceptApplication'
    post '/interactions/:id/decline', to: 'interactions#declineApplication'

    resources :followings
    resources :events, only: [:index, :destroy]
    
    resources :conversations, only: [:index, :create, :show]
    resources :messages, only: [:create]
  end


  mount ActionCable.server => '/cable'

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  
end
