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

    resources :followings
    resources :events, only: [:index, :destroy]
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  
end
