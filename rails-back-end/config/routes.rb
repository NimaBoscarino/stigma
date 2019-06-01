Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :artists do
      resources :interactions
      resources :photos
      resources :events
    end
  end
end
